import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useViewModal} from './../../signup/signupViewModal';
import {RedButton, Button} from '../../../../components/button';
import {Spacer, dimensions} from '../../../../components/tools';

// const Profile = (props:any) => {
//     return(
// <View>
//     <Text>Profile screen</Text>
// </View>
//     )

// };
// export default Profile;

const Profile = (props: any) => {
  const receivedData = props.route?.params?.data || 'No data received';
  let firstName = receivedData.firstName;
  let lastName = receivedData.lastName;
  let email = receivedData.email;
  let firebaseUid = receivedData.firebaseUid;
  let {socialSignInSignUp} = useViewModal();

  return (
    <View style={styles.container}>
      <View style={styles.inputDiv}>
        <TextInput
          style={styles.input}
          placeholder=" First Name"
          value={firstName}
          //onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputDiv}>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          // onChangeText={(text) => setLastName(text)}
        />
      </View>
      <View style={styles.inputDiv}>
        <TextInput
          style={styles.input}
          editable={receivedData?.email ? false : true}
          placeholder="Email"
          value={email}
          //  onChangeText={(text) => setEmailId(text)}
        />
      </View>

      <Spacer style={styles.spacerStyle} position="top" size={25}>
        <TouchableOpacity
          onPress={() => socialSignInSignUp({email, firebaseUid})}>
          <RedButton title="Submit" />
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
export default Profile;
