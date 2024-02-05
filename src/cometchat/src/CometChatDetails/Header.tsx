import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import React from 'react';
import { colors } from '../../../infrastructure/theme/colors';
import { theme } from '../../../infrastructure/theme';
import { fonts } from '../../../infrastructure/theme/fonts';
export type HeaderType = {
  title: string;
  showCloseButton: boolean;
  closeButtonIcon: {
    uri: string;
  };
  onPress: () => void;
  titleStyle: {
    padding: number;
  };
};
const Header = (props: HeaderType) => {
  const { title, showCloseButton, closeButtonIcon, onPress, titleStyle } =
    props;
  return (
    <View style={[styles.container, styles.shadows]}>
      {showCloseButton && (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.backButtonStyle}>
            <Image source={closeButtonIcon} style={styles.imageStyle} />
          </View>
        </TouchableOpacity>
      )}
      <Text style={[styles.headingText, titleStyle]}>{title}</Text>
      <View style={styles.tailContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  tailContainer: {
    width: 30,
  },
  imageStyle: {
    height: 24,
    width: 24,
    justifyContent: 'flex-start',
  },
  backButtonStyle: {
    width: 50,
    height: 40,
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  headingText: {
    fontSize: theme.units.sizes[22],
    fontWeight: theme.fontWeights.medium,
    color: colors.ui.text,
    fontFamily: fonts.body,
  },
  shadows: {
    height: 58,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomColor: theme.colors.border,
    borderBottomWidth: theme.units.borderSize.headerBorderWidth,
    // ...Platform.select({
    //   ios: {
    //     shadowColor: 'black',
    //     shadowOffset: { width: 10, height: 10 },
    //     shadowOpacity: 0.04,
    //     shadowRadius: 40,
    //   },
    //   android: {
    //     elevation: 2,
    //   },
    // }),
  },
});
export default Header;
