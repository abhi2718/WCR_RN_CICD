import React, { useCallback } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';

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
      <Row gap={10} style={styles.chip} alignItems="center">
        <Text style={styles.text}>{title}</Text>
        <Pressable onPress={handlePress}>
          <Image
            style={styles.crossIcon}
            source={require('../../assets/images/icons/crossIcon.png')}
          />
        </Pressable>
      </Row>
    </View>
  );
};
