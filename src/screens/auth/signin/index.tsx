import React from 'react';
import {View, ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {useViewModal} from './signinViewModal';
import {styles} from './signInStyle';
import EmailLogin from './components';
import {Button} from '../../../components/button';
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
export default function SignInScreen() {
  let {
    count,
    updateCount,
    loading,
    _googleSignIn,
    email,
    setEmail,
    password,
    setPassword,
    signInWithEmailPassword,
    handleAppleSignIn,
    _onFbLogIn,
  } = useViewModal();
  return (
    <View style={styles.containerStyle}>
      <ImageContainer
        width={72}
        height={54}
        marginTop={50}
        source={require('../../../assets/images/logo.png')}
      />
      <Text style={styles.headingText}>Login to Your Account</Text>
      <Spacer position="bottom" size={20}>
        <Spacer position="top" size={20}>
          <EmailLogin
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            signInWithEmailPassword={signInWithEmailPassword}
          />
        </Spacer>
      </Spacer>
      <Row style={styles.continueText}>
        <Text style={styles.emptyText}></Text>
        <Text>Or continue with</Text>
        <Text />
      </Row>
      <Row justifyContent="center" style={styles.socialLogin}>
        <ImageContainer
          width={30}
          height={35}
          source={require('../../../assets/images/facebookLogo.png')}
        />
        <ImageContainer
          width={30}
          height={35}
          source={require('../../../assets/images/googleLogo.png')}
        />
        {!isAndroid && (
          <TouchableOpacity onPress={_googleSignIn}>
            <ImageContainer
              width={30}
              height={35}
              // onPress={_googleSignIn}
              source={require('../../../assets/images/appleLogo.png')}
            />
          </TouchableOpacity>
        )}

        {/* <Button title="Google Login" onPress={_googleSignIn} /> */}
      </Row>
    </View>
  );
}
