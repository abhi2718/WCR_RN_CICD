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

        if (data?.message === 'Logged In') {
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
  };

  const handleAppleSignIn = async () => {
    try {
      const data: any = await firebaseService.appleSignIn(socialSignInSignUp);

      // if account is createed by other provider
      if (data?.message === 'Logged In') {
        // naviagte to respectve screen
        return ShowFlashMessage('info', 'log In successfully', 'success');
      }

      if (data?.profile && data?.user) {
        const {email, family_name, given_name} = data.profile;

        if (data?.isNewUser) {
          if (email) {
            // const data = await getOtpOnEmail(email);
            await firebaseService.deleteUserFromFirebase();
            navigateToProfile({
              email,
              firstName: given_name,
              lastName: family_name,
              credential: data.appleCredential,
            });
          } else {
            navigateToOtpScreen({});
          }
        } else {
          const data = await socialSignInSignUp({email});

          if (data.message === 'Logged In') {
            return ShowFlashMessage('info', 'log In successfully', 'success');
          }
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
    if (data?.message === 'Logged In') {
      return ShowFlashMessage('info', 'log In successfully', 'success');
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

    setLoading,

    checkIsNewUser,
  };
};
