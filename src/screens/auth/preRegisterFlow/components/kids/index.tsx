import React from 'react';
import { Text, View } from 'react-native';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { ChipStyle } from '../maritalStatus/chipStyle';
import { PrimaryButton } from '../../../../../components/button';
import { Chip } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../../../../infrastructure/theme/colors';
import { HeaderBar } from '../../../../../components/header';
import {
  covidVaccineStatus,
  diet,
  familyPlan,
  kids,
} from '../../../../../utils/constanst';
import { useKidsViewmodal } from './kids.viewModal';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';

const Kids = (props: ScreenParams) => {
  const {
    handleKidsSelect,
    handleFamilyPlansSelect,
    handleCovidVaccineStatusSelect,
    handleDietarypreferenceSelect,
    selectedKids,
    loading,
    selectedCovidVaccineStatus,
    selectedDietarypreference,
    updateUserDetails,
    selectedFamilyPlans,
    navigateTohabitsScreen
  } = useKidsViewmodal(props);

  return (
    <ScreenContainer>
      <View style={ChipStyle.container}>
        <View style={ChipStyle.scrollContainer}>
          <HeaderBar skip={navigateTohabitsScreen}/>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={ChipStyle.subHeader}>Do you have kids?</Text>
              <Row style={ChipStyle.chipRow} gap={10}>
                {kids.map((option, index) => (
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
              <Row style={ChipStyle.chipRow} gap={10}>
                {familyPlan.map((option, index) => (
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
              <Row style={ChipStyle.chipRow} gap={10}>
                {covidVaccineStatus.map((option, index) => (
                  <Chip
                    key={index}
                    style={
                      option === selectedCovidVaccineStatus
                        ? ChipStyle.chipSelected
                        : ChipStyle.chip
                    }
                    textStyle={{
                      color:
                        option === selectedCovidVaccineStatus
                          ? colors.ui.text
                          : colors.ui.placeholder,
                    }}
                    onPress={() => handleCovidVaccineStatusSelect(option)}
                  >
                    {option}
                  </Chip>
                ))}
              </Row>
            </View>

            <View>
              <Text style={ChipStyle.subHeader}>Dietary preference</Text>
              <Row style={ChipStyle.chipRow} gap={10}>
                {diet.map((option, index) => (
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
            onPress={() => updateUserDetails()}
            isLoading={loading}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Kids;
