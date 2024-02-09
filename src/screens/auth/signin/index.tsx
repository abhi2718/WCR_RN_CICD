import React from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Pressable,
  Keyboard,
} from 'react-native';
import { useViewModal } from './signinViewModal';
import { styles } from './signInStyle';

import {
  RoundedButtonWithIconAndText,
  PrimaryButton,
} from '../../../components/button';
import { ImageContainer, ScreenContainer } from '../../../components/tools';
import { isAndroid } from '../../../components/tools';
import { sizes } from '../../../infrastructure/theme/sizes';
import { ScreenParams } from '../../../types/services.types/firebase.service';
export default function SignInScreen(props: ScreenParams) {
  const {
    _onFbLogIn,
    _googleSignIn,
    getOtpToVerifyEmail,
    handleAppleSignIn,
    email,
    setEmail,
    loading,
    handleLoadingState,
  } = useViewModal(props);
  return (
    <Pressable style={styles.wrapper} onPress={Keyboard.dismiss}>
      <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.scrollDiv}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.container}>
          <ImageContainer
            height={sizes[10]}
            width={sizes[10]}
            source={require('../../../assets/images/logo.png')}
          />
        </View>
        {/* <RoundedButtonWithIconAndText
          onPress={loading ? handleLoadingState : _onFbLogIn}
          title={'Continue with Facebook'}
          iconSource={require('../../../assets/images/facebookLogo.png')}
        /> */}
        <RoundedButtonWithIconAndText
          onPress={loading ? handleLoadingState : _googleSignIn}
          title={'Continue with Google'}
          iconSource={require('../../../assets/images/googleLogo.png')}
        />
        {!isAndroid && (
          <RoundedButtonWithIconAndText
            onPress={loading ? handleLoadingState : handleAppleSignIn}
            title={'Continue with Apple'}
            iconSource={require('../../../assets/images/appleLogo.png')}
          />
        )}
        <KeyboardAvoidingView
          enabled
          behavior={isAndroid ? 'height' : 'padding'}
        >
          <View style={styles.inputContainerr}>
            <ImageContainer
              source={require('../../../assets/images/Email-icon.png')}
              style={styles.emailIconStyle}
            />
            <TextInput
              style={styles.emailInputBox}
              placeholder={'Email'}
              value={email}
              onChangeText={(email: string) => {
                setEmail(email);
              }}
              returnKeyType="done"
              placeholderTextColor="rgba(35, 35, 35, 0.4)"
            />
          </View>
          <PrimaryButton
            title="Continue"
            onPress={getOtpToVerifyEmail}
            isLoading={loading}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </ScreenContainer>
    </Pressable>
  );
}
