import React from 'react';
import { Image, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { PrimaryButton } from '../../../components/button';
import {
  ImageContainer,
  Row,
  ScreenContainer,
  Spacer,
} from '../../../components/tools';
import { genderStyle } from './genderStyle';
import { genderArray } from '../../../utils/constanst';
import { useGenderViewModal } from './gender.ViewModal';
import { ScreenParams } from '../../../types/services.types/firebase.service';
import { colors } from '../../../infrastructure/theme/colors';
const Gender = (props: ScreenParams) => {
  const {
    gender,
    handleGenderValue,
    updateUserDetails,
    loggInUserId,
    checkboxState,
    handleCheckboxChange,
  } = useGenderViewModal(props);

  return (
    <ScreenContainer>
      <View style={genderStyle.container}>
        <View style={genderStyle.innerView}>
          <View style={genderStyle.innerView}>
            <Row justifyContent="space-between" alignItems="center">
              <Image
                style={genderStyle.arrow}
                source={require('../../../assets/images/icons/arrow.png')}
              />
              <Image
                style={genderStyle.logo}
                source={require('../../../assets/images/logo.png')}
              />
              <View />
            </Row>
            <Text style={genderStyle.subHeader}>
              Choose your gender identity
            </Text>
            <View>
              {genderArray.map((option, index) => (
                <RadioButton.Group
                  key={index}
                  onValueChange={handleGenderValue}
                  value={gender}
                >
                  <Row style={genderStyle.rowView} alignItems="center">
                    <RadioButton color={colors.ui.primary} value={option} />
                    <Text style={genderStyle.btnText}>{option}</Text>
                  </Row>
                </RadioButton.Group>
              ))}
            </View>
          </View>
          <View>
            <Row style={genderStyle.rowView} alignItems="center">
              <BouncyCheckbox
                onPress={handleCheckboxChange}
                isChecked={checkboxState}
                fillColor={colors.ui.primary}
                unfillColor="#FFFFFF"
              />
              <Text style={genderStyle.btnText}>Visible on profile</Text>
            </Row>
            <PrimaryButton
              onPress={() => updateUserDetails(loggInUserId, gender)}
              title="Next"
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Gender;
