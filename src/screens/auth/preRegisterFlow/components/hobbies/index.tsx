import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Row, ScreenContainer, Spacer } from '../../../../../components/tools';
import { ChipStyle } from '../maritalStatus/chipStyle';
import { PrimaryButton } from '../../../../../components/button';
import { Chip } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../../../../infrastructure/theme/colors';
import { hobbies } from '../../../../../utils/constanst';
import { HeaderBar } from '../../../../../components/header';
import { useHobbyViewModal } from './hobby.viewModal';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { styles } from './styles';
import { CustomChip } from '../../../../../components/customChip';
const Hobbies = (props: ScreenParams) => {
  const {
    selectedHobbies,
    handleHobbies,
    updateUserDetails,
    loading,
    navigateToVerificationScreen,
    handleCustomHobbyChange,
    addCustomHobby,
    customCreatedHobby,
    removeCustomHobby,
    customHobby,
  } = useHobbyViewModal(props);
  return (
    <ScreenContainer>
      <View style={ChipStyle.container}>
        <View style={styles.scrollContainer}>
          <HeaderBar skip={navigateToVerificationScreen} />
          <Text style={ChipStyle.subHeader}>
            What are your interests and hobbies?  {selectedHobbies.length + customCreatedHobby.length}/10
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Spacer position="bottom" size={100}>
              <View>
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
            </Spacer>
          </ScrollView>
        </View>
        <View style={styles.customHobbyConatiner}>
          <Row>
            <TextInput
              onChangeText={handleCustomHobbyChange}
              placeholder="Enter a custom hobby"
              value={customHobby}
            />
            <Pressable onPress={addCustomHobby}>
              <Text>Add</Text>
            </Pressable>
          </Row>
          <ScrollView>
            {customCreatedHobby.map((hobby, index) => (
              <CustomChip
                key={index}
                title={hobby}
                onPress={removeCustomHobby}
              />
            ))}
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

export default Hobbies;
