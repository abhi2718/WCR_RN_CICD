import React from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {useViewModal} from './signinViewModal';

import {ErrorText, styles} from './signInStyle';
import EmailLogin from '../components';
import {Variants} from '../../../components/typography';
import {
  Button,
  RoundedButtonWithIconAndText,
  RedButton,
} from '../../../components/button';
import {ImageContainer, dimensions} from '../../../components/tools';
import {
  Column,
  FullLoader,
  InlineLoader,
  InputBox,
  isAndroid,
  Row,
  Spacer,
} from '../../../components/tools';
import { NavigationProp, useNavigation } from '@react-navigation/native';
type navigationProps = {
  navigation:{
    navigate: (route: string, params?: any) => void
  }
}
export default function SignInScreen({
  navigation,
}: navigationProps) {
  const {
    _onFbLogIn,
    _googleSignIn,
    getOtpToVerifyEmail,
    handleAppleSignIn,
    email,
    setEmail,
  } = useViewModal(navigation);
  return (
    <View style={styles.containerStyle}>
      <ImageContainer
        height={54}
        width={72}
        marginTop={50}
        marginBottom={150}
        source={require('../../../assets/images/logo.png')}
      />
      <RoundedButtonWithIconAndText
        onPress={_onFbLogIn}
        text={'Continue with Facebook'}
        iconSource={require('../../../assets/images/facebookLogo.png')}
      />
      <RoundedButtonWithIconAndText
        onPress={_googleSignIn}
        text={'Continue with Google'}
        iconSource={require('../../../assets/images/googleLogo.png')}
      />
      {!isAndroid && (
        <RoundedButtonWithIconAndText
          onPress={handleAppleSignIn}
          text={'Continue with Apple'}
          iconSource={require('../../../assets/images/appleLogo.png')}
        />
      )}

      <View style={styles.inputContainer}>
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
          placeholderTextColor="rgba(35, 35, 35, 0.4)" // Adjust the placeholder text color
        />
      </View>

      <RedButton
        title={'Continue'}
        onPress={() => {
          getOtpToVerifyEmail();
        }}
      />
    </View>
  );
}
