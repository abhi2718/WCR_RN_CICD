import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import {
  ImageContainer,
  Row,
  ScreenContainer,
} from '../../../../../components/tools';
import { addEthnicityStyle } from './AddEthnicityStyle';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { PrimaryButton } from '../../../../../components/button';
import { Checkbox } from 'react-native-paper';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { fontSizes } from '../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../infrastructure/theme/colors';

const AddEthnicity = () => {
  return (
    <ScreenContainer>
      <View style={addEthnicityStyle.container}>
        <View>
          <Row justifyContent="space-between" alignItems="center">
            <Image
              style={addEthnicityStyle.arrow}
              source={require('../../../../../assets/images/icons/arrow.png')}
            />
            <Image
              style={addEthnicityStyle.logo}
              source={require('../../../../../assets/images/logo.png')}
            />
            <Text style={addEthnicityStyle.skipBtn}>Skip</Text>
          </Row>
          <Text style={addEthnicityStyle.subHeader}>Your Ethnicity</Text>

          <Row style={addEthnicityStyle.rowView} alignItems="center">
            <BouncyCheckbox
              text="American Indian or Alaska Native"
              iconStyle={{ borderColor: 'gray', borderRadius: 0 }}
              fillColor="#BB0000"
              unfillColor="#fff"
              innerIconStyle={{
                borderRadius: 1,
              }}
              textStyle={{
                fontWeight: '600',
                fontSize: fontSizes.text,
                color: colors.ui.text,
                textDecorationLine: 'none',
              }}
            />
            <Text style={addEthnicityStyle.checkboxText}></Text>
          </Row>
          <Row style={addEthnicityStyle.rowView} alignItems="center">
            <BouncyCheckbox fillColor="#BB0000" unfillColor="#FFFFFF" />
            <Text style={addEthnicityStyle.checkboxText}>East Asian</Text>
          </Row>
          <Row style={addEthnicityStyle.rowView} alignItems="center">
            <BouncyCheckbox fillColor="#BB0000" unfillColor="#FFFFFF" />
            <Text style={addEthnicityStyle.checkboxText}>South Asian</Text>
          </Row>
          <Row style={addEthnicityStyle.rowView} alignItems="center">
            <BouncyCheckbox fillColor="#BB0000" unfillColor="#FFFFFF" />
            <Text style={addEthnicityStyle.checkboxText}>
              Black or African American
            </Text>
          </Row>
          <Row style={addEthnicityStyle.rowView} alignItems="center">
            <BouncyCheckbox fillColor="#BB0000" unfillColor="#FFFFFF" />
            <Text style={addEthnicityStyle.checkboxText}>Middle Eastern</Text>
          </Row>
          <Row style={addEthnicityStyle.rowView} alignItems="center">
            <BouncyCheckbox fillColor="#BB0000" unfillColor="#FFFFFF" />
            <Text style={addEthnicityStyle.checkboxText}>
              Hispanic or Latino
            </Text>
          </Row>
          <Row style={addEthnicityStyle.rowView} alignItems="center">
            <BouncyCheckbox fillColor="#BB0000" unfillColor="#FFFFFF" />
            <Text style={addEthnicityStyle.checkboxText}>
              Native Hawaiian or Pacific Island
            </Text>
          </Row>
          <Row style={addEthnicityStyle.rowView} alignItems="center">
            <BouncyCheckbox fillColor="#BB0000" unfillColor="#FFFFFF" />
            <Text style={addEthnicityStyle.checkboxText}>
              White or Caucasion
            </Text>
          </Row>
          <Row style={addEthnicityStyle.rowView} alignItems="center">
            <BouncyCheckbox fillColor="#BB0000" unfillColor="#FFFFFF" />
            <Text style={addEthnicityStyle.checkboxText}>Other</Text>
          </Row>
        </View>
        <PrimaryButton title="Next" />
      </View>
    </ScreenContainer>
  );
};

export default AddEthnicity;
