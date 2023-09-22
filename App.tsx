import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CombinedProviders from './src/contexts';
import Navigator from './src/navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <CombinedProviders>
        <Navigator />
      </CombinedProviders>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});
