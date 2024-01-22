import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../infrastructure/theme/colors';

export const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
  },
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  userNameStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export const modalStyle = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
  },
  containerStyle: {
    padding: 16,
    flex: 1,
  },
  crossIcon: {
    width: 16,
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  userNameStyle: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 20,
    color: colors.ui.text,
    fontFamily: 'Urbanist-Regular',
  },
  messageBtn: {
    backgroundColor: colors.bg.secondary,
    borderColor: colors.ui.primary,
    borderRadius: 25,
    borderWidth: 1,
    overflow: 'hidden',
    paddingHorizontal: 25,
    paddingVertical: 14,
    color: colors.ui.primary,
    fontWeight: '700',
    fontFamily: 'Urbanist-Regular',
  },
  profileBtn: {
    fontWeight: '700',
    backgroundColor: colors.ui.primary,
    borderColor: colors.ui.primary,
    borderRadius: 25,
    borderWidth: 1,
    overflow: 'hidden',
    paddingHorizontal: 25,
    paddingVertical: 14,
    color: colors.ui.white,
    fontFamily: 'Urbanist-Regular',
  },
});
