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
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { HeaderBar } from '../../../../../components/header';

const SexualOrientation = (props: ScreenParams) => {
  const {
    sexualOrientation,
    handleSexualOrientationValue,
    updateUserDetails,
    loggInUserId,
    handleCheckboxChange,
    checkboxState,
    loading,
  } = useSexualOrientationViewModal(props);

  return (
    <ScreenContainer>
      <View style={SexualOrientationStyle.container}>
        <View style={SexualOrientationStyle.innerView}>
          <View style={{ flex: 1 }}>
            <HeaderBar></HeaderBar>
            <Text style={SexualOrientationStyle.subHeader}>
              Your flavor of love
            </Text>
            <View>
              {sexualOrientationArray.map((option, index) => (
                <RadioButton.Group
                  key={index}
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
              isLoading={loading}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default SexualOrientation;
