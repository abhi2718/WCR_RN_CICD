import React, { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { Row, ScreenContainer } from '../../../../../components/tools';
import { AboutStyle } from './aboutStyle';
import { PrimaryButton } from '../../../../../components/button';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const About = () => {
  const navigation = useNavigation();

  return (
    <ScreenContainer>
      <View style={AboutStyle.container}>
        <View style={AboutStyle.scrollContainer}>
          <Row justifyContent="space-between" alignItems="center">
            <Image
              style={AboutStyle.arrow}
              source={require('../../../../../assets/images/icons/arrow.png')}
            />
            <Image
              style={AboutStyle.logo}
              source={require('../../../../../assets/images/logo.png')}
            />
            <Text>Skip</Text>
          </Row>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={AboutStyle.subHeader}>
                Tell us a bit about yourself
              </Text>
              <TextInput
                style={AboutStyle.input}
                multiline={true}
                numberOfLines={10} // Set the number of lines to display
                placeholder="Enter here..."
                textAlignVertical="top"
                // value={text}
                // onChangeText={(newText) => setText(newText)}
              />
            </View>
          </ScrollView>
        </View>
        <View>
          <PrimaryButton
            title="Next"
            onPress={() => {
              navigation.navigate('/hobbies');
            }}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default About;
