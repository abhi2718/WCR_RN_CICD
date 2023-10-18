import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './stack.navigator';

export enum ROUTES {
  SignIn = 'SignIn',
  Profile = 'Profile',
  SignUp = 'SignUp',
  Emailauth = 'Email-auth',
  Tab = '/tabs'
}
export default function Navigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
