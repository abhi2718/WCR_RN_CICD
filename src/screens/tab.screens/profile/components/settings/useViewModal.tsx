import { useNavigation } from '@react-navigation/native';
import Share from 'react-native-share';
import { useState } from 'react';
import { ROUTES } from '../../../../../navigation';

export const useViewModal = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [link, setLink] = useState('');
  const handleToggleModal = () => setShowModal((oldValue) => !oldValue);

  const handleShare = () => {
    try {
      const shareOptions = {
        message: `The White Coat Romance dating app and thought it would be perfect for you. `,
        url: 'https://staging.whitecoatromance.com/assets/images/e-wcr.png',
      };
      Share.open(shareOptions);
    } catch (error) {}
  };
  const _accountSetting = () => {
    navigation.navigate(ROUTES.AccountSetting);
  };
  const _blocknblock = () => {
    navigation.navigate(ROUTES.BlockAndUnBlock);
  };
  const _inviteOthers = () => {};
  const _privacypolicy = () => {
    setLink('https://www.whitecoatromance.com/Privacy');
    setShowModal(true);
  };
  const _termsConditions = () => {
    setLink('https://www.whitecoatromance.com/Terms');
    setShowModal(true);
  };
  const _contactUs = () => {
    navigation.navigate(ROUTES.ContactUs);
  };
  const _report = () => {
    navigation.navigate(ROUTES.Report);
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
      title: 'Invite Friends',
      onPress: handleShare,
    },
    {
      id: '4',
      imagePath: require('../../../../../assets/images/settings/privacy.png'),
      title: 'Privacy Policy',
      onPress: _privacypolicy,
    },
    {
      id: '5',
      imagePath: require('../../../../../assets/images/settings/terms&Condation.png'),
      title: 'Terms & Conditions',
      onPress: _termsConditions,
    },
    {
      id: '6',
      imagePath: require('../../../../../assets/images/settings/contactUS.jpg'),
      title: 'Contact Us',
      onPress: _contactUs,
    },
    // {
    //   id: '7',
    //   imagePath: require('../../../../../assets/images/settings/contactUS.jpg'),
    //   title: 'Report',
    //   onPress: _report,
    // },
  ];
  return {
    lists,
    handleToggleModal,
    showModal,
    link,
    handleShare,
  };
};
