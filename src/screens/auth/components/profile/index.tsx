import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
//import {useViewModal} from './../../signIn/signInViewModal';
import {RedButton, Button} from '../../../../components/button';
import {ImageContainer, Spacer, dimensions} from '../../../../components/tools';
import {useViewModal} from '../../signin/signinViewModal';

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
  let {
    socialSignInSignUp,
    displayName,
    setDisplayName,
    mobileNo,
    setMobileNo,
    dob,
    setDob,
    name,
    secondName,
    setSecondName,
    setName,
  } = useViewModal();

  return (
    <View style={styles.container}>
      <ImageContainer
        height={56}
        width={56}
        marginTop={50}
        marginBottom={50}
        source={require('../../../../assets/images/logo.png')}
      />

      <View style={styles.inputDiv}>
        <TextInput
          style={styles.input}
          placeholder=" First Name"
          value={receivedData?.firstName ? receivedData?.firstName : name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputDiv}>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={receivedData?.lastName ? receivedData?.lastName : secondName}
          onChangeText={(text) => setSecondName(text)}
        />
      </View>

      <View style={styles.inputDiv}>
        <TextInput
          style={styles.input}
          placeholder="Display Name"
          value={displayName}
          onChangeText={(text) => setDisplayName(text)}
        />
      </View>

      <View style={styles.inputDiv}>
        <TextInput
          style={styles.input}
          placeholder="Mobile No"
          value={mobileNo}
          onChangeText={(text) => setMobileNo(text)}
        />
      </View>

      <View style={styles.inputDiv}>
        <TextInput
          style={styles.input}
          editable={receivedData?.email ? false : true}
          placeholder="Email"
          value={receivedData?.email}
          //  onChangeText={(text) => setEmailId(text)}
        />
      </View>

      <View style={styles.inputDiv}>
        <TextInput
          style={styles.input}
          placeholder="Date of birth"
          value={dob}
          onChangeText={(text) => setDob(text)}
        />
      </View>

      <Spacer style={styles.spacerStyle} position="top" size={25}>
        <TouchableOpacity
          onPress={() => socialSignInSignUp({email, firebaseUid,dob,displayName})}>
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
