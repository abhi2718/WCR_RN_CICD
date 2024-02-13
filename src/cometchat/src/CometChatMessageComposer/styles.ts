import { Platform, StyleSheet } from 'react-native';
import { theme } from '../../../infrastructure/theme';
import { fonts } from '../../../infrastructure/theme/fonts';

export const Style = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  padding: {
    paddingStart: 8,
    paddingEnd: 8,
  },
  buttonContainerStyle: {
    justifyContent: 'space-between',
  },
  rowDirection: {
    flexDirection: 'row',
  },
  imageStyle: {
    margin: 8,
  },
  liveReactionBtnStyle: {
    height: 24,
    width: 24,
    resizeMode: 'stretch',
  },
  liveReactionStyle: {
    alignItems: 'flex-end',
  },
  avatarSize: {
    width: 32,
    height: 32,
    borderRadius: 6,
  },
  spaceAvatarY: {
    marginVertical: 8,
  },
  textCapitalize: {
    textTransform: 'capitalize',
    fontFamily: fonts.body,
  },
  darkText: {
    fontSize: 16,
    fontWeight: theme.fontWeights.semiBold,
    color: theme.colors.ui.text,
    fontFamily: fonts.body,
  },
  lightText: {
    fontSize: 12,
    fontWeight: theme.fontWeights.regular,
    color: theme.colors.ui.textAccent,
    fontFamily: fonts.body,
  },
  closeMentionList: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  closeIcon: {
    width: 10,
    height: 10,
  },
  mentionListBox: {
    backgroundColor: theme.colors.ui.white,
    padding: 12,
    marginHorizontal: 12,
    maxHeight: 250,
    borderColor: '#D7DADF',
    borderWidth: 1,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: 5,
          width: 5,
        },
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
