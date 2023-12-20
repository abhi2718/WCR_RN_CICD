import React from 'react';
import { View, Text, Pressable, ScrollView, Image } from 'react-native';
import {
  DropdownInput,
  FlatInput,
} from '../../../../../../../../components/inputBox';
import { Row, Spacer } from '../../../../../../../../components/tools';
import { styles } from '../styles';
type ChipProps = {
  item: {
    label: string;
    value: string;
  };
  onPress: () => void;
};
export const Chip = (props: ChipProps) => {
  const { item, onPress } = props;
  return (
    <Row alignItems="center" style={styles.chip}>
      <Text style={styles.chipText}>{item.label}</Text>
      <Pressable onPress={onPress}>
        <Image
          resizeMode="contain"
          style={styles.chipImage}
          source={require('../../../../../../../../assets/images/icons/crossIcon.png')}
        />
      </Pressable>
    </Row>
  );
};
