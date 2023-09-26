import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import CombinedProviders from './src/contexts';
import Navigator from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/store';

export default function App() {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <Provider store={store}>
        <CombinedProviders>
          <Navigator />
        </CombinedProviders>
      </Provider>
      <FlashMessage position="top" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});
