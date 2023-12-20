import { useEffect, useState } from 'react';
import { AuthRepository } from '../../../repository/auth.repo';
import { FirebaseService } from '../../../services/firebase.service';
import {
  FlashMessageType,
  ShowFlashMessage,
} from '../../../components/flashBar';
import { OtpRepository } from '../../../repository/otp.repo';
import { ROUTES } from '../../../navigation';
import {
  socialSignInSignUpPayload,
  navigateToProfilepagepayload,
  navigateToOtppagepayload,
  ScreenParams,
} from '../../../types/services.types/firebase.service';
import { addUser } from '../../../store/reducers/user.reducer';
import { useDispatch } from 'react-redux';

export const useViewModal = (props: ScreenParams) => {
  const { navigation } = props;
  const signInRepository = new AuthRepository();
  const otpInRepository = new OtpRepository();
  const firebaseService = new FirebaseService();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [fbdata, setFbData] = useState(null);
  const dispatch = useDispatch();
  const socialSignInSignUp = async ({
    firebaseUid,
    email,
    firstName,
    lastName,
    dob,
    displayName,
    mobile,
    fbId,
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
        fbId,
      });
      setLoading(false);
      return data;
    } catch (error) {
      return ShowFlashMessage(
        'Error',
        `${error}`,
        FlashMessageType.DANGER,
      )
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
  const _setLoading = (loadingState: boolean) => setLoading(loadingState);
  const _googleSignIn = async () => {
    try {
      const data = await firebaseService.signInWithGoogle(
        _setLoading,
        socialSignInSignUp,
      );
      if (data?.profile && data?.user) {
        const { email, family_name, given_name, name, picture } = data?.profile;
        if (data?.isNewUser) {
          await firebaseService.deleteUserFromFirebase();
          navigateToProfile({
            email,
            firstName: given_name,
            lastName: family_name,
            credential: data.googleCredential,
          });
        } else {
          const data = await socialSignInSignUp({ email });
          if (data?.token) {
            const payload = { user: { ...data.user, token: data?.token } };
            dispatch(addUser(payload));
            navigateToGenderScreen(data.user._id);
          } else {
            return ShowFlashMessage(
              'warn',
              'logIn  unsuccessfull',
              FlashMessageType.WARNING,
            );
          }
        }
      }
      setLoading(false);
    } catch (err: any) {
    } finally {
      setLoading(false);
    }
  };

  const checkIsNewUser = async (email: string) => {
    const _email = email.toLowerCase();
    const data = await socialSignInSignUp({ email: _email });
    if (data?.token) {
      const payload = {
        user: {
          ...data.user,
          token: data?.token
        }
      };
      dispatch(addUser(payload));
      navigateToGenderScreen(data.user._id);
    } else {
      navigateToProfile({ email: _email });
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
    const { data } = await getOtpOnEmail(email);
    navigateToOtpScreen({ email: data.email });
  };
  const checkAppleUser = async (firebaseUid: string) => {
    try {
      return await signInRepository.getAppleUser(firebaseUid);
    } catch (error: any) {}
  };
  const checFbUser = async (fbId: string) => {
    try {
      return await signInRepository.getfbUser(fbId);
    } catch (error: any) {}
  };
  const handleAppleSignIn = async () => {
    try {
      const data = await firebaseService.appleSignIn(checkAppleUser);
      if (data?.isNewUser) {
        if (data?.email) {
          navigateToProfile({
            email: data.email,
            credential: data.appleCredential,
            firebaseUid: data.firebaseUid,
          });
        } else {
          navigateToOtpScreen({
            credential: data.appleCredential,
            firebaseUid: data.firebaseUid,
          });
        }
      } else {
        if (data?.token) {
          if (data?.token) {
            const payload = { user: { ...data.user, token: data?.token } };
            dispatch(addUser(payload));
            navigateToGenderScreen(data.user._id);
          }
        }
      }
    } catch (e) {}
  };
  const _setFbData = (payload: any) => setFbData(payload);
  const _onFbLogIn = async () => {
    try {
      await firebaseService.signInWithFb(
        socialSignInSignUp,
        _setFbData,
        checFbUser,
      );
    } catch (e) {}
  };
  const handleNavigationAfterFbLogin = async (data: any) => {
    if (data?.token) {
      dispatch(addUser(data));
      navigateToGenderScreen(data.user._id);
      // login path if user had created account with other provider
    }
    if (data?.profile && data?.user) {
      const { email, family_name, given_name } = data?.profile;
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
          navigateToOtpScreen({
            firstName: given_name,
            lastName: family_name,
            credential: data.facebookCredential,
          });
        }
      } else {
        // login path if user had created account with fb
        if (!email) {
          navigateToOtpScreen({
            firstName: given_name,
            lastName: family_name,
            credential: data.facebookCredential,
          });
          // send user on email verification screen
          return;
        }
        const res = await socialSignInSignUp({ email });
        if (res.token) {
          navigateToGenderScreen(res.user._id);
        }
      }
    }
  };
  useEffect(() => {
    if (fbdata) {
      handleNavigationAfterFbLogin(fbdata);
    }
  }, [fbdata]);

  const navigateToGenderScreen = (id: string) => {
    navigation.navigate(ROUTES.Gender, { data: id });
  };

  const navigateToProfile = ({
    email,
    firstName,
    lastName,
    firebaseUid,
    credential,
    appleId,
  }: navigateToProfilepagepayload) => {
    navigation.navigate(ROUTES.Profile, {
      data: {
        email,
        firstName,
        lastName,
        firebaseUid,
        credential,
        appleId,
      },
    });
  };

  const navigateToOtpScreen = ({
    email,
    firstName,
    lastName,
    firebaseUid,
    otp,
    credential,
  }: navigateToOtppagepayload) => {
    navigation.navigate(ROUTES.EmailAuth, {
      data: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        firebaseUid: firebaseUid,
        otp: otp,
        credential: credential,
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
    navigateToGenderScreen,
    getOtpOnEmail,
  };
};
