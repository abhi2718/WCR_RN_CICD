import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './stack.navigator';
import {useCometChatInit} from '../services/cometChat.service';

export enum ROUTES {
  SignIn = 'SignIn',
  Profile = '/profile',
  SignUp = 'SignUp',
  EmailAuth = '/email-auth',
  Tab = '/tabs',
  Onboarding = '/onboarding',
  CommunityChat = '/community-chat',
  CommunityChatMessageList = '/community-chat-messagelist',
  DeckTab = '/deck-tab',
  CommunityChatTab = '/community-chat-tab',
  PrivateChatTab = '/private-chat-tab',
  ProfileTab = '/profile-tab',
  LikeTabs = '/like-tabs',
  CommunityChatMessage = '/community-chat-message'
}
export default function Navigator() {
  useCometChatInit();
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
