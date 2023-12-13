import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Deck from './components/deck';
import { styles } from './styles';
import { ScreenContainer } from '../../../components/tools';

export default function HomeTab() {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <Deck />
    </SafeAreaView>
  );
}
