import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { PrimaryButton } from '../../../../../components/button';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { HeightStyle } from './heightStyle';
import { HeaderBar, headerStyle } from '../../../../../components/header';
import { Picker } from 'react-native-wheel-pick';
import { colors } from '../../../../../infrastructure/theme/colors';
import SwitchSelector from 'react-native-switch-selector';
import { useheightViewModal } from './heightViewModal';
import { cmValues, feetValues, options } from '../../../../../utils/constanst';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';

const Height = (props: ScreenParams) => {
  const {
    navigateToEthnicityScreen,
    loggInUserId,
    heightFormat,
    handleFormatChange,
    loading,
    updateUserDetails,
    getSelectedHeight,
    handleValueChange,
    currentHeight,
  } = useheightViewModal(props);

  return (
    <ScreenContainer>
      <View style={HeightStyle.container}>
        <View style={HeightStyle.flex1}>
          <HeaderBar skip={() => navigateToEthnicityScreen(loggInUserId)} />
          <View style={HeightStyle.flex1}>
            <Text style={HeightStyle.subHeader}>What's your height?</Text>
            <View style={HeightStyle.pickerContainer}>
              <Picker
                textSize={34}
                isShowSelectBackground={false}
                selectTextColor={colors.ui.black}
                style={HeightStyle.picker}
                isShowSelectLine={false} // Default is true
                pickerData={heightFormat === 'feet' ? feetValues : cmValues}
                selectedValue={currentHeight}
                onValueChange={handleValueChange}
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
              onPress={(value: string) => handleFormatChange(value)}
            />
          </View>
          <PrimaryButton
            onPress={updateUserDetails}
            isLoading={loading}
            title="Next"
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Height;
