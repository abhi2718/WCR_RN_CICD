import { useContext, useState } from 'react';
import { NotificationCountContext } from '../../../../contexts/notificationCount.context';

export const useViewModal = () => {
  const [state, setState] = useState(0);
  const {count} = useContext(NotificationCountContext);
  return {
    state,
    setState,
    count
  };
};
