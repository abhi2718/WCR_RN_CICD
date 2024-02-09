import React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { PrimaryButton } from '../../../../../components/button';
import {
  Row,
  ScreenContainer,
} from '../../../../../components/tools';
import { genderPronounStyle } from './genderPronounStyle';
import { useGenderPronounViewModal } from './genderPronounViewModal';
import { genderPronounArray } from '../../../../../utils/constanst';
import { colors } from '../../../../../infrastructure/theme/colors';
import { HeaderBar } from '../../../../../components/header';
import { CheckBox } from '../../../../../components/inputBox';

const GenderProunoun = (props: any) => {
  const {
    genderPronoun,
    handleGenderPronounValue,
    updateUserDetails,
    checkboxState,
    handleCheckboxChange,
    loading,
  } = useGenderPronounViewModal(props);
  return (
    <ScreenContainer>
      <View style={genderPronounStyle.container}>
        <View style={genderPronounStyle.innerView}>
          <View style={genderPronounStyle.wrapper}>
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
              <CheckBox
                onPress={handleCheckboxChange}
                isChecked={checkboxState}
              />
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
