import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { ChipStyle } from '../maritalStatus/chipStyle';
import { PrimaryButton } from '../../../../../components/button';
import { Chip } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../../../../infrastructure/theme/colors';
import { useNavigation } from '@react-navigation/native';
const Habits = () => {
  const navigation = useNavigation();
  const [selectedDrinkingHabits, setSelectedDrinkingHabits] = useState<
    string | null
  >(null);
  const [selectedSmokingHabits, setSelectedSmokingHabits] = useState<
    string | null
  >(null);
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  const [selectedPets, setSelectedPets] = useState<string | null>(null);

  const drinkingHabitsOptions = [
    'Never',
    'Rarely',
    'Sometimes',
    'Frequently',
    'Prefer not to say',
  ];

  const smokingHabitsOptions = [
    'Never',
    'Rarely',
    'Sometimes',
    'Frequently',
    'Prefer not to say',
  ];

  const exerciseOption = [
    'Never',
    'Rarely',
    'Sometimes',
    'Frequently',
    'Prefer not to say',
  ];
  const petsOption = [
    'None',
    'Cat’s',
    'Dog’s',
    'Both',
    'Other Pet’s',
    'Prefer not to say',
  ];

  const handleKidsSelect = (option: string) => {
    setSelectedDrinkingHabits(
      option === selectedDrinkingHabits ? null : option,
    );
  };

  const handleFamilyPlansSelect = (option: string) => {
    setSelectedSmokingHabits(option === selectedSmokingHabits ? null : option);
  };

  const handleCoidVaccineStatusSelect = (option: string) => {
    setSelectedExercise(option === selectedExercise ? null : option);
  };

  const handleDietarypreferenceSelect = (option: string) => {
    setSelectedPets(option === selectedPets ? null : option);
  };

  return (
    <ScreenContainer>
      <View style={ChipStyle.container}>
        <View style={ChipStyle.scrollContainer}>
          <Row justifyContent="space-between" alignItems="center">
            <Image
              style={ChipStyle.arrow}
              source={require('../../../../../assets/images/icons/arrow.png')}
            />
            <Image
              style={ChipStyle.logo}
              source={require('../../../../../assets/images/logo.png')}
            />
            <Text style={ChipStyle.skipBtn}>Skip</Text>
          </Row>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={ChipStyle.subHeader}>Drinking Habits</Text>
              <Row style={ChipStyle.chipRow}>
                {drinkingHabitsOptions.map((option, index) => (
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
                    onPress={() => handleKidsSelect(option)}
                  >
                    {option}
                  </Chip>
                ))}
              </Row>
            </View>

            <View>
              <Text style={ChipStyle.subHeader}>Smoking Habits</Text>
              <Row style={ChipStyle.chipRow}>
                {smokingHabitsOptions.map((option, index) => (
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
                    onPress={() => handleFamilyPlansSelect(option)}
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
                {exerciseOption.map((option, index) => (
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
                    onPress={() => handleCoidVaccineStatusSelect(option)}
                  >
                    {option}
                  </Chip>
                ))}
              </Row>
            </View>

            <View>
              <Text style={ChipStyle.subHeader}>Do you have pets?</Text>
              <Row style={ChipStyle.chipRow}>
                {petsOption.map((option, index) => (
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
                    onPress={() => handleDietarypreferenceSelect(option)}
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
            onPress={() => {
              navigation.navigate('/about');
            }}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Habits;
