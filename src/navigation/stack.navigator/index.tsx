import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../../screens/auth/signin';
import Profile from '../../screens/auth/signin/components/profile';
import EmailAuthByOtpScreeen from '../../screens/auth/signin/components/emailauth';
import { TabNavigator } from '../tab.navigator';
import { ROUTES } from '../';
import CommunityChatMessageList from '../../screens/tab.screens/chat/community/components/messageList';
import Onboarding from '../../screens/onBoarding';
import Gender from './../../screens/auth/preRegisterFlow';
import GenderProunoun from '../../screens/auth/preRegisterFlow/components/genderPronoun';
import SexualOrientation from '../../screens/auth/preRegisterFlow/components/sexualOrientation';
import Location from '../../screens/auth/preRegisterFlow/components/location';
import Profession from '../../screens/auth/preRegisterFlow/components/profession';

const Stack = createNativeStackNavigator();
export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.Onboarding}
        component={Onboarding}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.Profession}
        component={Profession}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.Location}
        component={Location}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.SignIn}
        component={SignInScreen}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.GenderPronoun}
        component={GenderProunoun}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.SexualOrientation}
        component={SexualOrientation}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.Gender}
        component={Gender}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.EmailAuth}
        component={EmailAuthByOtpScreeen}
      />

      <Stack.Screen
        options={{ headerShown: false }}
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
