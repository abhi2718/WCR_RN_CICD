import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import jwt_decode from 'jwt-decode';
import { socialSignInSignUpPayload,} from './../../types/services.types/firebase.service';
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
  async signInWithGoogle(
    setLoading: (loadingState: boolean) => void,
    socialSignInSignUp: ({
      firebaseUid,
      email,
      firstName,
      lastName,
      dob,
      displayName,
      mobile,
    }: socialSignInSignUpPayload) => Promise<any>,
  ) {
    try {
      GoogleSignin.configure({
        webClientId:config.WEBCLIENTID
      });
      await GoogleSignin.hasPlayServices();
      const {user} = await GoogleSignin.signIn();
      setLoading(true);
      const {idToken} = await GoogleSignin.getTokens();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const response = await this.signInWithCredential(
        googleCredential,
        socialSignInSignUp,
        user.email,
      );

      if (response?.token) {
        return {
          isNewUser: false,
          profile: null,
          user: null,
        };
      }

      if (!response?.additionalUserInfo) {
        return {
          isNewUser: false,
          profile: null,
          user: null,
        };
      }
      const { isNewUser, profile } = response.additionalUserInfo;
      return {
        isNewUser,
        profile,
        user: response.user,
        googleCredential,
      };
    } catch (error: any) {
      switch (error.code) {
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
  async signInWithCredential(
    credential: FirebaseAuthTypes.AuthCredential,
    socialSignInSignUp?: ({
      firebaseUid,
      email,
      firstName,
      lastName,
      dob,
      displayName,
      mobile,
    }: socialSignInSignUpPayload) => Promise<any>,
    email?: string | undefined,
    checFbUser?:(fbId:string) => Promise<any>,
    fbId?: string | undefined,
  ) {
    try {
      return await auth().signInWithCredential(credential);
    } catch (error: any) {
      switch (error.code) {
        case 'auth/account-exists-with-different-credential':
          if (socialSignInSignUp && email) {
            return await socialSignInSignUp({email});
          } else {
            if(checFbUser && fbId){
              return await checFbUser(fbId)
            }
          }
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
          break;
        case 'auth/user-not-found':
          return await this.signUpWithEmailPassword(email, password);
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
  async deleteUserFromFirebase() {
    let user = auth().currentUser;
    return user?.delete();
  }
  async signUpWithEmailPassword(email: string, password: string) {
    try {
      return await auth().createUserWithEmailAndPassword(email, password);
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
  getParsedJwt(token: string) {
    try {
      return jwt_decode(token);
    } catch {
      return undefined;
    }
  }
  async appleSignIn(
    checkAppleUser: (appleId: string) => Promise<any>,
    setLoading: (loadingState: boolean) => void,
  ) {
    try {
      let email;
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      });
      setLoading(true)
      const credentialState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user,
      );
      if (credentialState === appleAuth.State.AUTHORIZED) {
        const {identityToken, nonce} = appleAuthRequestResponse;
        if (identityToken) {
          const userInfo: any = this.getParsedJwt(identityToken);
          email = userInfo?.email;
        }
        const appleCredential = auth.AppleAuthProvider.credential(
          identityToken,
          nonce,
        );
        const {user} = await this.signInWithCredential(appleCredential);
        const data = await checkAppleUser(user?.uid);
        if (data?.isNewUser) {
          return {
            isNewUser: true,
            email,
            firebaseUid: user?.uid,
            appleCredential
          };
        }
        return {
          isNewUser: false,
          ...data,
        };
      }
    } catch (error) {
    }
  }
  async signInWithFb(
    socialSignInSignUp: ({
      firebaseUid,
      email,
      firstName,
      lastName,
      dob,
      displayName,
    }: socialSignInSignUpPayload) => Promise<any>,
    setFbData: (payload: any) => void,
    checFbUser:(fbId:string) => Promise<any>
  ) {
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
    const callBack = async (err: any, result: any) => {
      let res;
      const email = result?.email;
      const fbId = result?.fbId;
      const data = await AccessToken.getCurrentAccessToken();
      if (data?.accessToken) {
        const facebookCredential = auth.FacebookAuthProvider.credential(
          data?.accessToken,
        );
        const response = await this.signInWithCredential(
          facebookCredential,
          socialSignInSignUp,
          email,
          checFbUser,
          fbId
        );
        if (response?.token) {
          res = {
            isNewUser: false,
            ...response,
          };
        }
        if (response?.additionalUserInfo) {
          const isNewUser = response?.additionalUserInfo?.isNewUser;
          const profile = response?.additionalUserInfo?.profile;
          res = {
            isNewUser,
            profile,
            user: response.user,
            message: response.message,
            facebookCredential: facebookCredential,
          };
        }
        setFbData(res);
      }
    };
    const infoRequest = new GraphRequest(
      '/me?fields=email,name,picture',
      null,
      callBack,
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  }
}
