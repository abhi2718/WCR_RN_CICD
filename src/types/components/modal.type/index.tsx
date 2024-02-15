import { verificationIdType } from "../../services.types/firebase.service";

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
  handleInputChange: (name:string,value:any) => void;
  verificationOption: string;
  optionData: verificationIdType;
  onClose: () => void;
  navigateToVerificationStepTwo: () => void;
}

export interface VerificationInfoProps {
  isVisible: boolean;
  onClose: () => void;
}

export type DltLogOutType = {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
};
