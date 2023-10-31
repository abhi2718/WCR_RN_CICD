import React, { useState } from 'react';
import {
  ImageContainer,
  Row,
  ScreenContainer,
} from '../../../../../components/tools';
import { StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { PrimaryButton } from '../../../../../components/button';
import { RadioButton } from 'react-native-paper';
import { location } from './locationStyle';
import { DropdownInput, FlatInput } from '../../../../../components/inputBox';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { colors } from '../../../../../infrastructure/theme/colors';

const Location = (props: any) => {
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
  const [isFocus, setIsFocus] = useState();

  const renderLabel = () => {
    if (value || isFocus) {
      return <Text style={[styles.label]}>Country</Text>;
    }
    return null;
  };
  return (
    <ScreenContainer>
      <View style={location.container}>
        <View style={location.innerView}>
          <View style={{ flex: 1 }}>
            <Row justifyContent="space-between" style={location.rowHeader}>
              <ImageContainer
                height={sizes[6]}
                width={sizes[6]}
                source={require('../../../../../assets/images/icons/arrow.png')}
              />

              <ImageContainer
                height={sizes[9]}
                width={9}
                source={require('../../../../../assets/images/logo.png')}
              />
              <View />
            </Row>

            <Text style={location.subHeader}>
              Let's find matches near you
              {`\n`}
              OR {`\n`}Tell us where you call home
            </Text>
            <View>
              {renderLabel()}
              <DropdownInput
                data={data}
                onFocus={() => setIsFocus(true)}
                labelField="label"
                valueField="value"
                placeholder="Country"
                value={value}
                onChange={(item) => {
                  setValue(item.value);
                }}
              />

              <FlatInput label="State/territory" />
              <FlatInput label="City" />
              <FlatInput  label="Zip code" />
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

export default Location;

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
