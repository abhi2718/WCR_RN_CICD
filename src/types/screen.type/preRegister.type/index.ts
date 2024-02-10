export type ModalImageSelectedType = {
    path: string;
    index: number;
    type: string;
  };
  export type ImageDataType = {
    path: string;
    mime: string;
    name: string;
  };

  export type AddProfilePicScreenProps = {
    navigation: any;
    source: any;
    setAllPics: (payload: any) => void;
    showHeader?: boolean;
  };
