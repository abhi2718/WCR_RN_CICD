import { StyleSheet } from 'react-native';
import { sizes } from '../../../infrastructure/theme/sizes';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../../infrastructure/theme/fonts';
import { colors } from '../../../infrastructure/theme/colors';
import { theme } from '../../../infrastructure/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
  userName: {
    fontSize: 24,
    color: colors.ui.text,
    fontWeight: 'bold',
    fontFamily: fonts.body,
  },
  profileImg: {
    width: sizes[14] * 2,
    height: sizes[14] * 2,
    borderRadius: 100,
  },
  iconStyle: {
    width: sizes[5],
    height: sizes[5],
  },
  iconArrowStyle: {
    width: sizes[2],
    height: sizes[2],
  },
  nameContainer: {
    paddingVertical: sizes[1],
  },
  text: {
    fontSize: sizes[3],
    color: colors.ui.text,
    fontWeight: fontWeights.regular,
    fontFamily: fonts.body,
  },
  logoutText: {
    fontSize: sizes[3],
    color: colors.ui.primary,
    fontWeight: fontWeights.regular,
    fontFamily: fonts.body,
  },
  nameHead: {
    fontSize: sizes[7],
    color: colors.ui.text,
    fontWeight: fontWeights.bold,
    marginTop: sizes[1],
  },
  subHead: {
    fontSize: sizes[3] + 2,
    color: colors.ui.text,
    fontWeight: fontWeights.medium,
  },
  address: {
    fontSize: sizes[3],
    color: 'rgba(64, 64, 64, 0.50)',
    fontWeight: fontWeights.regular,
    fontFamily: fonts.body,
  },
});
