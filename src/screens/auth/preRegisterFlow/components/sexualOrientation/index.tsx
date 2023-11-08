import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { Checkbox, RadioButton, Text } from 'react-native-paper';
import { PrimaryButton } from '../../../../../components/button';
import {
  ImageContainer,
  Row,
  ScreenContainer,
  Spacer,
} from '../../../../../components/tools';
import { SexualOrientationStyle } from './sexualorientationStyle';
import { useSexualOrientationViewModal } from './sexualorientationViewModal';
import { sexualOrientationArray } from '../../../../../utils/constanst';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { sizes } from '../../../../../infrastructure/theme/sizes';

const SexualOrientation = (props: any) => {
  const {
    sexualOrientation,
    handleSexualOrientationValue,
    updateUserDetails,
    loggInUserId,
    handleCheckboxChange,
    checkboxState,
    setCheckboxState,
  } = useSexualOrientationViewModal(props);

  // const switchView = () => {
  //   setCurrentView((prevView) => (prevView % 3) + 1);
  // };

  return (
    <ScreenContainer>
      <View style={SexualOrientationStyle.container}>
        <View style={SexualOrientationStyle.innerView}>
          <View style={{ flex: 1 }}>
            <Row justifyContent="space-between" alignItems="center">
              <Image
                style={SexualOrientationStyle.arrow}
                source={require('../../../../../assets/images/icons/arrow.png')}
              />
              <Image
                style={SexualOrientationStyle.logo}
                source={require('../../../../../assets/images/logo.png')}
              />
              <View />
            </Row>

            <Text style={SexualOrientationStyle.subHeader}>
              Your flavor of love
            </Text>

            <View>
              {sexualOrientationArray.map((option) => (
                <RadioButton.Group
                  onValueChange={handleSexualOrientationValue}
                  value={sexualOrientation}
                >
                  <Row
                    style={SexualOrientationStyle.rowView}
                    alignItems="center"
                  >
                    <RadioButton value={option} />
                    <Text style={SexualOrientationStyle.btnText}>{option}</Text>
                  </Row>
                </RadioButton.Group>
              ))}
            </View>
          </View>

          <View>
            <Row style={SexualOrientationStyle.rowView} alignItems="center">
              <BouncyCheckbox
                onPress={handleCheckboxChange}
                isChecked={checkboxState}
                fillColor="red"
                unfillColor="#FFFFFF"
              />
              <Text style={SexualOrientationStyle.btnText}>
                Visible on profile
              </Text>
            </Row>
            <PrimaryButton
              onPress={() => updateUserDetails(loggInUserId, sexualOrientation)}
              title="Next"
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default SexualOrientation;
