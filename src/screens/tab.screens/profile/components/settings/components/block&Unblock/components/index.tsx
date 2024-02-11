import React from 'react';
import { View, Text, Pressable, ScrollView, Image } from 'react-native';
import {
  DropdownInput,
  FlatInput,
} from '../../../../../../../../components/inputBox';
import { Column, Row, Spacer } from '../../../../../../../../components/tools';
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
export type BlockedUserProps = {
  id: string;
  profileUrl: string;
  name: string;
  onPress:(id:string)=>void;
};
export const BlockedUser = (props: BlockedUserProps) => {
  const { id,profileUrl,name,onPress } = props;
  return (
    <View key={id} style={styles.blockUserWrapper}>
      <Row justifyContent="space-between" alignItems="center">
        <Row alignItems="center" gap={10}>
          <Image
            style={styles.blockUserAvatar}
            source={{ uri: profileUrl }}
          />
          <Column>
            <Text style={styles.blockUserText}>{name}</Text>
            <Text style={styles.blockedText}>Blocked</Text>
          </Column>
        </Row>
        <Pressable
          onPress={() => onPress(id)}
          style={styles.blockedButton}
        >
          <Text style={styles.blockButtonText}>Unblock</Text>
        </Pressable>
      </Row>
    </View>
  );
}