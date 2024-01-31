import React from 'react';
import { View, Text, Modal, SafeAreaView, Pressable } from 'react-native';
import { Picker } from 'react-native-wheel-pick';
import SwitchSelector from 'react-native-switch-selector';
import { Column, Row } from '../../../../../../../components/tools';
import { colors } from '../../../../../../../infrastructure/theme/colors';
import {
  cmValues,
  feetValues,
  options,
} from '../../../../../../../utils/constanst';
import { styles } from './styles';
import { useViewModal } from './useViewModal';
import { heightPrefrenceProps } from '../../../../../../../types/screen.type/profile.type';

export const HeightPrefrence = (props:heightPrefrenceProps) => {
  const {
    visible,
    _handleHeightModal,
    handleValueChange,
    currentHeight,
    heightFormat,
    handleFormatChange,
  } = useViewModal(props);
  return (
    <View style={styles.container}>
      <Modal visible={visible}>
        <SafeAreaView style={styles.container}>
          <Pressable onPress={_handleHeightModal}>
            <Text>Close</Text>
          </Pressable>
          <Row>
            <Column>
              <Text>Minimum</Text>
              <Picker
                textSize={34}
                isShowSelectBackground={false}
                selectTextColor={colors.ui.black}
                style={styles.wheelStyle}
                isShowSelectLine={false}
                pickerData={heightFormat === 'feet' ? feetValues : cmValues}
                selectedValue={currentHeight.min}
                onValueChange={(value:string)=>handleValueChange(value,'min')}
              />
            </Column>
            <Column>
              <Text>Maximum</Text>
              <Picker
                textSize={34}
                isShowSelectBackground={false}
                selectTextColor={colors.ui.black}
                style={styles.wheelStyle}
                isShowSelectLine={false}
                pickerData={heightFormat === 'feet' ? feetValues : cmValues}
                selectedValue={currentHeight.max}
                onValueChange={(value:string)=>handleValueChange(value,'max')}
              />
            </Column>
          </Row>
          <SwitchSelector
            style={{}}
            buttonColor={colors.ui.primary}
            backgroundColor={colors.bg.secondary}
            borderColor={colors.bg.secondary}
            hasPadding={true}
            valuePadding={4}
            height={50}
            bold={true}
            options={options}
            initial={0}
            onPress={handleFormatChange}
          />
        </SafeAreaView>
      </Modal>
    </View>
  );
};
