import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

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
  credential?: string;
};

export type profileTypes = {
  firstName: string;
  lastName: string;
  displayName: string;
  mobile: string;
  email: string;
  dob: string;
};
export type verificationIdType = {
  npiNumber?: string;
  state?: string;
  licenseNumber?: string;
  isDoctoralCandidate?: boolean;
  isPhd?: boolean;
  idType?: string;
  idNumber?: string;
  licenceWebsite?: string;
  studentEmail?: string;
  userWebsite?: string;
  healthCareProfessionalEmail?: string;
  teritory?: string;
  degreeIdentifier?: string;
  degreeIdentifierType?: string;
};
export type addressTypes = {
  country: string;
  state: string;
  city: string;
  zipcode: string;
};
export type professionTypes = {
  userDegree: string;
  primaryDegree: string;
  institution?: string;
  title: string;
};

export type navigateToProfilepagepayload = {
  email: string;
  firstName?: string;
  lastName?: string;
  firebaseUid?: string;
  credential?: FirebaseAuthTypes.AuthCredential;
  appleId?: string;
};
export type ScreenParams = {
  navigation?: any;
  route?: any;
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
    fbId,
  }: socialSignInSignUpPayload) => Promise<any>;
};
