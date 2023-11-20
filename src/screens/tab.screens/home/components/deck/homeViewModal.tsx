import { useEffect, useRef, useState } from 'react';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { dimensions, isAndroid } from '../../../../../components/tools';
import { HomeDeckRepository } from '../../../../../repository/homeDeck.repo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

export const useViewModal = () => {
  const [profiles, setProfiles] = useState([]);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const homeDeckRepository = new HomeDeckRepository();
  const tabBarHeight = useBottomTabBarHeight();
  const androidActualHeight = useRef(dimensions.height - tabBarHeight).current;
  const { top, bottom } = useSafeAreaInsets();
  const cardRef = useRef();
  const { user } = useSelector(({ userState }) => userState);
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
  }, []);
  const handleSetProfiles = item => setProfiles([item,...profiles])
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
      //const data = await homeDeckRepository.userReactin(payLoad);
    } catch (error) {}
  };
  const handleDisLike = async (index: number) => {
    try {
      const payLoad = createPayLoafForUserAction(index, 'Dislike');
      // const data = await homeDeckRepository.userReactin(payLoad);
    } catch (error) {}
  };
  const toggleSearchModal = () => setShowSearchModal((preValue) => !preValue);
  const handleCloseModal = () => {
    toggleSearchModal();
  }
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
    handleSetProfiles
  };
};
