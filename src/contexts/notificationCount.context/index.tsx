import React, { createContext, useState } from 'react';
import { NotificationCountContextProviderProps, NotificationCountContextType } from '../../types/context.type/notification.type';

export const NotificationCountContext =
  createContext<NotificationCountContextType>({
    _setCount: (countNumber: number) => {},
    count: 0,
  });

export const NotificationCountContextProvider = (props:NotificationCountContextProviderProps) => {
  const [count, setCount] = useState<number>(0);
  const _setCount = (countNumber: number) => setCount(countNumber);
  const value = {
    count,
    _setCount,
  };
  return (
    <NotificationCountContext.Provider value={value}>
      {props.children}
    </NotificationCountContext.Provider>
  );
};
