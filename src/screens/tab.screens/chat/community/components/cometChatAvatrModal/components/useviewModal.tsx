import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { ROUTES } from '../../../../../../../navigation';
import { ProfileModalSheetProps } from '../../../../../../../types/screen.type/privateChat';
export const useViewMdal = (props: ProfileModalSheetProps) => {
  const { visible, toggleVisiblity, image, name, senderId } = props;
  const [showModal, setshowModal] = useState(false);
  const toggleModal = (state?: boolean) =>
    setshowModal((oldValue) => (state ? state : !oldValue));
  const navigation = useNavigation();
  const navigateToPrivateChat = () => {
    navigation.navigate(ROUTES.CommunityPrivateChat, { senderId, name });
    toggleVisiblity();
  };
  const _toggleModal = useCallback(() => {
    toggleModal();
    toggleVisiblity();
  },[])
  return {
    visible,
    toggleVisiblity,
    image,
    name,
    senderId,
    navigateToPrivateChat,
    toggleModal,
    showModal,
    _toggleModal
  };
};
