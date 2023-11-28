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

const VerificationStepOne = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState('');

  console.log(`Verification`, value);

  return (
    <ScreenContainer>
      <HeaderBar />
      <Text style={verificationStyle.subHeader}>ID Verification (Step I)</Text>
      <View style={verificationStyle.container}>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <Row style={verificationStyle.rowView} alignItems="center">
            <RadioButton color={colors.ui.primary} value="NPI Number" />
            <Text style={verificationStyle.btnText}>
              NPI Number (Recommended)
            </Text>
          </Row>
          {value === 'NPI Number' && (
            <View style={verificationStyle.textBox}>
              <FlatInput label="Individual NPI Number" />
              <ErrorText>Enter valid NPI Number</ErrorText>
            </View>
          )}

          <Row style={verificationStyle.rowView} alignItems="center">
            <RadioButton color={colors.ui.primary} value="License Number" />
            <Text style={verificationStyle.btnText}>License Number</Text>
          </Row>
          {value === 'License Number' && (
            <>
              <View style={verificationStyle.textBox}>
                <FlatInput label="License Number" />
              </View>
              <View style={verificationStyle.textBox}>
                <FlatInput label="State/Territory" />
                <ErrorText>(max 40 characters)</ErrorText>
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
          <PrimaryButton
            onPress={() => navigation.navigate('/verificationStepTwo')}
            title="Next"
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default VerificationStepOne;
