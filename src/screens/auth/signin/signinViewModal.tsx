import {useEffect, useState} from 'react';
import { AuthRepository } from '../../../repository/auth.repo';
import {FirebaseService} from '../../../services/firebase.service';
import {ShowFlashMessage} from '../../../components/flashBar';
import {ROUTES} from '../../../navigation/stack.navigator';
import {OtpRepository} from '../../../repository/otp.repo';

export const useViewModal = (navigation:{
  navigate: (route: string, params?: any) => void
}) => {
  const signInRepository = new AuthRepository();
  const otpInRepository = new OtpRepository();
  const firebaseService = new FirebaseService();
  const [displayName, setDisplayName] = useState('');
  const [dob, setDob] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [secondName, setSecondName] = useState('');

  const socialSignInSignUp = async ({
    firebaseUid,
    email,
    firstName,
    lastName,
    dob,
    displayName,
  }:socialSignInSignUpPayload) => {
    try {
      setLoading(true);
      const data = await signInRepository.socialSignInSignUp({
        firebaseUid,
        email,
        firstName,
        lastName,
        dob,
        displayName,
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
      console.log(data.data.message==='Verified')
      if (data.data.message==='Verified') {
        checkIsNewUser(email);
      }

      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
    }
  };

  const _setLoaging = (loadingState: boolean) => setLoading(loadingState);
  const _googleSignIn = async () => {
    const data = await firebaseService.signInWithGoogle(_setLoaging,socialSignInSignUp);
   // console.log('data from google::',data);
    if (data?.profile && data?.user) {
      const {
        email: userEmail,
        family_name,
        given_name,
        name,
        picture,
        isNewUser,
      } = data.profile;
    }
    setLoading(false);
  };

  const checkIsNewUser = async (email: string) => {
    const password = `Sh${email}3@`;
    console.log(password, email);
    const data = await firebaseService.signInWithEmailPassword(email, password);
    console.log('from email password ::::',data);
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
    console.log('data::',data);
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
  const handleAppleSignIn = async () => {
    const data = await firebaseService.appleSignIn(socialSignInSignUp);
  };

  const _onFbLogIn = async () => {
    try {
      const data = await firebaseService.signInWithFb(socialSignInSignUp);
    } catch (e) {
      ShowFlashMessage('Something went wrong !', 'danger');
    }
  };

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
  }: {
    email?: string;
    firstName?: string;
    lastName?: string;
    firebaseUid: string;
  }) => {
    // Navigate to the signup page here
    navigation.navigate(ROUTES.Profile, {
      data: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        firebaseUid: firebaseUid,
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
    displayName,
    setDisplayName,
    getOtpToVerifyEmail,
    mobileNo,
    setMobileNo,
    dob,
    setDob,
    name,
    otp,
    setOtp,
    setName,
    secondName,
    verifyEmail,
    setSecondName,
  };
};
