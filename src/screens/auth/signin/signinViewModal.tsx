import {useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
  AccessToken,
  GraphRequestCallback,
} from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
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
    console.log(data);
  };
  const signInWithEmailPassword = async () => {
    if (!email.length || !password.length) {
      return ShowFlashMessage(
        'Alert',
        'Please enter your credentials',
        'danger',
      );
    }
    const data = firebaseService.signInWithEmailPassword(email, password);
    if (!data) {
      return;
    }
    console.log('data is', data);
  };
  const handleAppleSignIn = async () => {
    const data = await firebaseService.appleSignIn();
    console.log(data);
  };
  const _fbLogin = (
    resCallback: GraphRequestCallback | ((arg: string) => void) | undefined,
  ) => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        if (
          result.declinedPermissions &&
          result.declinedPermissions.includes('email')
        ) {
          resCallback('Email is required');
        }
        if (result.isCancelled) {
        } else {
          const infoRequest = new GraphRequest(
            '/me?fields=email,name,picture',
            null,
            resCallback,
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      error => {
        ShowFlashMessage('Something went wrong ', 'danger');
      },
    );
  };
  const _responseInfoCallback = async (error, result) => {
    if (error) {
      ShowFlashMessage('Something went wrong ', 'danger');
    } else {
      const data = await AccessToken.getCurrentAccessToken();
      if (data?.accessToken) {
        const facebookCredential = auth.FacebookAuthProvider.credential(
          data?.accessToken,
        );
        const response = await firebaseService.signInWithCredential(
          facebookCredential,
        );
        if (response) {
          console.log('response -->', response);
        }
      }
    }
  };
  const _onFbLogIn = async () => {
    try {
      await _fbLogin(_responseInfoCallback);
    } catch (e) {
      ShowFlashMessage('Something went wrong !', 'danger');
    }
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
  };
};
