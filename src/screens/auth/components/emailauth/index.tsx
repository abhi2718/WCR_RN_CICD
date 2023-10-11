import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {ImageContainer} from '../../../../components/tools';
import {styles} from './emailauthStyle';
import {RedButton} from '../../../../components/button';
import {useViewModal} from './../../signin/signinViewModal';

export default function EmailAuthByOtpScreeen(props: any) {
  const navigation = props.navigation;
  const receivedData = props.route?.params?.data || 'No data received';
  const email: string = receivedData?.email;
  let {otp, setOtp, verifyEmail,resendOtp} = useViewModal(navigation);

  return (
    <View style={styles.containerStyle}>
      <ScrollView>
        <ImageContainer
          height={54}
          width={72}
          marginTop={50}
          marginBottom={150}
          source={require('../../../../assets/images/logo.png')}
        />

        <Text style={styles.titleStyle}>
          Enter the code we have shared to your email
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.emailInputBox}
            placeholder={'Enter code'}
            keyboardType="phone-pad"
            value={otp}
            onChangeText={(value: string) => setOtp(value)}
            placeholderTextColor="rgba(35, 35, 35, 0.4)" // Adjust the placeholder text color
          />
        </View>
        <RedButton
          title={'Continue'}
          onPress={() => {
            verifyEmail({email: email, code: otp});
          }}
        />
        <TouchableOpacity onPress={() => resendOtp(email)} style={{marginTop: 10}}>
          <Text>Resend otp</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
