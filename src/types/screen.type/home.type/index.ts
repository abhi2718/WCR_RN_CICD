import { CometChat } from "../../../cometchat/sdk/CometChat";

export type User = {
  color: string;
  id: string;
  name: string;
  pantone_value: string;
  year: string;
};
export type UserListProps = {
  userList: User[];
};
export type UserItemProps = {
  user: User;
};
export type SearchModalProps = {
  showSearchModal: boolean;
  toggleSearchModal: () => void;
};
export type AppBarDropDownProps = {
  user: CometChat.User;
};
export type MatchScreenPropsType = {
  isMatch: any,
  startChat: () => void,
  handleHideOfIsMatchScreen: () => void
}

export type Profile = {
  _id: string;
  bio: string;
  city: string;
  count: number;
  country: string;
  covidVaccineStatus: string;
  designation: {
      primaryDegree: string;
      title: string;
      userDegree: string;
  };
  displayName: string;
  dob: string;
  drinking: string | null;
  ethnicity: string[];
  first: string;
  gender: string;
  genderPronoun: string;
  height: {
      feet: number;
      heightInCm: number;
      inch: number;
  };
  interests: string[];
  kids: string;
  maritalStatus: string;
  photos: {
      _id: string;
      url: string;
  }[];
  politics: string | null;
  profilePicture: {
      caption: string;
      url: string;
  };
  religion: string | null;
  sexualPreference: string;
  showGender: boolean;
  showSexualPreference: boolean;
  state: string;
};
export type matchUser = {
  _id: string;
  createdAt: string;
  isChat: boolean;
  isDeleted: boolean;
  isVisible: boolean;
  updatedAt: string;
  users: Array<{
    _id: string;
    designation: any;
    isDeleted: boolean;
    isVisible: boolean;
    profile: any;
    profilePicture: any;
  }>;
  viewed: string[];
};