import React from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { SwitchButtonProps } from '../../../../../../types/screen.type/communityChat';
import { styles } from './styles';
import {useViewModal} from './useViewModal';

const SwitchButton = (props: SwitchButtonProps) => {
  const {rotationX, transformX, stage, setMyGroup, setAllGroup} =
    useViewModal(props);

  return (
    <View style={styles.containerStyles}>
      <Animated.View
        style={{
          ...styles.animatedContainerStyles,
          transform: [
            {
              translateX: rotationX,
            },
          ],
        }}></Animated.View>
      <TouchableOpacity style={styles.touchContainerStyle} onPress={setMyGroup}>
        <Text
          style={stage === 0 ? styles.whiteTextStyle : styles.blackTextStyle}>
          My Groups
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchContainerStyle}
        onPress={setAllGroup}>
        <Text
          style={stage === 1 ? styles.whiteTextStyle : styles.blackTextStyle}>
          All Groups
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SwitchButton;
