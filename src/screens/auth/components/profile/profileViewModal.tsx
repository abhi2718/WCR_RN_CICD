import {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useViewModal} from '../../signin/signinViewModal';
import {ShowFlashMessage} from '../../../../components/flashBar';
import {FirebaseService} from '../../../../services/firebase.service';
export type FormTypes = {
  firstName: string;
  lastName: string;
  displayName: string;
  mobile: string;
  email: string;
  dob: string;
};

export const profileUseViewModal = (props: any) => {
  const receivedData = props.route?.params?.data || 'No data received';
  const {navigation} = props;
  let firstName = receivedData.firstName;
  let lastName = receivedData.lastName;
  let email = receivedData.email;
  let firebaseUid = receivedData.firebaseUid;
  let credential = receivedData.credential;
  const firebaseService = new FirebaseService();
  let {socialSignInSignUp} = useViewModal(navigation);

  useEffect(() => {
    handleInputChange('email', email);
  }, [email]);

  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
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

  const handleSubmit = async (credential: FirebaseAuthTypes.AuthCredential) => {
    // Do something with the form data, e.g., make an API request
    const errors: Partial<FormTypes> = {};
    const phonePattern = /^\d{10}$/; // This is a basic example for a 10-digit number.

    if (!formData?.firstName) {
      errors.firstName = 'Please enter your name';
    }
    if (formData.lastName.trim().length == 0) {
      errors.lastName = 'Please enter your last name';
    }
    // if (!phonePattern.test(formData.mobile)) {
    //   errors.mobile = 'Please enter a valid 10-digit phone number';
    // }
    if (formData.dob.trim().length == 0) {
      errors.dob = 'Please enter your date of birth';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
    } else {
      setValidationErrors({});
      // Proceed with form submission
      await newUserSignUp(formData.email, credential);
    }
  };

  const newUserSignUp = async (
    email?: string,
    credential?: FirebaseAuthTypes.AuthCredential,
  ) => {
    const password = `$Sg{email}9%`;
    if (credential) {
      const data = await firebaseService.signInWithCredential(credential);
      createUser({
        email: email!,
        firebaseUid: data?.user?.uid,
        firstName: formData.firstName,
        lastName: formData.lastName,
        displayName: formData.displayName,
        mobile: formData.mobile,
        dob: formData.dob,
      });
      return;
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
  }: socialSignInSignUpPayload) {
    const dataMango = await socialSignInSignUp({
      firebaseUid,
      email,
      firstName,
      lastName,
      dob,
      displayName,
      mobile,
    });
    if (dataMango.message === 'Registered Successfully')
      return ShowFlashMessage('info', 'Registered Successfully', 'success');
  }

  return {
    handleInputChange,
    handleSubmit,
    validationErrors,
    email,
    formData,
    toUpperFirstName,
    capitalizeFirstLetter,
    formatMobile
  };
};
