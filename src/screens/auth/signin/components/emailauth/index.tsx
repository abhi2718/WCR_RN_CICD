import React from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {
  ImageContainer,
  InputBox,
  ScreenContainer,
} from '../../../../../components/tools';
import {styles} from './emailauthStyle';
import {PrimaryButton} from '../../../../../components/button';
// for viewModal use use key word
import {emailAuthViewModal} from './emailauthViewModal';
import {sizes} from '../../../../../infrastructure/theme/sizes';

// remove any
export default function EmailAuthByOtpScreeen(props: any) {
  let {otp, setOtp, verifyEmail, resendOtp, emailInput, setEmailInput, email} =
    emailAuthViewModal(props);

  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.scrollDiv}>
        <View>
          <ImageContainer
            height={sizes[8]}
            width={sizes[8]}
            marginBottom={sizes[7]}
            source={require('../../../../../assets/images/logo.png')}
          />
        </View>
        {/* Show this block on condation basis  */}
        <View style={styles.viewBox}>
          <Text>Enter the code we have shared to your email</Text>
          <View>
            <InputBox
              style={styles.inputBox}
              placeholder={'Enter code'}
              keyboardType="phone-pad"
              value={otp}
              // put otp validator (6digits)
              onChangeText={(value: string) => setOtp(value)}
            />
          </View>
        </View>
        {!email && (
          <View style={styles.viewBox}>
            <Text>Enter the code email id</Text>
            <View>
              <InputBox
                style={styles.inputBox}
                placeholder={'Enter email'}
                value={emailInput}
                onChangeText={(value: string) => setEmailInput(value)}
              />
            </View>
          </View>
        )}
        <PrimaryButton title={'Continue'} onPress={verifyEmail} />
        <TouchableOpacity onPress={resendOtp} style={{marginTop: 20}}>
          <Text>Resend code</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenContainer>
  );
}
