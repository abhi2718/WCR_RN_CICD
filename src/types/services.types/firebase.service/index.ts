import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type socialSignInSignUpPayload = {
  firebaseUid?: string | undefined;
  email: string;
  firstName?: string | undefined;
  lastName?: string | undefined;
  dob?: string | undefined;
  displayName?: string | undefined;
  mobile?: string | undefined;
  fbId?: string | undefined | null;
};

export type navigateToOtppagepayload = {
  email?: string;
  firstName?: string;
  lastName?: string;
  firebaseUid?: string;
  otp?: string;
  credential?:string
}

export type navigateToProfilepagepayload= {
  email: string;
  firstName?: string;
  lastName?: string;
  firebaseUid?: string;
  credential?: FirebaseAuthTypes.AuthCredential;
  appleId?: string;
} 
export type ScreenParams = {
 navigation:any;
 route:any;
};
export type SocialSignInSignUp = {
  socialSignInSignUp: ({
    firebaseUid,
    email,
    firstName,
    lastName,
    dob,
    displayName,
    mobile,
    fbId
  }: socialSignInSignUpPayload) => Promise<any>;
}
