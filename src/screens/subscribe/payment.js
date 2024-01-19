import { useState, useMemo, useCallback, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Linking } from 'react-native';
import {
  CardField,
  confirmPayment,
  useStripe,
} from '@stripe/stripe-react-native';

import ButtonComp from './component/ButtonCom';

import { StripeRepository } from '../../repository/StripeRepository.repo/inex';
// create a component
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
      console.log('calling');
      const initialUrl = await Linking.getInitialURL();
      console.log('calling', initialUrl);
      handleDeepLink(initialUrl);
    };

    getUrlAsync();

    const deepLinkListener = Linking.addEventListener('url', (event) => {
      handleDeepLink(event.url);
    });

    return () => deepLinkListener.remove();
  }, [handleDeepLink]);
  const fetchCardDetail = (cardDetail) => {
    // console.log("my card details",cardDetail)
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
      //const res = await creatPaymentIntent(apiData)
      const res = await stripeRepository.getIntent(apiData);
      const { error: paymentSheetError } = await initPaymentSheet({
        merchantDisplayName: 'hu',
        paymentIntentClientSecret: res.clientSecret,
        defaultBillingDetails: {
          name: 'huu',
        },
        // returnURL:"accept-a-payment://wcr.com"
      });
      console.log('oooo', paymentSheetError);
      if (paymentSheetError) {
        console.log(paymentSheetError);
        Alert.alert('Something went wrong', paymentSheetError.message);
        return;
      }
      const { error: paymentError } = await presentPaymentSheet();
      console.log(paymentError);
      if (paymentError) {
        Alert.alert(`Error code: ${paymentError.code}`, paymentError.message);
        return;
      }
      // return;
      // if (res?.paymentIntent) {
      //     let confirmPaymentIntent = await confirmPayment(res?.paymentIntent, { paymentMethodType: 'Card' })
      //     console.log("confirmPaymentIntent res++++", confirmPaymentIntent)
      //     alert("Payment succesfully...!!!")
      // }
    } catch (error) {
      console.log('Error rasied during payment intent', error);
    }

    // console.log("cardInfocardInfocardInfo", cardInfo)
    // if (!!cardInfo) {
    //     try {
    //         const resToken = await createToken({ ...cardInfo, type: 'Card' })
    //         console.log("resToken", resToken)

    //     } catch (error) {
    //         alert("Error raised during create token")
    //     }
    // }
  };

  // const onPressPaypal = async () => {
  //     setLoading(true)
  //     try {
  //         const token = await paypalApi.generateToken()
  //         const res = await paypalApi.createOrder(token)
  //         setAccessToken(token)
  //         console.log("res++++++", res)
  //         setLoading(false)
  //         if (!!res?.links) {
  //             const findUrl = res.links.find(data => data?.rel == "approve")
  //             setPaypalUrl(findUrl.href)
  //         }

  //     } catch (error) {
  //         console.log("error", error)
  //         setLoading(false)

  //     }
  // }

  // const onUrlChange = (webviewState) => {
  //     console.log("webviewStatewebviewState", webviewState)
  //     if (webviewState.url.includes('https://example.com/cancel')) {
  //         clearPaypalState()
  //         return;
  //     }
  //     if (webviewState.url.includes('https://example.com/return')) {

  //         const urlValues = queryString.parseUrl(webviewState.url)
  //         console.log("my urls value", urlValues)
  //         const { token } = urlValues.query
  //         if (!!token) {
  //             paymentSucess(token)
  //         }

  //     }
  // }

  const paymentSucess = async (id) => {
    try {
      const res = paypalApi.capturePayment(id, accessToken);
      console.log('capturePayment res++++', res);
      alert('Payment sucessfull...!!!');
      clearPaypalState();
    } catch (error) {
      console.log('error raised in payment capture', error);
    }
  };

  const clearPaypalState = () => {
    setPaypalUrl(null);
    setAccessToken(null);
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

          <ButtonComp onPress={onDone} />

          {/* <ButtonComp
                        onPress={onPressPaypal}
                        disabled={false}
                        btnStyle={{ backgroundColor: '#0f4fa3', marginVertical: 16 }}
                        text="PayPal"
                        isLoading={isLoading}
                    /> */}

          {/* <Modal
                        visible={!!paypalUrl}
                    >
                        <TouchableOpacity
                            onPress={clearPaypalState}
                            style={{ margin: 24 }}
                        >
                            <Text >Closed</Text>
                        </TouchableOpacity>
                        <View style={{ flex: 1 }}>
                            <WebView
                                source={{ uri: paypalUrl }}
                                onNavigationStateChange={onUrlChange}

                            />
                        </View>

                    </Modal> */}
        </View>
      </SafeAreaView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default PaymentScreen;
