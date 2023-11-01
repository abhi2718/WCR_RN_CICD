import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../../screens/auth/signin';
import Profile from '../../screens/auth/signin/components/profile';
import EmailAuthByOtpScreeen from '../../screens/auth/signin/components/emailauth';
import {TabNavigator} from '../tab.navigator';
import {ROUTES} from '../';
import {MessageList} from '../../cometChat/src/CometChatConversationsWithMessages/CometChatConversationsWithMessages';

const Stack = createNativeStackNavigator();
export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.Tab}
        component={TabNavigator}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.SignIn}
        component={SignInScreen}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={ROUTES.EmailAuth}
        component={EmailAuthByOtpScreeen}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={ROUTES.Profile}
        component={Profile}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.CommunityChatMessage}
        component={MessageList}
      />
    </Stack.Navigator>
  );
};
