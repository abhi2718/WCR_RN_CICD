import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { PrimaryButton } from '../../../../../components/button';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { HeightStyle } from './heightStyle';
import { HeaderBar } from '../../../../../components/header';
import { Picker } from 'react-native-wheel-pick';
import { colors } from '../../../../../infrastructure/theme/colors';
import SwitchSelector from 'react-native-switch-selector';
import { useheightViewModal } from './heightViewModal';
import { cmValues, feetValues } from '../../../../../utils/constanst';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';

const Height = (props: ScreenParams) => {
  const { navigateToSexualOrientationScreen,loggInUserId } = useheightViewModal(props);

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
          <HeaderBar skip={()=>navigateToSexualOrientationScreen(loggInUserId)}/>
          <View>
            <View>
              <Text style={HeightStyle.subHeader}>What's your height?</Text>
              <Picker
                textSize={34}
                isShowSelectBackground={false}
                selectTextColor={colors.ui.black}
                style={HeightStyle.picker}
                isShowSelectLine={false} // Default is true
                pickerData={heightValue === 'feet' ? feetValues : cmValues}
                selectedValue={
                  heightValue === 'feet' ? feetValues[5] : cmValues[5]
                }
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
              onPress={(value:string) => setheightValue(value)}
            />
          </View>
          <PrimaryButton title="Next" />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Height;
