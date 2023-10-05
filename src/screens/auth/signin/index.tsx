import React from 'react';
import {View, ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {useViewModal} from './signinViewModal';
import {ErrorText, styles} from './signInStyle';
import EmailLogin from '../components';
import {Button} from '../../../components/button';
import {ImageContainer, ScreenContainer} from '../../../components/tools';
import {isAndroid, Row, Spacer} from '../../../components/tools';
import {MyText} from '../../../components/typography/text.component';
enum Variants {
  Body = 'body',
  Label = 'label',
  Caption = 'caption',
  Error = 'error',
  Hint = 'hint',
}
export default function SignInScreen() {
  let {
    count,
    updateCount,
    loading,
    _googleSignIn,
    handleSignUpPress,
    email,
    setEmail,
    password,
    setPassword,
    signInWithEmailPassword,
    handleAppleSignIn,
    _onFbLogIn,
  } = useViewModal();
  return (
    <ScreenContainer>
      <View style={styles.viewDiv}>
        <ImageContainer
          width={72}
          height={54}
          marginTop={50}
          source={require('../../../assets/images/logo.png')}
        />
      </View>
      <MyText variant={Variants.Error}>Hello world</MyText>
      {/* <Text style={styles.headingText}>Login to Your Account</Text> */}
      <Spacer position="bottom" size={20}>
        <Spacer position="top" size={20}>
          <EmailLogin
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onPress={signInWithEmailPassword}
            title="Login"
            isLoading={loading}
          />
        </Spacer>
      </Spacer>
      <ErrorText>Error</ErrorText>
      <Row justifyContent="center">
        <Text style={styles.centerText}>Or continue with</Text>
      </Row>
      <Row justifyContent="center" style={styles.socialLogin}>
        <TouchableOpacity onPress={_onFbLogIn}>
          <ImageContainer
            width={30}
            height={35}
            source={require('../../../assets/images/facebookLogo.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={_googleSignIn}>
          <ImageContainer
            width={30}
            height={35}
            source={require('../../../assets/images/googleLogo.png')}
          />
        </TouchableOpacity>

        {!isAndroid && (
          <TouchableOpacity onPress={handleAppleSignIn}>
            <ImageContainer
              width={30}
              height={35}
              source={require('../../../assets/images/appleLogo.png')}
            />
          </TouchableOpacity>
        )}
      </Row>

      <Spacer position="top" size={20}>
        <Row justifyContent="center">
          <Text style={styles.footerText}>Don’t have an account ?</Text>
          <TouchableOpacity onPress={handleSignUpPress}>
            <Text style={styles.linkText}> Sign Up </Text>
          </TouchableOpacity>
        </Row>
      </Spacer>
    </ScreenContainer>
  );
}
