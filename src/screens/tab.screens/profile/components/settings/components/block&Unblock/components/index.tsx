import React from 'react';
import { View, Text, Pressable, ScrollView, Image } from 'react-native';
import {
  DropdownInput,
  FlatInput,
} from '../../../../../../../../components/inputBox';
import { Row, Spacer } from '../../../../../../../../components/tools';
type ChipProps = {
    item: {
        label: string,
        value:string
    }
    onPress: () => void
}
export const Chip = (props:ChipProps) => {
    const { item, onPress } = props;
    return (
      <Spacer position='rigth' size={16}>
         <Row>
        <View>
          <Text>{item.label}</Text>
        </View>
          <Spacer  position='rigth' size={16}>
          <Pressable onPress={onPress}>
          <Text>X</Text>
        </Pressable>
      </Spacer>
      </Row>
     </Spacer>
    );
  };