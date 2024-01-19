import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const HeightSlider: React.FC = () => {
  const [feet, setFeet] = useState<number>(5);
  const [inches, setInches] = useState<number>(6);

  const onFeetChange = (value: number) => {
    setFeet(value);
  };

  const onInchesChange = (value: number) => {
    setInches(value);
  };

  return (
    <View style={{ marginTop: 200 ,padding:16}}>
      <Text>{`Height: ${feet} feet ${inches} inches`}</Text>

      <Slider
        style={{ width: 200, marginVertical: 10 }}
        minimumValue={3}
        maximumValue={7}
        step={1}
        value={feet}
        onValueChange={onFeetChange}
      />

      <Slider
        style={{ width: 200, marginVertical: 10 }}
        minimumValue={0}
        maximumValue={11}
        step={1}
        value={inches}
        onValueChange={onInchesChange}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Feet</Text>
        <Text>Inches</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Picker
          selectedValue={feet}
          onValueChange={(value: number) => onFeetChange(value)}
          style={{ height: 50, width: 100 }}
        >
          {[...Array(5).keys()].map((value) => (
            <Picker.Item key={value} label={`${value + 3} ft`} value={value + 3} />
          ))}
        </Picker>

        <Picker
          selectedValue={inches}
          onValueChange={(value: number) => onInchesChange(value)}
          style={{ height: 50, width: 100 }}
        >
          {[...Array(12).keys()].map((value) => (
            <Picker.Item key={value} label={`${value} in`} value={value} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default HeightSlider;

