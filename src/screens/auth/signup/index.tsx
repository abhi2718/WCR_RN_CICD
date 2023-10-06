import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {styles} from './signupStyle';
// import EmailLogin from '';
import {
  ImageContainer,
  Row,
  ScreenContainer,
  Spacer,
  isAndroid,
} from '../../../components/tools';
import EmailLogin from '../components';
import {useViewModal} from './signupViewModal';

const SignUpScreen = () => {
  let {
    signUpWithEmailPassword,
    navigateTosignInScreen,
    _googleSignIn,
    navigateToProfile,
    setEmail,
    password,
    setPassword,
    email,
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
      <Text style={styles.headingText}>Create Your Account</Text>
      <Spacer position="bottom" size={20}>
        <Spacer position="top" size={20}>
          <EmailLogin
            title="Sign Up"
            onPress={signUpWithEmailPassword}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        </Spacer>
      </Spacer>
      <Row justifyContent="center" style={styles.continueText}>
        <Text style={styles.emptyText}></Text>
        <Text>Or continue with</Text>
        <Text />
      </Row>
      <Row justifyContent="center" style={styles.socialLogin}>
        <ImageContainer
          width={36}
          height={38}
          source={require('../../../assets/images/facebookLogo.png')}
        />

        <TouchableOpacity onPress={_googleSignIn}>
        <ImageContainer
          width={36}
          height={38}
          source={require('../../../assets/images/googleLogo.png')}
        />
        </TouchableOpacity>
        
        {!isAndroid && (
          <TouchableOpacity>
            <ImageContainer
              width={36}
              height={38}
              source={require('../../../assets/images/appleLogo.png')}
            />
          </TouchableOpacity>
        )}

        {/* <Button title="Google Login" onPress={_googleSignIn} /> */}
      </Row>

      <Spacer position="top" size={20}>
        <Row justifyContent="center">
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={navigateTosignInScreen}>
            <Text style={styles.linkText}> Sign In </Text>
          </TouchableOpacity>
        </Row>
      </Spacer>
    </ScreenContainer>
  );
};

export default SignUpScreen;
