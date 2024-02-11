import React from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import Lottie from 'lottie-react-native';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import { Spacer, dimensions } from '../../../../../../../components/tools';
import { HeaderBar } from '../../../../../../../components/header';
import { PrimaryButton } from '../../../../../../../components/button';
import { MatchScreenPropsType } from '../../../../../../../types/screen.type/home.type';

export const MatchScreen = (props: MatchScreenPropsType) => {
  const { handleHideOfIsMatchScreen, isMatch, startChat } = props;
  const { user } = useSelector(({ userState }) => userState);
  return (
    <View style={styles.container}>
      <HeaderBar goBack={handleHideOfIsMatchScreen} />
      <View style={styles.hrLine} />
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={styles.matchBgImgOne}
            source={require('../../../../../../../assets/images/icons/matchBgImg.png')}
          />
          <Image
            resizeMode="contain"
            style={styles.matchBgImgTwo}
            source={require('../../../../../../../assets/images/icons/matchBgImg.png')}
          />
          <Image
            source={{
              uri: user?.profilePicture?.url,
            }}
            style={[styles.image, styles.imageLeft]}
          />
          <Image
            source={{
              uri: isMatch?.matchUser?.profilePicture?.url,
            }}
            style={[styles.image, styles.imageRight]}
          />
        </View>
        <Lottie
          source={require('../../../../../../../assets/lotties/success.json')}
          autoPlay
          loop
          style={styles.lottieStyle}
        />
        <View style={styles.footerContainer}>
          <Image
            resizeMode="contain"
            style={styles.itsAMatchText}
            source={require('../../../../../../../assets/images/itsAMatchText.png')}
          />
          <Text style={styles.subText}>
            Don't keep them waiting. Say hello now!
          </Text>
          <View>
            <Spacer position="top" size={25} />
            <PrimaryButton onPress={startChat} title="Say Hello" />
            <Spacer position="top" size={25} />
            <Pressable onPress={handleHideOfIsMatchScreen}>
              <Text style={styles.keepSwiping}>Keep Swiping</Text>
            </Pressable>
            <Spacer position="top" size={15} />
          </View>
        </View>
      </View>
    </View>
  );
};
