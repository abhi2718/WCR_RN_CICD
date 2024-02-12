import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../../infrastructure/theme/colors';
import { sizes } from '../../../../../../../infrastructure/theme/sizes';
import {
  fontWeights,
  fonts,
} from '../../../../../../../infrastructure/theme/fonts';

export const styles = StyleSheet.create({
  backButtonContainer: { width: 40, height: 40 },
  imageStyle: { width: 40, height: 40, borderRadius: 30 },
  profileAvatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  scopeMemberText: {
    color: '#7A7A7A',
    fontSize: sizes[2] + 1,
    fontWeight: fontWeights.regular,
    fontFamily: fonts.body,
  },
  memberNameText: {
    color: '#1B1B1B',
    fontSize: sizes[3] - 2,
    fontWeight: fontWeights.bold,
    fontFamily: fonts.body,
  },

  arrowStyle: {
    height: sizes[4],
    width: sizes[4],
  },

  memberName: {
    color: colors.ui.text,
    fontSize: sizes[4],
    fontWeight: fontWeights.bold,
    fontFamily: fonts.body,
  },

  viewProfileBtn: {
    width: 160,
    height: 54,
    borderColor: colors.ui.primary,
    borderWidth: 1,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg.secondary,
  },
  viewBtnText: {
    color: '#D31335',
    fontSize: sizes[3],
    fontWeight: fontWeights.bold,
    fontFamily: fonts.body,
  },
  messageBtn: {
    width: 160,
    height: 54,
    borderColor: colors.ui.primary,
    borderWidth: 1,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ui.primary,
    fontFamily: fonts.body,
  },
  msgBtnText: {
    color: '#FEFBFD',
    fontSize: sizes[3],
    fontWeight: fontWeights.bold,
    fontFamily: fonts.body,
  },

  profileHeader: {
    padding: sizes[3],
    marginBottom: sizes[3],
  },

  logoStyle: {
    height: sizes[6] - 2,
    width: sizes[8],
  },

  logoHeadContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
