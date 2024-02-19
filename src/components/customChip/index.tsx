import React, { useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Row, Spacer } from '../tools';
export type CustomChipProps = {
  title: string;
  onPress: (item: string) => void;
};
export const CustomChip = (props: CustomChipProps) => {
  const { title, onPress } = props;
  const handlePress = useCallback(() => onPress(title), [title]);
  return (
    <View>
      <Row>
        <Text>{title}</Text>
        <Spacer position="left" size={10}>
          <Pressable onPress={handlePress}>
            <Text>X</Text>
          </Pressable>
        </Spacer>
      </Row>
    </View>
  );
};
