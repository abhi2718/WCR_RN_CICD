import { useContext, useEffect, useRef, useState } from 'react';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { dimensions, isAndroid } from '../../../../../components/tools';
import { HomeDeckRepository } from '../../../../../repository/homeDeck.repo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../../navigation';
import { LikeContext } from '../../../../../contexts/likes.context';
import {useViewModal as notificationuseViewModal } from "../../../notification.screen/useViewModal";
import { NotificationCountContext } from '../../../../../contexts/notificationCount.context';
import { RouteType } from '../../../../../types/navigation.type';
export const useViewModal = (route: RouteType) => {
  const [profiles, setProfiles] = useState([]);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const homeDeckRepository = new HomeDeckRepository();
  const tabBarHeight = useBottomTabBarHeight();
  const androidActualHeight = useRef(dimensions.height - tabBarHeight).current;
  const { top, bottom } = useSafeAreaInsets();
  const cardRef = useRef();
  const { user } = useSelector(({ userState }) => userState);
  const { fetchAll } = useContext(LikeContext);
  const {_setCount,count} = useContext(NotificationCountContext);
  const { navigate } = useNavigation();
  const { unReadCount } = notificationuseViewModal();
  const iOSActualHeight = useRef(
    dimensions.height - (top + tabBarHeight),
  ).current;
  useEffect(() => {
    _setCount(unReadCount);
  },[unReadCount])
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
  const handleSetProfiles = (item:any) => setProfiles([item, ...profiles]);
  const clearProfile = () => setProfiles([]);
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
      await homeDeckRepository.userReactin(payLoad);
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
  return {
    isLoading,
    profiles,
    iOSActualHeight,
    androidActualHeight,
    handleLike,
    handleDisLike,
    cardRef,
    toggleSearchModal,
    showSearchModal,
    handleCloseModal,
    handleSetProfiles,
    goToNotification,
    count,
    user,
    clearProfile
  };
};
