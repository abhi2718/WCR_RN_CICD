import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {config} from './../../utils/config/index';
import {ShowFlashMessage} from '../../components/flashBar';

export class FirebaseService {
  constructor() {
    GoogleSignin.configure({
      webClientId: config.WEB_CLIENTID,
    });
  }
  async signInWithGoogle() {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
      const {idToken} = await GoogleSignin.getTokens();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const response = await this.signInWithCredential(googleCredential);
      if (!response?.additionalUserInfo) {
        return {
          isNewUser: null,
          profile: null,
          user: null,
        };
      }
      const {isNewUser, profile} = response.additionalUserInfo;
      return {
        isNewUser,
        profile,
        user: response.user,
      };
    } catch (error: any) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          ShowFlashMessage(
            'Something went wrong /SIGN_IN_CANCELLED/',
            'danger',
          );
          break;
        case statusCodes.IN_PROGRESS:
          ShowFlashMessage('Something went wrong /IN_PROGRESS/', 'danger');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          ShowFlashMessage(
            'Something went wrong /PLAY_SERVICES_NOT_AVAILABLE/',
            'danger',
          );
          break;
        case statusCodes.SIGN_IN_REQUIRED:
          ShowFlashMessage('Something went wrong /SIGN_IN_REQUIRED/', 'danger');
          break;
        default:
      }
    }
  }
  async signInWithCredential(credential: FirebaseAuthTypes.AuthCredential) {
    try {
      return await auth().signInWithCredential(credential);
    } catch (error) {
      ShowFlashMessage(
        'something went wrong with signInWithCredential function',
        'danger',
      );
    }
  }
  async signInWithEmailPassword(email: string, password: string) {
    try {
      return await auth().signInWithEmailAndPassword(email, password);
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-email':
          ShowFlashMessage('That email address is invalid!', 'danger');
          break;
        case 'auth/wrong-password':
          ShowFlashMessage(
            'The password is invalid or the user does not have a password',
            'danger',
          );
          break;
        case 'auth/user-not-found':
          ShowFlashMessage(
            'No account found, please sign up and try again.',
            'danger',
          );
          break;
        default:
          return ShowFlashMessage(
            'The password is invalid or the user does not have an account.',
            'danger',
          );
      }
    }
  }
}
