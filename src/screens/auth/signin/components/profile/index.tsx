import React, {useEffect} from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {RedButton} from '../../../../../components/button';
import {ImageContainer, Spacer, dimensions} from '../../../../../components/tools';
import {useViewModal} from '../../signinViewModal';
import {profileUseViewModal} from './profileViewModal';
import {profileStyles} from './profileStyle';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
import {calculateDateLessThan18YearsAgo} from '../../../../../utils/common.functions';

const Profile = (props: any) => {
  const {navigation} = props;

  let {
    formData,
    handleInputChange,
    handleDateChange,
    handleSubmit,
    email,
    toggleModal,
    errorMessage,
    setErrorMessage,
    selectedDate,
    formateDOB,
    credential,
    isModalVisible,
    validationErrors,
    toUpperFirstName,
    formatMobile,
  } = profileUseViewModal(navigation);

  useEffect(() => {
    handleInputChange('email', email);
  }, [email]);

  return (
    <View style={profileStyles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageContainer
          height={56}
          width={56}
          marginTop={50}
          marginBottom={50}
          source={require('../../../../../assets/images/logo.png')}
        />

        <View style={profileStyles.inputDiv}>
          <TextInput
            style={profileStyles.input}
            placeholder=" First Name"
            value={formData.firstName}
            onChangeText={(text) =>
              handleInputChange('firstName', toUpperFirstName(text))
            }
          />
          {validationErrors.firstName && (
            <Text style={profileStyles.errorText}>
              {validationErrors.firstName}
            </Text>
          )}
        </View>
        <View style={profileStyles.inputDiv}>
          <TextInput
            style={profileStyles.input}
            placeholder="Last Name"
            value={formData.lastName}
            onChangeText={(text) =>
              handleInputChange('lastName', toUpperFirstName(text))
            }
          />
          {validationErrors.lastName && (
            <Text style={profileStyles.errorText}>
              {validationErrors.lastName}
            </Text>
          )}
        </View>

        <View style={profileStyles.inputDiv}>
          <TextInput
            style={profileStyles.input}
            placeholder="Display Name"
            value={formData.displayName}
            onChangeText={(text) => handleInputChange('displayName', text)}
          />
        </View>

        <View style={profileStyles.inputDiv}>
          <TextInput
            style={profileStyles.input}
            placeholder="Mobile No"
            value={formData.mobile}
            onChangeText={(text) =>
              handleInputChange('mobile', formatMobile(text))
            }
          />
          {validationErrors.mobile && (
            <Text style={profileStyles.errorText}>
              {validationErrors.mobile}
            </Text>
          )}
        </View>

        <View style={profileStyles.inputDiv}>
          <TextInput
            style={profileStyles.input}
            editable={email ? false : true}
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
        </View>

        <View style={profileStyles.inputDiv}>
          <TouchableOpacity onPress={toggleModal}>
            <Text style={profileStyles.openButton}>Selecte Date</Text>
          </TouchableOpacity>
          <Modal isVisible={isModalVisible}>
            <View style={profileStyles.modalContainer}>
              <Text style={profileStyles.label}>Select a Date:</Text>
              {errorMessage && (
                <Text style={profileStyles.error}>{errorMessage}</Text>
              )}
              <DatePicker
                mode="date"
                maximumDate={calculateDateLessThan18YearsAgo(new Date())}
                date={selectedDate}
                onDateChange={handleDateChange}
              />
              <TouchableOpacity onPress={toggleModal}>
                <Text style={profileStyles.closeButton}>OK</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <TextInput
            editable={true}
            style={profileStyles.input}
            placeholder="MM/DD-YYY"
            value={formData.dob}
            onChangeText={(text) => handleInputChange('dob', formateDOB(text))}
          />
          {validationErrors.dob && (
            <Text style={profileStyles.errorText}>{validationErrors.dob}</Text>
          )}
        </View>

        <Spacer style={profileStyles.spacerStyle} position="top" size={25}>
          <RedButton
            title="Submit"
            // onPress={() => newUserSignUp(receivedData?.email)}
            onPress={() => handleSubmit(credential)}
          />
        </Spacer>
      </ScrollView>
    </View>
  );
};

export default Profile;
