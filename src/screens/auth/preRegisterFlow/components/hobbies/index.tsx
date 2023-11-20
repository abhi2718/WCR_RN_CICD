import React, { useState } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { ChipStyle } from '../maritalStatus/chipStyle';
import { PrimaryButton } from '../../../../../components/button';
import { Chip } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../../../../infrastructure/theme/colors';
import { useNavigation } from '@react-navigation/native';
import { ShowFlashMessage } from '../../../../../components/flashBar';
import { hobbies } from '../../../../../utils/constanst';
import { HeaderBar } from '../../../../../components/header';
const Hobbies = () => {
  const navigation = useNavigation();
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
 
  const handleHobbies = (option: string) => {
    if (selectedHobbies.includes(option)) {
      setSelectedHobbies(selectedHobbies.filter((item) => item !== option));
    } else if (selectedHobbies.length < 5) {
      setSelectedHobbies([...selectedHobbies, option]);
    } else {
      ShowFlashMessage(
        'Exceeded Selection Limit',
        'You can select a maximum of 5 hobbies.',
        'danger',
      );
    }
  };

  return (
    <ScreenContainer>
      <View style={ChipStyle.container}>
        <View style={ChipStyle.scrollContainer}>
         <HeaderBar></HeaderBar>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={ChipStyle.subHeader}>
                What are your interests and hobbies?
              </Text>
              <Row style={ChipStyle.chipRow}>
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
          <PrimaryButton title="Next" onPress={() => {}} />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Hobbies;
