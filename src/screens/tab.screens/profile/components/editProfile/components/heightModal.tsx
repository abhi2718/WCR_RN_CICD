import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  SafeAreaView,
  Pressable,
} from 'react-native';
import { Picker } from 'react-native-wheel-pick';
import { useSelector } from 'react-redux';
import { colors } from '../../../../../../infrastructure/theme/colors';
import { cmValues, feetValues } from '../../../../../../utils/constanst';
import { HeightStyle } from '../../../../../auth/preRegisterFlow/components/height/heightStyle';
interface Measurement {
  feet: number;
  inch: number;
  heightInCm?: number;
}
export const HeightModal = (props) => {
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
    // 1 inch is approximately 2.54 cm
    const inches = cm / 2.54;

    // 1 foot is 12 inches
    const feet = Math.floor(inches / 12);
    const remainingInches = Math.floor(inches % 12);

    return {
      feet: feet,
      inch: remainingInches,
    };
  }
  return (
    <Modal visible={showHeightModal}>
      <SafeAreaView style={styles.containerStyle}>
        <View>
          <Pressable onPress={() => setShowHeightModal(false)}>
            <Text style={{ fontFamily: 'Urbanist-Regular' }}>Close</Text>
          </Pressable>
          <Text style={{ fontSize: 20, fontFamily: 'Urbanist-Regular' }}>
            Height
          </Text>
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
