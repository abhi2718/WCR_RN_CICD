import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../../components/tools';
import { fontWeights } from '../../../../../../infrastructure/theme/fonts';
import { colors } from '../../../../../../infrastructure/theme/colors';

export const styles = StyleSheet.create({
  containerStyles: {
    marginVertical: 15,
    flexDirection: 'row',
    position: 'relative',
    height: 45,
    borderRadius: 35,
    backgroundColor: colors.ui.bgMud,
    width: dimensions.width - 32,
  },
  animatedContainerStyles: {
    position: 'absolute',
    height: 45 - 2 * 2,
    top: 2,
    bottom: 2,
    borderRadius: 35,
    width: (dimensions.width - 32) / 2,
    backgroundColor: colors.ui.primary,
  },
  touchContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackTextStyle: {
    fontSize: 16,
    color: 'black',
    fontWeight: fontWeights.regular,
  },
  whiteTextStyle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: fontWeights.regular,
  },
});
