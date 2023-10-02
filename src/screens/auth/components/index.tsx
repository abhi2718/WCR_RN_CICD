import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RedButton, Button} from '../../../components/button';
import {Spacer, dimensions} from '../../../components/tools';

const EmailLogin = (props: any) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    signInWithEmailPassword,
    onPress,
    title,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inputDiv}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputDiv}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>

      <Spacer style={styles.spacerStyle} position="top" size={25}>
        <TouchableOpacity onPress={onPress}>
          <RedButton title={title} />
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: dimensions.width,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputDiv: {
    alignSelf: 'stretch',
    backgroundColor: '#f8f8f9',
    borderRadius: 14,
    height: 56,
    padding: 15,
    marginTop: 24,
  },
  input: {
    alignSelf: 'stretch',
    fontSize: 18,
    borderWidth: 0,
    borderColor: 'transparent',
    autoCapitalize: 'none',
  },
  spacerStyle: {
    alignSelf: 'stretch',
  },
  buttonText: {
    color: '#FEFBFD',
    fontSize: 16,
    textAlign: 'center',
  },
});
export default EmailLogin;
