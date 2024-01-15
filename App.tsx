import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LogBox, View, StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { ThemeProvider } from 'styled-components/native';
import CombinedProviders from './src/contexts';
import { MenuProvider } from 'react-native-popup-menu';
import Navigator from './src/navigation';
import { StripeProvider } from '@stripe/stripe-react-native';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { store } from './src/store';
import { theme } from './src/infrastructure/theme';
LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
export default function App() {
  return (
    <StripeProvider
      publishableKey={
        'pk_test_51OWdkPSGkDcyRa3UMpodrMldoKCdOIq9exX1LZDENtELYZyKkIzyRC7uFj7dym9xtpj5z362iDGMZg2UGQLNolpu00SU67MZPp'
      }
      urlScheme="accept-a-payment"
      threeDSecureParams={{
        backgroundColor: '#FFFFFF', // iOS only
        timeout: 5,
        label: {
          headingTextColor: '#0000',
          headingFontSize: 13,
        },
        navigationBar: {
          headerText: '3d secure',
        },
        footer: { // iOS only
          backgroundColor: '#FFFFFF',
        },
        submitButton: {
          backgroundColor: '#000000',
          //cornerRadius: 12,
          textColor: '#FFFFFF',
          textFontSize: 14,
        },
      }}
    >
      <MenuProvider>
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
      </MenuProvider>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
