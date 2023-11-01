import {useState} from 'react';
import {ChatAvatorModalProps} from '../../../../../../types/screen.type/communityChat';

export const useViewModal = (props: ChatAvatorModalProps) => {
  const [visible, setVisible] = useState(false);
  const {name, image, senderId} = props;
  const toggleVisiblity = () => {
    setVisible((oldValue) => !oldValue);
  };

  return {
    visible,
    name,
    image,
    senderId,
    toggleVisiblity,
  };
};
