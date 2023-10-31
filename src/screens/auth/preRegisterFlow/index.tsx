import React, { useState } from 'react';
import { View } from 'react-native';
import { Checkbox, RadioButton, Text } from 'react-native-paper';
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
import { sizes } from '../../../infrastructure/theme/sizes';

const Gender = (props: any) => {
  const {
    gender,
    handleGenderValue,
    updateUserDetails,
    loggInUserId,
    checkboxState,
    setCheckboxState,
    handleCheckboxChange,
  } = useGenderViewModal(props);

  const [currentView, setCurrentView] = useState(1);

  const switchView = () => {
    setCurrentView((prevView) => (prevView % 3) + 1);
  };

  return (
    <ScreenContainer>
      {currentView === 1 && (
        <View style={genderStyle.container}>
          <View style={genderStyle.innerView}>
            <View style={{ flex: 1 }}>
              <Row
                alignItems="center"
                justifyContent="space-between"
                style={genderStyle.rowHeader}
              >
                <ImageContainer
                  height={sizes[6]}
                  width={sizes[6]}
                  source={require('./../../../assets/images/icons/arrow.png')}
                />

                <ImageContainer
                  height={sizes[9]}
                  width={sizes[9]}
                  source={require('./../../../assets/images/logo.png')}
                />
                <View />
              </Row>

              <Text style={genderStyle.subHeader}>
                Choose your gender identity
              </Text>

              <View style={genderStyle.radioButtonContainer}>
                {genderArray.map((option) => (
                  <RadioButton.Group
                    onValueChange={handleGenderValue}
                    value={gender}
                  >
                    <Row style={genderStyle.rowView} alignItems="center">
                      <RadioButton value={option} />
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
                  fillColor="red"
                  unfillColor="#FFFFFF"
                />
                {/* <Checkbox status="checked" /> */}
                <Text style={genderStyle.btnText}>Visible on profile</Text>
              </Row>
              <PrimaryButton
                onPress={() => updateUserDetails(loggInUserId, gender)}
                title="Next"
              />
            </View>
          </View>
        </View>
      )}
    </ScreenContainer>
  );
};

export default Gender;
