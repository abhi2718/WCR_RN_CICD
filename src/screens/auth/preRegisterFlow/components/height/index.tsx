import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { PrimaryButton } from '../../../../../components/button';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { HeightStyle } from './heightStyle';
import { HeaderBar } from '../../../../../components/header';
import { Picker } from 'react-native-wheel-pick';
import { colors } from '../../../../../infrastructure/theme/colors';
const Height = () => {
  return (
    <ScreenContainer>
      <View style={HeightStyle.container}>
        <View>
          <HeaderBar skip={true} />
          <ScrollView showsVerticalScrollIndicator={false}>
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
                pickerData={[
                  `5'5"`,
                  `5'6"`,
                  `5'7"`,
                  `5'8"`,
                  `5'9"`,
                  `5'10"`,
                  `5'11"`,
                  `6'00"`,
                ]}
                selectedValue={`5'7"`}
                onValueChange={(value: string) => {
                  console.log(value);
                }}
              />
            </View>
          </ScrollView>
        </View>
        <View>
          <PrimaryButton title="Next" />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Height;
