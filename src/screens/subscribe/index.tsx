import {View, Text, Alert} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {useStripe} from '@stripe/stripe-react-native';
import { StripeRepository } from '../../repository/StripeRepository.repo/inex';

const useStripeViewModal = () => {
  const stripeRepository = useMemo(() => new StripeRepository(), []);
  const [linkToken, setLinkToken] = useState('');
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const getLinkToken = async () => {
    try {
      // 1. Create a payment intent
      const token = await stripeRepository.getLinkToken();
      // console.log(token?.paymentIntent);
      if (token) {
        const {error: paymentSheetError} = await initPaymentSheet({
            merchantDisplayName: 'WCR',
            //returnURL:"https://staging.whitecoatromance.com/home-screen",
            paymentIntentClientSecret: token?.paymentIntent,
            customerId: token.customer,
            customerEphemeralKeySecret: token.ephemeralKey,
            allowsDelayedPaymentMethods: true,
          defaultBillingDetails: {
              name: 'Abhi',
              email:"Abhiwebdev2718@gmail.com"
          },
        });
          if (paymentSheetError) {
            console.log(paymentSheetError)
          return;
        }
        
      }
      // console.log("response done") 
    } catch (err: any) {
        console.log(err)
      //logger(err.message);
    }
  };
  const onCheckout = async () => {
    // 2. Initialize the Payment sheet
    // 3. Present the Payment Sheet from Stripe
    // 4. If payment ok -> create the order
    // onCreateOrder();
      const { error } = await presentPaymentSheet();
      Alert.alert(JSON.stringify(error));
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };
  useEffect(() => {
    getLinkToken();
  }, []);
  return {
      linkToken,
      onCheckout
  };
};
export default useStripeViewModal