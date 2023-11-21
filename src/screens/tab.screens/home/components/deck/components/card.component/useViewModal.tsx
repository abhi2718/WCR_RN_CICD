import Share from 'react-native-share';
import { useSelector } from 'react-redux';
import { HomeDeckRepository } from '../../../../../../../repository/homeDeck.repo';
import { AppUrl } from '../../../../../../../utils/appUrl';

export const useViewModal = (item: any, cardRef: any) => {
  const homeDeckRepository = new HomeDeckRepository();
  const { user } = useSelector(({ userState }) => userState);
  const { profilePicture, first, genderPronoun, designation, state } = item;

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
  const createPayLoafForUserAction = (action: string) => {
    return {
      actionData: {
        userId: user._id,
        actedOn: item._id,
        action,
        isMatched: false,
      },
    };
  };
  const handleLike = async () => {
    try {
      const payLoad = createPayLoafForUserAction('Like');
      const data = await homeDeckRepository.userReactin(payLoad);
    } catch (error) {}
  };
  const handleDisLike = async () => {
    try {
      const payLoad = createPayLoafForUserAction('Dislike');
      const data = await homeDeckRepository.userReactin(payLoad);
    } catch (error) {}
  };
  const _handleLike = () => {
    if (cardRef) {
      cardRef?.current.swipeRight();
      handleLike();
    }
  };
  const _handleDisLike = () => {
    if (cardRef) {
      cardRef?.current.swipeLeft();
      handleDisLike();
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
      cardRef?.current.swipeRight();
      await homeDeckRepository.addFavourite(payLoad);
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
      console.log(error)
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
    handleBlockUser
  };
};
