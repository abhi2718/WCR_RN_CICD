import {
  createContext,
  useMemo,
  useState,
} from 'react';
import { LikeRepository } from '../../repository/like.repo';
import { FriendContextProviderProps, FriendContextType } from '../../types/context.type/friends.type';
import { Conversation } from '../../types/screen.type/like.type';
import { config } from '../../utils/config';

export const FriendContext = createContext<FriendContextType>({
  friends: [],
  fetchPrivateFriends: async () => { },
  loading: false,
  numberOfGroups:0
});

export const FriendContextProvider = (props:FriendContextProviderProps) => {
  const likeRepository = useMemo(() => new LikeRepository(), []);
  const [loading, setLoading] = useState(false);
  const [friends, setFriends] = useState <Conversation[]>([]);
  const [numberOfGroups, setNumberOfGroups] = useState(0);
  const fetchPrivateFriends = async () => {
    try {
      setLoading(true);
      const data = await Promise.all([likeRepository.getFriends(config.COMETCHAT_USERID),
      likeRepository.getFriends(config.COMETCHAT_USERID,"group")])
      const _myFriends = data[0].data.map((friend:Conversation) => friend.conversationWith);
      setNumberOfGroups(data[1].data.length)
      setFriends(_myFriends);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const value = {
    friends,
    fetchPrivateFriends,
    loading,
    setLoading,
    numberOfGroups
  };

  return (
    <FriendContext.Provider value={value}>
      {props.children}
    </FriendContext.Provider>
  );
};
