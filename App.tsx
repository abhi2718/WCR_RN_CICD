import React from 'react';
import {View, SafeAreaView} from 'react-native';
import SignInScreen from './src/screens/auth/signin';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
        <SignInScreen />
      </View>
    </SafeAreaView>
  );
}
