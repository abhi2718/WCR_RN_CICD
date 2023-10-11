import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
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
  const {navigation} = props;
  let firstName = receivedData.firstName;
  let lastName = receivedData.lastName;
  let email = receivedData.email;
  let firebaseUid = receivedData.firebaseUid;
  let {
    socialSignInSignUp,
    newUserSignUp,
    formData,
    setFormData,
    handleInputChange,
    handleSubmit,
    validationErrors,
    setValidationErrors,
  } = useViewModal(navigation);

  useEffect(() => {
    handleInputChange('email', email);
  }, [email]);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
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
            // value={
            //   receivedData?.firstName
            //     ? receivedData?.firstName
            //     : formData.firstName
            // }
            value={formData.firstName}
            onChangeText={(text) => handleInputChange('firstName', text)}
          />
          {validationErrors.firstName && (
            <Text style={styles.errorText}>{validationErrors.firstName}</Text>
          )}
        </View>
        <View style={styles.inputDiv}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={formData.lastName}
            onChangeText={(text) => handleInputChange('lastName', text)}
          />
          {validationErrors.lastName && (
            <Text style={styles.errorText}>{validationErrors.lastName}</Text>
          )}
        </View>

        <View style={styles.inputDiv}>
          <TextInput
            style={styles.input}
            placeholder="Display Name"
            value={formData.displayName}
            onChangeText={(text) => handleInputChange('displayName', text)}
          />
        </View>

        <View style={styles.inputDiv}>
          <TextInput
            style={styles.input}
            placeholder="Mobile No"
            value={formData.mobile}
            onChangeText={(text) => handleInputChange('mobile', text)}
          />
          {validationErrors.mobile && (
            <Text style={styles.errorText}>{validationErrors.mobile}</Text>
          )}
        </View>

        <View style={styles.inputDiv}>
          <TextInput
            style={styles.input}
            editable={receivedData?.email ? false : true}
            placeholder="Email"
            value={formData.email}
            //  onChangeText={(text) => setEmailId(text)}
          />
        </View>

        <View style={styles.inputDiv}>
          <TextInput
            style={styles.input}
            placeholder="Date of birth"
            value={formData.dob}
            onChangeText={(text) => handleInputChange('dob', text)}
          />
          {validationErrors.dob && (
            <Text style={styles.errorText}>{validationErrors.dob}</Text>
          )}
        </View>

        <Spacer style={styles.spacerStyle} position="top" size={25}>
          <RedButton
            title="Submit"
            // onPress={() => newUserSignUp(receivedData?.email)}
            onPress={() => handleSubmit()}
          />
        </Spacer>
      </ScrollView>
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
  errorText: {
    color: 'red',
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
