export interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
  }
export interface ProfilePicInfoModalProps {
    isVisible: boolean;
    onClose: () => void;
  }

  export type DltLogOutType = {
    showModal:boolean,
    setShowModal:(state:boolean)=>void,
    
}