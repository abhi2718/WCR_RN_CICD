import React, {useEffect} from 'react';

import {
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {RedButton} from '../../../../../components/button';
import {
  ImageContainer,
  Row,
  ScreenContainer,
  Spacer,
  dimensions,
} from '../../../../../components/tools';
import {useViewModal} from '../../signinViewModal';
import {useProfileUseViewModal} from './profileViewModal';
import {profileStyles} from './profileStyle';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
//import {calculateDateLessThan18YearsAgo} from '../../../../utils/common.functions';
//import {ModalComponent} from '../../../../components/modal/index';
import moment from 'moment';
import {ModalComponent} from '../../../../../components/modal';
import {calculateDateLessThan18YearsAgo} from '../../../../../utils/common.functions';
import {FlatInput} from '../../../../../components/inputBox/index';
import {ErrorText} from '../../signInStyle';

const Profile = (props: any) => {
  // put logic in viewModal
  const receivedData = props.route?.params?.data || 'No data received';
  let credential = receivedData.credential;
  let email = receivedData.email;
  let appleId = receivedData?.appleId;
  let {
    formData,
    firebaseUid,
    fbId,
    handleConfirm,
    handleInputChange,
    handleDateChange,
    handleSubmit,
    isWelcomeModalVisible,

    toggleModal,

    selectedDate,
    formateDOB,
    isModalVisible,
    validationErrors,
    toUpperFirstName,
    formatMobile,
    closeModal,
  } = useProfileUseViewModal(props);
  // put in viewModal

  return (
    <ScreenContainer>
      <View style={profileStyles.container}>
        <View style={profileStyles.innerView}>
          <ModalComponent
            isVisible={isWelcomeModalVisible}
            onClose={closeModal}
          />

          <View style={{flex: 1}}>
            <Row
              alignItems="center"
              justifyContent="space-between"
              style={profileStyles.rowHeader}>
              <ImageContainer
                height={30}
                width={30}
                source={require('../../../../../assets/images/icons/arrow.png')}
              />

              <ImageContainer
                height={40}
                width={40}
                source={require('../../../../../assets/images/logo.png')}
              />
              <View />
            </Row>

            <Text style={profileStyles.subHeader}>
              Let us know a little about you.
            </Text>

            <FlatInput
              label="First Name"
              value={formData.firstName}
              onChangeText={(text: string) =>
                handleInputChange('firstName', toUpperFirstName(text))
              }
              error={validationErrors.firstName}
            />
            {validationErrors.firstName && (
              <ErrorText> {validationErrors.firstName}</ErrorText>
            )}

            <FlatInput
              label="Last Name"
              value={formData.lastName}
              onChangeText={(text: string) =>
                handleInputChange('lastName', toUpperFirstName(text))
              }
              error={validationErrors.lastName}
            />
            {validationErrors.lastName && (
              <ErrorText> {validationErrors.lastName}</ErrorText>
            )}

            <FlatInput
              label="Display Name"
              value={formData.displayName}
              onChangeText={(text: string) =>
                handleInputChange('displayName', text)
              }
            />

            <FlatInput
              label="Mobile No"
              value={formData.mobile}
              onChangeText={(text: string) =>
                handleInputChange('mobile', formatMobile(text))
              }
              error={validationErrors.mobile}
            />
            {validationErrors.mobile && (
              <ErrorText> {validationErrors.mobile}</ErrorText>
            )}

            <FlatInput
              editable={email ? false : true}
              value={formData.email}
              onChangeText={(text: string) => handleInputChange('email', text)}
              label="Email"
              theme={{colors: {primary: 'red'}}}
            />

            <View style={profileStyles.datePickerContainer}>
              <TouchableOpacity
                style={profileStyles.openButton}
                onPress={toggleModal}>
                <ImageContainer
                  height={12}
                  width={22}
                  source={require('../../../../../assets/images/icons/calender.png')}
                />
              </TouchableOpacity>

              <DatePicker
                modal
                mode="date"
                open={isModalVisible}
                maximumDate={calculateDateLessThan18YearsAgo(new Date())}
                date={selectedDate}
                onDateChange={handleDateChange}
                onConfirm={(date) => {
                  toggleModal();
                  handleDateChange(date);
                }}
                onCancel={() => {
                  toggleModal();
                }}
              />
              <FlatInput
                editable={true}
                label="MM/DD/YYYY"
                value={formData.dob}
                onChangeText={(text: string) =>
                  handleInputChange('dob', formateDOB(text))
                }
                error={validationErrors.dob}
              />
              {validationErrors.dob && (
                <ErrorText> {validationErrors.dob}</ErrorText>
              )}
            </View>
          </View>

          <View>
            <Spacer position="top" size={25}>
              <RedButton
                title="Submit"
                // onPress={() => newUserSignUp(receivedData?.email)}
                onPress={() => handleSubmit(credential)}
              />
            </Spacer>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Profile;
