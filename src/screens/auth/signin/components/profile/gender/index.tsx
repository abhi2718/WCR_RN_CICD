import React, {useState} from 'react';
import {View} from 'react-native';
import {Checkbox, RadioButton, Text} from 'react-native-paper';
import {RedButton} from '../../../../../../components/button';
import {
  ImageContainer,
  Row,
  ScreenContainer,
  Spacer,
} from '../../../../../../components/tools';
import {genderStyle} from './genderStyle';

const Gender = () => {
  const [value, setValue] = useState('male');

  const [currentView, setCurrentView] = useState(1);

  const switchView = () => {
    setCurrentView((prevView) => (prevView % 3) + 1);
  };

  return (
    <ScreenContainer>
      {currentView === 1 && (
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
                  source={require('../../../../../../assets/images/icons/arrow.png')}
                />

                <ImageContainer
                  height={40}
                  width={40}
                  source={require('../../../../../../assets/images/logo.png')}
                />
                <View />
              </Row>

              <Text style={genderStyle.subHeader}>Pick your gender</Text>

              <View style={genderStyle.radioButtonContainer}>
                <RadioButton.Group
                  onValueChange={(newValue) => setValue(newValue)}
                  value={value}>
                  <Row style={genderStyle.rowView} alignItems="center">
                    <RadioButton value="male" />
                    <Text style={genderStyle.btnText}>Male</Text>
                  </Row>
                  <Row style={genderStyle.rowView} alignItems="center">
                    <RadioButton value="female" />
                    <Text style={genderStyle.btnText}>Female</Text>
                  </Row>
                  <Row style={genderStyle.rowView} alignItems="center">
                    <RadioButton value="transman" />
                    <Text style={genderStyle.btnText}>Transman</Text>
                  </Row>
                  <Row style={genderStyle.rowView} alignItems="center">
                    <RadioButton value="transwomen" />
                    <Text style={genderStyle.btnText}>Transwomen</Text>
                  </Row>
                  <Row style={genderStyle.rowView} alignItems="center">
                    <RadioButton value="non-Binary" />
                    <Text style={genderStyle.btnText}>Non-Binary</Text>
                  </Row>
                </RadioButton.Group>
              </View>
            </View>

            <View>
              <Row style={genderStyle.rowView} alignItems="center">
                <Checkbox status="checked" />
                <Text style={genderStyle.btnText}>Visible on profile</Text>
              </Row>
              <RedButton onPress={switchView} title="Next" />
            </View>
          </View>
        </View>
      )}

      {currentView === 2 && (
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
                  source={require('../../../../../../assets/images/icons/arrow.png')}
                />

                <ImageContainer
                  height={40}
                  width={40}
                  source={require('../../../../../../assets/images/logo.png')}
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
      )}

      {currentView === 3 && (
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
                  source={require('../../../../../../assets/images/icons/arrow.png')}
                />

                <ImageContainer
                  height={40}
                  width={40}
                  source={require('../../../../../../assets/images/logo.png')}
                />
                <View />
              </Row>

              <Text style={genderStyle.subHeader}>Your sexual orientation</Text>

              <View style={genderStyle.radioButtonContainer}>
                <RadioButton.Group
                  onValueChange={(newValue) => setValue(newValue)}
                  value={value}>
                  <Row style={genderStyle.rowView} alignItems="center">
                    <RadioButton value="Straight" />
                    <Text style={genderStyle.btnText}>Straight</Text>
                  </Row>
                  <Row style={genderStyle.rowView} alignItems="center">
                    <RadioButton value="Gay" />
                    <Text style={genderStyle.btnText}>Gay</Text>
                  </Row>
                  <Row style={genderStyle.rowView} alignItems="center">
                    <RadioButton value="Lesbian" />
                    <Text style={genderStyle.btnText}>Lesbian</Text>
                  </Row>
                  <Row style={genderStyle.rowView} alignItems="center">
                    <RadioButton value="Bisexual" />
                    <Text style={genderStyle.btnText}>Bisexual</Text>
                  </Row>
                  <Row style={genderStyle.rowView} alignItems="center">
                    <RadioButton value="Pansexual" />
                    <Text style={genderStyle.btnText}>Pansexual</Text>
                  </Row>

                  <Row style={genderStyle.rowView} alignItems="center">
                    <RadioButton value="Queer" />
                    <Text style={genderStyle.btnText}>Queer</Text>
                  </Row>
                  <Row style={genderStyle.rowView} alignItems="center">
                    <RadioButton value="Questioning" />
                    <Text style={genderStyle.btnText}>Questioning</Text>
                  </Row>
                  <Row style={genderStyle.rowView} alignItems="center">
                    <RadioButton value="Asexual" />
                    <Text style={genderStyle.btnText}>Asexual</Text>
                  </Row>
                  <Row style={genderStyle.rowView} alignItems="center">
                    <RadioButton value="Demisexual" />
                    <Text style={genderStyle.btnText}>Demisexual</Text>
                  </Row>
                </RadioButton.Group>
              </View>
            </View>

            <View>
              <Row style={genderStyle.rowView} alignItems="center">
                <Checkbox status="checked" />
                <Text style={genderStyle.btnText}>Visible on profile</Text>
              </Row>
              <RedButton onPress={switchView} title="Next" />
            </View>
          </View>
        </View>
      )}
    </ScreenContainer>
  );
};

export default Gender;
