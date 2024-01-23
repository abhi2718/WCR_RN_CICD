import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../../../infrastructure/theme/colors';
import { dimensions } from '../../../../../../../../components/tools';
import { theme } from '../../../../../../../../infrastructure/theme';
import { fonts } from '../../../../../../../../infrastructure/theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  imageStyle: {
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
  },
  singleRow: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.ui.chatBorder,
    paddingLeft: 16,
    paddingRight: 16,
  },
  colOne: {
    width: dimensions.width - 150,
  },
  groupName: {
    fontSize: theme.fontSizes.text,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.ui.text,
    textTransform: 'capitalize',
    fontFamily: fonts.body,
  },
  groupMembers: {
    fontWeight: '400',
    fontSize: 12,
    marginTop: 4,
    fontFamily: fonts.body,
  },
  joinedBtn: {
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#EBEBEB',
    paddingHorizontal: 15,
    paddingVertical: 5,
    textTransform: 'uppercase',
    fontWeight: '700',
    color: colors.ui.placeholder,
    fontFamily: fonts.body,
  },
  joinBtn: {
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: colors.ui.primary,
    paddingHorizontal: 15,
    paddingVertical: 5,
    textTransform: 'uppercase',
    fontWeight: '700',
    color: colors.ui.white,
    fontFamily: fonts.body,
  },
});
