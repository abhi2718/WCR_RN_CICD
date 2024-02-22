import { StyleSheet } from 'react-native';
import { fontWeights, fonts } from '../../../infrastructure/theme/fonts';
import { sizes } from '../../../infrastructure/theme/sizes';

export const styles = StyleSheet.create({
  welcomeHead: {
    fontSize: sizes[4],
    color: '#404040',
    fontWeight: fontWeights.bold,
  },
  welcomeText: {
    fontSize: sizes[2],
    color: '#404040',
    fontWeight: fontWeights.semiBold,
    textAlign: 'center',
  },
  infohead: {
    fontSize: sizes[2.5],
    color: '#404040',
    fontWeight: fontWeights.bold,
    textTransform: 'uppercase',
  },
  listHead: {
    fontSize: sizes[2.5],
    color: '#404040',
    fontWeight: fontWeights.bold,
  },
  listText: {
    fontSize: sizes[2],
    color: '#404040',
    width: 280,
  },
  finaltext: {
    fontSize: sizes[3],
    color: '#bb0000',
    fontWeight: fontWeights.semiBold,
    textAlign: 'center',
    width: '90%',
  },
});
