import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CommunityChat from '../../screens/tab.screens/chat/community';
import HomeTab from '../../screens/tab.screens/home';
import { ROUTES } from '../';
import React from 'react';
import SolidDeckImage, { VectorDeckImage } from './components/deck';
import SolidLikesImage, { VectorLikesImage } from './components/likes';
import SolidCommunityImage, {
  VectorCommunityImage,
} from './components/community';
import SolidPrivateChatImage, {
  VectorPrivateChatImage,
} from './components/private';
import SolidProfileImageImage from './components/profile';
import { PrivateChatScreen } from '../../screens/tab.screens/chat/private';
import { LikeScreen } from '../../screens/tab.screens/like.screen';
import { ProfileScreen } from '../../screens/tab.screens/profile';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarShowLabel: false,
  tabBarIcon: ({ focused }) => {
    switch (route.name) {
      case ROUTES.DeckTab:
        return focused ? <SolidDeckImage /> : <VectorDeckImage />;
      case ROUTES.LikeTabs:
        return focused ? <SolidLikesImage /> : <VectorLikesImage />;
      case ROUTES.CommunityChatTab:
        return focused ? <SolidCommunityImage /> : <VectorCommunityImage />;
      case ROUTES.PrivateChatTab:
        return focused ? <SolidPrivateChatImage /> : <VectorPrivateChatImage />;
      case ROUTES.ProfileTab:
        return focused ? (
          <SolidProfileImageImage />
        ) : (
          <SolidProfileImageImage />
        );
    }
  },
});

const options = { headerShown: false };
export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen options={options} name={ROUTES.DeckTab} component={HomeTab} />
      <Tab.Screen
        options={options}
        name={ROUTES.LikeTabs}
        component={LikeScreen}
      />
      <Tab.Screen
        options={options}
        name={ROUTES.CommunityChatTab}
        component={CommunityChat}
      />
      <Tab.Screen
        options={options}
        name={ROUTES.PrivateChatTab}
        component={PrivateChatScreen}
      />
      <Tab.Screen
        options={options}
        name={ROUTES.ProfileTab}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
