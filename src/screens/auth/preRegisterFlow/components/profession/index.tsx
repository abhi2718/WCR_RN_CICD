import React from 'react';
import { ScreenContainer } from '../../../../../components/tools';
import { Text, View, Pressable, Keyboard } from 'react-native';
import { PrimaryButton } from '../../../../../components/button';
import { profession } from './professionStyle';
import {
  FlatInput,
  SearchableDropdownInput,
} from '../../../../../components/inputBox';
import { userDegree } from '../../../../../utils/constanst';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { useProfessionModal } from './professionViewModal';
import { ErrorText } from '../../../signin/signInStyle';
import { HeaderBar } from '../../../../../components/header';
import { OptionType } from '../../../../../types/components/input.type';

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
    HandleError,
  } = useProfessionModal(props);
  return (
    <Pressable style={profession.innerView} onPress={Keyboard.dismiss}>
      <ScreenContainer>
        <View style={profession.container}>
          <View style={profession.innerView}>
            <View style={profession.innerView}>
              <HeaderBar></HeaderBar>
              <Text style={profession.subHeader}>
                Tell us about your profession
              </Text>
              <View>
                <SearchableDropdownInput
                  data={userDegree}
                  onFocus={() => setIsFocus(true)}
                  labelField="label"
                  maxHeight={500}
                  valueField="value"
                  placeholder="Select Degree Category"
                  searchPlaceholder="Search"
                  value={professionForm.userDegree}
                  onChange={(item: OptionType) => {
                    changePrimaryDegreeOption(item.value);
                    handleInputChange('userDegree', item.value);
                  }}
                />
                {validationErrors.userDegree && (
                  <ErrorText> {validationErrors.userDegree}</ErrorText>
                )}
                <SearchableDropdownInput
                  data={primaryDegreeOption}
                  // onFocus={() => {}}
                  maxHeight={200}
                  labelField="label"
                  valueField="value"
                  onFocus={HandleError}
                  placeholder={professionForm.primaryDegree}
                  searchPlaceholder="Search"
                  value={professionForm.primaryDegree}
                  placeholderStyle={{
                    ...profession.placeHolderStyle,
                    fontWeight:
                      professionForm.primaryDegree === 'Select Degree Type'
                        ? '300'
                        : '400',
                  }}
                  onChange={(item: OptionType) => {
                    handleInputChange('primaryDegree', item.value);
                  }}
                  style={profession.dropdown}
                />
                {validationErrors.primaryDegree && (
                  <ErrorText>{validationErrors.primaryDegree}</ErrorText>
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
                  <ErrorText>{validationErrors.title}</ErrorText>
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
