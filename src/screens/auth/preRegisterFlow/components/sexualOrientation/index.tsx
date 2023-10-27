import React, {useState} from 'react';
import {View} from 'react-native';
import {Checkbox, RadioButton, Text} from 'react-native-paper';
import {RedButton} from '../../../../../components/button';
import {
  ImageContainer,
  Row,
  ScreenContainer,
  Spacer,
} from '../../../../../components/tools';
import {SexualOrientationStyle} from './sexualorientationStyle';
import {useSexualOrientationViewModal} from './sexualorientationViewModal';
import {sexualOrientationArray} from '../../../../../utils/constanst';

const SexualOrientation = (props: any) => {
  const {
    sexualOrientation,
    setSexualOrientation,
    handleSexualOrientationValue,
    updateUserDetails,
    loggInUserId,
  } = useSexualOrientationViewModal(props);

  // const switchView = () => {
  //   setCurrentView((prevView) => (prevView % 3) + 1);
  // };

  return (
    <ScreenContainer>
      <View style={SexualOrientationStyle.container}>
        <View style={SexualOrientationStyle.innerView}>
          <View style={{flex: 1}}>
            <Row
              alignItems="center"
              justifyContent="space-between"
              style={SexualOrientationStyle.rowHeader}>
              <ImageContainer
                height={30}
                width={30}
                source={require('../../../../../assets/images/icons/arrow.png')}
              />

              <ImageContainer
                height={40}
                width={40}
                source={require('../../../../../assets/images/logo.png')}
              />
              <View />
            </Row>

            <Text style={SexualOrientationStyle.subHeader}>
            Share your sexual orientation OR Your unique flavour of love
            </Text>

            <View style={SexualOrientationStyle.radioButtonContainer}>
              {sexualOrientationArray.map((option) => (
                <RadioButton.Group
                  onValueChange={handleSexualOrientationValue}
                  value={sexualOrientation}>
                  <Row
                    style={SexualOrientationStyle.rowView}
                    alignItems="center">
                    <RadioButton value={option} />
                    <Text style={SexualOrientationStyle.btnText}>{option}</Text>
                  </Row>
                </RadioButton.Group>
              ))}
            </View>
          </View>

          <View>
            <Row style={SexualOrientationStyle.rowView} alignItems="center">
              <Checkbox status="checked" />
              <Text style={SexualOrientationStyle.btnText}>
                Visible on profile
              </Text>
            </Row>
            <RedButton
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
