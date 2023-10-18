import React, {useEffect, useRef, useState} from 'react';
import {View, Image} from 'react-native';
import Deck from './components/deck';

export default function HomeTab() {
  return (
    <View style={{ flex: 1 }}>
      <Deck />
    </View>
  );
}

