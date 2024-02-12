import React, {createContext, useState} from 'react';
import {
  userListContextType,
  userListProviderProps,
} from '../../types/context.type/userList.type';
import {User} from '../../types/screen.type/home.type';

export const UserListContext = createContext<userListContextType>({
  userList: [],
  setUserList: () => {},
  loading: false,
  setLoading: () => {},
});

export const UserListProvider = (props: userListProviderProps) => {
  const {children} = props;
  const [userList, setUserList] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const value = {
    userList,
    setUserList,
    loading,
    setLoading,
  };
  return (
    <UserListContext.Provider value={value}>
      {children}
    </UserListContext.Provider>
  );
};
