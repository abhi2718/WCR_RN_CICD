import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../../../infrastructure/theme/colors';
import { dimensions } from '../../../../../../../../components/tools';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  imageStyle: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
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
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  groupMembers: {
    fontWeight: '400',
    fontSize: 12,
    marginTop: 4,
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
  },
});
