import React from 'react';
import { View, Text } from 'react-native';
import { useViewModal } from './useViewModal';

export const CustomInput = () => {
  const { sayHi } = useViewModal();
  return (
    <View>
      <Text>{sayHi}</Text>
      <Text>Hello</Text>
    </View>
  );
};
