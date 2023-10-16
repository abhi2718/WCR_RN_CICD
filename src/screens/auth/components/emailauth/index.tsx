import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {ImageContainer} from '../../../../components/tools';
import {EmailAuthScreenStyles} from './emailauthStyle';
import {RedButton} from '../../../../components/button';
import {useViewModal} from './../../signin/signinViewModal';
import { emailAuthViewModal } from './emailauthViewModal';

export default function EmailAuthByOtpScreeen(props: any) {

  let {otp, setOtp, verifyEmail, resendOtp, emailInput, setEmailInput,email} =
  emailAuthViewModal(props);

  return (
    <View style={EmailAuthScreenStyles.containerStyle}>
      <ScrollView>
        <ImageContainer
          height={54}
          width={72}
          marginTop={50}
          marginBottom={150}
          source={require('../../../../assets/images/logo.png')}
        />

        <Text style={EmailAuthScreenStyles.titleStyle}>
          Enter the code we have shared to your email
        </Text>
        <View style={EmailAuthScreenStyles.inputContainer}>
          <TextInput
            style={EmailAuthScreenStyles.emailInputBox}
            placeholder={'Enter code'}
            keyboardType="phone-pad"
            value={otp}
            onChangeText={(value: string) => setOtp(value)}
            placeholderTextColor="rgba(35, 35, 35, 0.4)" // Adjust the placeholder text color
          />
        </View>
        {!email && (
          <View>
            <Text style={EmailAuthScreenStyles.titleStyle}>
              Enter the code email id
            </Text>
            <View style={EmailAuthScreenStyles.inputContainer}>
              <TextInput
                style={EmailAuthScreenStyles.emailInputBox}
                placeholder={'Enter email'}
                value={emailInput}
                onChangeText={(value: string) => setEmailInput(value)}
                placeholderTextColor="rgba(35, 35, 35, 0.4)" // Adjust the placeholder text color
              />
            </View>
          </View>
        )}
        <RedButton
          title={'Continue'}
          onPress={() => {
            verifyEmail({email: email, code: otp});
          }}
        />
        <TouchableOpacity
          onPress={() => resendOtp(email)}
          style={{marginTop: 10}}>
          <Text>Resend otp</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
