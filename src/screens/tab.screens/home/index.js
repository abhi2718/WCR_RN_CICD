import React from 'react';
import {View} from 'react-native';
import Deck from './components/deck';
import { styles } from "./styles";

export default function HomeTab() {
  return (
    <View style={styles.containerStyle}>
      <Deck />
    </View>
  );
}

