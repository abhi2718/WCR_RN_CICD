import { ImageOrVideo } from "react-native-image-crop-picker";
import { ImageProps } from "react-native/types";

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
    navigation?: any;
    source?: any;
    setAllPics: (payload: any) => void;
    showHeader?: boolean;
  };
  export interface AvatarProps extends ImageProps {
    onChange?: (image: ImageOrVideo) => void;
    navigation: any;
    route: any;
  }
  export interface VerificationImagePreviewProps {
    clickPicture: (type:string) => void;
    sumbitVerificationForm: () => void;
    removeDocument: () => void;
    removeSelfie: () => void;
    clickSelfieImage: () => void;
    onCloseVerificationImagePreview: () => void;
    openModal: () => void;
    toggleModal: () => void;
    isVerificationImagePreviewVisible: boolean;
    visibleModal: boolean;
    documentImage?: any;
    selfie?: any;
    error?: boolean;
    loading?: boolean;
  }