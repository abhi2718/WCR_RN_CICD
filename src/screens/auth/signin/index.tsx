import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {useViewModal} from './signinViewModal';
import {styles} from './signInStyle';
import EmailLogin from './components';
import {Button} from '../../../components/button';
import {isAndroid, Spacer} from '../../../components/tools';
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
      <Spacer position="bottom" size={16}>
        <EmailLogin
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          signInWithEmailPassword={signInWithEmailPassword}
        />
      </Spacer>
      <Text
        style={{
          fontFamily: 'Roboto-BlackItalic',
          fontSize: 30,
        }}>
        Adding Custom FontFamily
      </Text>
      <Spacer position="bottom" size={16}>
        <Button
          isLoading={loading}
          title="Google Login"
          onPress={_googleSignIn}
        />
      </Spacer>
      {!isAndroid && (
        <Button
          isLoading={loading}
          title="Apple Login"
          onPress={handleAppleSignIn}
        />
      )}
      <Spacer position="top" size={16}>
        <Button isLoading={loading} title="Fb Login" onPress={_onFbLogIn} />
      </Spacer>
    </View>
  );
}
