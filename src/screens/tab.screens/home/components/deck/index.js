import React from 'react';
import {View,Text} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {styles} from './homeStyle';
import {useViewModal} from './homeViewModal';
import {FullLoader, Spacer,isAndroid} from '../../../../../components/tools';
import CardCompoent from './components/card.component/card';
import CardStack from './components/swiper';

export default function Deck() {
  const {images, isLoading} = useViewModal();
  const tabBarHeight = useBottomTabBarHeight();
  if (isLoading) {
    return (
      <View style={styles.container}>
        <FullLoader />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerViewStyle}>
        <Text style={styles.textStyle}>Header View</Text>
      </View>
      <Spacer position="bottom" size={8} />
      <CardStack horizontalThreshold={isAndroid?0:0}  verticalSwipe={false}>
        {images.map((item, index) => (
          <CardCompoent key={index} item={item} />
        ))}
      </CardStack>
    </View>
  );
}
