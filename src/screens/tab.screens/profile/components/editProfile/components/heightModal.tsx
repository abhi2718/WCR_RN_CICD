import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  SafeAreaView,
  Pressable,
} from 'react-native';
import { Picker } from 'react-native-wheel-pick';
import SwitchSelector from 'react-native-switch-selector';
import { useSelector } from 'react-redux';
import { PrimaryButton } from '../../../../../../components/button';
import { Column } from '../../../../../../components/tools';
import { colors } from '../../../../../../infrastructure/theme/colors';
import { HeightStyle } from './heightStyle';
interface Measurement {
  feet: number;
  inch: number;
  heightInCm?: number;
}
import {
  cmValues,
  feetValues,
  options,
} from '../../../../../../utils/constanst';
interface HeightModalProps {
  showHeightModal: boolean;
  setShowHeightModal: Dispatch<SetStateAction<boolean>>;
  setheight: Dispatch<SetStateAction<Measurement>>;
}
export const HeightModal = (props: HeightModalProps) => {
  const { showHeightModal, setShowHeightModal, setheight } = props;
  const { user } = useSelector((state: any) => state.userState);
  const savedHeight: Measurement = user.height;
  const [heightFormat, setheightFormat] = useState('feet');
  const getSelectedHeight = (): string => {
    if (heightValue?.feet || heightValue?.inch) {
      return heightFormat === 'feet'
        ? `${heightValue?.feet}'${heightValue?.inch}"`
        : `${Math.floor(savedHeight?.heightInCm!)}`;
    }
    return heightFormat === 'feet' ? feetValues[5] : cmValues[5];
  };
  const [heightValue, setheightValue] = useState<Measurement>(
    savedHeight ?? null,
  );
  const [currentHeight, setCurrentHeight] = useState(getSelectedHeight());
  const handleValueChange = (value: string) => {
    setCurrentHeight(value);
    if (heightFormat === 'feet') {
      const height = parseMeasurement(value);
      setheight(height);
      setheightValue(height!);
    } else {
      const height = convertCmToFeetAndInches(Number(value));
      setheightValue(height!);
      setheight(height);
    }
  };
  function parseMeasurement(measurementString: string): Measurement | null {
    const regex = /^(\d+)\'(\d+)\"$/;
    const match = measurementString.match(regex);
    if (match) {
      const feet = parseInt(match[1], 10);
      const inch = Math.floor(parseInt(match[2], 10));
      return { feet, inch };
    } else {
      return null;
    }
  }

  function convertCmToFeetAndInches(cm: number): Measurement {
    const inches = cm / 2.54;
    const feet = Math.floor(inches / 12);
    const remainingInches = Math.floor(inches % 12);

    return {
      feet: feet,
      inch: remainingInches,
    };
  }
  const handleFormatChange = (value: string) => {
    setheightFormat(value);
  };
  return (
    <Modal visible={showHeightModal}>
      <SafeAreaView style={HeightStyle.flex1}>
        <Column justifyContent="space-between" style={HeightStyle.flex1}>
          <View style={HeightStyle.heightHeader}>
            <Text style={HeightStyle.heightHeaderTitle}>Height</Text>
          </View>
          <View>
            <Picker
              textSize={34}
              isShowSelectBackground={false}
              selectTextColor={colors.ui.black}
              style={HeightStyle.picker}
              isShowSelectLine={false}
              pickerData={heightFormat === 'feet' ? feetValues : cmValues}
              selectedValue={currentHeight}
              onValueChange={handleValueChange}
            />
          </View>
          <Column style={HeightStyle.heightFooter}>
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
              title="Close"
              onPress={() => {
                setheightFormat('feet');
                setShowHeightModal(false);
              }}
            />
          </Column>
        </Column>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    padding: 16,
  },
});
