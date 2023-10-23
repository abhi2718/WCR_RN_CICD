import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {ThemeProvider} from 'styled-components/native';
import CombinedProviders from './src/contexts';
import Navigator from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {theme} from './src/infrastructure/theme';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.containerStyle}>
      <SafeAreaView style={styles.containerStyle}>
        <Provider store={store}>
          <CombinedProviders>
            <ThemeProvider theme={theme}>
              <Navigator />
            </ThemeProvider>
          </CombinedProviders>
        </Provider>
        <FlashMessage position="top" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});
