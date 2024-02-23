import { useNavigation } from '@react-navigation/native';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Share from 'react-native-share';
import { useSelector } from 'react-redux';
import { LikeContext } from '../../contexts/likes.context';
import { ROUTES } from '../../navigation';
import { HomeDeckRepository } from '../../repository/homeDeck.repo';
import { NotificationRepository } from '../../repository/notification.repo';
import { UserProfileRepository } from '../../repository/userProfile.repo';
import { profileProps, UserProfile } from '../../types/components/profile.type';
import { createNotifications } from '../../utils/common.functions';
import { LikeRepository } from '../../repository/like.repo';
export const useViewModal = (props: profileProps) => {
  const userProfileRepository = useMemo(() => new UserProfileRepository(), []);
  const homeDeckRepository = new HomeDeckRepository();
  const likeRepository = new LikeRepository();
  const notificationRepository = new NotificationRepository();
  const { fetchAll } = useContext(LikeContext);
  const [loading, setLoading] = useState(false);
  const { user: me } = useSelector(({ userState }) => userState);
  const [user, setUser] = useState<null | UserProfile>(null);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [isMatch, setIsMatch] = useState<{
    status: boolean;
    matchUser: null | UserProfile;
  }>({
    status: false,
    matchUser: null,
  });
  const {
    showModal,
    toggleModal,
    userId,
    showLike,
    showDisLike,
    showSave,
    showBlock,
    isMatched,
    showOnlyProfileView,
  } = props;
  const handleShare = () => {
    try {
      const shareOptions = {
        message: `Hey! I came across this profile on the White Coat Romance dating app and thought it would be perfect for you `,
        url: 'https://staging.whitecoatromance.com/assets/images/e-wcr.png',
      };
      Share.open(shareOptions);
    } catch (error) {}
  };
  const fetchUser = async () => {
    try {
      setLoading(true);
      const { user } = await userProfileRepository.getUser(userId);
      setUser(user);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const unmatchUser = async () => {
    await likeRepository.removefromMatched(props?.matchedDocId!);
    toggleModal();
  };
  useEffect(() => {
    if (showModal) {
      fetchUser();
    }
  }, [showModal]);
  const createPayLoafForUserAction = (action: string) => {
    return {
      actionData: {
        userId: me._id,
        actedOn: user?._id,
        action,
        isMatched: false,
      },
    };
  };
  const handleLike = async () => {
    try {
      setLoading(true);
      const payLoad = createPayLoafForUserAction('Like');
      const { data } = await homeDeckRepository.userReactin(payLoad);
      setLoading(false);
      if (data?.isMatched) {
        setIsMatch({
          status: true,
          matchUser: user,
        });
        await notificationRepository.createNotification(
          createNotifications('match', user?._id!, me.fullName),
        );
      } else {
        toggleModal();
        fetchAll(me._id);
        await notificationRepository.createNotification(
          createNotifications('like', user?._id!, me.fullName),
        );
      }
    } catch (error) {
      setLoading(false);
    }
  };
  const handleDisLike = async () => {
    try {
      setLoading(true);
      if (isMatched) {
        await unmatchUser();
        fetchAll(me._id);
        setLoading(false);
        return;
      }
      const payLoad = createPayLoafForUserAction('Dislike');
      await homeDeckRepository.userReactin(payLoad);
      setLoading(false);
      toggleModal();
      fetchAll(me._id);
    } catch (error) {
      setLoading(false);
    }
  };
  const addFavourite = async () => {
    try {
      const payLoad = {
        favouriteData: {
          userId: me._id,
          favourite: user?._id,
        },
      };
      setLoading(true);
      await homeDeckRepository.addFavourite(payLoad);
      setLoading(false);
      toggleModal();
      fetchAll(me._id);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handleBlockUser = async () => {
    try {
      const payLoad = {
        document: {
          blockedIds: [user?._id.toString()],
        },
      };
      setLoading(true);
      let data = await homeDeckRepository.blockUser(payLoad);
      setLoading(false);
      toggleModal();
    } catch (error) {
      setLoading(false)
    }
  };
  const handleHideOfIsMatchScreen = () => {
    setIsMatch({
      status: false,
      matchUser: null,
    });
    toggleModal();
    fetchAll(me._id);
  };
  const navigation = useNavigation();
  const startChat = () => {
    handleHideOfIsMatchScreen();
    navigation.navigate(ROUTES.CommunityPrivateChat, {
      senderId: isMatch?.matchUser?._id,
      name: isMatch?.matchUser?.first,
    });
  };
  const _startChat = (senderId: string, name: string) => {
    toggleModal();
    navigation.navigate(ROUTES.CommunityPrivateChat, {
      senderId,
      name,
    });
  };
  const handleReport = useCallback(() => {
    toggleModal();
    navigation.navigate(ROUTES.Report, {
      userId: user?._id,
      name: user?.first,
    });
  }, [user]);
  return {
    showModal,
    toggleModal,
    loading,
    user,
    handleShare,
    handleBlockUser,
    addFavourite,
    handleLike,
    handleDisLike,
    showLike,
    showDisLike,
    showSave,
    showBlock,
    isMatch,
    startChat,
    handleHideOfIsMatchScreen,
    handleReport,
    showBlockModal,
    setShowBlockModal,
    isMatched,
    _startChat,
    showOnlyProfileView,
  };
};
