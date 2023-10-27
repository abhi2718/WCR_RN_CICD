import React, {useState} from 'react';
import {View} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import {RedButton} from '../../../../../components/button';
import {
  ImageContainer,
  Row,
  ScreenContainer,
  Spacer,
} from '../../../../../components/tools';
import {genderPronounStyle} from './genderPronounStyle';
import {useGenderPronounViewModal} from './genderPronounViewModal';
import {genderPronounArray} from '../../../../../utils/constanst';

const GenderProunoun = (props: any) => {
  const {
    genderPronoun,
    handleGenderPronounValue,
    updateUserDetails,
    loggInUserId,
  } = useGenderPronounViewModal(props);
  const [value, setValue] = useState('male');

  // const switchView = () => {
  //   setCurrentView((prevView) => (prevView % 3) + 1);
  // };

  return (
    <ScreenContainer>
      <View style={genderPronounStyle.container}>
        <View style={genderPronounStyle.innerView}>
          <View style={{flex: 1}}>
            <Row
              alignItems="center"
              justifyContent="space-between"
              style={genderPronounStyle.rowHeader}>
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

            <Text style={genderPronounStyle.subHeader}>
            How would you like to be addressed?
            </Text>

            <View style={genderPronounStyle.radioButtonContainer}>
              {genderPronounArray.map((option) => (
                <RadioButton.Group
                  onValueChange={handleGenderPronounValue}
                  value={genderPronoun}>
                  <Row style={genderPronounStyle.rowView} alignItems="center">
                    <RadioButton value={option} />
                    <Text style={genderPronounStyle.btnText}>{option}</Text>
                  </Row>
                </RadioButton.Group>
              ))}
            </View>
          </View>

          <View>
            <RedButton
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
