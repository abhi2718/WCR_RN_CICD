import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Row, ScreenContainer } from '../../../components/tools';
import { HeaderBar } from '../../../components/header';
import { RadioButton } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';
import { verificationStyle } from './verificationSteps';
import { FlatInput } from '../../../components/inputBox';
import { ErrorText } from '../../auth/signin/signInStyle';
import { PrimaryButton } from '../../../components/button';
import { useNavigation } from '@react-navigation/native';
import VerificationStepTwo from '../stepTwo';
import { ScreenParams } from '../../../types/services.types/firebase.service';
import { useVerificationViewModal } from './stepOne.ViewModal';

const VerificationStepOne = (props: ScreenParams) => {
  const {
    verificationOption,
    setVerificationOption,
    handleVerificationOption,
    validationErrors,
    handleInputChange,
  } = useVerificationViewModal(props);

  return (
    <ScreenContainer>
      <HeaderBar />
      <Text style={verificationStyle.subHeader}>ID Verification (Step I)</Text>
      <View style={verificationStyle.container}>
        <RadioButton.Group
          onValueChange={(newValue) => setVerificationOption(newValue)}
          value={verificationOption}
        >
          <Row style={verificationStyle.rowView} alignItems="center">
            <RadioButton color={colors.ui.primary} value="NPI Number" />
            <Text style={verificationStyle.btnText}>
              NPI Number (Recommended)
            </Text>
          </Row>
          {verificationOption === 'NPI Number' && (
            <View style={verificationStyle.textBox}>
              <FlatInput
                label="Individual NPI Number"
                maxLength={10}
                error={validationErrors.npiNumber}
                onChangeText={(text: string) =>
                  handleInputChange('npiNumber', text)
                }
              />
              <ErrorText>{validationErrors.npiNumber}</ErrorText>
            </View>
          )}

          <Row style={verificationStyle.rowView} alignItems="center">
            <RadioButton color={colors.ui.primary} value="License Number" />
            <Text style={verificationStyle.btnText}>License Number</Text>
          </Row>
          {verificationOption === 'License Number' && (
            <>
              <View style={verificationStyle.textBox}>
                <FlatInput
                  label="License Number"
                  maxLength={10}
                  onChangeText={(text: string) =>
                    handleInputChange('license', text)
                  }
                  error={validationErrors.license}
                />
                <ErrorText>{validationErrors.license}</ErrorText>
              </View>
              <View style={verificationStyle.textBox}>
                <FlatInput
                  label="State/Territory"
                  maxLength={40}
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
            <RadioButton color={colors.ui.primary} value="Student" />
            <Text style={verificationStyle.btnText}>Student</Text>
          </Row>

          <Row style={verificationStyle.rowView} alignItems="center">
            <RadioButton color={colors.ui.primary} value="Other" />
            <Text style={verificationStyle.btnText}>All Other Users</Text>
          </Row>
        </RadioButton.Group>
        <View style={verificationStyle.footerDiv}>
          <PrimaryButton onPress={handleVerificationOption} title="Next" />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default VerificationStepOne;
