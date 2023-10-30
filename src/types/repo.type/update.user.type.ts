export type UpdateUserPayload = {
  update: RawUser;
};

export interface RawUser {
  profile: Profile;
  fullName?: string;
  address: Address;
  designation: Designation;
  institution: string;
  verification?: Verification;
  photos?: UserPhotos[];
  profilePicture?: Photo;
  bio?: string;
  interests?: string[];
  roles?: string;
  ethnicity?: string[];
  height?: Height;
  religion?: string;
  politics?: string;
  diet?: string;
  excercise?: string;
  drinking?: string;
  smoking?: string;
  kids?: string;
  familyPlan?: string;
  pets?: string;
  cannabis?: string;
  covidVaccineStatus?: string;
  relationship?: string[];
  maritalStatus?: string;
  status?: string;
  noOfkids?: string;
  verificationId?: VerificationId;
  firebaseUid?: string;
  preferenceSubmitted?: boolean;
  verifyModalPoppedup?: boolean;
  welcomePageSubmitted?: boolean;
  searchTerm?: string;
}

interface Profile {
  name: {
    first: string;
    last: string;
  };
  displayName: string;
  dob: Date | string;
  showGender: boolean;
  showSexualPreference: boolean;
  gender: string;
  sexualPreference: string;
  email: string;
  phone: string;
  genderPronoun: string;
}

interface Address {
  city: string;
  country: string;
  zipcode: string;
  state: string;
  location: Location;
}

interface Designation {
  userDegree: string;
  primaryDegree: string;
  title: string;
}

interface Verification {
  status: string;
  verified: boolean;
  ROR: string[];
}

interface Photo {
  url: string;
  caption: string;
}

interface UserPhotos {
  url: string;
}

interface Height {
  feet: number;
  inch: number;
}

interface Location {
  type: string;
  coordinates: number[];
}

interface VerificationId {
  idType?: string;
  idNumber?: string;
  state?: string;
  photo?: Photo[];
  isPhd?: boolean;
  licenceWebsite?: string;
  healthCareProfessionalEmail?: string;
  studentEmail?: string;
  isDoctoralCandidate?: boolean;
  userWebsite?: string;
  degreeIdentifier?: string;
  territory?: string;
  degreeIdentifierType?: string;
  submitted?: boolean;
}
