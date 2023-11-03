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

const LocationScreen = (props: ScreenParams) => {
  const {
    updateUserDetails,
    setIsFocus,
    selectedCountry,
    zipPlaceHolder,
    handleCountry,
    selectedState,
    setState,
    getStatesOptions,
    selectedCity,
    handleCity,
    loggInUserId,
    handleZipcode,
    selectedZipcode,
  } = useLocationViewModal(props);

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
              <DropdownInput
                data={country}
                onFocus={() => setIsFocus(true)}
                labelField="label"
                valueField="value"
                placeholder="Country"
                value={selectedCountry}
                onChange={(country: any) => {
                  handleCountry(country.value);
                }}
              />

              <SearchableDropdownInput
                data={getStatesOptions()}
                onFocus={() => setIsFocus(true)}
                labelField="label"
                valueField="value"
                placeholder="State/territory"
                value={selectedState}
                onChange={(state: any) => {
                  setState(state.value);
                }}
              />

              <FlatInput
                label="City"
                value={selectedCity}
                onChangeText={(text: string) => handleCity(text)}
              />

              <FlatInput
                label="Zip code"
                placeholder={zipPlaceHolder}
                maxLength={selectedCountry === 'USA' ? 5 : 6}
                value={selectedZipcode}
                onChangeText={(zipcode: string) => handleZipcode(zipcode)}
              />
            </View>
          </View>

          <View>
            <PrimaryButton title="Next"
            onPress={() => updateUserDetails(loggInUserId)}
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
