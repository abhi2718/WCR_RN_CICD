import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../../screens/auth/signin';
import Profile from '../../screens/auth/signin/components/profile';
import EmailAuthByOtpScreeen from '../../screens/auth/signin/components/emailauth';
import { TabNavigator } from '../tab.navigator';
import { ROUTES } from '../';
import { MessageList } from '../../cometChat/src/CometChatConversationsWithMessages/CometChatConversationsWithMessages';
import Onboarding from '../../screens/onBoarding';
import { PrivateChatWindowWrapper } from '../../screens/tab.screens/chat/community/components/cometChatAvatrModal/components/modalSheet';
const Stack = createNativeStackNavigator();
const optins = { headerShown: false };
import Gender from './../../screens/auth/preRegisterFlow';
import GenderProunoun from '../../screens/auth/preRegisterFlow/components/genderPronoun';
import SexualOrientation from '../../screens/auth/preRegisterFlow/components/sexualOrientation';
import Profession from '../../screens/auth/preRegisterFlow/components/profession';
import LocationScreen from '../../screens/auth/preRegisterFlow/components/location';
import AddProfilePic from '../../screens/auth/preRegisterFlow/components/AddProfilePic';
import AddEthnicity from '../../screens/auth/preRegisterFlow/components/addEthnicity';
import LookingFor from '../../screens/auth/preRegisterFlow/components/lookingFor';
import MaritalStatus from '../../screens/auth/preRegisterFlow/components/maritalStatus';
import Kids from '../../screens/auth/preRegisterFlow/components/kids';
import Habits from '../../screens/auth/preRegisterFlow/components/habits';
import About from '../../screens/auth/preRegisterFlow/components/about';
import Hobbies from '../../screens/auth/preRegisterFlow/components/hobbies';
import Height from '../../screens/auth/preRegisterFlow/components/height';

const options = { headerShown: false };
export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={options} name={ROUTES.Height} component={Height} />

      <Stack.Screen
        options={options}
        name={ROUTES.Onboarding}
        component={Onboarding}
      />
      <Stack.Screen
        options={options}
        name={ROUTES.GenderPronoun}
        component={GenderProunoun}
      />
      <Stack.Screen
        options={options}
        name={ROUTES.SignIn}
        component={SignInScreen}
      />
      <Stack.Screen
        options={options}
        name={ROUTES.Profession}
        component={Profession}
      />
      <Stack.Screen
        options={options}
        name={ROUTES.Tab}
        component={TabNavigator}
      />
      <Stack.Screen
        options={options}
        name={ROUTES.AddEthnicity}
        component={AddEthnicity}
      />
      <Stack.Screen
        options={options}
        name={ROUTES.EmailAuth}
        component={EmailAuthByOtpScreeen}
      />
      <Stack.Screen
        options={options}
        name={ROUTES.Profile}
        component={Profile}
      />
      <Stack.Screen options={options} name={ROUTES.Gender} component={Gender} />

      <Stack.Screen
        options={options}
        name={ROUTES.SexualOrientation}
        component={SexualOrientation}
      />
      <Stack.Screen
        options={options}
        name={ROUTES.LookingFor}
        component={LookingFor}
      />
      <Stack.Screen
        options={options}
        name={ROUTES.MaritalStatus}
        component={MaritalStatus}
      />
      <Stack.Screen options={options} name={ROUTES.Kids} component={Kids} />
      <Stack.Screen options={options} name={ROUTES.Habits} component={Habits} />
      <Stack.Screen options={options} name={ROUTES.About} component={About} />
      <Stack.Screen
        options={options}
        name={ROUTES.Hobbies}
        component={Hobbies}
      />
      <Stack.Screen
        options={options}
        name={ROUTES.ProfilePic}
        component={AddProfilePic}
      />
      <Stack.Screen
        options={options}
        name={ROUTES.Location}
        component={LocationScreen}
      />
      <Stack.Screen
        options={options}
        name={ROUTES.CommunityChatMessage}
        component={MessageList}
      />
      <Stack.Screen
        options={optins}
        name={ROUTES.CommunityPrivateChat}
        component={PrivateChatWindowWrapper}
      />
    </Stack.Navigator>
  );
};
