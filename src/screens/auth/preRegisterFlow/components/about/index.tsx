import React from 'react';
import {
  Keyboard,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import { ScreenContainer } from '../../../../../components/tools';
import { AboutStyle } from './aboutStyle';
import { PrimaryButton } from '../../../../../components/button';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderBar } from '../../../../../components/header';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { useAboutViewModal } from './about.viewModal';
import { colors } from '../../../../../infrastructure/theme/colors';

const About = (props: ScreenParams) => {
  const {
    handleText,
    aboutText,
    navigateTohabitsScreen,
    updateUserDetails,
    loading,
    maxLength,
    letterCount
  } = useAboutViewModal(props);

  return (
    <ScreenContainer>
      <Pressable
        style={AboutStyle.container}
        onPress={Keyboard.dismiss}
      >
        <View style={AboutStyle.container}>
          <View style={AboutStyle.scrollContainer}>
            <HeaderBar skip={() => navigateTohabitsScreen()}></HeaderBar>
            <ScrollView
              keyboardShouldPersistTaps="always"
              showsVerticalScrollIndicator={false}
            >
              <View>
                <Text style={AboutStyle.subHeader}>
                  Tell us a bit about yourself
                </Text>
                <TextInput
              placeholder="About Me"
              value={aboutText}
              onChangeText={(text: string) =>
                handleText(text)
              }
              textAlignVertical="top"
              style={AboutStyle.input}
              multiline={true}
              maxLength={maxLength}
              numberOfLines={10}
              returnKeyLabel="go"
              onSubmitEditing={() => {
              }}
              placeholderTextColor={colors.ui.placeholder}
            />
            <Text style={AboutStyle.charCount}>{letterCount}/500</Text>
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
      </Pressable>
    </ScreenContainer>
  );
};

export default About;
