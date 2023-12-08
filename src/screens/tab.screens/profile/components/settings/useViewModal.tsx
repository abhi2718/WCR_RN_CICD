import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ROUTES } from '../../../../../navigation';

export const useViewModal = () => {
  const { user } = useSelector(({ userState }) => userState);
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [link, setLink] = useState('');
  const handleToggleModal = () => setShowModal(oldValue => !oldValue);
  const goBack = () => navigation.goBack();
  const _accountSetting = () => {
      navigation.navigate(ROUTES.AccountSetting);
  };
  const _notificationsSetting = () => {
    navigation.navigate(ROUTES.NotificationSetting);
  };
  const _blocknblock = () => {
    navigation.navigate(ROUTES.BlockAndUnBlock);
  };
  const _inviteOthers = () => {
    console.log('_inviteOthers');
  };
  const _privacypolicy = () => {
    setLink("https://whitecoatromance.com/Privacy");
    setShowModal(true);
  }
  const _termsConditions = () => {
    setLink("https://whitecoatromance.com/Terms");
    setShowModal(true);
  };
  const _contactUs = () => {
    navigation.navigate(ROUTES.ContactUs);
  };
  const lists = [
    {
      id: '0',
      imagePath: require('../../../../../assets/images/settings/setting.png'),
      title: 'Account Setting',
      onPress: _accountSetting,
    },
    // {
    //   id: '1',
    //   imagePath: require('../../../../../assets/images/settings/notifications.png'),
    //   title: 'Notifications settings',
    //   onPress: _notificationsSetting,
    // },
    {
      id: '2',
      imagePath: require('../../../../../assets/images/settings/block.png'),
      title: 'Block & Unblock',
      onPress: _blocknblock,
    },
    {
      id: '3',
      imagePath: require('../../../../../assets/images/settings/inviteOthers.png'),
      title: 'Invite others',
      onPress: _inviteOthers,
    },
    {
      id: '4',
      imagePath: require('../../../../../assets/images/settings/privacy.png'),
      title: 'Privacy policy',
      onPress: _privacypolicy,
    },
    {
      id: '5',
      imagePath: require('../../../../../assets/images/settings/terms&Condation.png'),
      title: 'Terms & conditions',
      onPress: _termsConditions,
    },
    {
      id: '6',
      imagePath: require('../../../../../assets/images/settings/contactUS.jpg'),
      title: 'Contact us',
      onPress: _contactUs,
    },
  ];

  return {
    user,
    goBack,
    lists,
    handleToggleModal,
    showModal,
    link
  };
};