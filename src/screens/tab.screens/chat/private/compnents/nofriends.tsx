import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const NoFriends = () => {
  return (
    <View style={styles.container}>
      <Text>No Friends</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
