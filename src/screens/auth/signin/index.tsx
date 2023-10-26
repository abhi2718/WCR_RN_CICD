import React from 'react';
import {View, TextInput, ScrollView} from 'react-native';
import {useViewModal} from './signinViewModal';
import {styles} from './signInStyle';
import {
  RoundedButtonWithIconAndText,
  RedButton,
} from '../../../components/button';
import {ImageContainer, ScreenContainer} from '../../../components/tools';
import {isAndroid} from '../../../components/tools';
import {NavigationProp, useNavigation} from '@react-navigation/native';
type navigationProps = {
  navigation: {
    navigate: (route: string, params?: any) => void;
  };
};
export default function SignInScreen({navigation}: navigationProps) {
  const {
    _onFbLogIn,
    _googleSignIn,
    getOtpToVerifyEmail,
    handleAppleSignIn,
    email,
    setEmail,
  } = useViewModal(navigation);
  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.scrollDiv} keyboardShouldPersistTaps="always">
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ImageContainer
            height={65}
            width={65}
            source={require('../../../assets/images/logo.png')}
          />
        </View>
        <RoundedButtonWithIconAndText
          onPress={_onFbLogIn}
          title={'Continue with Facebook'}
          iconSource={require('../../../assets/images/facebookLogo.png')}
        />
        <RoundedButtonWithIconAndText
          onPress={_googleSignIn}
          title={'Continue with Google'}
          iconSource={require('../../../assets/images/googleLogo.png')}
        />
        {!isAndroid && (
          <RoundedButtonWithIconAndText
            onPress={handleAppleSignIn}
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
            // put it in viewModal
            // put email regex on each key stoke
            onChangeText={(email: string) => {
              setEmail(email);
            }}
            placeholderTextColor="rgba(35, 35, 35, 0.4)" 
          />
        </View>
        <RedButton
          title='Continue'
          onPress={getOtpToVerifyEmail}
        />
      </ScrollView>
    </ScreenContainer>
  );
}
