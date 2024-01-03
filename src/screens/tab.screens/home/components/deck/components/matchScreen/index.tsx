import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import Lottie from 'lottie-react-native';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import { dimensions } from '../../../../../../../components/tools';

export const MatchScreen = (props) => {
  const { handleHideOfIsMatchScreen, isMatch, startChat } = props;
  const { user } = useSelector(({ userState }) => userState);
  return (
    <View style={styles.container}>
      <Pressable onPress={handleHideOfIsMatchScreen}>
        <Text>Back</Text>
      </Pressable>
      <View style={styles.imageContainer}>
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
      <Lottie
        source={require('../../../../../../../assets/lotties/success.json')}
        autoPlay
        loop
        style={{
          width: dimensions.width,
          height: 400,
        }}
      />
      <Text>It's Match</Text>
      <View>
        <Pressable onPress={startChat}>
          <Text>Say Hello</Text>
        </Pressable>
        <Pressable onPress={handleHideOfIsMatchScreen}>
          <Text>Keep Swiping</Text>
        </Pressable>
      </View>
    </View>
  );
};
