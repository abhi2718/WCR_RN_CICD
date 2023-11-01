import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../../screens/auth/signin';
import Profile from '../../screens/auth/signin/components/profile';
import EmailAuthByOtpScreeen from '../../screens/auth/signin/components/emailauth';
import {TabNavigator} from '../tab.navigator';
import {ROUTES} from '../';
import {MessageList} from '../../cometChat/src/CometChatConversationsWithMessages/CometChatConversationsWithMessages';
import Onboarding from '../../screens/onBoarding';

const Stack = createNativeStackNavigator();
const optins = { headerShown: false };
export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={optins}
        name={ROUTES.SignIn}
        component={SignInScreen}
      />
      <Stack.Screen
        options={optins}
        name={ROUTES.Onboarding}
        component={Onboarding}
      />
      <Stack.Screen
        options={optins}
        name={ROUTES.Tab}
        component={TabNavigator}
      />
      <Stack.Screen
        options={optins}
        name={ROUTES.EmailAuth}
        component={EmailAuthByOtpScreeen}
      />
      <Stack.Screen
        options={optins}
        name={ROUTES.Profile}
        component={Profile}
      />
      <Stack.Screen
        options={optins}
        name={ROUTES.CommunityChatMessage}
        component={MessageList}
      />
    </Stack.Navigator>
  );
};
