import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../../screens/auth/signin';
import Profile from '../../screens/auth/components/profile';
import EmailAuthByOtpScreeen from '../../screens/auth/components/emailauth';
import { TabNavigator } from '../tab.navigator';
import { ROUTES } from '../';
import CommunityChatMessageList from '../../screens/tab.screens/chat/community/components/messageList';

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
        name={ROUTES.CommunityChatMessageList}
        component={CommunityChatMessageList}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.SignIn}
        component={SignInScreen}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={ROUTES.Emailauth}
        component={EmailAuthByOtpScreeen}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={ROUTES.Profile}
        component={Profile}
      />
    </Stack.Navigator>
  );
};
