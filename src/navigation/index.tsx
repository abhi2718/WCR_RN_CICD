import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './stack.navigator';
import {useCometChatInit} from '../services/cometChat.service';

export enum ROUTES {
  SignIn = 'SignIn',
  Profile = '/profile',
  Gender = '/gender',
  GenderPronoun = '/genderPronoun',
  SexualOrientation = '/sexualOrientation',
  SignUp = 'SignUp',
  EmailAuth = '/email-auth',
  Tab = '/tabs',
  Onboarding = '/onboarding',
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
