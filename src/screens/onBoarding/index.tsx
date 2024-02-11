import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native';

import { PrimaryButton } from '../../components/button';
import { styles } from './onBoardingStyle';
import { useonBoardingViewModal } from './boardingViwModal';
import { ScreenParams } from '../../types/services.types/firebase.service';


const Onboarding = (props: ScreenParams) => {
  const { currentView, switchView } = useonBoardingViewModal(props);
  return (
    <View style={styles.mainContainer}>
      {currentView === 1 && (
        <ImageBackground
          source={require('../../assets/images/onBoardingG1.png')}
          style={styles.background}
        >
          <View style={styles.container}>
            <View style={styles.rowOne}></View>
            <View style={styles.rowTwo}>
              <View>
                <Text style={styles.heading}>
                  Find your ideal {`\n`} healthcare match
                </Text>
                <Text style={styles.subHeading}>
                  Verified profiles, shared interests
                </Text>
              </View>
              <Image
                resizeMode="contain"
                style={styles.scrollImg}
                source={require('../../assets/images/icons/scroll1.png')}
              />
              <PrimaryButton
                style={styles.primaryBtn}
                onPress={switchView}
                title="Next"
              />
            </View>
          </View>
        </ImageBackground>
      )}
      {currentView === 2 && (
        <ImageBackground
          source={require('../../assets/images/onBoardingG2.png')}
          style={styles.background}
        >
          <View style={styles.container}>
            <View style={styles.rowOne}></View>
            <View style={styles.rowTwo}>
              <View>
                <Text style={styles.heading}>
                  Connect with professionals & students
                </Text>
                <Text style={styles.subHeading}>
                  Build meaningful relationships
                </Text>
              </View>
              <Image
                resizeMode="contain"
                style={styles.scrollImg}
                source={require('../../assets/images/icons/scroll2.png')}
              />
              <PrimaryButton
                style={styles.primaryBtn}
                onPress={switchView}
                title="Next"
              />
            </View>
          </View>
        </ImageBackground>
      )}
      {currentView === 3 && (
        <ImageBackground
          source={require('../../assets/images/onBoardingG3.png')}
          style={styles.background}
        >
          <View style={styles.container}>
            <View style={styles.rowOne}></View>
            <View style={styles.rowTwo}>
              <View>
                <Text style={styles.heading}>
                  Begin your journey for a like-minded partner!
                </Text>
                <Text style={styles.subHeading}>
                  No more waiting - let's get started!
                </Text>
              </View>
              <Image
                resizeMode="contain"
                style={styles.scrollImg}
                source={require('../../assets/images/icons/scroll3.png')}
              />
              <PrimaryButton
                style={styles.primaryBtn}
                onPress={switchView}
                title="Next"
              />
            </View>
          </View>
        </ImageBackground>
      )}
    </View>
  );
};

export default Onboarding;
