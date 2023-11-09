import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import {
  dimensions,
  ImageContainer,
  ScreenContainer,
} from '../../components/tools';
import { PrimaryButton } from '../../components/button';
import { styles } from './onBoardingStyle';
import { useonBoardingViewModal } from './boardingViwModal';
import { ScreenParams } from '../../types/services.types/firebase.service';

const Onboarding = (props: ScreenParams) => {
  const { currentView, switchView } = useonBoardingViewModal(props);

  return (
    <ScreenContainer>
      {currentView === 1 && (
        <View style={styles.container}>
          <View style={styles.rowOne}>
            <Image
              resizeMode="contain"
              style={{ width: dimensions.width }}
              source={require('../../assets/images/onBoardingOne.png')}
            />
          </View>
          <View style={styles.rowTwo}>
            <View>
              <Text style={styles.heading}>
                Find your ideal {`\n`} healthcare match
              </Text>
              <Text style={styles.subHeading}>
                Verified profiles, shared interests
              </Text>
            </View>
            <ImageContainer
              style={styles.scrollImg}
              source={require('../../assets/images/icons/scroll1.png')}
            />
            <PrimaryButton onPress={switchView} title="Next" />
          </View>
        </View>
      )}
      {currentView === 2 && (
        <View style={styles.container}>
          <View style={styles.rowOne}>
             <Image
              resizeMode="contain"
              style={{ width: dimensions.width }}
              source={require('../../assets/images/onBoardingTwo.png')}
            />
          </View>
          <View style={styles.rowTwo}>
            <View>
              <Text style={styles.heading}>
                Connect with professionals & students
              </Text>
              <Text style={styles.subHeading}>
                Build meaningful relationships
              </Text>
            </View>
            <ImageContainer
              style={styles.scrollImg}
              source={require('../../assets/images/icons/scroll2.png')}
            />
            <PrimaryButton onPress={switchView} title="Next" />
          </View>
        </View>
      )}
      {currentView === 3 && (
        <View style={styles.container}>
          <View style={styles.rowOne}>
              <Image
              resizeMode="contain"
              style={{ width: dimensions.width }}
              source={require('../../assets/images/onBoardingThree.png')}
            />
          </View>
          <View style={styles.rowTwo}>
            <View>
              <Text style={styles.heading}>
                Begin your journey for a like-minded partner!
              </Text>
              <Text style={styles.subHeading}>
                No more waiting - let's get started!
              </Text>
            </View>
            <ImageContainer
              style={styles.scrollImg}
              source={require('../../assets/images/icons/scroll3.png')}
            />
            <PrimaryButton onPress={switchView} title="Next" />
          </View>
        </View>
      )}
    </ScreenContainer>
  );
};

export default Onboarding;
