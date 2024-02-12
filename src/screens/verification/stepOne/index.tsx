import React from 'react';
import { Pressable, Text, View,Keyboard, KeyboardAvoidingView } from 'react-native';
import { Row, ScreenContainer, isAndroid } from '../../../components/tools';
import { HeaderBar } from '../../../components/header';
import { RadioButton } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';
import { verificationStyle } from './verificationSteps';
import { FlatInput } from '../../../components/inputBox';
import { ErrorText } from '../../auth/signin/signInStyle';
import { PrimaryButton } from '../../../components/button';
import { ScreenParams } from '../../../types/services.types/firebase.service';
import { useVerificationViewModal } from './stepOne.ViewModal';
import { VerificationInfoModal } from '../../../components/verificationModal';

const VerificationStepOne = (props: ScreenParams) => {
  const {
    verificationOption,
    handleVerificationOption,
    validationErrors,
    changeVerificationOption,
    handleInputChange,
    optionData,
    country,
    isVerificationInfoModalVisible,
    closeModal,
  } = useVerificationViewModal(props);
  return (
    <KeyboardAvoidingView
      style={verificationStyle.wrapper}
      enabled
      behavior={isAndroid ? 'height' : 'padding'}
    >
       <ScreenContainer>
       <VerificationInfoModal
          isVisible={isVerificationInfoModalVisible}
          onClose={closeModal}
        />
      <HeaderBar isVerificartionScreen={true} flagType={country} />
      <Text style={verificationStyle.subHeader}>ID Verification (Step I)</Text>
      <Pressable style={verificationStyle.wrapper} onPress={() => {
        Keyboard.dismiss()
      }}>
      <View style={verificationStyle.container}>
        <RadioButton.Group
          onValueChange={(newValue) => changeVerificationOption(newValue)}
          value={verificationOption}
        >
          {country === 'USA' && (
            <Row style={verificationStyle.rowView} alignItems="center">
              <RadioButton.Android
                color={colors.ui.primary}
                value="NPI Number"
              />
              <Text style={verificationStyle.btnText}>
                NPI Number (Recommended)
              </Text>
            </Row>
          )}
          {verificationOption === 'NPI Number' && (
            <View style={verificationStyle.textBox}>
              <FlatInput
                label="Individual NPI Number"
                maxLength={10}
                value={optionData.npiNumber}
                error={validationErrors.npiNumber}
                onChangeText={(text: string) =>
                  handleInputChange('npiNumber', text)
                }
              />
              <ErrorText>{validationErrors.npiNumber}</ErrorText>
            </View>
          )}
          {country === 'Canada' && (
            <Row style={verificationStyle.rowView} alignItems="center">
              <RadioButton.Android
                color={colors.ui.primary}
                value="HealthCare"
              />
              <Text style={verificationStyle.btnText}>
                Healthcare Professional
              </Text>
            </Row>
          )}
          {verificationOption === 'HealthCare' && (
            <>
              <View style={verificationStyle.textBox}>
                <FlatInput
                  label="Degree Identifier Type"
                  value={optionData.degreeIdentifierType}
                  onChangeText={(text: string) =>
                    handleInputChange('degreeIdentifierType', text)
                  }
                  error={validationErrors.degreeIdentifierType}
                />
                <ErrorText>{validationErrors.degreeIdentifierType}</ErrorText>
              </View>
              <View style={verificationStyle.textBox}>
                <FlatInput
                  label="Degree Identifier"
                  maxLength={10}
                  value={optionData.degreeIdentifier}
                  onChangeText={(text: string) =>
                    handleInputChange('degreeIdentifier', text)
                  }
                  error={validationErrors.degreeIdentifier}
                />
                <ErrorText>{validationErrors.degreeIdentifier}</ErrorText>
              </View>
              <View style={verificationStyle.textBox}>
                <FlatInput
                  label="Province/Territory"
                  maxLength={30}
                  value={optionData.teritory}
                  onChangeText={(text: string) =>
                    handleInputChange('teritory', text)
                  }
                  error={validationErrors.teritory}
                />
                <ErrorText>{validationErrors.teritory}</ErrorText>
              </View>
            </>
          )}          
          {country === 'USA' && (
            <Row style={verificationStyle.rowView} alignItems="center">
              <RadioButton.Android
                color={colors.ui.primary}
                value="License Number"
              />
              <Text style={verificationStyle.btnText}>License Number</Text>
            </Row>
          )}
          {verificationOption === 'License Number' && (
            <>
              <View style={verificationStyle.textBox}>
                <FlatInput
                  label="License Number"
                  maxLength={10}
                  value={optionData.licenseNumber}
                  onChangeText={(text: string) =>
                    handleInputChange('licenseNumber', text)
                  }
                  error={validationErrors.licenseNumber}
                />
                <ErrorText>{validationErrors.licenseNumber}</ErrorText>
              </View>
              <View style={verificationStyle.textBox}>
                <FlatInput
                  label="State/Territory"
                  maxLength={40}
                  value={optionData.state}
                  onChangeText={(text: string) =>
                    handleInputChange('state', text)
                  }
                  error={validationErrors.state}
                />
                <ErrorText>{validationErrors.state}</ErrorText>
              </View>
            </>
          )}
          <Row style={verificationStyle.rowView} alignItems="center">
            <RadioButton.Android color={colors.ui.primary} value="Student" />
            <Text style={verificationStyle.btnText}>Student</Text>
          </Row>
          <Row style={verificationStyle.rowView} alignItems="center">
            <RadioButton.Android color={colors.ui.primary} value="Others" />
            <Text style={verificationStyle.btnText}>All Other Users</Text>
          </Row>
        </RadioButton.Group>
        <View style={verificationStyle.footerDiv}>
          <PrimaryButton onPress={handleVerificationOption} title="Next" />
        </View>
      </View>
      </Pressable>
    </ScreenContainer>
    </KeyboardAvoidingView>
  );
};
 
export default VerificationStepOne;
