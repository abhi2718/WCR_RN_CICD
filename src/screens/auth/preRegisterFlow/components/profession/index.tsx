import React, { useState } from 'react';
import { ScreenContainer, dimensions } from '../../../../../components/tools';
import { Text, View, StyleSheet, Pressable, Keyboard } from 'react-native';
import { PrimaryButton } from '../../../../../components/button';
import { profession } from './professionStyle';
import { DropdownInput, FlatInput } from '../../../../../components/inputBox';
import { userDegree } from '../../../../../utils/constanst';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { useProfessionModal } from './professionViewModal';
import { ErrorText } from '../../../signin/signInStyle';
import { HeaderBar } from '../../../../../components/header';
import { Dropdown } from 'react-native-element-dropdown';
const Profession = (props: ScreenParams) => {
  const {
    loading,
    setIsFocus,
    handleSubmit,
    handleInputChange,
    professionForm,
    primaryDegreeOption,
    validationErrors,
    changePrimaryDegreeOption,
  } = useProfessionModal(props);
  return (
   <Pressable style={{flex:1}} onPress={Keyboard.dismiss}>
     <ScreenContainer>
      <View style={profession.container}>
        <View style={profession.innerView}>
          <View style={{ flex: 1 }}>
            <HeaderBar></HeaderBar>
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
                  changePrimaryDegreeOption(item.value);
                  handleInputChange('userDegree', item.value);
                }}
              />
              {validationErrors.userDegree && (
                <ErrorText> {validationErrors.userDegree}</ErrorText>
              )}
              <Dropdown
                data={primaryDegreeOption}
                onFocus={() => {}}
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder={professionForm.primaryDegree}
                value={professionForm.primaryDegree}
                placeholderStyle={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight:
                    professionForm.primaryDegree === 'Select Degree Type'
                      ? '300'
                      : '400',
                }}
                onChange={(item: any) => {
                  handleInputChange('primaryDegree', item.value);
                }}
                style={styles.dropdown}
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
            <PrimaryButton
              title="Next"
              onPress={() => handleSubmit()}
              isLoading={loading}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
   </Pressable>
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
  dropdown: {
    height: 50,
    //borderColor: 'gray',
    //borderWidth: 0.5,
    borderRadius: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    paddingRight: 6,
    paddingLeft: 16,
    width: dimensions.width - 26,
  },
});
