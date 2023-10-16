import {SetStateAction, useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {AuthRepository} from '../../../repository/auth.repo';
import {FirebaseService} from '../../../services/firebase.service';
import {ShowFlashMessage} from '../../../components/flashBar';
import {ROUTES} from '../../../navigation/stack.navigator';
import {OtpRepository} from '../../../repository/otp.repo';
export type FormTypes = {
  firstName: string;
  lastName: string;
  displayName: string;
  mobile: string;
  email: string;
  dob: string;
};
export const useViewModal = (navigation: any) => {
  const signInRepository = new AuthRepository();
  const otpInRepository = new OtpRepository();
  const firebaseService = new FirebaseService();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [otp, setOtp] = useState('');
  const [fbdata, setFbData] = useState(null);

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

  const socialSignInSignUp = async ({
    firebaseUid,
    email,
    firstName,
    lastName,
    dob,
    displayName,
    mobile,
  }: socialSignInSignUpPayload) => {
    try {
      setLoading(true);
      const data = await signInRepository.socialSignInSignUp({
        firebaseUid,
        email,
        firstName,
        lastName,
        dob,
        displayName,
        mobile,
      });
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
    }
  };
  const getOtpOnEmail = async (email: string) => {
    try {
      setLoading(true);
      const data = await otpInRepository.getOtp(email);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
    }
  };
  const verifyEmail = async ({email, code}: {email: string; code: string}) => {
    try {
      setLoading(true);
      const data = await otpInRepository.verifytOtp({email, code});
      if (data.data.message === 'Verified') {
        checkIsNewUser(email);
      } else {
        return ShowFlashMessage('Alert', 'OTP is incorrect', 'danger');
      }

      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
    }
  };

  const resendOtp = async (email: string) => {
    try {
      setLoading(true);
      const data = await otpInRepository.resendOtp(email);
    } catch (error) {}
  };

  const _setLoaging = (loadingState: boolean) => setLoading(loadingState);
  const _googleSignIn = async () => {
    const data = await firebaseService.signInWithGoogle(
      _setLoaging,
      socialSignInSignUp,
    );
    if (data?.profile && data?.user) {
      const {email, family_name, given_name, name, picture} = data.profile;
      if (data.isNewUser) {
        await firebaseService.deleteUserFromFirebase();
        navigateToProfile({
          email,
          firstName: given_name,
          lastName: family_name,
          credential: data.googleCredential,
        });
      } else {
        const data = await socialSignInSignUp({email});
        console.log('inside else google sign :: ', data);

        if (data.message === 'Logged In') {
          return ShowFlashMessage('info', 'log In successfully', 'success');
        }
      }
    }

    setLoading(false);
  };

  const checkIsNewUser = async (email: string) => {
    const data = await socialSignInSignUp({email});
    if (data.message === 'firebase uid is required') {
      navigateToProfile({email});
    } else {
      return ShowFlashMessage('info', 'log In successfully', 'success');
    }
  };
  const getOtpToVerifyEmail = async () => {
    if (!email.length) {
      return ShowFlashMessage(
        'Alert',
        'Please enter your email address',
        'danger',
      );
    }
    const data = await getOtpOnEmail(email);
    navigateToOtpScreen({email: data.data.email});

    // const data = await firebaseService.signInWithEmailPassword(email,password);
    // if (!data) {
    //   return;
    // }
    // if(!data?.additionalUserInfo?.isNewUser){
    //   navigateToEmailAuth({email, firebaseUid: data.user.uid});
    // }else{
    //   return ShowFlashMessage(
    //     'Alert',
    //     'The email address doesn not exist please create an account',
    //     'danger',
    //   );
    // }
    // if (!data) {
    //   return;
    // }
    // if(data){
    //   return ShowFlashMessage(
    //     'Alert',
    //     'Please create your account',
    //     'danger',
    //   );

    // }
  };

  const otpScreen = () => {
    navigation.navigate(ROUTES.Emailauth);
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
    console.log(
      '🚀 ~ file: signinViewModal.tsx:262 ~ useViewModal ~ dat̥aMo̥ngo:',
      dataMango,
    );
    if (dataMango.message === 'Registered Successfully')
      return ShowFlashMessage('info', 'Registered Successfully', 'success');
  }

  const handleAppleSignIn = async () => {
    const data = await firebaseService.appleSignIn(socialSignInSignUp);
  };
  const _setFbData = (payload: any) => setFbData(payload);
  const _onFbLogIn = async () => {
    try {
      await firebaseService.signInWithFb(socialSignInSignUp, _setFbData);
    } catch (e) {
      ShowFlashMessage('Something went wrong !', 'danger');
    }
  };
  const handleNavigationAfterFbLogin = async (data: any) => {
    if (data?.message === 'Logged In') {
      return ShowFlashMessage('info', 'log In successfully', 'success');
    }
    if (data?.profile && data?.user) {
      const {email, family_name, given_name} = data.profile;
      if (data.isNewUser) {
        if (email) {
          await firebaseService.deleteUserFromFirebase();
          navigateToProfile({
            email,
            firstName: given_name,
            lastName: family_name,
            credential: data.googleCredential,
          });
        } else {
          navigateToOtpScreen({});
        }
      } else {
        const res = await socialSignInSignUp({email});
        if (res.message === 'Logged In') {
          return ShowFlashMessage('info', 'log In successfully', 'success');
        }
      }
    }
  };
  useEffect(() => {
    if (fbdata) {
      handleNavigationAfterFbLogin(fbdata);
    }
  }, [fbdata]);
  const navigateToEmailAuth = ({
    email,
    firstName,
    lastName,
    firebaseUid,
  }: {
    email?: string;
    firstName?: string;
    lastName?: string;
    firebaseUid: string;
  }) => {
    // Navigate to the signup page here
    navigation.navigate(ROUTES.Emailauth, {
      data: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        firebaseUid: firebaseUid,
      },
    });
  };
  const navigateToProfile = ({
    email,
    firstName,
    lastName,
    firebaseUid,
    credential,
  }: {
    email: string;
    firstName?: string;
    lastName?: string;
    firebaseUid?: string;
    credential?: FirebaseAuthTypes.AuthCredential;
  }) => {
    navigation.navigate(ROUTES.Profile, {
      data: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        firebaseUid: firebaseUid,
        credential: credential,
      },
    });
  };
  const navigateToOtpScreen = ({
    email,
    firstName,
    lastName,
    firebaseUid,
    otp,
  }: {
    email?: string;
    firstName?: string;
    lastName?: string;
    firebaseUid?: string;
    otp?: string;
  }) => {
    // Navigate to the signup page here
    navigation.navigate(ROUTES.Emailauth, {
      data: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        firebaseUid: firebaseUid,
        otp: otp,
      },
    });
  };

  return {
    loading,
    _googleSignIn,
    email,
    setEmail,
    socialSignInSignUp,
    navigateToOtpScreen,
    handleAppleSignIn,
    _onFbLogIn,
    getOtpToVerifyEmail,
    newUserSignUp,
    otp,
    setOtp,
    verifyEmail,
    resendOtp,
    formData,
    setFormData,
    handleInputChange,
    handleSubmit,
    validationErrors,
    setValidationErrors,
    emailInput,
    setEmailInput,
    otpScreen,
  };
};
