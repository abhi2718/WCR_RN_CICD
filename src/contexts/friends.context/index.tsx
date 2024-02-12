import React, {
  createContext,
  useMemo,
  useState,
} from 'react';
import { LikeRepository } from '../../repository/like.repo';
import { FriendContextProviderProps, FriendContextType } from '../../types/context.type/friends.type';
import { Conversation } from '../../types/screen.type/like.type';

export const FriendContext = createContext<FriendContextType>({
  friends: [],
  fetchPrivateFriends: async () => { },
  loading: false,
  numberOfGroups: 0,
  numberOfFriends:0
});

export const FriendContextProvider = (props:FriendContextProviderProps) => {
  const likeRepository = useMemo(() => new LikeRepository(), []);
  const [loading, setLoading] = useState(false);
  const [friends, setFriends] = useState <Conversation[]>([]);
  const [numberOfGroups, setNumberOfGroups] = useState(0);
  const [numberOfFriends, setNumberOfFriends] = useState(0);
  const fetchPrivateFriends = async () => {
  };
  const value = {
    friends,
    fetchPrivateFriends,
    loading,
    setLoading,
    numberOfGroups,
    numberOfFriends,
    setNumberOfGroups,
    setNumberOfFriends,
  };

  return (
    <FriendContext.Provider value={value}>
      {props.children}
    </FriendContext.Provider>
  );
};
