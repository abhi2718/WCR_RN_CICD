import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../../screens/auth/signin';
import Profile from '../../screens/auth/signin/components/profile';
import EmailAuthByOtpScreeen from '../../screens/auth/signin/components/emailauth';
import { TabNavigator } from '../tab.navigator';
import { ROUTES } from '../';
import CommunityChatMessageList from '../../screens/tab.screens/chat/community/components/messageList';
import Gender from './../../screens/auth/preRegisterFlow';
import GenderProunoun from '../../screens/auth/preRegisterFlow/components/genderPronoun';
import SexualOrientation from '../../screens/auth/preRegisterFlow/components/sexualOrientation';

const Stack = createNativeStackNavigator();
export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: true }}
        name={ROUTES.SignIn}
        component={SignInScreen}
      />

      <Stack.Screen
        options={{ headerShown: true }}
        name={ROUTES.GenderPronoun}
        component={GenderProunoun}
      />

      <Stack.Screen
        options={{ headerShown: true }}
        name={ROUTES.SexualOrientation}
        component={SexualOrientation}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name={ROUTES.Gender}
        component={Gender}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name={ROUTES.EmailAuth}
        component={EmailAuthByOtpScreeen}
      />

      <Stack.Screen
        options={{ headerShown: true }}
        name={ROUTES.Profile}
        component={Profile}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.Tab}
        component={TabNavigator}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.CommunityChatMessageList}
        component={CommunityChatMessageList}
      />
    </Stack.Navigator>
  );
};
