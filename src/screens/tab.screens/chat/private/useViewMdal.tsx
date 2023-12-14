import { useContext, useState } from 'react';
import { NotificationCountContext } from '../../../../contexts/notificationCount.context';
import { ROUTES } from '../../../../navigation';
import { useNavigation } from '@react-navigation/native';
export const useViewModal = () => {
  const [state, setState] = useState(0);
  const navigation = useNavigation();
  const goToNotification = () => {
    navigation.navigate(ROUTES.Notification)
  }
  const { count } = useContext(NotificationCountContext);
  return {
    state,
    setState,
    count,
    goToNotification,
  };
};