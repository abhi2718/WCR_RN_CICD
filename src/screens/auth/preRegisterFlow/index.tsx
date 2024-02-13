import React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { PrimaryButton } from '../../../components/button';
import { Row, ScreenContainer } from '../../../components/tools';
import { genderStyle } from './genderStyle';
import { genderArray } from '../../../utils/constanst';
import { useGenderViewModal } from './gender.ViewModal';
import { ScreenParams } from '../../../types/services.types/firebase.service';
import { colors } from '../../../infrastructure/theme/colors';
import { HeaderBar } from '../../../components/header';
import { CheckBox } from '../../../components/inputBox';
const Gender = (props: ScreenParams) => {
  const {
    gender,
    handleGenderValue,
    updateUserDetails,
    handleCheckboxChange,
    loading,
    checkboxState
  } = useGenderViewModal(props);

  return (
    <ScreenContainer>
      <View style={genderStyle.container}>
        <View style={genderStyle.innerView}>
          <View style={genderStyle.innerView}>
            <HeaderBar></HeaderBar>
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
                    <RadioButton.Android
                      color={colors.ui.primary}
                      value={option}
                    />
                    <Text style={genderStyle.btnText}>{option}</Text>
                  </Row>
                </RadioButton.Group>
              ))}
            </View>
          </View>
          <View>
            <Row style={genderStyle.rowView} alignItems="center">
              <CheckBox
                onPress={handleCheckboxChange}
                isChecked={checkboxState}
              />
              <Text style={genderStyle.btnText}>Visible on profile</Text>
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

export default Gender;
