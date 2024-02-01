import { useState, useMemo, useCallback, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  Text,
  Pressable,
} from 'react-native';
import { Linking } from 'react-native';
import {
  CardField,
  confirmPayment,
  useStripe,
} from '@stripe/stripe-react-native';
import { StripeRepository } from '../../repository/StripeRepository.repo';

const PaymentScreen = () => {
  const stripeRepository = useMemo(() => new StripeRepository(), []);
  const [cardInfo, setCardInfo] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [paypalUrl, setPaypalUrl] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const { initPaymentSheet, presentPaymentSheet, handleURLCallback } =
    useStripe();
  const handleDeepLink = useCallback(
    async (url) => {
      if (url) {
        console.log(url);
        const stripeHandled = await handleURLCallback(url);
        if (stripeHandled) {
          // This was a Stripe URL - you can return or add extra handling here as you see fit
        } else {
          // This was NOT a Stripe URL – handle as you normally would
        }
      }
    },
    [handleURLCallback],
  );
  useEffect(() => {
    const getUrlAsync = async () => {
      const initialUrl = await Linking.getInitialURL();
      handleDeepLink(initialUrl);
    };
    getUrlAsync();
    const deepLinkListener = Linking.addEventListener('url', (event) => {
      handleDeepLink(event.url);
    });
    return () => deepLinkListener.remove();
  }, [handleDeepLink]);
  const fetchCardDetail = (cardDetail) => {
    if (cardDetail.complete) {
      setCardInfo(cardDetail);
    } else {
      setCardInfo(null);
    }
  };
  const onDone = async () => {
    let apiData = {
      amount: Math.floor(200 * 100),
      currency: 'usd',
    };

    try {
      const res = await stripeRepository.getIntent(apiData);
      const { error: paymentSheetError } = await initPaymentSheet({
        merchantDisplayName: 'hu',
        paymentIntentClientSecret: res.clientSecret,
        defaultBillingDetails: {
          name: 'huu',
        },
      });
      if (paymentSheetError) {
        Alert.alert('Something went wrong', paymentSheetError.message);
        return;
      }
      const { error: paymentError } = await presentPaymentSheet();
      if (paymentError) {
        Alert.alert(`Error code: ${paymentError.code}`, paymentError.message);
        return;
      }
    } catch (error) {
      console.log('Error rasied during payment intent', error);
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <CardField
            postalCodeEnabled={false}
            placeholders={{
              number: '4242 4242 4242 4242',
            }}
            cardStyle={{
              backgroundColor: '#FFFFFF',
              textColor: '#000000',
            }}
            style={{
              width: '100%',
              height: 50,
              marginVertical: 30,
            }}
            onCardChange={(cardDetails) => {
              fetchCardDetail(cardDetails);
            }}
            onFocus={(focusedField) => {
              console.log('focusField', focusedField);
            }}
          />
          <Pressable onPress={onDone}>
            <Text>Pay</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PaymentScreen;
