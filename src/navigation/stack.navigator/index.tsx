import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../../screens/auth/signin';
import Profile from '../../screens/auth/signin/components/profile';
import EmailAuthByOtpScreeen from '../../screens/auth/signin/components/emailauth';

const Stack = createNativeStackNavigator();

export enum ROUTES {
  SignIn = 'SignIn',
  Profile = '/profile',
  SignUp = 'SignUp',
  EmailAuth = '/email-auth',
}

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};
