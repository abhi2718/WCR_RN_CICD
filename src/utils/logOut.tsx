import React from 'react';
import { clearAsynStorage } from './asyncStorage';
import { useDispatch } from 'react-redux';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { ROUTES } from '../navigation';
export const useLogOutViewModal = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const resetStack = (routename: string) => {
    try {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: routename }],
        }),
      );
    } catch (error) {
    }
  };
  const logOut = () => {
    resetStack(ROUTES.SignIn);
    clearAsynStorage();
    dispatch({ type: 'USER_LOGOUT' });
  };
  return {
    logOut,
    resetStack
  };
};
