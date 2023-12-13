import { useContext, useState } from 'react';
import {CometChat} from '@cometchat/chat-sdk-react-native';
import { NotificationCountContext } from '../../../../contexts/notificationCount.context';
import { ROUTES } from '../../../../navigation';
import { useNavigation } from '@react-navigation/native';
import { FriendContext } from '../../../../contexts/friends.context';
export const useViewModal = () => {
  const [state, setState] = useState(0);
  // let usersRequestBuilder = new CometChat.UsersRequestBuilder()
  // .setLimit(20)
  // .friendsOnly(!true);
  const { numberOfGroups,
    numberOfFriends,} = useContext(FriendContext);
  const navigation = useNavigation();
  const goToNotification = () => {
    navigation.navigate(ROUTES.Notification)
  }
  console.log({
    numberOfGroups,
    numberOfFriends,
  });
  const { count } = useContext(NotificationCountContext);
  return {
    state,
    setState,
    count,
    goToNotification,
  };
};