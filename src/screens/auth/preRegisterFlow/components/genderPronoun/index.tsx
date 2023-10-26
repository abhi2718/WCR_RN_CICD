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
import {genderStyle} from './genderPronounStyle';

const GenderProunoun = () => {
  const [value, setValue] = useState('male');

  const [currentView, setCurrentView] = useState(1);

  const switchView = () => {
    setCurrentView((prevView) => (prevView % 3) + 1);
  };

  return (
    <ScreenContainer>
      <View style={genderStyle.container}>
        <View style={genderStyle.innerView}>
          <View style={{flex: 1}}>
            <Row
              alignItems="center"
              justifyContent="space-between"
              style={genderStyle.rowHeader}>
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

            <Text style={genderStyle.subHeader}>Select gender pronoun</Text>

            <View style={genderStyle.radioButtonContainer}>
              <RadioButton.Group
                onValueChange={(newValue) => setValue(newValue)}
                value={value}>
                <Row style={genderStyle.rowView} alignItems="center">
                  <RadioButton value="He/Him" />
                  <Text style={genderStyle.btnText}>He/Him</Text>
                </Row>
                <Row style={genderStyle.rowView} alignItems="center">
                  <RadioButton value="She/Her" />
                  <Text style={genderStyle.btnText}>She/Her</Text>
                </Row>
                <Row style={genderStyle.rowView} alignItems="center">
                  <RadioButton value="They/Him" />
                  <Text style={genderStyle.btnText}>They/Him</Text>
                </Row>

                <Row style={genderStyle.rowView} alignItems="center">
                  <RadioButton value="Prefer not to say" />
                  <Text style={genderStyle.btnText}>Prefer not to say</Text>
                </Row>
              </RadioButton.Group>
            </View>
          </View>

          <View>
            <RedButton onPress={switchView} title="Next" />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default GenderProunoun;
