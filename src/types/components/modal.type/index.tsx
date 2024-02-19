import { verificationIdType } from '../../services.types/firebase.service';

export interface ModalProps {
  isVisible: boolean;
  onClose: (isWantToUpdateModalStatus?: boolean) => void;
}
export interface ProfilePicInfoModalProps {
  isVisible: boolean;
  joinGroup?: () => void;
  onClose: () => void;
}

export interface WebsiteModalProps {
  isVisible: boolean;
  handleInputChange: (name: keyof verificationIdType, value: any) => void;
  verificationOption: string;
  optionData: verificationIdType;
  onClose: () => void;
  navigateToVerificationStepTwo: () => void;
  validateEmail: (email:string) => void;
  validateUserWebsiteUrl: (email:string) => void;
  isValidEmail: boolean;
  isValidWebsiteUrl: boolean;
}
export interface WebsitePhdModalProps {
  isVisible: boolean;
  uploadPhdOptionPhotos: () => void;
  validationErrorMessage: string;
  onClose: () => void;
  sumbitVerificationForm: () => void;
  loading: boolean;
  website: string;
  handleWebsite: () => void;
}

export interface VerificationInfoProps {
  isVisible: boolean;
  onClose: () => void;
}

export type DltLogOutType = {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
};
