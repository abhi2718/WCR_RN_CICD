import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../../../components/tools';
import { fontWeights } from '../../../../../../infrastructure/theme/fonts';

export const styles = StyleSheet.create({
  containerStyles: {
    flexDirection: 'row',
    position: 'relative',
    height: 40,
    borderRadius: 40,
    backgroundColor: '#EBF0FE',
    marginHorizontal: 5,
    width: dimensions.width - 32,
  },
  animatedContainerStyles: {
    position: 'absolute',
    height: 40 - 2 * 2,
    top: 2,
    bottom: 2,
    borderRadius: 40,
    width: (dimensions.width - 32) / 2,
    backgroundColor: 'red',
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
