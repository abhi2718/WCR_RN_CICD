import {useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {SignInRepository} from '../../../repository/signin.repo';
import {FirebaseService} from '../../../services/firebase.service';
import {ShowFlashMessage} from '../../../components/flashBar';
import {useNavigation} from '@react-navigation/native';

export const useViewModal = () => {
  const signInRepository = new SignInRepository();
  const firebaseService = new FirebaseService();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await signInRepository.getUsers(2);
      setLoading(false);
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
    if (data?.isNewUser && data?.profile && data?.user) {
      const {
        email: userEmail,
        family_name,
        given_name,
        name,
        picture,
      } = data.profile;
    }
    setLoading(false);
  };
  const signInWithEmailPassword = async () => {
    if (!email.length || !password.length) {
      return ShowFlashMessage(
        'Alert',
        'Please enter your credentials',
        'danger',
      );
    }
    const data = await firebaseService.signInWithEmailPassword(email, password);
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

  const handleSignUpPress = () => {
    // Navigate to the signup page here
    navigation.navigate('SignUp');
  };

  return {
    count,
    updateCount,
    loading,
    _googleSignIn,
    email,
    setEmail,
    password,
    setPassword,
    signInWithEmailPassword,
    handleAppleSignIn,
    _onFbLogIn,
    handleSignUpPress,
  };
};
