import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { ChipStyle } from '../maritalStatus/chipStyle';
import { PrimaryButton } from '../../../../../components/button';
import { Chip } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../../../../infrastructure/theme/colors';
import { useNavigation } from '@react-navigation/native';
import { HeaderBar } from '../../../../../components/header';
const Kids = () => {
  const navigation = useNavigation();
  const [selectedKids, setSelectedKids] = useState<string | null>(null);
  const [selectedFamilyPlans, setSelectedFamilyPlans] = useState<string | null>(
    null,
  );
  const [selectedCoidVaccineStatus, setSelectedCoidVaccineStatus] = useState<
    string | null
  >(null);

  const [selectedDietarypreference, setSelectedDietarypreference] = useState<
    string | null
  >(null);

  const kidsOptions = ['None', 'Have kids', 'Prefer not to say'];

  const familyPlansOptions = [
    'Open to kid’s',
    'Want kid’s',
    'Don’t Want kid’s',
    'Undecided',
    'Prefer not to say',
  ];

  const covidVaccineStatusOption = [
    'Fully',
    'Partially',
    'Unable to receive',
    'Decline',
    'Prefer not to say',
  ];
  const dietaryPreferenceOption = [
    'No restrictions',
    'Gluten-free',
    'Vegetarian',
    'Vegan',
    'Pescatarian',
    'Halal',
    'Kosher',
    'Prefer not to say',
    'Other',
  ];

  const handleKidsSelect = (option: string) => {
    setSelectedKids(option === selectedKids ? null : option);
  };

  const handleFamilyPlansSelect = (option: string) => {
    setSelectedFamilyPlans(option === selectedFamilyPlans ? null : option);
  };

  const handleCoidVaccineStatusSelect = (option: string) => {
    setSelectedCoidVaccineStatus(
      option === selectedCoidVaccineStatus ? null : option,
    );
  };

  const handleDietarypreferenceSelect = (option: string) => {
    setSelectedDietarypreference(
      option === selectedDietarypreference ? null : option,
    );
  };

  return (
    <ScreenContainer>
      <View style={ChipStyle.container}>
        <View style={ChipStyle.scrollContainer}>
          <HeaderBar></HeaderBar>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={ChipStyle.subHeader}>Do you have kids?</Text>
              <Row style={ChipStyle.chipRow}>
                {kidsOptions.map((option, index) => (
                  <Chip
                    key={index}
                    style={
                      option === selectedKids
                        ? ChipStyle.chipSelected
                        : ChipStyle.chip
                    }
                    textStyle={{
                      color:
                        option === selectedKids
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
              <Text style={ChipStyle.subHeader}>Family Plans</Text>
              <Row style={ChipStyle.chipRow}>
                {familyPlansOptions.map((option, index) => (
                  <Chip
                    key={index}
                    style={
                      option === selectedFamilyPlans
                        ? ChipStyle.chipSelected
                        : ChipStyle.chip
                    }
                    textStyle={{
                      color:
                        option === selectedFamilyPlans
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
              <Text style={ChipStyle.subHeader}>Covid Vaccine Status</Text>
              <Row style={ChipStyle.chipRow}>
                {covidVaccineStatusOption.map((option, index) => (
                  <Chip
                    key={index}
                    style={
                      option === selectedCoidVaccineStatus
                        ? ChipStyle.chipSelected
                        : ChipStyle.chip
                    }
                    textStyle={{
                      color:
                        option === selectedCoidVaccineStatus
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
              <Text style={ChipStyle.subHeader}>Dietary preference</Text>
              <Row style={ChipStyle.chipRow}>
                {dietaryPreferenceOption.map((option, index) => (
                  <Chip
                    key={index}
                    style={
                      option === selectedDietarypreference
                        ? ChipStyle.chipSelected
                        : ChipStyle.chip
                    }
                    textStyle={{
                      color:
                        option === selectedDietarypreference
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
              navigation.navigate('/habits');
            }}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Kids;
