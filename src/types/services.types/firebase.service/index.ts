type socialSignInSignUpPayload = {
  firebaseUid?: string | undefined;
  email: string;
  firstName?: string | undefined;
  lastName?: string | undefined;
  dob?: string | undefined;
  displayName?: string | undefined;
  mobile?: string | undefined;
  appleId?: string | undefined | null;
};

type SocialSignInSignUp = {
  socialSignInSignUp: ({
    firebaseUid,
    email,
    firstName,
    lastName,
    dob,
    displayName,
    mobile,
    appleId
  }: socialSignInSignUpPayload) => Promise<any>;
}
