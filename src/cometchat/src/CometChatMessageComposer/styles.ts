import { Platform, StyleSheet } from 'react-native';
import { theme } from '../../../infrastructure/theme';

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
  },
  darkText: {
    fontSize: 16,
    fontWeight: theme.fontWeights.semiBold,
    color: theme.colors.ui.text,
  },
  lightText: {
    fontSize: 12,
    fontWeight: theme.fontWeights.regular,
    color: theme.colors.ui.textAccent,
  },
  closeMentionList: {
    position: 'absolute',
    right: 15,
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
