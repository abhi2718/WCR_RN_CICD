import React from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import {
  ImageContainer,
  InputBox,
  ScreenContainer,
} from '../../../../../components/tools';
import { styles } from './emailauthStyle';
import { PrimaryButton } from '../../../../../components/button';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { useEmailAuthViewModal } from './emailauthViewModal';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';

export default function EmailAuthByOtpScreeen(props: ScreenParams) {
  let {
    otp,
    setOtp,
    verifyEmail,
    resendOtp,
    emailInput,
    setEmailInput,
    email,
  } = useEmailAuthViewModal(props);

  return (
    <ScreenContainer >
      <ScrollView contentContainerStyle={styles.scrollDiv} keyboardShouldPersistTaps="always">
        <View >
          <ImageContainer
            height={sizes[10]}
            width={sizes[10]}
            marginBottom={sizes[7]}
            source={require('../../../../../assets/images/logo.png')}
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
        <PrimaryButton title={'Continue'} onPress={verifyEmail} />
        <TouchableOpacity onPress={resendOtp} style={{ marginTop: 20 }}>
          <Text>Resend code</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenContainer>
  );
}
