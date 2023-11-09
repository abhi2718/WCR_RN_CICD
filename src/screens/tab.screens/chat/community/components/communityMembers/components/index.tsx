import React from 'react';
import {View,Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Row, Spacer} from '../../../../../../../components/tools';
import { styles } from './styles';
import { MemberProps } from '../../../../../../../types/screen.type/communityChat';
export const Member = (props:MemberProps) => {
  const { member } = props;
  return (
    <View>
      <Spacer position="bottom" size={10}>
        <Row alignItems="center">
          <FastImage
            style={styles.imageStyle}
            source={{
              uri: member.getAvatar(),
            }}
          />
          <Spacer position="left" size={10}>
            <Text>{member.getName()}</Text>
          </Spacer>
        </Row>
      </Spacer>
    </View>
  );
};
