import { useContext } from 'react';
import Share from 'react-native-share';
import { useSelector } from 'react-redux';
import { LikeContext } from '../../../../../../../contexts/likes.context';
import { HomeDeckRepository } from '../../../../../../../repository/homeDeck.repo';
import { AppUrl } from '../../../../../../../utils/appUrl';

export const useViewModal = (item: any, cardRef: any) => {
  const homeDeckRepository = new HomeDeckRepository();
  const { user } = useSelector(({ userState }) => userState);
  const { fetchAll } = useContext(LikeContext);
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
  } = item;
  const handleShare = () => {
    try {
      const shareOptions = {
        message: `*White Coat Romance profile share*\n
        Hey! I came across this profile on the White Coat Romance dating app and thought it would be perfect for you.\n `,
        url: `${AppUrl.showProfileViewEndPoint}${item._id}`,
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
    } catch (error) {
    }
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
  };
};
