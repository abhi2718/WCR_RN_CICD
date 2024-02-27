import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { dimensions } from '../../../../../../components/tools';
import MultiSlider from './MultiSlider';

const RangeSlider = () => {
  const [range, setRange] = useState([0, 100]);
  const handleSliderChange = (values: React.SetStateAction<number[]>) => {
    setRange(values);
  };

  return (
    <View style={styles.wrapper}>
      <MultiSlider
        values={range}
        min={10}
        max={100}
        step={1}
        sliderLength={300}
        onValuesChange={handleSliderChange}
        allowOverlap
        snapped
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: dimensions.width - 32,
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  track: {
    height: '100%',
    backgroundColor: '#4caf50',
    position: 'absolute',
  },
});

export default RangeSlider;
