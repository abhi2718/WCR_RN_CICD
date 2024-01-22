import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import React from 'react';
import { ICONS } from './resources';
import { colors } from '../../../infrastructure/theme/colors';
import { fontSizes, fontWeights } from '../../../infrastructure/theme/fonts';
import { theme } from '../../../infrastructure/theme';

const Header = (props) => {
  const {
    title,
    showCloseButton,
    closeButtonIcon,
    onPress,
    titleStyle,
    closeIconTint,
  } = props;
  return (
    <View style={[styles.container, styles.shadows]}>
      {showCloseButton && (
        <TouchableOpacity onPress={onPress}>
          <Image
            source={closeButtonIcon}
            style={{
              // tintColor: closeIconTint ?? 'rgb(51, 153, 255)',
              height: 24,
              width: 24,
            }}
          />
        </TouchableOpacity>
      )}
      <Text style={[styles.headingText, titleStyle]}>{title}</Text>
      <View style={{ width: 24 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontFamily: 'Urbanist-Regular',
  },
  shadows: {
    padding: theme.units.sizes[3],
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
});
export default Header;
