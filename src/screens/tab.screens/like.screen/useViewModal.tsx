import { useNavigation } from '@react-navigation/native';
import  {
  useContext,
  useEffect,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import { LikeContext } from '../../../contexts/likes.context';
import { NotificationCountContext } from '../../../contexts/notificationCount.context';
import { ROUTES } from '../../../navigation';
import { HomeDeckRepository } from '../../../repository/homeDeck.repo';
import { LikeRepository } from '../../../repository/like.repo';

export const useViewModal = () => {
  const { loading, data, setData, fetchAll } = useContext(LikeContext);
  const { user } = useSelector(({ userState }) => userState);
  const { count } = useContext(NotificationCountContext);
  const isNoEvent = data?.allFavourite?.length + data?.liked?.length + data?.likesReceived?.length + data?.matchedUsersList?.length;
  const likeRepository = new LikeRepository();
  const navigation = useNavigation();
  const homeDeckRepository = new HomeDeckRepository();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [seeAllState, setSeeAllState] = useState<{
    title: string;
    state: number;
  }>({ title: '', state: 0 });
  const createPayLoafForUserAction = (id: string, action: string) => {
    return {
      actionData: {
        userId: user._id,
        actedOn: id,
        action,
        isMatched: false,
      },
    };
  };
  const deleteFavourite = async (id: string) => {
    try {
      const allFilterFavourites = data.allFavourite.filter(
        ({ favourite }) => favourite._id !== id,
      );
      setData({
        ...data,
        allFavourite: allFilterFavourites,
      });
      await likeRepository.deleteFavourite(id);
    } catch (error) {}
  };
  const handleDisLike = async (id: string) => {
    try {
      const payLoad = createPayLoafForUserAction(id, 'Dislike');
      await homeDeckRepository.userReactin(payLoad);
    } catch (error) {}
  };
  const deleteLiked = async (id: string) => {
    try {
      const filterLiked = data.liked.filter(
        ({ actedOn }) => actedOn._id !== id,
      );
      setData({
        ...data,
        liked: filterLiked,
      });
      await likeRepository.deleteLiked(id);
      handleDisLike(id);
    } catch (error) {}
  };
  const toggleModal = (state?: boolean) => {
    setModalVisible((oldValue) => (state ? state : !oldValue));
  };
  const handleSetSeeAllState = (state: number) => {
    toggleModal();
    switch (state) {
      case 0:
        return setSeeAllState({
          title: 'Likes Received',
          state: 0,
        });
      case 1:
        return setSeeAllState({ title: 'Liked', state: 1 });
      case 2:
        return setSeeAllState({ title: 'Saved', state: 2 });
      case 3:
        return setSeeAllState({ title: 'Match', state: 3 });
    }
  };
  const startChat = (user: { senderId: string; name: string }) => {
    navigation.navigate(ROUTES.CommunityPrivateChat, {
      senderId: user.senderId,
      name: user.name,
    });
  };
  const goToNotification = () => {
    navigation.navigate(ROUTES.Notification)
  }
  useEffect(() => {
    fetchAll(user._id);
  }, []);
  return {
    loading,
    data,
    deleteFavourite,
    deleteLiked,
    toggleModal,
    modalVisible,
    handleSetSeeAllState,
    seeAllState,
    startChat,
    count,
    goToNotification,
    isNoEvent
  };
};
