import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import Share from 'react-native-share';
import { useSelector } from 'react-redux';
import { LikeContext } from '../../../../../../../contexts/likes.context';
import { ROUTES } from '../../../../../../../navigation';
import { HomeDeckRepository } from '../../../../../../../repository/homeDeck.repo';
import { Profile } from '../../../../../../../types/screen.type/home.type';

export const useViewModal = (item:Profile, cardRef: any) => {
  const homeDeckRepository = new HomeDeckRepository();
  const { user } = useSelector(({ userState }) => userState);
  const { fetchAll } = useContext(LikeContext);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  const {
    profilePicture,
    first,
    genderPronoun,
    designation,
    state,
    dob,
    gender,
    drinking,
    ethnicity,
    height: userHeight,
    maritalStatus,
    bio,
  } = item;
  const handleShare = () => {
    try {
      const shareOptions = {
        message: `Hey! I came across this profile on the White Coat Romance dating app and thought it would be perfect for you. `,
        url: 'https://staging.whitecoatromance.com/assets/images/e-wcr.png',
      };
      Share.open(shareOptions);
    } catch (error) {}
  };
  const _handleLike = () => {
    if (cardRef) {
      cardRef?.current.swipeRight();
    }
  };
  const _handleDisLike = () => {
    if (cardRef) {
      cardRef?.current.swipeLeft();
    }
  };
  const addFavourite = async () => {
    const payLoad = {
      favouriteData: {
        userId: user._id,
        favourite: item._id,
      },
    };
    try {
      cardRef?.current.swipeBottom();
      await homeDeckRepository.addFavourite(payLoad);
      fetchAll(user._id);
    } catch (error) {}
  };
  const handleBlockUser = async () => {
    setShowModal(false);
    try {
      const payLoad = {
        document: {
          blockedIds: [item._id.toString()],
        },
      };
      if (cardRef) {
        cardRef?.current.swipeLeft();
        await homeDeckRepository.blockUser(payLoad);
      }
    } catch (error) {}
  };
  const handleReport = () => {
    setShowModal(false);
    navigation.navigate(ROUTES.Report, { userId: item._id, name: first });
  };
  return {
    handleShare,
    profilePicture,
    first,
    genderPronoun,
    designation,
    state,
    _handleLike,
    _handleDisLike,
    addFavourite,
    handleBlockUser,
    dob,
    gender,
    drinking,
    ethnicity,
    userHeight,
    maritalStatus,
    bio,
    showModal,
    setShowModal,
    handleReport,
  };
};
