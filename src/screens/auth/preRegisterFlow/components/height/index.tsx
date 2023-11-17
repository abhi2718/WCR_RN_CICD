import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Switch } from 'react-native';
import { PrimaryButton } from '../../../../../components/button';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { HeightStyle } from './heightStyle';
import { HeaderBar } from '../../../../../components/header';
import { Picker } from 'react-native-wheel-pick';
import { colors } from '../../../../../infrastructure/theme/colors';
import SwitchSelector from 'react-native-switch-selector';
const Height = () => {
  const options = [
    { label: 'Feet', value: 'feet' },
    { label: 'Cm', value: 'cm' },
  ];

  const [heightValue, setheightValue] = useState('feet');
  console.log(heightValue);

  return (
    <ScreenContainer>
      <View style={HeightStyle.container}>
        <View>
          <HeaderBar skip={true} />
          <View>
            <View>
              <Text style={HeightStyle.subHeader}>What's your height?</Text>
              <Picker
                textSize={34}
                // textColor={colors.ui.placeholder}
                isShowSelectBackground={false}
                selectTextColor={colors.ui.black}
                style={{
                  backgroundColor: 'white',
                  height: 400,
                }}
                isShowSelectLine={false} // Default is true
                pickerData={
                  heightValue === 'feet'
                    ? [
                        `5'5"`,
                        `5'6"`,
                        `5'7"`,
                        `5'8"`,
                        `5'9"`,
                        `5'10"`,
                        `5'11"`,
                        `6'00"`,
                      ]
                    : [
                        `152.4`,
                        `153.8`,
                        `154.4`,
                        `155.4`,
                        `156.4`,
                        `157.4"`,
                        `158.4"`,
                        `160"`,
                      ]
                }
                selectedValue={`5'7"`}
                onValueChange={(value: string) => {
                  console.log(value);
                }}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={HeightStyle.switchDiv}>
            <SwitchSelector
              style={HeightStyle.switch}
              buttonColor={colors.ui.primary}
              backgroundColor={colors.bg.secondary}
              borderColor={colors.bg.secondary}
              hasPadding={true}
              valuePadding={4}
              height={50}
              bold={true}
              options={options}
              initial={0}
              onPress={(value) => setheightValue(value)}
            />
          </View>
          <PrimaryButton title="Next" />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Height;
