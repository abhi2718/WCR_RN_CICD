import React from 'react';
import { View, Text } from 'react-native';
import { useViewModal } from './useViewModal';
import { Logo } from '../../components/tools';
import { splashstyles } from './splashStyle';

export const SplashScreen = () => {
  const {} = useViewModal();
  return (
    <View style={splashstyles.mainContainer}>
      <Logo width={108} height={79} />
    </View>
  );
};
