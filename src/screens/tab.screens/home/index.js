import React from 'react';
import Deck from './components/deck';
import { ScreenWrapper } from '../../../components/tools';

export default function HomeTab({ route }) {
  return (
    <ScreenWrapper>
      <Deck route={route} />
    </ScreenWrapper>
  );
}
