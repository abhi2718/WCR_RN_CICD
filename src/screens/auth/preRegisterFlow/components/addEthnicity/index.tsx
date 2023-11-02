import React from 'react';
import { Image, Text, View } from 'react-native';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { addEthnicityStyle } from './AddEthnicityStyle';
import { PrimaryButton } from '../../../../../components/button';
import { CheckBox } from '../../../../../components/inputBox';

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
            <CheckBox
              onPress={(isChecked: boolean) => {}}
              text="American Indian or Alaska Native"
            />
          </Row>
          <Row style={addEthnicityStyle.rowView} alignItems="center">
            <CheckBox onPress={(isChecked: boolean) => {}} text="East Asian" />
          </Row>
          <Row style={addEthnicityStyle.rowView} alignItems="center">
            <CheckBox onPress={(isChecked: boolean) => {}} text="South Asian" />
          </Row>
          <Row style={addEthnicityStyle.rowView} alignItems="center">
            <CheckBox
              onPress={(isChecked: boolean) => {}}
              text="Black or African American"
            />
          </Row>
          <Row style={addEthnicityStyle.rowView} alignItems="center">
            <CheckBox
              onPress={(isChecked: boolean) => {}}
              text="Middle Eastern"
            />
          </Row>
          <Row style={addEthnicityStyle.rowView} alignItems="center">
            <CheckBox
              onPress={(isChecked: boolean) => {}}
              text=" Hispanic or Latino"
            />
          </Row>
          <Row style={addEthnicityStyle.rowView} alignItems="center">
            <CheckBox
              onPress={(isChecked: boolean) => {}}
              text="White or Caucasion"
            />
          </Row>
          <Row style={addEthnicityStyle.rowView} alignItems="center">
            <CheckBox onPress={(isChecked: boolean) => {}} text="Other" />
          </Row>
        </View>
        <PrimaryButton title="Next" />
      </View>
    </ScreenContainer>
  );
};

export default AddEthnicity;
