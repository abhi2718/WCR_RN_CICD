import React, {
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { LikeRepository } from '../../repository/like.repo';
import {
  LikeContextInItState,
  LikeContextProviderProps,
} from '../../types/context.type/like.type';

export const LikeContext = createContext<LikeContextInItState>({
  loading: false,
  setLoading: () => {},
  fetchAll: async () => {},
  data: {
    allFavourite: [],
    likesReceived: [],
    liked: [],
    matchedUsersList: [],
  },
  setData: () => {},
});

export const LikeContextProvider = (props: LikeContextProviderProps) => {
  const likeRepository = useMemo(() => new LikeRepository(), []);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    allFavourite: [],
    likesReceived: [],
    liked: [],
    matchedUsersList: [],
  });
  const generateMatchedUsersList = (lists, userId: string) => {
    const matched = [];
    lists.forEach((list) => {
      const matchedUser = list.users.filter((user) => user._id !== userId);
      if (matchedUser.length > 0) {
        matchedUser[0].matchedDocId = list._id;
        matchedUser[0].isChat = list.isChat;
        matchedUser[0].isPause = list.isVisible;
        matchedUser[0].isDelete = list.isDeleted;
        matched.push(...matchedUser);
      }
    });
    return matched;
  };
  const fetchAll = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const data = await Promise.all([
        likeRepository.getAllFavourite(),
        likeRepository.getLikesReceived(),
        likeRepository.liked(),
        likeRepository.getAllMatched(),
      ]);
      setLoading(false);
      const favUserData = data[0].data.FavUserData;
      const likesReceived = data[1].data;
      const liked = data[2].data;
      const matchedUsersList = generateMatchedUsersList(data[3].data, id);
      setData({
        allFavourite: favUserData,
        likesReceived: likesReceived,
        liked,
        matchedUsersList,
      });
    } catch (error) {
      setLoading(false);
    }
  }, []);
  const value = {
    loading,
    setLoading,
    fetchAll,
    data,
    setData,
  };
  return (
    <LikeContext.Provider value={value}>{props.children}</LikeContext.Provider>
  );
};
