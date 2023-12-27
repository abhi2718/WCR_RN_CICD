export interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}
export interface ProfilePicInfoModalProps {
  isVisible: boolean;
  joinGroup: () => void;
  onClose: () => void;
}

export interface VerificationInfoProps {
  isVisible: boolean;
  onClose: () => void;
}

export type DltLogOutType = {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
};
