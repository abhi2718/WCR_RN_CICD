import { useState } from 'react';
import {CometChat} from '@cometchat/chat-sdk-react-native';
export const useViewModal = () => {
  const [state, setState] = useState(0);
  // let usersRequestBuilder = new CometChat.UsersRequestBuilder()
  // .setLimit(20)
  // .friendsOnly(!true);
  return {
    state,
    setState
  };
};