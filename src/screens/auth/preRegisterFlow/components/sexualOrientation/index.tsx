import React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { PrimaryButton } from '../../../../../components/button';
import {
  Row,
  ScreenContainer,
} from '../../../../../components/tools';
import { SexualOrientationStyle } from './sexualorientationStyle';
import { useSexualOrientationViewModal } from './sexualorientationViewModal';
import { sexualOrientationArray } from '../../../../../utils/constanst';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { colors } from '../../../../../infrastructure/theme/colors';
import { HeaderBar } from '../../../../../components/header';
import { CheckBox } from '../../../../../components/inputBox';

const SexualOrientation = (props: ScreenParams) => {
  const {
    sexualOrientation,
    handleSexualOrientationValue,
    updateUserDetails,
    handleCheckboxChange,
    checkboxState,
    loading,
  } = useSexualOrientationViewModal(props);

  return (
    <ScreenContainer>
      <View style={SexualOrientationStyle.container}>
        <View style={SexualOrientationStyle.innerView}>
          <View style={SexualOrientationStyle.wrapper}>
            <HeaderBar/>
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
                    <RadioButton.Android
                      color={colors.ui.primary}
                      value={option}
                    />
                    <Text style={SexualOrientationStyle.btnText}>{option}</Text>
                  </Row>
                </RadioButton.Group>
              ))}
            </View>
          </View>
          <View>
            <Row style={SexualOrientationStyle.rowView} alignItems="center">
              <CheckBox
                onPress={handleCheckboxChange}
                isChecked={checkboxState}
              />
              <Text style={SexualOrientationStyle.btnText}>
                Visible on profile
              </Text>
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

export default SexualOrientation;
