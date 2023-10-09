import {useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AuthRepository} from '../../../repository/auth.repo';
import {FirebaseService} from '../../../services/firebase.service';
import {ShowFlashMessage} from '../../../components/flashBar';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/stack.navigator';
import {OtpRepository} from '../../../repository/otp.repo';

export const useViewModal = () => {
  const signInRepository = new AuthRepository();
  const otpInRepository = new OtpRepository();
  const firebaseService = new FirebaseService();
  const [count, setCount] = useState(0);
  const [displayName, setDisplayName] = useState('');
  const [dob, setDob] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
  const [secondName, setSecondName] = useState('');

  const socialSignInSignUp = async ({
    firebaseUid,
    email,
    firstName,
    lastName,
    dob,
    displayName,
  }: {
    firebaseUid: string;
    email: string;
    firstName?: string;
    lastName?: string;
    dob?: string;
    displayName?: string;
  }) => {
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
      console.log(`Verifying::`, data);
      
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
    }
  };
  const updateCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {}, []);

  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  const _setLoaging = (loadingState: boolean) => setLoading(loadingState);
  const _googleSignIn = async () => {
    const data = await firebaseService.signInWithGoogle(_setLoaging);
    if (data?.profile && data?.user) {
      const {
        email: userEmail,
        family_name,
        given_name,
        name,
        picture,
        isNewUser,
      } = data.profile;

      if (isNewUser) {
        const password = `Sh${email}3@`;
        console.log(userEmail, password);
        const data = await firebaseService.signUpWithEmailPassword(
          email,
          password,
        );
      } else {
        navigateToProfile({
          email: userEmail,
          firebaseUid: data.user.uid,
          firstName: given_name,
          lastName: family_name,
        });
      }
    }

    setLoading(false);
  };
  const getOtpToVerifyEmail = async () => {
    console.log(
      '🚀 ~ file: signinViewModal.tsx:108 ~ getOtpToVerifyEmail ~ email:',
      email,
    );

    if (!email.length) {
      return ShowFlashMessage(
        'Alert',
        'Please enter your email address',
        'danger',
      );
    }
    const data = await getOtpOnEmail(email);

    navigateToOtpScreen({email: data.data.email, otp: data.data.code});

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
    const data = await firebaseService.appleSignIn();
  };

  const _onFbLogIn = async () => {
    try {
      const data = await firebaseService.signInWithFb();
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
    count,
    updateCount,
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
