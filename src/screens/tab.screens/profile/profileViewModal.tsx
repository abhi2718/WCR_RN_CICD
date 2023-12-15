import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { ROUTES } from '../../../navigation';
import { useLogOutViewModal } from '../../../utils/logOut';

export const useViewModal = () => {
  const { logOut } = useLogOutViewModal();
  const { user } = useSelector(({ userState }) => userState);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [showLogOutModal, setLogOutModal] = useState(false);
  const goToPreview = () => navigation.navigate(ROUTES.Preview);
  const goToSetting = () => navigation.navigate(ROUTES.SettingScreen);
  const goToPreferences = () => navigation.navigate(ROUTES.Preferences);
  const goToEditProfile = () => navigation.navigate(ROUTES.EditProfile);
  const _logOut = () => {
    setLogOutModal(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      logOut();
    },2000)
  };
  return {
    user,
    goToPreview,
    goToSetting,
    goToPreferences,
    _logOut,
    goToEditProfile,
    showLogOutModal,
    setLogOutModal,
    loading
  };
};
