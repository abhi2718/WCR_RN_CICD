import React from 'react';
import {View, SafeAreaView} from 'react-native';
import CombinedProviders from './src/contexts';
import Navigator from './src/navigation/stack.navigator';
//import SignInScreen from './src/screens/auth/signin';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CombinedProviders>
        <Navigator />
      </CombinedProviders>
    </SafeAreaView>
  );
}
