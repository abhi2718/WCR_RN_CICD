import {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useViewModal} from '../../signinViewModal';
import {ShowFlashMessage} from '../../../../../components/flashBar';
import {FirebaseService} from '../../../../../services/firebase.service';
import {isDate18YearsOrAbove} from '../../../../../utils/common.functions';
import moment from 'moment';
export type FormTypes = {
  firstName: string;
  lastName: string;
  displayName: string;
  mobile: string;
  email: string;
  dob: string;
};

export const profileUseViewModal = (props: any) => {
  const {navigation} = props;
  const [isWelcomeModalVisible, setWelcomeModalVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [errorMessage, setErrorMessage] = useState('');
  const firebaseService = new FirebaseService();
  let {socialSignInSignUp} = useViewModal(navigation);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate);
    const date = newDate ? moment(newDate).format('MM/DD/YYYY') : 'N/A';
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
      result = `(${numericString})`;
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
    // Remove any non-numeric characters
    const numericText = text.replace(/[^0-9]/g, '');
    // Format the date string with slashes (MM/DD/YYYY)
    // Add slashes to format the date
    // Format the date with slashes
    let formattedDate = '';
    if (numericText.length <= 2) {
      formattedDate = numericText;
    } else if (numericText.length <= 4) {
      formattedDate = `${numericText.slice(0, 2)}/${numericText.slice(2)}`;
    } else {
      formattedDate = `${numericText.slice(0, 2)}/${numericText.slice(
        2,
        4,
      )}/${numericText.slice(4, 8)}`;
    }
    return formattedDate;
  };

  const [formData, setFormData] = useState<FormTypes>({
    firstName: '',
    lastName: '',
    displayName: '',
    mobile: '',
    email: '',
    dob: '',
  });
  const [validationErrors, setValidationErrors] = useState<Partial<FormTypes>>(
    {},
  );

  const handleInputChange = (name: keyof FormTypes, value: string) => {
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (credential: FirebaseAuthTypes.AuthCredential,appleId?:string) => {
    const errors: Partial<FormTypes> = {};
    // Plese try to put it in switch case
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
      errors.dob = 'You must be at-least 18 yrs old';
    }
    if (Object.keys(errors).length) {
     return setValidationErrors(errors);
    } else {
      setValidationErrors({});
      await newUserSignUp(formData.email, credential, appleId);
    }
  };

  const openModal = () => {
    setWelcomeModalVisible(true);
  };

  const closeModal = () => {
    setWelcomeModalVisible(false);
  };

  const newUserSignUp = async (
    email?: string,
    credential?: FirebaseAuthTypes.AuthCredential,
    appleId?:string
  ) => {
    const password = `$Sg{email}9%`;
    if (credential) {
      let data 
      if (!appleId) {
        data = await firebaseService.signInWithCredential(credential);
      }
      return createUser({
        email: email!,
        firebaseUid: appleId?appleId:data?.user?.uid,
        firstName: formData.firstName,
        lastName: formData.lastName,
        displayName: formData.displayName,
        mobile: formData.mobile,
        dob: formData.dob,
      });
    }

    if (!email) {
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
    appleId
  }: socialSignInSignUpPayload) {
    const dataMango = await socialSignInSignUp({
      firebaseUid,
      email,
      firstName,
      lastName,
      dob,
      displayName,
      mobile,
      appleId
    });

    if (dataMango.message === 'Registered Successfully')
      return ShowFlashMessage('info', 'Registered Successfully', 'success');
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
    isWelcomeModalVisible, setWelcomeModalVisible,
    errorMessage,
    setErrorMessage,
    selectedDate,
    setSelectedDate,
    formatMobile,
    openModal,
    closeModal,
    handleDateChange,
    formateDOB,
  };
};
