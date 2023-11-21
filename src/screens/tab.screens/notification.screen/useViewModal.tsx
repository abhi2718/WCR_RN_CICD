import React, { useEffect, useRef, useState } from 'react';
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
  const [unReadCount, setUnReadCount] = useState(0);
  const [page, setPage] = useState(1);

  const getNotifiaction = async (page: number, fethNext?: boolean) => {
    try {
      setNotificationLoading(true);
      const { data } = await notificationRepository.getNotification({
        page,
        pageSize: 40,
      });
      if (fethNext) {
        const updatedNotificatins = [
          //...notifications.notifications,
          ...data[0].data,
        ];
        setNotifications({
          currentIndex: updatedNotificatins.length - 10,
          notifications: updatedNotificatins,
        });
        //   setTimeout(() => {
        //     console.log(updatedNotificatins.length,updatedNotificatins.length - 10)
        //   scrollToIndex(updatedNotificatins.length - 5);
        // }, 1000);
      } else {
        setNotifications({
          currentIndex: 0,
          notifications: data[0].data,
        });
      }
      setUnReadCount(data[0].count[0].count);
      setNotificationLoading(false);
    } catch (error) {
      setNotificationLoading(false);
    }
  };
  const onDeleteItem = (key) => {
    console.log(`Deleting item with key ${key}`);
  };
  const markAsRead = async (id: string) => {
    const payload = { update: { isRead: true } };
    try {
      const updatedNotifications = notifications.notifications.map((item) => {
        if (id === item._id) {
          return {
            ...item,
            isRead: !true,
          };
        }
        return item;
      });
      setNotifications((oldState) => ({
        ...oldState,
        notifications: updatedNotifications,
      }));
      await notificationRepository.markAsRead(id, payload);
    } catch (error) {}
  };
  const scrollToIndex = (index) => {
    flatListRef.current.scrollToIndex({ animated: true, index });
  };
  const handleEndReached = () => {
    if (!notificationLoading) {
      setPage((oldPage) => oldPage + 1);
      getNotifiaction(page + 1, true);
    }
  };
  useEffect(() => {
    getNotifiaction(page);
  }, []);
  return {
    notificationLoading,
    notifications,
    unReadCount,
    onDeleteItem,
    markAsRead,
    handleEndReached,
    flatListRef,
  };
};
