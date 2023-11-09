import React from 'react';
import { Image, Text, View } from 'react-native';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { LookingForStyle } from './lookingForStyle';
import { PrimaryButton } from '../../../../../components/button';
import { CheckBox } from '../../../../../components/inputBox';

const LookingFor = () => {
  return (
    <ScreenContainer>
      <View style={LookingForStyle.container}>
        <View>
          <Row justifyContent="space-between" alignItems="center">
            <Image
              style={LookingForStyle.arrow}
              source={require('../../../../../assets/images/icons/arrow.png')}
            />
            <Image
              style={LookingForStyle.logo}
              source={require('../../../../../assets/images/logo.png')}
            />
            <Text style={LookingForStyle.skipBtn}>Skip</Text>
          </Row>
          <Text style={LookingForStyle.subHeader}>
            What are you looking for?
          </Text>

          <Row style={LookingForStyle.rowView} alignItems="center">
            <CheckBox
              onPress={(isChecked: boolean) => {}}
              text="Long-term relationship"
            />
          </Row>
          <Row style={LookingForStyle.rowView} alignItems="center">
            <CheckBox onPress={(isChecked: boolean) => {}} text="Marriage" />
          </Row>
          <Row style={LookingForStyle.rowView} alignItems="center">
            <CheckBox
              onPress={(isChecked: boolean) => {}}
              text="Long-term, open to short"
            />
          </Row>
          <Row style={LookingForStyle.rowView} alignItems="center">
            <CheckBox onPress={(isChecked: boolean) => {}} text="Casual" />
          </Row>
          <Row style={LookingForStyle.rowView} alignItems="center">
            <CheckBox
              onPress={(isChecked: boolean) => {}}
              text="Prefer not to say"
            />
          </Row>
        </View>
        <PrimaryButton title="Next" />
      </View>
    </ScreenContainer>
  );
};

export default LookingFor;
