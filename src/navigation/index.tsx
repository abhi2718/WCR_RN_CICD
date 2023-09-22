import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './stack.navigator';

export default function Navigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
