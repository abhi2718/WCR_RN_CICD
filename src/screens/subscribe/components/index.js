import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import { CardField, useStripe,createToken } from '@stripe/stripe-react-native';

const YourComponent = () => {
  const { createPaymentMethod,confirmPayment } = useStripe();
  const clientSecret = 'sk_test_51OLhmuILb85dzDSTzeEi7MjSn2VSvoW6jg8c1dunu7vTH05wvZQin8aunLRGE1YeExm9PSkmG4TJMbBjIwjRf2KB00XKaWtcQF'; // Retrieve this from the server
  const cardInfo = useRef('');
  const handleSubscription = async () => {
    const token = await createToken({
      ...cardInfo.current,
      type:"Card"
    });
    const s = await createPaymentMethod({
      type: "card",
      card: cardInfo.current,
      paymentMethodType:"Card",
      billing_details: {
        name:"abhi",
        email:"abc1246@gmail.com",
      },
    });
    console.log(s)
    const response = await fetch("http://localhost:8000/api/payment/subscription/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentMethod: s?.paymentMethod?.id,
        name:"abhi",
        email:"abhi124678888887@gmail.com",
        priceId:"price_1OeuR4ILb85dzDSTQ2pm7msh"
      }),
    }).then((res) => res.json());
    const confirmPay = await confirmPayment(
      response.clientSecret
    );
    console.log(confirmPay)
    return;
    try {
      const response = await fetch(
        'http://localhost:8000/intent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            //paymentMethodId: paymentMethod.id,
            priceId: 'price_1OeuR4ILb85dzDSTQ2pm7msh', // Replace with your actual price ID
          }),
        },
      );
      const result = await response.json();
      
      const {paymentIntent,error} = await confirmPayment(result.clientSecret, {
        type: 'CardField',
        paymentMethodType:'Card',
        cardFieldOptions: {
          // Customize your card field options
        },
        setupFutureUsage: 'off_session',
        save_payment_method:true
      });
      console.log(paymentIntent.paymentMethod.id);
      if (error) {
      
      } else {
        // Send paymentMethod.id and priceId to your server
        // to confirm the subscription
        const response = await fetch(
          'http://localhost:8000/create-subscription',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              paymentMethodId: paymentIntent.paymentMethod.id,
              priceId: 'price_1OeuR4ILb85dzDSTQ2pm7msh', // Replace with your actual price ID
            }),
          },
        );

        const result = await response.json();
        console.log('Subscription confirmed:', result);
      }
    } catch (error) {
      console.error(error);
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
