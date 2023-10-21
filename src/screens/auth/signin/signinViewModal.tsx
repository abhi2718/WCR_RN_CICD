import {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {AuthRepository} from '../../../repository/auth.repo';
import {FirebaseService} from '../../../services/firebase.service';
import {ShowFlashMessage} from '../../../components/flashBar';
import {ROUTES} from '../../../navigation/stack.navigator';
import {OtpRepository} from '../../../repository/otp.repo';

export const useViewModal = (navigation: any) => {
  const signInRepository = new AuthRepository();
  const otpInRepository = new OtpRepository();
  const firebaseService = new FirebaseService();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [fbdata, setFbData] = useState(null);
  const socialSignInSignUp = async ({
    firebaseUid,
    email,
    firstName,
    lastName,
    dob,
    displayName,
    mobile,
    appleId
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
        appleId
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
  const _setLoaging = (loadingState: boolean) => setLoading(loadingState);
  const _googleSignIn = async () => {
    const data = await firebaseService.signInWithGoogle(
      _setLoaging,
      socialSignInSignUp,
    );
    if (data?.profile && data?.user) {
      const {email, family_name, given_name, name, picture} = data?.profile;
      if (data?.isNewUser) {
        await firebaseService.deleteUserFromFirebase();
        navigateToProfile({
          email,
          firstName: given_name,
          lastName: family_name,
          credential: data.googleCredential,
        });
      } else {
        const data = await socialSignInSignUp({email});
        if (data?.token) {
          return ShowFlashMessage('info', 'logIn successfully', 'success');
        }
      }
    }
    setLoading(false);
  };

  const checkIsNewUser = async (email: string) => {
    const _email = email.toLowerCase();
    const data = await socialSignInSignUp({ email: _email });
    if (data?.token) {
     return ShowFlashMessage('info', 'logIn successfully', 'success');
    }
    navigateToProfile({ email: _email });
  };
  const getOtpToVerifyEmail = async () => {
    if (!email.length) {
      return ShowFlashMessage(
        'Alert',
        'Please enter your email address',
        'danger',
      );
    }
    const {data} = await getOtpOnEmail(email);
    navigateToOtpScreen({email: data.email});
  };
  const checkAppleUser = async (appleId: string) => {
    try {
      return await signInRepository.getAppleUser(appleId);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAppleSignIn = async () => {
    try {
      const data = await firebaseService.appleSignIn(checkAppleUser);
      if (data?.isNewUser) {
        if (data?.email) {
          navigateToProfile({
            email: data.email,
            credential: data.appleCredential,
            appleId: data.appleId,
          });
        } else {
          // plese implement it 
          navigateToOtpScreen({});
        }
      } else {
        if (data?.token) {
          return ShowFlashMessage('info', 'logIn successfully', 'success');
        }
      }
    } catch (e) {
      ShowFlashMessage('Something went wrong !', 'danger');
    }
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
    if (data?.token) {
      // login path if user had created account with other provider
      return ShowFlashMessage('info', 'logIn successfully', 'success');
    }
    if (data?.profile && data?.user) {
      const {email, family_name, given_name} = data?.profile;
      if (data?.isNewUser) {
        if (email) {
          await firebaseService.deleteUserFromFirebase();
          navigateToProfile({
            email,
            firstName: given_name,
            lastName: family_name,
            credential: data.facebookCredential,
          });
        } else {
           // handle this flow 
          navigateToOtpScreen({});
        }
      } else {
        // login path if user had created account with fb
        if (!email) {
          // send user on email verification screen
          return;
        } 
        const res = await socialSignInSignUp({email});
        if (res.token) {
          return ShowFlashMessage('info', 'logIn successfully', 'success');
        }
      }
    }
  };
  useEffect(() => {
    if (fbdata) {
      handleNavigationAfterFbLogin(fbdata);
    }
  }, [fbdata]);

  const navigateToProfile = ({
    email,
    firstName,
    lastName,
    firebaseUid,
    credential,
    appleId,
  }: {
    email: string;
    firstName?: string;
    lastName?: string;
    firebaseUid?: string;
    credential?: FirebaseAuthTypes.AuthCredential;
    appleId?: string;
  }) => {
    navigation.navigate(ROUTES.Profile, {
      data: {
        email,
        firstName,
        lastName,
        firebaseUid,
        credential,
        appleId
      },
    });
  };
  const navigateToP = () => {
    navigation.navigate(ROUTES.Profile);
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
    navigation.navigate(ROUTES.EmailAuth, {
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
    navigateToP,
    setLoading,
    checkIsNewUser,
  };
};
