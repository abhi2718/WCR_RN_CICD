import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../../../../navigation';
import {ProfileModalSheetProps} from '../../../../../../../types/screen.type/privateChat';
export const useViewMdal = (props: ProfileModalSheetProps) => {
  const { visible, toggleVisiblity, image, name, senderId } = props;
  const navigation = useNavigation();
  const navigateToPrivateChat = () => {
    navigation.navigate(ROUTES.CommunityPrivateChat, {senderId, name});
    toggleVisiblity();
  }
  return {
    visible,
    toggleVisiblity,
    image,
    name,
    senderId,
    navigateToPrivateChat
  };
};
