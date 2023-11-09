import React, { useState } from 'react';
import { Image, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { RadioButton, Text } from 'react-native-paper';
import { PrimaryButton } from '../../../../../components/button';
import {
  ImageContainer,
  Row,
  ScreenContainer,
  Spacer,
} from '../../../../../components/tools';
import { genderPronounStyle } from './genderPronounStyle';
import { useGenderPronounViewModal } from './genderPronounViewModal';
import { genderPronounArray } from '../../../../../utils/constanst';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { colors } from '../../../../../infrastructure/theme/colors';

const GenderProunoun = (props: any) => {
  const {
    genderPronoun,
    handleGenderPronounValue,
    updateUserDetails,
    loggInUserId,
    checkboxState,
    setCheckboxState,
    handleCheckboxChange,
  } = useGenderPronounViewModal(props);
  return (
    <ScreenContainer>
      <View style={genderPronounStyle.container}>
        <View style={genderPronounStyle.innerView}>
          <View style={{ flex: 1 }}>
            <Row justifyContent="space-between" alignItems="center">
              <Image
                style={genderPronounStyle.arrow}
                source={require('../../../../../assets/images/icons/arrow.png')}
              />
              <Image
                style={genderPronounStyle.logo}
                source={require('../../../../../assets/images/logo.png')}
              />
              <View />
            </Row>
            <Text style={genderPronounStyle.subHeader}>
              How would you like to be addressed?
            </Text>
            <View>
              {genderPronounArray.map((option, index) => (
                <RadioButton.Group
                  key={index}
                  onValueChange={handleGenderPronounValue}
                  value={genderPronoun}
                >
                  <Row style={genderPronounStyle.rowView} alignItems="center">
                    <RadioButton color={colors.ui.primary} value={option} />
                    <Text style={genderPronounStyle.btnText}>{option}</Text>
                  </Row>
                </RadioButton.Group>
              ))}
            </View>
          </View>

          <View>
            <Row style={genderPronounStyle.rowView} alignItems="center">
              <BouncyCheckbox
                onPress={handleCheckboxChange}
                isChecked={checkboxState}
                fillColor={colors.ui.primary}
                unfillColor="#FFFFFF"
              />
              {/* <Checkbox status="checked" /> */}
              <Text style={genderPronounStyle.btnText}>Visible on profile</Text>
            </Row>
            <PrimaryButton
              onPress={() => updateUserDetails(loggInUserId, genderPronoun)}
              title="Next"
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default GenderProunoun;
