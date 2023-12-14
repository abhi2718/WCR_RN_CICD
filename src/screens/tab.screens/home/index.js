import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Deck from './components/deck';
import { styles } from './styles';
import { ScreenWrapper } from '../../../components/tools';

export default function HomeTab({ route }) {
  return (
    <ScreenWrapper>
      <Deck route={route} />
    </ScreenWrapper>
  );
}
