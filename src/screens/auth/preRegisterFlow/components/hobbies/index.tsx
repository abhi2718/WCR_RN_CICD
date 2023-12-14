import React, { useState } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { ChipStyle } from '../maritalStatus/chipStyle';
import { PrimaryButton } from '../../../../../components/button';
import { Chip } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../../../../infrastructure/theme/colors';

import { hobbies } from '../../../../../utils/constanst';
import { HeaderBar } from '../../../../../components/header';
import { useHobbyViewModal } from './hobby.viewModal';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
const Hobbies = (props: ScreenParams) => {
  const { selectedHobbies, handleHobbies ,updateUserDetails,loading,navigateToVerificationScreen} = useHobbyViewModal(props);

  return (
    <ScreenContainer>
      <View style={ChipStyle.container}>
        <View style={ChipStyle.scrollContainer}>
          <HeaderBar skip={() => navigateToVerificationScreen()}></HeaderBar>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={ChipStyle.subHeader}>
                What are your interests and hobbies?
              </Text>
              <Row style={ChipStyle.chipRow} gap={10}>
                {hobbies.map((option, index) => (
                  <Chip
                    key={index}
                    style={
                      selectedHobbies.includes(option)
                        ? ChipStyle.chipSelected
                        : ChipStyle.chip
                    }
                    textStyle={{
                      color: selectedHobbies.includes(option)
                        ? colors.ui.text
                        : colors.ui.placeholder,
                    }}
                    onPress={() => handleHobbies(option)}
                  >
                    {option}
                  </Chip>
                ))}
              </Row>
            </View>
          </ScrollView>
        </View>
        <View>
          <PrimaryButton title="Next"
          isLoading= {loading}
          onPress={() => updateUserDetails()} />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Hobbies;
