import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './stack.navigator';
import { useCometChatInit } from '../services/cometChat.service';

export enum ROUTES {
  SPLASH = '/splash',
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
  Location = '/location',
  Profession = '/profession',
  DeckTab = '/deck-tab',
  CommunityChatTab = '/community-chat-tab',
  PrivateChatTab = '/private-chat-tab',
  ProfileTab = '/profile-tab',
  LikeTabs = '/like-tabs',
  CommunityPrivateChat = '/community-private-chat',
  ProfilePic = '/profile-pic',
  UploadedPic = '/uploaded-pic',
  AddEthnicity = '/addEthnicity',
  LookingFor = '/looking-for',
  CommunityChatMessage = '/community-chat-message',
  MaritalStatus = '/maritalStatus',
  Kids = '/kids',
  Habits = '/habits',
  About = '/about',
  Hobbies = '/hobbies',
  Preview = '/preview',
  Height = '/height',
  Notification = '/notification',
  VerificationStepOne = '/verificationStepOne',
  VerificationStepTwo = '/verificationStepTwo',
  SettingScreen = '/settings',
  AccountSetting = '/accountSetting',
  NotificationSetting = '/notificationSetting',
  BlockAndUnBlock = '/blockAndUnBlock',
  ContactUs = '/contact-us',
  Preferences = '/preferences',
  EditProfile = '/editProfile',
  VerificationPending = '/verificationPending',
  TurnOnNotification = '/turnOnNotification',
}
export default function Navigator() {
  useCometChatInit();
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
