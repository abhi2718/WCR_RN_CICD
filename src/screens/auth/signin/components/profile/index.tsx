import React, { useEffect } from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';

import { PrimaryButton } from '../../../../../components/button';
import {
  ImageContainer,
  Row,
  ScreenContainer,
  Spacer,
  dimensions,
} from '../../../../../components/tools';
import { useViewModal } from '../../signinViewModal';
import { useProfileUseViewModal } from './profileViewModal';
import { profileStyles } from './profileStyle';
import DatePicker from 'react-native-date-picker';
//import {calculateDateLessThan18YearsAgo} from '../../../../utils/common.functions';
//import {ModalComponent} from '../../../../components/modal/index';
import moment from 'moment';
import { WelcomeModalComponent } from '../../../../../components/modal';
import { calculateDateLessThan18YearsAgo } from '../../../../../utils/common.functions';
import { FlatInput } from '../../../../../components/inputBox/index';
import { ErrorText } from '../../signInStyle';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { HeaderBar } from '../../../../../components/header';
import { isAndroid } from '../../../../../components/tools';

const Profile = (props: ScreenParams) => {
  const receivedData = props.route?.params?.data || 'No data received';
  let credential = receivedData.credential;
  let email = receivedData.email;
  let appleId = receivedData?.appleId;
  let {
    formData,
    handleInputChange,
    handleDateChange,
    handleSubmit,
    isWelcomeModalVisible,
    toggleModal,
    selectedDate,
    formateDOB,
    loading,
    isModalVisible,
    validationErrors,
    toUpperFirstName,
    formatMobile,
    closeModal,
    openModal,
  } = useProfileUseViewModal(props);

  return (
    <ScreenContainer>
      <WelcomeModalComponent
        isVisible={isWelcomeModalVisible}
        onClose={closeModal}
      ></WelcomeModalComponent>
      <View style={profileStyles.container}>
        <View style={profileStyles.innerView}>
          <View style={{ flex: 1 }}>
            <HeaderBar info={openModal}></HeaderBar>
            <Text style={profileStyles.subHeader}>
              Let's get started!{`\n`}Tell us a little about you.
            </Text>
            <KeyboardAvoidingView
              enabled
              behavior={isAndroid ? 'height' : 'padding'}
            >
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
                onChangeText={(text: string) =>
                  handleInputChange('email', text)
                }
                label="Email"
                theme={{ colors: { primary: 'red' } }}
              />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView
              enabled
              behavior={isAndroid ? 'height' : 'padding'}
            >
              <View style={profileStyles.datePickerContainer}>
                <TouchableOpacity
                  style={profileStyles.openButton}
                  onPress={toggleModal}
                >
                  <Image
                    style={profileStyles.openButtonImg}
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
            </KeyboardAvoidingView>
          </View>
          <View>
            <Spacer position="top" size={25}>
              <PrimaryButton
              isLoading={loading}
                title="Submit"
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
