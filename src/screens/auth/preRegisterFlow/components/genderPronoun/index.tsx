import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
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
import { goBack } from '../../../../../utils/common.functions';
import { HeaderBar } from '../../../../../components/header';

const GenderProunoun = (props: any) => {
  const {
    genderPronoun,
    handleGenderPronounValue,
    updateUserDetails,
    checkboxState,
    setCheckboxState,
    handleCheckboxChange,
    loading,
  } = useGenderPronounViewModal(props);
  return (
    <ScreenContainer>
      <View style={genderPronounStyle.container}>
        <View style={genderPronounStyle.innerView}>
          <View style={{ flex: 1 }}>
            <HeaderBar></HeaderBar>
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
                    <RadioButton.Android
                      color={colors.ui.primary}
                      value={option}
                    />
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
              onPress={() => updateUserDetails()}
              title="Next"
              isLoading={loading}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default GenderProunoun;
