import React, { useContext, useEffect, useRef, useState } from 'react';
import { NotificationCountContext } from '../../../contexts/notificationCount.context';
import { NotificationRepository } from '../../../repository/notification.repo';
import { NotificationType } from '../../../types/screen.type/notification.type';

export const useViewModal = () => {
  const notificationRepository = new NotificationRepository();
  const [notificationLoading, setNotificationLoading] = useState(false);
  const flatListRef = useRef(null);
  const [notifications, setNotifications] = useState<{
    notifications: NotificationType[];
    currentIndex: number;
  }>({
    notifications: [],
    currentIndex: 0,
  });
  const { _setCount, count } = useContext(NotificationCountContext);
  const [unReadCount, setUnReadCount] = useState(0);
  const [page, setPage] = useState(1);
  const getNotifiactionCount = async () => {
    try {
      const { data } = await notificationRepository.getNotificationCount();
      if (data && data > 0) {
        _setCount(data);
        setUnReadCount(data);
      }
    } catch (error) {
    }
  }
  const getNotifiaction = async (page: number, fethNext?: boolean) => {
    try {
      setNotificationLoading(true); 
      const { data } = await notificationRepository.getNotification({
        page,
        pageSize: 200,
      });
      if (fethNext) {
        const updatedNotificatins = [
          ...notifications.notifications,
          ...data[0].data,
        ];
        setNotifications({
          currentIndex: updatedNotificatins.length - 10,
          notifications: updatedNotificatins,
        });
      } else {
        setNotifications({
          currentIndex: 0,
          notifications: data[0].data,
        });
      }
      setNotificationLoading(false);
    } catch (error) {
      setNotificationLoading(false);
    }
  };
  const onDeleteItem = (key) => {

  };
  const markAsRead = async (id: string) => {
    const payload = { update: { isRead: true } };
    try {
      const updatedNotifications = notifications.notifications.map((item) => {
        if (id === item._id) {
          return {
            ...item,
            isRead: true,
          };
        }
        return item;
      });
      setNotifications((oldState) => ({
        ...oldState,
        notifications: updatedNotifications,
      }));
     await notificationRepository.markAsRead(id, payload);
      if (count && count > 0) {
        _setCount(count - 1);
      }
    } catch (error) {}
  };
  const scrollToIndex = (index) => {
    flatListRef.current.scrollToIndex({ animated: true, index });
  };
  const handleEndReached = () => {
    // if (!notificationLoading) {
    //   setPage((oldPage) => oldPage + 1);
    //   getNotifiaction(page + 1, true);
    // }
    getNotifiaction(1)
  };
  const htmlTextConvertPlainText = (data : string)=>{
    const item =  data.replace(/<\/?[^>]+>/ig, '');
      if(item.length > 100){
        return item.slice(0, 100) + '...'
      }else{
        return item 
      }
  }
  useEffect(() => {
    getNotifiaction(page);
    getNotifiactionCount();
  }, []);
  return {
    notificationLoading,
    notifications,
    unReadCount,
    onDeleteItem,
    markAsRead,
    handleEndReached,
    flatListRef,
    htmlTextConvertPlainText
  };
};
