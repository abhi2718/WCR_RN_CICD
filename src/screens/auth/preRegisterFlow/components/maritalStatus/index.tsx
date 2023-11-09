import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { ChipStyle } from './chipStyle';
import { PrimaryButton } from '../../../../../components/button';
import { Chip } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../../../../infrastructure/theme/colors';
import { useNavigation } from '@react-navigation/native';

const MaritalStatus = () => {
  const navigation = useNavigation();

  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState<
    string | null
  >(null);
  const [selectedReligion, setSelectedReligion] = useState<string | null>(null);
  const [selectedPoliticalView, setSelectedPoliticalView] = useState<
    string | null
  >(null);

  const maritalStatusOptions = [
    'Never Married',
    'Divorced',
    'Annulled',
    'Separated',
    'Widowed',
    'Complicated',
    'Prefer not to say',
  ];

  const religionOptions = [
    'Buddhist',
    'Christian',
    'Hindu',
    'Catholic',
    'Jewish',
    'Muslim',
    'Sikh',
    'Shinto',
    'Taoism',
    'Spiritual',
    'Agnostic',
    'Atheist',
    'Prefer not to say',
    'Other',
  ];

  const politicalViewOptions = [
    'Conservative',
    'Moderate',
    'Liberal',
    'Non-political',
    'Prefer not to say',
  ];

  const handleMaritalStatusSelect = (option: string) => {
    setSelectedMaritalStatus(option === selectedMaritalStatus ? null : option);
  };

  const handleReligionSelect = (option: string) => {
    setSelectedReligion(option === selectedReligion ? null : option);
  };

  const handlePoliticalViewSelect = (option: string) => {
    setSelectedPoliticalView(option === selectedPoliticalView ? null : option);
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
              <Text style={ChipStyle.subHeader}>
                What's your marital status?
              </Text>
              <Row style={ChipStyle.chipRow}>
                {maritalStatusOptions.map((option, index) => (
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
              <Row style={ChipStyle.chipRow}>
                {religionOptions.map((option, index) => (
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
              <Row style={ChipStyle.chipRow}>
                {politicalViewOptions.map((option, index) => (
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
            onPress={() => {
              navigation.navigate('/kids');
            }}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default MaritalStatus;
