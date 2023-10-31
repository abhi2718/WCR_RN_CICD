import React, { useState } from 'react';
import {
  ImageContainer,
  Row,
  ScreenContainer,
} from '../../../../../components/tools';
import { Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { PrimaryButton } from '../../../../../components/button';
import { Surface } from 'react-native-paper';
import { profession } from './professionStyle';
import { DropdownInput, FlatInput } from '../../../../../components/inputBox';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import DropDown from 'react-native-paper-dropdown';
import { colors } from '../../../../../infrastructure/theme/colors';

const Profession = (props: any) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState('');
  const genderList = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
    {
      label: 'Others',
      value: 'others',
    },
  ];
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
              <View>
                <DropdownInput
                  label={'Select degree category'}
                  // mode={'outlined'}
                  visible={showDropDown}
                  showDropDown={() => setShowDropDown(true)}
                  onDismiss={() => setShowDropDown(false)}
                  value={gender}
                  setValue={setGender}
                  list={genderList}
                  dropDownStyle={{ backgroundColor: '#fff' }}
                  style={profession.inputField}
                />
              </View>
              <FlatInput label="Select degree category" />

              <FlatInput label="Select degree type" />
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
