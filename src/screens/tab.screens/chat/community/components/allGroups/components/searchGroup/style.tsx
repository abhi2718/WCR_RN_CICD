import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../../../infrastructure/theme/colors';
import { fonts } from '../../../../../../../../infrastructure/theme/fonts';

export const styles = StyleSheet.create({
  searchBarContainer: {
    height: 35,
    backgroundColor: colors.ui.bgMud,
    marginVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 16,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  crossIcon: {
    width: 15,
  },
  searchInput: {
    width: '80%',
    fontFamily: fonts.body,
  },
});
