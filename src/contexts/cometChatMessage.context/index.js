import { CometChat } from '@cometchat/chat-sdk-react-native';
import {createContext, useRef, useState} from 'react';

export const MessageContext = createContext(null);

export const MessageContextProvider = (props) => {
  const {children} = props;
  const selectedConversation = useRef(null);
  const selectedUser = useRef();
  const selectedGroup = useRef();
  const _messagesConfig = useRef();
  const value = {
    selectedConversation,
    selectedUser,
    selectedGroup,
    _messagesConfig,
  };
  return (
    <MessageContext.Provider value={value}>
      {children}
    </MessageContext.Provider>
  );
};
