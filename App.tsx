import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { ThemeProvider } from 'styled-components/native';
import CombinedProviders from './src/contexts';
import Navigator from './src/navigation';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { store } from './src/store';
import { theme } from './src/infrastructure/theme';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.containerStyle}>
      <View style={styles.containerStyle}>
        <Provider store={store}>
          <PaperProvider>
            <CombinedProviders>
              <ThemeProvider theme={theme}>
                <Navigator />
              </ThemeProvider>
            </CombinedProviders>
          </PaperProvider>
        </Provider>
        <FlashMessage position="top" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});
//admin acc wcr@gmail.com - Qwerty1@
