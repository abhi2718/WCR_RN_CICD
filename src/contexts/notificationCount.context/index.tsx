import { createContext, useState } from 'react';

export const NotificationCountContext =
  createContext<NotificationCountContextType>({
    _setCount: (countNumber: number) => {},
    count: 0,
  });
type NotificationCountContextType = {
  _setCount: (countNumber: number) => void;
  count: number;
};
export const NotificationCountContextProvider = (props) => {
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
