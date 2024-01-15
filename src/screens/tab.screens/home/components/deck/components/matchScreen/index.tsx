import React from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import Lottie from 'lottie-react-native';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import { Spacer, dimensions } from '../../../../../../../components/tools';
import { HeaderBar } from '../../../../../../../components/header';
import { PrimaryButton } from '../../../../../../../components/button';

export const MatchScreen = (props) => {
  const { handleHideOfIsMatchScreen, isMatch, startChat } = props;
  const { user } = useSelector(({ userState }) => userState);
  return (
    <View style={styles.container}>
      {/* <Pressable onPress={handleHideOfIsMatchScreen}>
        <Text>Back</Text>
      </Pressable> */}
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
              uri: isMatch?.matchUser?.profilePicture?.url
                ? isMatch?.matchUser?.profilePicture?.url
                : 'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?cs=srgb&dl=pexels-svetozar-milashevich-1490908.jpg&fm=jpg',
            }}
            style={[styles.image, styles.imageRight]}
          />
        </View>
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
            <Pressable onPress={startChat}>
              <PrimaryButton title="Say Hello" />
            </Pressable>
            <Spacer position="top" size={25} />
            <Pressable onPress={handleHideOfIsMatchScreen}>
              <Text style={styles.keepSwiping}>Keep Swiping</Text>
            </Pressable>
            <Spacer position="top" size={15} />
            <Lottie
              source={require('../../../../../../../assets/lotties/success.json')}
              autoPlay
              loop
              style={{
                width: dimensions.width,
                height: dimensions.height - 100,
                position: 'absolute',
                bottom: 0,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
