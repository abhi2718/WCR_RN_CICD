import React from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';
import {useViewModal} from './signinViewModal';
import {styles} from './signInStyle';
export default function SignInScreen() {
  let {count, updateCount, loading} = useViewModal();
  if (loading) {
    return (
      <View style={styles.containerStyle}>
        <ActivityIndicator color={"blue"}/>
      </View>
    );
  }
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>SignIn</Text>
      <Text style={styles.countStyle}>{count}</Text>
      <Button title="Count" onPress={updateCount} />
    </View>
  );
}
