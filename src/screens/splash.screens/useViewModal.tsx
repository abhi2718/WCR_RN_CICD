import { CommonActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ROUTES } from '../../navigation';
import { addUser } from '../../store/reducers/user.reducer';
import { getDataFromAsynStorage } from '../../utils/asyncStorage';
import {useNavigateToScreen } from '../../utils/common.functions';

export const useViewModal = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {navigateToScreen} = useNavigateToScreen()
  const checkIsUserLoggedIn = async () => {
    const { data: user } = await getDataFromAsynStorage('profile');
    const { data: token } = await getDataFromAsynStorage('token');
    console.log(user,token)
    if (user && token) {
      const data = {
        user: {
          ...user,
          token,
        },
      };
      dispatch(addUser(data));
      return navigateToScreen(data.user)
    }
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: ROUTES.Onboarding }],
      }),
    )
  };
  useEffect(() => {
    checkIsUserLoggedIn();
  }, []);
  return {};
};
