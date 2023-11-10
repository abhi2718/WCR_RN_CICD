import React from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import { useViewModal } from './signinViewModal';
import { styles } from './signInStyle';

import {
  RoundedButtonWithIconAndText,
  PrimaryButton,
} from '../../../components/button';
import { ImageContainer, ScreenContainer } from '../../../components/tools';
import { isAndroid } from '../../../components/tools';
import { sizes } from '../../../infrastructure/theme/sizes';

import Loader from '../../../components/loader/loader';
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
  } = useViewModal(props);
  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.scrollDiv}
        keyboardShouldPersistTaps="always"
      >
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <ImageContainer
            height={sizes[10]}
            width={sizes[10]}
            source={require('../../../assets/images/logo.png')}
          />
        </View>
        <RoundedButtonWithIconAndText
          onPress={loading ? () => {} : _onFbLogIn}
          title={'Continue with Facebook'}
          iconSource={require('../../../assets/images/facebookLogo.png')}
        />
        <RoundedButtonWithIconAndText
          onPress={loading ? () => {} : _googleSignIn}
          title={'Continue with Google'}
          iconSource={require('../../../assets/images/googleLogo.png')}
        />
        {!isAndroid && (
          <RoundedButtonWithIconAndText
            onPress={loading ? () => {} : handleAppleSignIn}
            title={'Continue with Apple'}
            iconSource={require('../../../assets/images/appleLogo.png')}
          />
        )}
        <View style={styles.inputContainerr}>
          <ImageContainer
            source={require('../../../assets/images/Email-icon.png')}
            style={styles.emailIconStyle}
          />
          {/* Make a common component */}
          <TextInput
            style={styles.emailInputBox}
            placeholder={'Email'}
            value={email}
            onChangeText={(email: string) => {
              setEmail(email);
            }}
            placeholderTextColor="rgba(35, 35, 35, 0.4)"
          />
        </View>
        <PrimaryButton
          title="Continue"
          onPress={getOtpToVerifyEmail}
          isLoading={loading}
        />
      </ScrollView>
    </ScreenContainer>
  );
}
