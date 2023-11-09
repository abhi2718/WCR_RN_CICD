import React, { useState } from 'react';
import {
  ImageContainer,
  Row,
  ScreenContainer,
} from '../../../../../components/tools';
import { Text, View, StyleSheet, Image } from 'react-native';
import { PrimaryButton } from '../../../../../components/button';
import { profession } from './professionStyle';
import { DropdownInput, FlatInput } from '../../../../../components/inputBox';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { userDegree } from '../../../../../utils/constanst';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { useProfessionModal } from './professionViewModal';
import { ErrorText } from '../../../signin/signInStyle';

// import AntDesign from '@expo/vector-icons/AntDesign';

const Profession = (props: ScreenParams) => {
  const {
    isFocus,
    setIsFocus,
    handleSubmit,
    handleInputChange,
    professionForm,
    primaryDegreeOption,
    getPrimaryDegree,
    validationErrors,
  } = useProfessionModal(props);

  return (
    <ScreenContainer>
      <View style={profession.container}>
        <View style={profession.innerView}>
          <View style={{ flex: 1 }}>
            <Row justifyContent="space-between" alignItems="center">
              <Image
                style={profession.arrow}
                source={require('../../../../../assets/images/icons/arrow.png')}
              />
              <Image
                style={profession.logo}
                source={require('../../../../../assets/images/logo.png')}
              />
              <Text style={profession.skipBtn}>Skip</Text>
            </Row>
            <Text style={profession.subHeader}>
              Tell us about your profession
            </Text>
            <View>
              <DropdownInput
                data={userDegree}
                onFocus={() => setIsFocus(true)}
                labelField="label"
                valueField="value"
                placeholder="Select degree category"
                value={professionForm.userDegree}
                onChange={(item: any) => {
                  handleInputChange('userDegree', item.value);
                }}
              />
              {validationErrors.userDegree && (
                <ErrorText> {validationErrors.userDegree}</ErrorText>
              )}

              <DropdownInput
                data={primaryDegreeOption}
                onFocus={() => setIsFocus(true)}
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder="Select degree type"
                value={professionForm.primaryDegree}
                onChange={(item: any) => {
                  handleInputChange('primaryDegree', item.value);
                }}
              />
              {validationErrors.primaryDegree && (
                <ErrorText> {validationErrors.primaryDegree}</ErrorText>
              )}

              <FlatInput
                label="Job Title"
                onChangeText={(jobTitle: string) =>
                  handleInputChange('title', jobTitle)
                }
                value={professionForm.title}
                error={validationErrors.title}
              />
              {validationErrors.title && (
                <ErrorText> {validationErrors.title}</ErrorText>
              )}
              <FlatInput
                label="Institution/School/Practice Name"
                value={professionForm.institution}
                onChangeText={(institute: string) =>
                  handleInputChange('institution', institute)
                }
              />
            </View>
          </View>

          <View>
            <PrimaryButton title="Next" onPress={() => handleSubmit()} />
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
