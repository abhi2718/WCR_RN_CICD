import { StyleSheet } from 'react-native';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../../../infrastructure/theme/fonts';
import { colors } from '../../../../infrastructure/theme/colors';

export const notificationStyles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    // borderColor: 'blue',
    // borderWidth: 2,
  },
  profileImageStyle: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  createdAt: {
    fontWeight: fontWeights.medium,
    color: colors.ui.placeholder,
    fontSize: fontSizes.button,
    fontFamily: 'Urbanist-Regular',
  },
  notifyiMsg: {
    fontSize: fontSizes.button,
    fontFamily: 'Urbanist-Regular',
  },
  deletBtn: {
    color: 'white',
    paddingHorizontal: 10,
  },
});
