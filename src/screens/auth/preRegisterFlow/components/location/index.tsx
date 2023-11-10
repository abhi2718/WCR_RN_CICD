import React, { useState } from 'react';
import {
  ImageContainer,
  Row,
  ScreenContainer,
} from '../../../../../components/tools';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../../../../../components/button';
import { location } from './locationStyle';
import {
  DropdownInput,
  FlatInput,
  SearchableDropdownInput,
} from '../../../../../components/inputBox';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { country } from '../../../../../utils/constanst';
import { useLocationViewModal } from './locationViewModal';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { ErrorText } from '../../../signin/signInStyle';
import { HeaderBar } from '../../../../../components/header';

const LocationScreen = (props: ScreenParams) => {
  const {
    setIsFocus,
    handleCountry,
    zipPlaceHolder,
    validationErrors,
    locationForm,
    getStatesOptions,
    loading,
    handleSubmit,
    handleInputChange,
  } = useLocationViewModal(props);

  return (
    <ScreenContainer>
      <View style={location.container}>
        <View style={location.innerView}>
          <View style={{ flex: 1 }}>
            <HeaderBar></HeaderBar>
            <Text style={location.subHeader}>
              Let's find matches near you
              {`\n`}
              OR {`\n`}Tell us where you call home
            </Text>
            <View>
              <DropdownInput
                data={country}
                onFocus={() => setIsFocus(true)}
                labelField="label"
                valueField="value"
                placeholder="Country"
                value={locationForm.country}
                onChange={(text: any) => handleCountry(text.value)}
              />
              {validationErrors.country && (
                <ErrorText> {validationErrors.country}</ErrorText>
              )}

              <SearchableDropdownInput
                data={getStatesOptions()}
                onFocus={() => setIsFocus(true)}
                labelField="label"
                valueField="value"
                placeholder="State/territory"
                value={locationForm.state}
                onChange={(text: any) => handleInputChange('state', text.value)}
              />
              {validationErrors.state && (
                <ErrorText> {validationErrors.state}</ErrorText>
              )}

              <FlatInput
                label="City"
                value={locationForm.city}
                onChangeText={(text: any) => handleInputChange('city', text)}
                error={validationErrors.city}
              />
              {validationErrors.city && (
                <ErrorText> {validationErrors.city}</ErrorText>
              )}

              <FlatInput
                label="Zip code"
                placeholder={zipPlaceHolder}
                maxLength={locationForm.country === 'USA' ? 5 : 6}
                value={locationForm.zipcode}
                onChangeText={(text: any) => handleInputChange('zipcode', text)}
                error={validationErrors.zipcode}
              />
              {validationErrors.zipcode && (
                <ErrorText> {validationErrors.zipcode}</ErrorText>
              )}
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
  );
};

export default LocationScreen;

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
