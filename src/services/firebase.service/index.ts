import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
  AccessToken,
} from 'react-native-fbsdk';
import {ShowFlashMessage} from '../../components/flashBar';
import {config} from '../../utils/config';
export class FirebaseService {
  constructor() {}
  async signInWithGoogle(setLoading: (loadingState: boolean) => void) {
    try {
      GoogleSignin.configure({
        webClientId: '646347262122-r6p03otrumh84bl4r5clq38hgk3t839u.apps.googleusercontent.com',
      });
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
      setLoading(true);
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
            'Alert',
            'Something went wrong /SIGN_IN_CANCELLED/',
            'danger',
          );
          break;
        case statusCodes.IN_PROGRESS:
          ShowFlashMessage(
            'Alert',
            'Something went wrong /IN_PROGRESS/',
            'danger',
          );
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          ShowFlashMessage(
            'Alert',
            'Something went wrong /PLAY_SERVICES_NOT_AVAILABLE/',
            'danger',
          );
          break;
        case statusCodes.SIGN_IN_REQUIRED:
          ShowFlashMessage(
            'Alert',
            'Something went wrong /SIGN_IN_REQUIRED/',
            'danger',
          );
          break;
        default:
      }
    }
  }
  async signInWithCredential(credential: FirebaseAuthTypes.AuthCredential) {
    try {
      return await auth().signInWithCredential(credential);
    } catch (error: any) {
      switch (error.code) {
        case 'auth/account-exists-with-different-credential':
          ShowFlashMessage(
            'Alert',
            'An account already exists with the same email address but different sign-in credentials.',
            'danger',
          );
          break;
        case 'auth/email-already-in-use':
          ShowFlashMessage(
            'Alert',
            'Account already exists with this email ID, try to login.',
            'danger',
          );
          break;
        case 'auth/invalid-email':
          ShowFlashMessage('That email address is invalid! .', 'danger');
          break;
        default:
          ShowFlashMessage(
            'Alert',
            'something went wrong with signInWithCredential function',
            'danger',
          );
      }
    }
  }
  async signInWithEmailPassword(email: string, password: string) {
    try {
      return await auth().signInWithEmailAndPassword(email, password);
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-email':
          ShowFlashMessage('Alert', 'That email address is invalid!', 'danger');
          break;
        case 'auth/wrong-password':
          ShowFlashMessage(
            'Alert',
            'The password is invalid or the user does not have a password',
            'danger',
          );
          break;
        case 'auth/user-not-found':
          ShowFlashMessage(
            'Alert',
            'No account found, please sign up and try again.',
            'danger',
          );
          break;
        default:
          return ShowFlashMessage(
            'Alert',
            'The password is invalid or the user does not have an account.',
            'danger',
          );
      }
    }
  }
  async signUpWithEmailPassword(email: string, password: string) {
    try {
      return await auth().createUserWithEmailAndPassword(email, password);
    } catch (error: any) {
      console.log('error::',error)
      switch (error.code) {
        case 'auth/invalid-email':
          ShowFlashMessage('Alert', 'That email address is invalid!', 'danger');
          break;
        case 'auth/wrong-password':
          ShowFlashMessage(
            'Alert',
            'The password is invalid or the user does not have a password',
            'danger',
          );
          break;
        case 'auth/user-not-found':
          ShowFlashMessage(
            'Alert',
            'No account found, please sign up and try again.',
            'danger',
          );
          break;
        default:
          return ShowFlashMessage(
            'Alert',
            'The password is invalid or the user does not have an account.',
            'danger',
          );
      }
    }
  }
  async appleSignIn() {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      });
      const credentialState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user,
      );
      if (credentialState === appleAuth.State.AUTHORIZED) {
        const {identityToken, nonce} = appleAuthRequestResponse;
        const appleCredential = auth.AppleAuthProvider.credential(
          identityToken,
          nonce,
        );
        const response = await this.signInWithCredential(appleCredential);
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
      }
    } catch (error) {
      ShowFlashMessage('Alert', 'Something went wrong ', 'danger');
    }
  }
  async signInWithFb() {
    LoginManager.logOut();
    const loginResult = await LoginManager.logInWithPermissions([
      'email',
      'public_profile',
    ]);
    if (
      loginResult.declinedPermissions &&
      loginResult.declinedPermissions.includes('email')
    ) {
      return ShowFlashMessage('Alert', 'Email is required', 'danger');
    }
    if (loginResult.isCancelled) {
      return ShowFlashMessage('Alert', 'You Cancelled ', 'danger');
    }
    const infoRequest = new GraphRequest('/me?fields=email,name,picture');
    new GraphRequestManager().addRequest(infoRequest).start();
    const data = await AccessToken.getCurrentAccessToken();
    if (data?.accessToken) {
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data?.accessToken,
      );
      return await this.signInWithCredential(facebookCredential);
    }
  }
}











