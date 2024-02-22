import { useEffect, useState } from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useViewModal } from '../../signinViewModal';
import { ShowFlashMessage } from '../../../../../components/flashBar';
import { FirebaseService } from '../../../../../services/firebase.service';
import { isDate18YearsOrAbove } from '../../../../../utils/common.functions';
import {
  ScreenParams,
  profileTypes,
  socialSignInSignUpPayload,
} from './../../../../../types/services.types/firebase.service';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../../../store/reducers/user.reducer';

export const useProfileUseViewModal = (props: ScreenParams) => {
  const receivedData = props.route?.params?.data || 'No data received';
  let credential = receivedData.credential;
  let email = receivedData.email;
  let firebaseUid = receivedData.firebaseUid;
  let fbId = receivedData?.fbId;
  const { navigation } = props;
  const [loading, setLoading] = useState(false);
  const [isWelcomeModalVisible, setWelcomeModalVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const firebaseService = new FirebaseService();
  let { socialSignInSignUp, navigateToGenderScreen } = useViewModal(props);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const { user } = useSelector((state: any) => state.userState);
  const dispatch = useDispatch();
  const handleConfirm = (date: Date) => {
    toggleModal();
    handleDateChange(date);
  };

  useEffect(() => {
    handleInputChange('email', email);
  }, [email]);
  useEffect(() => {
    openModal();
  }, []);

  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate);
    const date = newDate ? moment(newDate).format('YYYY-MM-DD') : 'N/A';
    handleInputChange('dob', date);
  };

  const toUpperFirstName = (text: string) => {
    const remainingLetters = text.substr(1, text.length);
    let finalText =
      text.charAt(0).toUpperCase() + remainingLetters.toLowerCase();
    return finalText;
  };

  const getNumericString = (s: String) => {
    if (!s) {
      return '';
    }
    const numericString = s.replace(/\D/g, '');
    return numericString;
  };

  const formatMobile = (text: string): string => {
    const numericString: string = getNumericString(text);
    let result = '';
    if (numericString.length <= 3) {
      result = `${numericString}`;
    } else if (numericString.length > 3 && numericString.length <= 6) {
      result = `(${numericString.substr(0, 3)}) ${numericString.substr(3)}`;
    } else if (numericString.length > 6) {
      result = `(${numericString.substr(0, 3)}) ${numericString.substr(
        3,
        3,
      )}-${numericString.substr(6, 4)}`;
    }

    return result;
  };

  const formateDOB = (text: string) => {
    if (!text) return '';
    const formattedDate = text.replace(/[^0-9]/g, '');

    if (formattedDate.length <= 4) {
      // Format as YYYY
      return formattedDate;
    } else if (formattedDate.length <= 6) {
      // Format as YYYY-MM
      return formattedDate.slice(0, 4) + '-' + formattedDate.slice(4);
    } else {
      // Format as YYYY-MM-DD
      return (
        formattedDate.slice(0, 4) +
        '-' +
        formattedDate.slice(4, 6) +
        '-' +
        formattedDate.slice(6, 8)
      );
    }
  };

  const [formData, setFormData] = useState<profileTypes>({
    firstName: '',
    lastName: '',
    displayName: '',
    mobile: '',
    email: '',
    dob: '',
  });
  const [validationErrors, setValidationErrors] = useState<
    Partial<profileTypes>
  >({});

  const handleInputChange = (name: keyof profileTypes, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (
    credential: FirebaseAuthTypes.AuthCredential,
    firebaseUid?: string,
  ) => {
    const errors: Partial<profileTypes> = {};
    const phonePattern = /\(\d{3}\) \d{3}-\d{4}/;
    if (!formData?.firstName) {
      errors.firstName = 'Please enter your name';
    }
    if (!formData.lastName.trim().length) {
      errors.lastName = 'Please enter your last name';
    }
    if (!phonePattern.test(formData.mobile)) {
      errors.mobile = 'Please enter a valid 10-digit phone number';
    }
    if (formData.dob.trim().length == 0) {
      errors.dob = 'Please enter your date of birth';
    } else if (!isDate18YearsOrAbove(formData.dob)) {
      ShowFlashMessage('Alert', 'You must be at-least 18 yrs old', 'danger');
      errors.dob = 'You must be at-least 18 yrs old';
    }
    if (!formData.dob.length) {
      return ShowFlashMessage('Alert', 'Enter your DOB', 'danger');
    }
    if (Object.keys(errors).length) {
      return setValidationErrors(errors);
    } else {
      setValidationErrors({});
      await newUserSignUp(formData.email, credential, receivedData.firebaseUid);
    }
  };

  const openModal = () => {
    setWelcomeModalVisible(true);
  };

  const closeModal = () => {
    setWelcomeModalVisible(false);
  };

  const getFormatteddate = (date: string): string => {
    const dob = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
    return dob;
  };

  const newUserSignUp = async (
    email?: string,
    credential?: FirebaseAuthTypes.AuthCredential,
    firebaseUid?: string,
  ) => {
    try {
      setLoading(true);
      const password = `$Sg{email}9%`;
      if (credential) {
        let data;
        if (!firebaseUid) {
          data = await firebaseService.signInWithCredential(credential);
        }
        return createUser({
          email: email!,
          firebaseUid: firebaseUid ? firebaseUid : data?.user?.uid,
          firstName: formData.firstName,
          lastName: formData.lastName,
          displayName: formData.displayName,
          mobile: formData.mobile,
          dob: getFormatteddate(formData.dob),
        });
      }

      if (!email) {
        setLoading(false);
        return ShowFlashMessage('Alert', 'Email is required', 'danger');
      }

      const emailData = await firebaseService.signUpWithEmailPassword(
        email,
        password,
      );

      if (emailData) {
        createUser({
          email: email!,
          firebaseUid: emailData?.user?.uid,
          firstName: formData.firstName,
          lastName: formData.lastName,
          displayName: formData.displayName,
          mobile: formData.mobile,
          dob: formData.dob,
        });
      } else {
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  };

  async function createUser({
    firebaseUid,
    email,
    firstName,
    lastName,
    dob,
    displayName,
    mobile,
    fbId,
  }: socialSignInSignUpPayload) {
    try {
      const dataMango = await socialSignInSignUp({
        firebaseUid,
        email,
        firstName,
        lastName,
        dob,
        displayName,
        mobile,
        fbId,
      });
      const payload = {
        user: {
          ...dataMango?.user,
          token: dataMango?.token,
        },
      };
      dispatch(addUser(payload));
      setLoading(false);
      if (dataMango?.token) navigateToGenderScreen(dataMango?.user?._id);
    } catch (error) {
      setLoading(false);
    }
  }
  return {
    handleInputChange,
    handleSubmit,
    validationErrors,
    formData,
    toggleModal,
    isModalVisible,
    setModalVisible,
    toUpperFirstName,
    isWelcomeModalVisible,
    setWelcomeModalVisible,
    selectedDate,
    setSelectedDate,
    formatMobile,
    openModal,
    closeModal,
    handleDateChange,
    formateDOB,
    credential,
    email,
    handleConfirm,
    fbId,
    loading,
    firebaseUid,
  };
};
