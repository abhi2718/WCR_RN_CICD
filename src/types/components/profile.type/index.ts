export type UserProfile = {
  _id: string;
  city: string;
  designation: {
    primaryDegree: string;
    title: string;
    userDegree: string;
  };
  dob: string;
  ethnicity: string[];
  first: string;
  displayName: string;
  gender: string;
  genderPronoun: string;
  interests: string[];
  isDeleted: boolean;
  isVisible: boolean;
  photos: {
    _id: string;
    url: string;
  }[];
  profilePicture: {
    caption: string;
    url: string;
  };
  showGender: boolean;
  state: string;
  drinking: string;
  maritalStatus: string[];
  sexualPreference: string;
  showSexualPreference: string;
  userHeight: {
    feet: string;
    inch: string;
  };
  religion: string;
  politics: string;
  kids: string;
  covidVaccineStatus: boolean;
  bio: string;
};
export type profileProps = {
  showModal: boolean;
  toggleModal: (state?: boolean) => void;
  userId: string;
  showLike: boolean;
  showDisLike: boolean;
  showSave: boolean;
  showBlock?: boolean;
  matchedDocId?: string;
  isMatched?: boolean;
};
