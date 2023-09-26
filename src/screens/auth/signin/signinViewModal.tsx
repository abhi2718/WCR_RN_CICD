import {useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {SignInRepository} from '../../../repository/signin.repo';
import {FirebaseService} from '../../../services/firebase.service';
import {ShowFlashMessage} from '../../../components/flashBar';

export const useViewModal = () => {
  const signInRepository = new SignInRepository();
  const firebaseService = new FirebaseService();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await signInRepository.getUsers(2);
      setLoading(false);
    } catch (error) {
      console.log(error);
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
  const _googleSignIn = async () => {
    setLoading(true);
    const data = await firebaseService.signInWithGoogle();
    console.log(data);
    ShowFlashMessage('Test', 'Test', 'success');
    if (data?.isNewUser && data.profile && data.user) {
      const {
        email: userEmail,
        family_name,
        given_name,
        name,
        picture,
      } = data.profile;
    }
    setLoading(false);
    console.log(data?.user?.uid);
  };
  const signInWithEmailPassword = async () => {
    const data = firebaseService.signInWithEmailPassword(email, password);
    if (!data) {
      return;
    }
    console.log('data is', data);
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
  };
};
