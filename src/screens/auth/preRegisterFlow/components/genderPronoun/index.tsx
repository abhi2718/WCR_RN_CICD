import React, { useState } from 'react';
import { View } from 'react-native';
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
  const [value, setValue] = useState('male');

  // const switchView = () => {
  //   setCurrentView((prevView) => (prevView % 3) + 1);
  // };

  return (
    <ScreenContainer>
      <View style={genderPronounStyle.container}>
        <View style={genderPronounStyle.innerView}>
          <View style={{ flex: 1 }}>
            <Row
              justifyContent="space-between"
              style={genderPronounStyle.rowHeader}
            >
              <ImageContainer
                height={sizes[7]}
                width={sizes[7]}
                source={require('../../../../../assets/images/icons/arrow.png')}
              />

              <ImageContainer
                height={sizes[9]}
                width={sizes[9]}
                source={require('../../../../../assets/images/logo.png')}
              />
              <View />
            </Row>

            <Text style={genderPronounStyle.subHeader}>
              How would you like to be addressed?
            </Text>

            <View style={genderPronounStyle.radioButtonContainer}>
              {genderPronounArray.map((option) => (
                <RadioButton.Group
                  onValueChange={handleGenderPronounValue}
                  value={genderPronoun}
                >
                  <Row style={genderPronounStyle.rowView} alignItems="center">
                    <RadioButton value={option} />
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
                fillColor="red"
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
