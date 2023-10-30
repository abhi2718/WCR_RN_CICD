import React, { useState } from 'react';
import { View } from 'react-native';
import { Checkbox, RadioButton, Text } from 'react-native-paper';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { RedButton } from '../../../components/button';
import {
  ImageContainer,
  Row,
  ScreenContainer,
  Spacer,
} from '../../../components/tools';
import { genderStyle } from './genderStyle';
import { genderArray } from '../../../utils/constanst';
import { useGenderViewModal } from './gender.ViewModal';

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
                  height={30}
                  width={30}
                  source={require('./../../../assets/images/icons/arrow.png')}
                />

                <ImageContainer
                  height={40}
                  width={40}
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
              <RedButton
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
