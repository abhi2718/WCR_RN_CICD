import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ROUTES } from '../../navigation';
import { addUser } from '../../store/reducers/user.reducer';
import { getDataFromAsynStorage } from '../../utils/asyncStorage';

export const useViewModal = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const checkIsUserLoggedIn = async () => {
    const { data: user } = await getDataFromAsynStorage('profile');
    const { data: token } = await getDataFromAsynStorage('token');
    if (user && token) {
      const data = {
        user: {
          ...user,
          token,
        },
      };
      dispatch(addUser(data));
      return navigation.navigate(ROUTES.Tab);;
    }
    navigation.navigate(ROUTES.Onboarding);
  };
  useEffect(() => {
    checkIsUserLoggedIn();
  }, []);
  return {};
};
