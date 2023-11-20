import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { ChipStyle } from '../maritalStatus/chipStyle';
import { PrimaryButton } from '../../../../../components/button';
import { Chip } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../../../../infrastructure/theme/colors';
import { HeaderBar } from '../../../../../components/header';
import {
  drinking,
  exercise,
  pets,
  smoking,
} from '../../../../../utils/constanst';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { useHabitViewModal } from './habits.viewModal';
const Habits = (props: ScreenParams) => {
  const {
    handleDrinking,
    selectedSmokingHabits,
    selectedDrinkingHabits,
    selectedExercise,
    selectedPets,
    handleeExercise,
    handleSmokingHabits,
    handlePets,
    loading,
    loggInUserId,
    navigateToAboutScreen,
    updateUserDetails,
  } = useHabitViewModal(props);

  return (
    <ScreenContainer>
      <View style={ChipStyle.container}>
        <View style={ChipStyle.scrollContainer}>
          <HeaderBar
            skip={() => navigateToAboutScreen(loggInUserId)}
          ></HeaderBar>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={ChipStyle.subHeader}>Drinking Habits</Text>
              <Row style={ChipStyle.chipRow}>
                {drinking.map((option, index) => (
                  <Chip
                    key={index}
                    style={
                      option === selectedDrinkingHabits
                        ? ChipStyle.chipSelected
                        : ChipStyle.chip
                    }
                    textStyle={{
                      color:
                        option === selectedDrinkingHabits
                          ? colors.ui.text
                          : colors.ui.placeholder,
                    }}
                    onPress={() => handleDrinking(option)}
                  >
                    {option}
                  </Chip>
                ))}
              </Row>
            </View>

            <View>
              <Text style={ChipStyle.subHeader}>Smoking Habits</Text>
              <Row style={ChipStyle.chipRow}>
                {smoking.map((option, index) => (
                  <Chip
                    key={index}
                    style={
                      option === selectedSmokingHabits
                        ? ChipStyle.chipSelected
                        : ChipStyle.chip
                    }
                    textStyle={{
                      color:
                        option === selectedSmokingHabits
                          ? colors.ui.text
                          : colors.ui.placeholder,
                    }}
                    onPress={() => handleSmokingHabits(option)}
                  >
                    {option}
                  </Chip>
                ))}
              </Row>
            </View>

            <View>
              <Text style={ChipStyle.subHeader}>
                How often do you exercise?
              </Text>
              <Row style={ChipStyle.chipRow}>
                {exercise.map((option, index) => (
                  <Chip
                    key={index}
                    style={
                      option === selectedExercise
                        ? ChipStyle.chipSelected
                        : ChipStyle.chip
                    }
                    textStyle={{
                      color:
                        option === selectedExercise
                          ? colors.ui.text
                          : colors.ui.placeholder,
                    }}
                    onPress={() => handleeExercise(option)}
                  >
                    {option}
                  </Chip>
                ))}
              </Row>
            </View>

            <View>
              <Text style={ChipStyle.subHeader}>Do you have pets?</Text>
              <Row style={ChipStyle.chipRow}>
                {pets.map((option, index) => (
                  <Chip
                    key={index}
                    style={
                      option === selectedPets
                        ? ChipStyle.chipSelected
                        : ChipStyle.chip
                    }
                    textStyle={{
                      color:
                        option === selectedPets
                          ? colors.ui.text
                          : colors.ui.placeholder,
                    }}
                    onPress={() => handlePets(option)}
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

export default Habits;
