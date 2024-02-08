import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';

const YourComponent = () => {
  const { createPaymentMethod, confirmPayment } = useStripe();
  const cardInfo = useRef('');
  const handleSubscription = async () => {
    try {
      const paymentMethod = await createPaymentMethod({
        type: 'card',
        card: cardInfo.current,
        paymentMethodType: 'Card',
        billing_details: {
          name: 'abhi',
          email: 'abc1246@gmail.com',
        },
      });
      const response = await fetch(
        'http://localhost:8000/api/payment/subscription/create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2YWxpZCI6dHJ1ZSwiaWQiOiI2NWJiNWQ4MWY3MmYwYzQ3ZTY2YzNhMzEiLCJleHBpcmVzIjoiMjAyNC0wNC0wMSAwODo1OSJ9.K7_X3T5QjCWW1xq7Xh0wkK2_K0u0i5ejpklsme33bVI',
          },
          body: JSON.stringify({
            paymentMethod: paymentMethod?.paymentMethod?.id,
            name: 'abhi',
            email: 'abhi124678888887@gmail.com',
            priceId: 'price_1OeuR4ILb85dzDSTQ2pm7msh',
          }),
        },
      ).then((res) => res.json());
      console.log('response --->', response);
      const confirmPay = await confirmPayment(response.clientSecret);
      console.log('confirmPay --->', confirmPay);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
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
          console.log(cardDetails);
          cardInfo.current = cardDetails;
        }}
        onFocus={(focusedField) => {
          console.log('focusField', focusedField);
        }}
      />
      <Button title="Subscribe" onPress={handleSubscription} />
    </View>
  );
};

export default YourComponent;
