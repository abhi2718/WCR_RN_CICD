import React from 'react';
import {
  View,
  Image,
  ScrollView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {dimensions, isAndroid} from '../../../../../../../components/tools';
import {styles} from './cardStyle';
import { Card } from '../swiper';

export default function CardCompoent({item}) {
  const tabBarHeight = useBottomTabBarHeight();
  const height = imageStyle(tabBarHeight).height;
  return (
    <View style={{backgroundColor:"#fff"}}>
      <Card style={{height}}>
        <View style={imageStyle(tabBarHeight).height}>
          <ScrollView bounces={false} style={imageStyle(tabBarHeight).height}>
            <FastImage style={imageStyle(tabBarHeight)} source={{ uri: item }} />
            <FastImage
              style={imageStyle(tabBarHeight)}
              source={{uri: 'https://placekitten.com/300/400'}}
            />
          </ScrollView>
        </View>
      </Card>
    </View>
  );
}

const imageStyle = (tabBarHeight) => ({
  ...styles.imageStyle,
  height: isAndroid
    ? dimensions.height - (tabBarHeight + dimensions.statusBarHeight + 64)
    : dimensions.height - (tabBarHeight + dimensions.statusBarHeight + 100),
});
