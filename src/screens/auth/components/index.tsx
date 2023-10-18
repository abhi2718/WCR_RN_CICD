import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button} from '../../../components/button';
import {InputBox, Spacer} from '../../../components/tools';

type EmailProps = {
  setEmail: (text: string) => void;
  title?: string;
  email: string;
  setPassword: (text: string) => void;
  password: string;
  onPress: () => void;
};

const EmailLogin = (props: EmailProps) => {
  const {email, setEmail, password, setPassword, onPress, title} = props;
  return (
    <View>
      <View style={styles.inputDiv}>
        <InputBox
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text: any) => setEmail(text)}
        />
      </View>
      <View style={styles.inputDiv}>
        <InputBox
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text: any) => setPassword(text)}
          secureTextEntry
        />
      </View>

      <Spacer style={styles.spacerStyle} position="top" size={25}>
        <TouchableOpacity onPress={onPress}>
          {/* <RedButton title={title!} /> */}
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};
const styles = StyleSheet.create({
  inputDiv: {
    backgroundColor: '#f8f8f9',
    borderRadius: 14,
    height: 56,
    marginTop: 24,
  },
  input: {
    fontSize: 18,
    borderWidth: 0,
    borderColor: 'transparent',
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
