import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { dimensions } from '../../../../../components/tools';
import { HomeDeckRepository } from '../../../../../repository/homeDeck.repo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../../navigation';
import { LikeContext } from '../../../../../contexts/likes.context';
import { useViewModal as notificationuseViewModal } from '../../../notification.screen/useViewModal';
import { NotificationCountContext } from '../../../../../contexts/notificationCount.context';
import { RouteType } from '../../../../../types/navigation.type';
import { useCometChatInit } from '../../../../../services/cometChat.service';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { addUser } from '../../../../../store/reducers/user.reducer';
import { NotificationRepository } from '../../../../../repository/notification.repo';
import { createNotifications } from '../../../../../utils/common.functions';
import { CometChat } from '../../../../../cometchat/sdk/CometChat';
import { ShowFlashMessage } from '../../../../../components/flashBar';
import { Profile } from '../../../../../types/screen.type/home.type';

export const useViewModal = (route: RouteType) => {
  const [profiles, setProfiles] = useState<Profile[] | []>([]);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const homeDeckRepository = new HomeDeckRepository();
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const notificationRepository = new NotificationRepository();
  const tabBarHeight = useBottomTabBarHeight();
  const androidActualHeight = useRef(dimensions.height - tabBarHeight).current;
  const { top } = useSafeAreaInsets();
  const cardRef = useRef();
  const { user } = useSelector(({ userState }) => userState);
  const dispatch = useDispatch();
  const token = useRef(user?.token ? user?.token : null).current;
  const { fetchAll } = useContext(LikeContext);
  const { count } = useContext(NotificationCountContext);
  const { navigate } = useNavigation();
  notificationuseViewModal();
  useCometChatInit();
  const [lastDisLikeProfile, setLastDisLikeProfile] = useState<any>(null);
  const [isMatch, setIsMatch] = useState({
    status: false,
    matchUser: null,
  });
  const iOSActualHeight = useRef(
    dimensions.height - (top + tabBarHeight),
  ).current;
  const fetchProfiles = async (path: number) => {
    setLoading(true);
    try {
      const data = await homeDeckRepository.getProfiles();
      if (path) {
        const _lastDisLikeProfile = lastDisLikeProfile;
        const remaningProfileToShow = data.filter(
          (profile: Profile) => profile._id !== _lastDisLikeProfile._id,
        );
        setProfiles([_lastDisLikeProfile, ...remaningProfileToShow]);
        setLastDisLikeProfile(null);
      } else {
        setProfiles(data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProfiles(0);
  }, [route?.params]);
  async function checkApplicationPermission() {
    const authorizationStatus = await messaging().requestPermission();
    if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      //'User has notification permissions enabled.'
    } else if (
      authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
    ) {
      //'User has provisional notification permissions.'
    } else {
      // 'User has notification permissions disabled'
    }
  }
  useEffect(() => {
    checkApplicationPermission();
  }, []);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    });
    return unsubscribe;
  }, []);
  const fetchToken = useCallback(async () => {
    const token = await messaging().getToken();
    await CometChat.registerTokenForPushNotification(token);
    updateUserDetails({ deviceToken: token });
  }, []);
  useEffect(() => {
    fetchToken();
  }, []);
  const handleSetProfiles = (profile: Profile) => {
    setProfiles([profile, ...profiles])
  };
  const clearProfile = () => setProfiles([]);
  const updateIsNewUser = async () => {
    updateUserDetails();
  };
  const goToNotification = () => navigate(ROUTES.Notification);
  const createPayLoafForUserAction = (index: number, action: string) => {
    const suggestedUser = profiles[index];
    return {
      actionData: {
        userId: user._id,
        actedOn: suggestedUser._id,
        action,
        isMatched: false,
      },
    };
  };
  const handleLike = async (index: number) => {
    try {
      if (!user?.homeInfoModal) {
        updateIsNewUser();
        return;
      }
      const payLoad = createPayLoafForUserAction(index, 'Like');
      const { data } = await homeDeckRepository.userReactin(payLoad);
      fetchAll(user._id);
      if (data?.isMatch) {
        setIsMatch({
          status: true,
          matchUser: profiles[index],
        });
        await notificationRepository.createNotification(
          createNotifications('match', profiles[index]._id, user.fullName),
        );
      } else {
        await notificationRepository.createNotification(
          createNotifications('like', profiles[index]._id, user.fullName),
        );
      }
    } catch (error) {}
  };
  const handleUnDoFeature = async () => {
    if (lastDisLikeProfile?._id) {
      setLoading(true);
      await homeDeckRepository.deleteDisLike(lastDisLikeProfile._id);
      fetchProfiles(1);
    } else {
      ShowFlashMessage('No left swipe action to revert.', '', 'warning');
    }
  };
  const handleDisLike = async (index: number) => {
    try {
      if (!user?.homeInfoModal) {
        updateIsNewUser();
        return;
      }
      const disLikeProfile = profiles[index];
      setLastDisLikeProfile(disLikeProfile);
      const payLoad = createPayLoafForUserAction(index, 'Dislike');
      await homeDeckRepository.userReactin(payLoad);
    } catch (error) {}
  };
  const toggleSearchModal = () => setShowSearchModal((preValue) => !preValue);
  const handleCloseModal = () => {
    toggleSearchModal();
  };
  const updateUserDetails = async (newUpdate?: any) => {
    try {
      const update = newUpdate
        ? newUpdate
        : {
            homeInfoModal: true,
          };
      const userData = await updateUserDetailsRepository.updateUserDetails(
        user._id,
        {
          update: update,
        },
      );
      const data = token
        ? {
            user: {
              ...userData,
              token,
            },
          }
        : {
            user: userData,
          };
      dispatch(addUser(data));
    } catch (err: any) {}
  };
  const handleHideOfIsMatchScreen = () => {
    setIsMatch({
      status: false,
      matchUser: null,
    });
  };
  const navigation = useNavigation();
  const startChat = () => {
    if (isMatch?.matchUser) {
      navigation.navigate(ROUTES.CommunityPrivateChat, {
        senderId: isMatch?.matchUser?._id,
        name: isMatch?.matchUser?.profile?.name?.first,
      });
    }
  };
  return {
    isLoading,
    profiles,
    iOSActualHeight,
    androidActualHeight,
    handleLike,
    handleDisLike,
    cardRef,
    updateIsNewUser,
    toggleSearchModal,
    showSearchModal,
    handleCloseModal,
    handleSetProfiles,
    goToNotification,
    count,
    user,
    clearProfile,
    isMatch,
    handleHideOfIsMatchScreen,
    startChat,
    handleUnDoFeature,
  };
};
