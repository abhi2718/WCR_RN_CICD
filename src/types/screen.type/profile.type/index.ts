import { Dispatch, SetStateAction } from "react";

export type OptionType = {
    _index: number;
    label: string;
    value: string;
};
export type handleInputChangeType = {
  key: number;
  label: string;
  type: string;
  value: string;
}
type Coordinates = [number, number];

interface Location {
  _id: string;
  coordinates: Coordinates;
  type: string;
}

interface Height {
  feet: number;
  inch: number;
  heightInCm: number;
}

interface Photo {
  _id: string;
  url: string;
}

interface Designation {
  primaryDegree: string;
  title: string;
  userDegree: string;
}

interface Name {
  first: string;
  last: string;
}

interface Profile {
  displayName: string;
  dob: string;
  email: string;
  gender: string;
  genderPronoun: string;
  name: Name;
  phone: string;
  sexualPreference: string;
  showGender: boolean;
  showSexualPreference: boolean;
}

interface VerificationId {
  degreeIdentifier: string;
  degreeIdentifierType: string;
  healthCareProfessionalEmail: string;
  idNumber: string;
  idType: string;
  isDoctoralCandidate: boolean;
  isPhd: boolean;
  licenceWebsite: string;
  photo: Photo[][];
  state: string;
  studentEmail: string;
  submitted: boolean;
  territory: string;
  userWebsite: string;
}

interface Verification {
  ROR: any[];
  acceptedAt: string;
  status: string;
  verified: boolean;
}

export interface User {
  __v: number;
  _id: string;
  address: {
    city: string;
    country: string;
    location: Location;
    state: string;
    zipcode: string;
  };
  age: number;
  bio: string;
  communityInfoModalPoppedup: boolean;
  covidVaccineStatus: string;
  createdAt: string;
  dailyClickActions: number;
  designation: Designation;
  diet: string;
  drinking: string;
  ethnicity: string[];
  excercise: string;
  familyPlan: string;
  firebaseUid: string;
  fullName: string;
  hasPassword: boolean;
  height: Height;
  homeInfoModal: boolean;
  id: string;
  institution: string;
  interests: string[];
  isAdmin: boolean;
  isDeleted: boolean;
  isVisible: boolean;
  kids: string;
  maritalStatus: string;
  pets: string;
  photos: Photo[];
  politics: string;
  preferenceSubmitted: boolean;
  profile: Profile;
  profilePicture: {
    caption: string;
    url: string;
  };
  relationship: string[];
  religion: string;
  roles: string;
  sentVerifyEmail: boolean;
  sentWelcomeEmail: boolean;
  smoking: string;
  status: string;
  steps: number;
  subscribedToNewsletter: boolean;
  token: string;
  updatedAt: string;
  verification: Verification;
  verificationId: VerificationId;
  verifyModalPoppedup: boolean;
  welcomePageSubmitted: boolean;
}


export interface heightPrefrenceProps{
  visible:boolean,
  handleHeightModal:()=>void,
  heightRange:number[],
  setHeightRange:Dispatch<SetStateAction<number[]>>
}