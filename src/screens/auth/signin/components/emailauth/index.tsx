import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {
  dimensions,
  InputBox,
  ScreenContainer,
  Spacer,
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
    otpValue,
    setOtpValue,
    resetOtp,
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
        <KeyboardAvoidingView
          enabled
          behavior={isAndroid ? 'height' : 'padding'}
          style={styles.scrollDiv}
        >
          <View style={styles.viewBox}>
            <Text style={styles.otpText}>
              Enter the code we have shared to your email
            </Text>
            <View>
              <OtpCodeInput
                onChangeOtp={handleInputChange}
                otpValue={otpValue}
                setOtpValue={setOtpValue}
              />
            </View>
          </View>
          {!email && (
            <View style={styles.viewBox}>
              <Text style={styles.otpText}>Enter your email </Text>
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
          <KeyboardAvoidingView
            enabled
            behavior={isAndroid ? 'height' : 'padding'}
          >
            <Spacer position="top" size={32}>
              <View style={{ width: dimensions.width - 32 }}>
                <PrimaryButton
                  title={'Continue'}
                  onPress={verifyEmail}
                  isLoading={loading}
                />
              </View>
            </Spacer>
          </KeyboardAvoidingView>
          <KeyboardAvoidingView
            enabled
            behavior={isAndroid ? 'height' : 'padding'}
          >
            <TouchableOpacity onPress={resendOtp} style={{ marginTop: 20 }}>
              <Text style={styles.otpText}>Resend code</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </KeyboardAvoidingView>
      </ScrollView>
    </ScreenContainer>
  );
}
