import React from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {
  ImageContainer,
  InputBox,
  ScreenContainer,
} from '../../../../components/tools';
import {styles} from './emailauthStyle';
import {RedButton} from '../../../../components/button';
import {useViewModal} from './../../signin/signinViewModal';

export default function EmailAuthByOtpScreeen(props: any) {
  const navigation = props.navigation;
  const receivedData = props.route?.params?.data || 'No data received';
  const email: string = receivedData?.email;
  let {otp, setOtp, verifyEmail, resendOtp, emailInput, setEmailInput} =
    useViewModal(navigation);

  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.scrollDiv}>
        <View>
          <ImageContainer
            height={65}
            width={65}
            marginBottom={35}
            source={require('../../../../assets/images/logo.png')}
          />
        </View>
        <View style={styles.viewBox}>
          <Text>Enter the code we have shared to your email</Text>
          <View>
            <InputBox
              style={styles.inputBox}
              placeholder={'Enter code'}
              keyboardType="phone-pad"
              value={otp}
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
        <RedButton
          title={'Continue'}
          onPress={() => {
            verifyEmail({email: email, code: otp});
          }}
        />
        <TouchableOpacity
          onPress={() => resendOtp(email)}
          style={{marginTop: 20}}>
          <Text>Resend code</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenContainer>
  );
}
