import React from 'react';
import {View, Text} from 'react-native';
import {useViewModal} from './signinViewModal';
import {styles} from './signInStyle';
export default function SignInScreen() {
  let {count} = useViewModal();
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>SignIn</Text>
      <Text style={styles.countStyle}>{count}</Text>
    </View>
  );
}
