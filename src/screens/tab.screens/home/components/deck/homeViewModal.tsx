import { useContext, useEffect, useRef, useState } from 'react';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { dimensions, isAndroid } from '../../../../../components/tools';
import { HomeDeckRepository } from '../../../../../repository/homeDeck.repo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../../navigation';
import { LikeContext } from '../../../../../contexts/likes.context';
import { useViewModal as notificationuseViewModal } from '../../../notification.screen/useViewModal';
import { NotificationCountContext } from '../../../../../contexts/notificationCount.context';
import { RouteType } from '../../../../../types/navigation.type';
import { useCometChatInit } from '../../../../../services/cometChat.service';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { addUser } from '../../../../../store/reducers/user.reducer';
export const useViewModal = (route: RouteType) => {
  const [profiles, setProfiles] = useState([]);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const homeDeckRepository = new HomeDeckRepository();
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const tabBarHeight = useBottomTabBarHeight();
  const androidActualHeight = useRef(dimensions.height - tabBarHeight).current;
  const { top, bottom } = useSafeAreaInsets();
  const cardRef = useRef();
  const infoScreenRef = useRef();
  const { user } = useSelector(({ userState }) => userState);
  const dispatch = useDispatch();
  const token = useRef(user?.token ? user?.token : null).current;
  const [isNewUser, setIsNewUser] = useState(user.homeInfoModal);
  const { fetchAll } = useContext(LikeContext);
  const { count } = useContext(NotificationCountContext);
  const { navigate } = useNavigation();
  notificationuseViewModal();
  useCometChatInit();
  const [isMatch, setIsMatch] = useState({
    status: !false,
    matchUser: null,
  });
  const iOSActualHeight = useRef(
    dimensions.height - (top + tabBarHeight),
  ).current;
  const fetchProfiles = async () => {
    setLoading(true);
    try {
      const data = await homeDeckRepository.getProfiles();
      setProfiles(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProfiles();
  }, [route?.params]);
  const handleSetProfiles = (item: any) => setProfiles([item, ...profiles]);
  const clearProfile = () => setProfiles([]);
  const updateIsNewUser = async () => {
    setIsNewUser(true);
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
      const payLoad = createPayLoafForUserAction(index, 'Like');
      const { data } = await homeDeckRepository.userReactin(payLoad);
      if (data?.isMatch) {
        setIsMatch({
          status: true,
          matchUser: profiles[index],
        });
      }
      fetchAll(user._id);
    } catch (error) {}
  };
  const handleDisLike = async (index: number) => {
    try {
      const payLoad = createPayLoafForUserAction(index, 'Dislike');
      await homeDeckRepository.userReactin(payLoad);
    } catch (error) {}
  };
  const toggleSearchModal = () => setShowSearchModal((preValue) => !preValue);
  const handleCloseModal = () => {
    toggleSearchModal();
  };

  const updateUserDetails = async () => {
    try {
      const update = {
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
    infoScreenRef,
    toggleSearchModal,
    showSearchModal,
    handleCloseModal,
    handleSetProfiles,
    goToNotification,
    count,
    user,
    isNewUser,
    setIsNewUser,
    clearProfile,
    isMatch,
    handleHideOfIsMatchScreen,
    startChat,
  };
};
