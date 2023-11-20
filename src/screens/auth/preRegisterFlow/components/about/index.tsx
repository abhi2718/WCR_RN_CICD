import React, { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { AboutStyle } from './aboutStyle';
import { PrimaryButton } from '../../../../../components/button';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderBar } from '../../../../../components/header';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { useAboutViewModal } from './about.viewModal';

const About = (props:ScreenParams) => {
  const {handleText,aboutText,updateUserDetails,loading,maxLength} = useAboutViewModal(props)

  return (
    <ScreenContainer>
      <View style={AboutStyle.container}>
        <View style={AboutStyle.scrollContainer}>
          <HeaderBar></HeaderBar>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={AboutStyle.subHeader}>
                Tell us a bit about yourself
              </Text>
              <TextInput
                style={AboutStyle.input}
                multiline={true}
                maxLength={maxLength}
                numberOfLines={10} // Set the number of lines to display
                placeholder="Enter here..."
                textAlignVertical="top"
                value={aboutText}
                onChangeText={handleText}
              />
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

export default About;
