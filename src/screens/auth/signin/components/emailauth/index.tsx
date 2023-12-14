import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {
  InputBox,
  ScreenContainer,
} from '../../../../../components/tools';
import { styles } from './emailauthStyle';
import { PrimaryButton } from '../../../../../components/button';
import { OtpCodeInput } from '../../../../../components/otpInput';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { useEmailAuthViewModal } from './emailauthViewModal';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { isAndroid } from '../../../../../components/tools';
import { HeaderBar } from '../../../../../components/header';

export default function EmailAuthByOtpScreeen(props: ScreenParams) {
  let {
    otp,
    setOtp,
    verifyEmail,
    resendOtp,
    emailInput,
    setEmailInput,
    email,
    loading,
    handleInputChange,
  } = useEmailAuthViewModal(props);

  return (
    <ScreenContainer>
      <View>
        <HeaderBar />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollDiv}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.viewBox}>
          <Text style={styles.otpText}>
            Enter the code we have shared to your email
          </Text>
          <View>
            <OtpCodeInput
              onChangeOtp={handleInputChange}
            />
          </View>
        </View>
        {!email && (
          <View style={styles.viewBox}>
            <Text style={styles.otpText}>Enter the code email id</Text>
            <KeyboardAvoidingView
              enabled
              behavior={isAndroid ? 'height' : 'padding'}
            >
              <View>
                <InputBox
                  style={styles.inputBox}
                  placeholder={'Enter email'}
                  value={emailInput}
                  onChangeText={(value: string) => setEmailInput(value)}
                />
              </View>
            </KeyboardAvoidingView>
          </View>
        )}
        <PrimaryButton
          title={'Continue'}
          onPress={verifyEmail}
          isLoading={loading}
        />
        <TouchableOpacity onPress={resendOtp} style={{ marginTop: 20 }}>
          <Text style={styles.otpText}>Resend code</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenContainer>
  );
}
