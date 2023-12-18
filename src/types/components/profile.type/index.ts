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
  };
  export type profileProps = {
    showModal:boolean,
    toggleModal:(state?:boolean) =>void,
    userId: string;
    showLike: boolean;
    showDisLike: boolean;
    showSave: boolean;
    showBlock?:boolean
  }