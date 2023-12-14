import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { ChipStyle } from './chipStyle';
import { PrimaryButton } from '../../../../../components/button';
import { Chip } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../../../../infrastructure/theme/colors';
import { useNavigation } from '@react-navigation/native';
import { HeaderBar } from '../../../../../components/header';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { useMaritalStatusViewModal } from './marital.Viewmodal';
import {
  maritalStatus,
  politics,
  religion,
} from '../../../../../utils/constanst';

const MaritalStatus = (props: ScreenParams) => {
  const {
    selectedMaritalStatus,
    selectedReligion,
    selectedPoliticalView,
    handleMaritalStatusSelect,
    handleReligionSelect,
    handlePoliticalViewSelect,
    updateUserDetails,
    loading,
    navigateToKidsScreen,
  } = useMaritalStatusViewModal(props);

  return (
    <ScreenContainer>
      <View style={ChipStyle.container}>
        <View style={ChipStyle.scrollContainer}>
          <HeaderBar skip={() => navigateToKidsScreen()}></HeaderBar>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={ChipStyle.subHeader}>
                What's your marital status?
              </Text>
              <Row style={ChipStyle.chipRow} gap={10}>
                {maritalStatus.map((option, index) => (
                  <Chip
                    key={index}
                    style={
                      option === selectedMaritalStatus
                        ? ChipStyle.chipSelected
                        : ChipStyle.chip
                    }
                    textStyle={{
                      color:
                        option === selectedMaritalStatus
                          ? colors.ui.text
                          : colors.ui.placeholder,
                    }}
                    onPress={() => handleMaritalStatusSelect(option)}
                  >
                    {option}
                  </Chip>
                ))}
              </Row>
            </View>

            <View>
              <Text style={ChipStyle.subHeader}>Religion</Text>
              <Row style={ChipStyle.chipRow} gap={10}>
                {religion.map((option, index) => (
                  <Chip
                    key={index}
                    style={
                      option === selectedReligion
                        ? ChipStyle.chipSelected
                        : ChipStyle.chip
                    }
                    textStyle={{
                      color:
                        option === selectedReligion
                          ? colors.ui.text
                          : colors.ui.placeholder,
                    }}
                    onPress={() => handleReligionSelect(option)}
                  >
                    {option}
                  </Chip>
                ))}
              </Row>
            </View>

            <View>
              <Text style={ChipStyle.subHeader}>Political View</Text>
              <Row style={ChipStyle.chipRow} gap={10}>
                {politics.map((option, index) => (
                  <Chip
                    key={index}
                    style={
                      option === selectedPoliticalView
                        ? ChipStyle.chipSelected
                        : ChipStyle.chip
                    }
                    textStyle={{
                      color:
                        option === selectedPoliticalView
                          ? colors.ui.text
                          : colors.ui.placeholder,
                    }}
                    onPress={() => handlePoliticalViewSelect(option)}
                  >
                    {option}
                  </Chip>
                ))}
              </Row>
            </View>
          </ScrollView>
        </View>
        <View>
          <PrimaryButton
            title="Next"
            isLoading={loading}
            onPress={() => updateUserDetails()}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default MaritalStatus;
