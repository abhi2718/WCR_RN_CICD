import { ReactNode } from 'react';

export type LikeContextProviderProps = {
  children: ReactNode;
};
interface UserProfile {
  _id: string;
  designation: {
    title: string;
  };
  isDeleted: boolean;
  isVisible: boolean;
  profile: {
    displayName: string;
    dob: string;
    name: any[];
  };
  profilePicture: {
    caption: string;
    url: string;
  };
}

interface Favourite {
  _id: string;
  createdAt: string;
  favourite: UserProfile;
  isDeleted: boolean;
  isVisible: boolean;
  updatedAt: string;
  userId: string;
}
interface LikesReceived {
  _id: string;
  actedOn: UserProfile;
  action: string;
  createdAt: string;
  isDeleted: boolean;
  isMatched: boolean;
  isVisible: boolean;
  updatedAt: string;
  userId: string;
  viewed: boolean;
}
export type LikeContextInItState = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  fetchAll: (id: string) => Promise<void>;
  data: {
    allFavourite: Favourite[];
    likesReceived: LikesReceived[];
    liked: any[];
    matchedUsersList: any[];
  };
  setData: React.Dispatch<any>;
};
