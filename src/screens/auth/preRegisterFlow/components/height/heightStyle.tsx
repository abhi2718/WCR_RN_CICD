import { StyleSheet } from 'react-native';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { fontSizes, fonts } from '../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../infrastructure/theme/colors';
import { theme } from '../../../../../infrastructure/theme';

export const HeightStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  flex1: {
    flex: 1,
  },
  subHeader: {
    fontSize: fontSizes.title,
    fontWeight: '700',
    color: colors.ui.text,
    marginTop: sizes[6],
    marginBottom: sizes[3],
    fontFamily: fonts.body,
  },
  pickerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  picker: {
    backgroundColor: 'white',
  },
  switchDiv: {
    alignItems: 'flex-end',
    marginBottom: 40,
  },
  switch: {
    width: 150,
  },
  heightHeader: {
    height: 58,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.border,
    paddingVertical: 12,
  },
  heightHeaderTitle: {
    fontSize: 24,
    fontWeight: theme.fontWeights.semiBold,
    color: colors.ui.text,
    textAlign: 'center',
  },
  heightFooter: {
    paddingTop: 16,
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
});
