import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useViewModal} from './signinViewModal';
import {styles} from './signInStyle';
import EmailLogin from './components';
import {Button} from '../../../components/button';
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
  } = useViewModal();
  return (
    <View style={styles.containerStyle}>
      <EmailLogin
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        signInWithEmailPassword={signInWithEmailPassword}
      />
      <Button
        isLoading={loading}
        title="Google Login"
        onPress={_googleSignIn}
      />
    </View>
  );
}
