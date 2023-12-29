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
        <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
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
      <View />
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
  iconContainer: { paddingRight: 15 },
  headingText: {
    fontSize: fontSizes.h5,
    fontWeight: fontWeights.semiBold,
    color: colors.ui.text,
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
        elevation: 12,
      },
    }),
  },
});
export default Header;
