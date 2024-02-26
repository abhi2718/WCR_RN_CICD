import React from 'react';
import { View, Text, Modal, SafeAreaView, Pressable } from 'react-native';
import { Picker } from 'react-native-wheel-pick';
import SwitchSelector from 'react-native-switch-selector';
import { Column, Row } from '../../../../../../../components/tools';
import { colors } from '../../../../../../../infrastructure/theme/colors';
import {
  cmValues,
  feetValues,
  mincmValues,
  minFeetValues,
  options,
} from '../../../../../../../utils/constanst';
import { styles } from './styles';
import { useViewModal } from './useViewModal';
import { heightPrefrenceProps } from '../../../../../../../types/screen.type/profile.type';
import { PrimaryButton } from '../../../../../../../components/button';

export const HeightPrefrence = (props: heightPrefrenceProps) => {
  const {
    visible,
    _handleHeightModal,
    handleValueChange,
    currentHeight,
    heightFormat,
    handleFormatChange,
  } = useViewModal(props);
  // console.log(currentHeight);
  return (
    <View style={styles.container}>
      <Modal visible={visible}>
        <SafeAreaView style={styles.innerContainer}>
          <Text style={styles.heading}>Height Preference</Text>
          <Row
            style={styles.colOne}
            justifyContent="center"
            alignItems="center"
            gap={20}
          >
            <Column justifyContent="center" alignItems="center">
              <Text style={styles.subHeading}>Minimum</Text>
              <Picker
                textSize={34}
                isShowSelectBackground={false}
                selectTextColor={colors.ui.black}
                style={styles.wheelStyle}
                isShowSelectLine={false}
                pickerData={
                  heightFormat === 'feet' ? minFeetValues : mincmValues
                }
                selectedValue={currentHeight.min}
                onValueChange={(value: string) =>
                  handleValueChange(value, 'min')
                }
              />
            </Column>
            <View style={styles.hrLine} />
            <Column justifyContent="center">
              <Text style={styles.subHeading}>Maximum</Text>
              {heightFormat === 'feet' && (
                <>
                  <Picker
                    textSize={34}
                    isShowSelectBackground={false}
                    selectTextColor={colors.ui.black}
                    style={styles.wheelStyle}
                    isShowSelectLine={false}
                    pickerData={feetValues}
                    selectedValue={feetValues[feetValues.length - 1]}
                    onValueChange={(value: string) =>
                      handleValueChange(value, 'max')
                    }
                  />
                </>
              )}
              {heightFormat === 'cm' && (
                <>
                  <Picker
                    textSize={34}
                    isShowSelectBackground={false}
                    selectTextColor={colors.ui.black}
                    style={styles.wheelStyle}
                    isShowSelectLine={false}
                    pickerData={cmValues}
                    selectedValue={cmValues[cmValues.length - 1]}
                    onValueChange={(value: string) =>
                      handleValueChange(value, 'max')
                    }
                  />
                </>
              )}
            </Column>
          </Row>
          <View>
            <Row justifyContent="flex-end">
              <SwitchSelector
                style={styles.SwitchSelector}
                buttonColor={colors.ui.primary}
                backgroundColor={colors.bg.secondary}
                borderColor={colors.bg.secondary}
                hasPadding={true}
                valuePadding={2}
                height={32}
                bold={false}
                options={options}
                initial={0}
                onPress={handleFormatChange}
              />
            </Row>
            <Row justifyContent="center">
              <View style={styles.closeBtn}>
                <PrimaryButton onPress={_handleHeightModal} title="Close" />
              </View>
            </Row>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};
