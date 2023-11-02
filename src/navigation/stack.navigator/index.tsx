import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../../screens/auth/signin';
import Profile from '../../screens/auth/signin/components/profile';
import EmailAuthByOtpScreeen from '../../screens/auth/signin/components/emailauth';
import { TabNavigator } from '../tab.navigator';
import { ROUTES } from '../';
import { MessageList } from '../../cometChat/src/CometChatConversationsWithMessages/CometChatConversationsWithMessages';
import Onboarding from '../../screens/onBoarding';
import Gender from './../../screens/auth/preRegisterFlow';
import GenderProunoun from '../../screens/auth/preRegisterFlow/components/genderPronoun';
import SexualOrientation from '../../screens/auth/preRegisterFlow/components/sexualOrientation';
import Location from '../../screens/auth/preRegisterFlow/components/location';
import Profession from '../../screens/auth/preRegisterFlow/components/profession';
import AddProfilePic from '../../screens/auth/preRegisterFlow/components/AddProfilePic';
import AddEthnicity from '../../screens/auth/preRegisterFlow/components/addEthnicity';
import LookingFor from '../../screens/auth/preRegisterFlow/components/lookingFor';

const Stack = createNativeStackNavigator();
const optins = { headerShown: false };
export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={optins}
        name={ROUTES.LookingFor}
        component={LookingFor}
      />

      <Stack.Screen
        options={optins}
        name={ROUTES.AddEthnicity}
        component={AddEthnicity}
      />

      <Stack.Screen
        options={optins}
        name={ROUTES.ProfilePic}
        component={AddProfilePic}
      />

      <Stack.Screen
        options={optins}
        name={ROUTES.Onboarding}
        component={Onboarding}
      />
      <Stack.Screen
        options={optins}
        name={ROUTES.SignIn}
        component={SignInScreen}
      />

      <Stack.Screen
        options={optins}
        name={ROUTES.Profession}
        component={Profession}
      />
      <Stack.Screen
        options={optins}
        name={ROUTES.Location}
        component={Location}
      />

      <Stack.Screen
        options={optins}
        name={ROUTES.GenderPronoun}
        component={GenderProunoun}
      />

      <Stack.Screen
        options={optins}
        name={ROUTES.SexualOrientation}
        component={SexualOrientation}
      />
      <Stack.Screen options={optins} name={ROUTES.Gender} component={Gender} />
      <Stack.Screen
        options={optins}
        name={ROUTES.EmailAuth}
        component={EmailAuthByOtpScreeen}
      />

      <Stack.Screen
        options={optins}
        name={ROUTES.Tab}
        component={TabNavigator}
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
