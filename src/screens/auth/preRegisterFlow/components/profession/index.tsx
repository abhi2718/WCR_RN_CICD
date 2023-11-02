import React, { useState } from 'react';
import {
  ImageContainer,
  Row,
  ScreenContainer,
} from '../../../../../components/tools';
import { Text, View, StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { PrimaryButton } from '../../../../../components/button';
import { Surface } from 'react-native-paper';
import { profession } from './professionStyle';
import { DropdownInput, FlatInput } from '../../../../../components/inputBox';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import DropDown from 'react-native-paper-dropdown';
import { colors } from '../../../../../infrastructure/theme/colors';
import { Dropdown } from 'react-native-element-dropdown';
// import AntDesign from '@expo/vector-icons/AntDesign';

const Profession = (props: any) => {
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return <Text style={[styles.label]}>Select degree category</Text>;
    }
    return null;
  };

  return (
    <ScreenContainer>
      <View style={profession.container}>
        <View style={profession.innerView}>
          <View style={{ flex: 1 }}>
            <Row justifyContent="space-between" style={profession.rowHeader}>
              <ImageContainer
                height={sizes[7]}
                width={sizes[7]}
                source={require('../../../../../assets/images/icons/arrow.png')}
              />

              <ImageContainer
                height={sizes[9]}
                width={sizes[9]}
                source={require('../../../../../assets/images/logo.png')}
              />
              <View />
            </Row>

            <Text style={profession.subHeader}>
              Tell us about your profession
            </Text>
            <View>
              {renderLabel()}
              <DropdownInput
                data={data}
                onFocus={() => setIsFocus(true)}
                // search
                // maxHeight={150}
                labelField="label"
                valueField="value"
                placeholder="Select degree category"
                value={value}
                onChange={(item:any) => {
                  setValue(item.value);
                }}
              />

              {renderLabel()}
              <DropdownInput
                data={data}
                onFocus={() => setIsFocus(true)}
                // search
                // maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder="Select degree type"
                value={value}
                onChange={(item:any) => {
                  setValue(item.value);
                }}
              />

              <FlatInput label="Job Title" />
              <FlatInput label="Institution/School/Practice Name" />
            </View>
          </View>

          <View>
            <PrimaryButton title="Next" />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Profession;

const styles = StyleSheet.create({
  label: {
    backgroundColor: 'white',
    left: 3,
    top: 20,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
  },
});
