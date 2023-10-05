import {useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AuthRepository} from '../../../repository/auth.repo';
import {FirebaseService} from '../../../services/firebase.service';
import {ShowFlashMessage} from '../../../components/flashBar';
import {useNavigation} from '@react-navigation/native';
import { ROUTES } from '../../../navigation/stack.navigator';

export const useViewModal = () => {
  const signInRepository = new AuthRepository();
  const firebaseService = new FirebaseService();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  


  // const socialSignInSignUp = async (firebaseUid:string,email:string,name:string) => {
  //   try {
  //     setLoading(true);
  //     const data = await signInRepository.socialSignInSignUp({firebaseUid,email,name});
  //     setLoading(false);
  //     return data;
  //   } catch (error) {
  //     setLoading(false);
  //   } 
  // };
  const updateCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
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
    const data = await firebaseService.signInWithEmailPassword(email,password);
    if (!data) {
      return;
    }
    if(!data?.additionalUserInfo?.isNewUser){
      navigateToProfile({email, firebaseUid: data.user.uid});
    }else{
      return ShowFlashMessage(
        'Alert',
        'The email address doesn not exist please create an account',
        'danger',
      );
    }
    if (!data) {
      return;
    }
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

  const navigateToSignUPScreen = () => {
    // Navigate to the signup page here
    navigation.navigate(ROUTES.SignUp)
;
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
    setPassword,
    signInWithEmailPassword,
    handleAppleSignIn,
    _onFbLogIn,
    navigateToSignUPScreen,
  };
};
