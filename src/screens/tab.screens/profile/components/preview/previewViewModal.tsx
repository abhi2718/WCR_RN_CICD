import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export const useViewModal = () => {
  const { user } = useSelector(({ userState }) => userState);
  const navigation = useNavigation();
  return {
    user,
  };
};
