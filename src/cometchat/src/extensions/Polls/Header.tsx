import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { ICONS } from './resources';
import { ImageType } from '../../shared';

interface HeaderInterface {
  title: string;
  titleStyle: any;
  closeIconTint: string;
  createIconTint: string;
  joinIcon: ImageType;
  closeIcon: ImageType;
  onCancel: () => void;
  onSubmit: () => void;
}
const Header = (props: HeaderInterface) => {
  const {
    title,
    titleStyle,
    closeIconTint,
    createIconTint,
    joinIcon,
    closeIcon,
    onCancel,
    onSubmit,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={onCancel}>
          <Image
            source={closeIcon ?? ICONS.CLOSE}
            style={{
              tintColor: closeIconTint ?? 'rgb(51, 153, 255)',
              height: 24,
              width: 24,
            }}
          />
        </TouchableOpacity>
        <Text style={[styles.headingText, titleStyle]}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={onSubmit}>
        <Image
          source={joinIcon ?? ICONS.TICK}
          style={{
            tintColor: createIconTint ?? 'rgb(51, 153, 255)',
            height: 24,
            width: 24,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: { paddingRight: 15 },
  headingText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Urbanist-Regular',
  },
});
export default Header;
