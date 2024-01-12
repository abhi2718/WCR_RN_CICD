import { View, StyleSheet, Text, Image } from 'react-native';
import React from 'react';
import { MediaTab } from '../../../community/components/mediaMessages';
import { SafeAreaView } from 'react-native-safe-area-context';

export const PrivteChatMediaScreen = (props:NavigationObject) => {
  const {route} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <MediaTab uid={route.params.uid} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
