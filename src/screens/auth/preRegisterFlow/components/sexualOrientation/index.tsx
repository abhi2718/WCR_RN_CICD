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
import { SexualOrientationStyle } from './sexualorientationStyle';


const SexualOrientation = () => {
  const [value, setValue] = useState('male');

  const [currentView, setCurrentView] = useState(1);

  const switchView = () => {
    setCurrentView((prevView) => (prevView % 3) + 1);
  };

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
              Your sexual orientation
            </Text>

            <View style={SexualOrientationStyle.radioButtonContainer}>
              <RadioButton.Group
                onValueChange={(newValue) => setValue(newValue)}
                value={value}>
                <Row style={SexualOrientationStyle.rowView} alignItems="center">
                  <RadioButton value="Straight" />
                  <Text style={SexualOrientationStyle.btnText}>Straight</Text>
                </Row>
                <Row style={SexualOrientationStyle.rowView} alignItems="center">
                  <RadioButton value="Gay" />
                  <Text style={SexualOrientationStyle.btnText}>Gay</Text>
                </Row>
                <Row style={SexualOrientationStyle.rowView} alignItems="center">
                  <RadioButton value="Lesbian" />
                  <Text style={SexualOrientationStyle.btnText}>Lesbian</Text>
                </Row>
                <Row style={SexualOrientationStyle.rowView} alignItems="center">
                  <RadioButton value="Bisexual" />
                  <Text style={SexualOrientationStyle.btnText}>Bisexual</Text>
                </Row>
                <Row style={SexualOrientationStyle.rowView} alignItems="center">
                  <RadioButton value="Pansexual" />
                  <Text style={SexualOrientationStyle.btnText}>Pansexual</Text>
                </Row>

                <Row style={SexualOrientationStyle.rowView} alignItems="center">
                  <RadioButton value="Queer" />
                  <Text style={SexualOrientationStyle.btnText}>Queer</Text>
                </Row>
                <Row style={SexualOrientationStyle.rowView} alignItems="center">
                  <RadioButton value="Questioning" />
                  <Text style={SexualOrientationStyle.btnText}>
                    Questioning
                  </Text>
                </Row>
                <Row style={SexualOrientationStyle.rowView} alignItems="center">
                  <RadioButton value="Asexual" />
                  <Text style={SexualOrientationStyle.btnText}>Asexual</Text>
                </Row>
                <Row style={SexualOrientationStyle.rowView} alignItems="center">
                  <RadioButton value="Demisexual" />
                  <Text style={SexualOrientationStyle.btnText}>Demisexual</Text>
                </Row>
              </RadioButton.Group>
            </View>
          </View>

          <View>
            <Row style={SexualOrientationStyle.rowView} alignItems="center">
              <Checkbox status="checked" />
              <Text style={SexualOrientationStyle.btnText}>
                Visible on profile
              </Text>
            </Row>
            <RedButton onPress={switchView} title="Next" />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default SexualOrientation;
