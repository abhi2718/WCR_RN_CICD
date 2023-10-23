import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './stack.navigator';
import {useCometChatInit} from '../services/cometChat.service';

export enum ROUTES {
  SignIn = 'SignIn',
  Profile = '/profile',
  Gender = '/gender',
  SignUp = 'SignUp',
  EmailAuth = '/email-auth',
  Tab = '/tabs',
  CommunityChat = '/community-chat',
  CommunityChatMessageList = '/community-chat-messagelist',
}
export default function Navigator() {
  useCometChatInit();
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
