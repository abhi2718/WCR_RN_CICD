import React, { useRef } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {
  Column,
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
    <SafeAreaView style={styles.dFlex}>
      <KeyboardAvoidingView
        enabled
        behavior={isAndroid ? 'height' : 'padding'}
        style={styles.vFullHeight}
      >
        <ScrollView
          contentContainerStyle={styles.vFullHeight}
          keyboardShouldPersistTaps="handled"
        >
          <Column justifyContent="space-between" style={styles.colWrapper}>
            <HeaderBar />
            <Column
              justifyContent="center"
              alignItems="center"
              style={styles.vFullHeight}
            >
              <Image
                style={styles.otpImg}
                resizeMode="contain"
                source={require('../../../../../assets/images/otpScreenImg.png')}
              />
            </Column>
            <View style={styles.vMargin16}>
              <View style={styles.viewBox}>
                <View style={styles.vMargin16}>
                  <Text style={styles.otpText}>
                    Please check your spam mail
                  </Text>
                  <Text style={styles.otpText}>
                    if you do not see the email in your inbox.
                  </Text>
                </View>
                <Text style={styles.otpText}>
                  Enter the OTP code we have shared to your email
                </Text>
                <Text style={styles.otpEmail}>{email}</Text>
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
                  <InputBox
                    style={styles.inputBox}
                    placeholder={'Enter email'}
                    value={emailInput}
                    onChangeText={(value: string) => setEmailInput(value)}
                  />
                </View>
              )}
            </View>
            <Column gap={20}>
              <View style={{ width: dimensions.width - 32 }}>
                <PrimaryButton
                  title={'Continue'}
                  onPress={verifyEmail}
                  isLoading={loading}
                />
              </View>
              <TouchableOpacity onPress={resendOtp}>
                <Text style={styles.otpText}>Resend code</Text>
              </TouchableOpacity>
            </Column>
          </Column>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
