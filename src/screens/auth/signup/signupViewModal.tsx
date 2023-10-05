import {useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AuthRepository} from '../../../repository/auth.repo';
import {FirebaseService} from '../../../services/firebase.service';
import {ShowFlashMessage} from '../../../components/flashBar';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/stack.navigator';

export const useViewModal = () => {
  const signInRepository = new AuthRepository();
  const firebaseService = new FirebaseService();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const socialSignInSignUp = async (
    {
      email,
      firebaseUid,
    }: {
      email: string;
      firebaseUid: string;
    }) => {
    try {
      setLoading(true);
      const data = await signInRepository.socialSignInSignUp({
        firebaseUid,
        email,
      });
      setLoading(false);
      
      return ShowFlashMessage(
        'info',
        data.message,
        'success',
      );
    } catch (error) {
      setLoading(false);
    }
  };
  const updateCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    //fetchData();
  }, []);
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
      } = data.profile;
      navigateToProfile({email:userEmail, firebaseUid: data.user.uid,firstName:given_name,lastName:family_name});
    }
    setLoading(false)
  };
  const signUpWithEmailPassword = async () => {
    if (!email.length || !password.length) {
      return ShowFlashMessage(
        'Alert',
        'Please enter your credentials',
        'danger',
      );
    }
    const data = await firebaseService.signUpWithEmailPassword(email, password);
    if(data?.additionalUserInfo?.isNewUser){
      navigateToProfile({email, firebaseUid: data.user.uid});
    }else{
      return ShowFlashMessage(
        'Alert',
        'The email address is already in use by another account',
        'danger',
      );
    }
    if (!data) {
      return;
    }
   
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

  const navigateTosignInScreen = () => {
    // Navigate to the signup page here
    navigation.navigate(ROUTES.SignIn);
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

  return {
    count,
    updateCount,
    loading,
    _googleSignIn,
    email,
    setEmail,
    password,
    socialSignInSignUp,
    setPassword,
    signUpWithEmailPassword,
    handleAppleSignIn,
    _onFbLogIn,
    navigateTosignInScreen,
    navigateToProfile,
  };
};
