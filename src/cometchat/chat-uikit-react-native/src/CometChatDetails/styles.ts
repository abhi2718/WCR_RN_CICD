import { StyleSheet } from 'react-native';
import { sizes } from '../../../../infrastructure/theme/sizes';
import { fontWeights } from '../../../../infrastructure/theme/fonts';
import { colors } from '../../../../infrastructure/theme/colors';
import { dimensions } from '../../../../components/tools';

export const styles = StyleSheet.create({
  container: { flex: 1, paddingLeft: 15, backgroundColor: '#fff' },
  sectionDivider: {
    height: 1,
    marginTop: 20,
    marginBottom: 10,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 5,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  listItemTailIcon: { height: 12, width: 12 },
  groupName: {
    fontSize: sizes[4],
    fontWeight: fontWeights.bold,
    color: colors.ui.text,
    textAlign: 'center',
  },
  descContainer: {
    backgroundColor: '#F7F7F7',
    padding: sizes[1],
    borderRadius: sizes[1],
    marginTop: sizes[1],
  },
  groupDescription: {
    fontSize: sizes[2] + 2,
    fontWeight: fontWeights.regular,
    color: colors.ui.text,
    width: dimensions.width - 40,
    lineHeight: 21,
  },
  participantCount: {
    fontSize: sizes[2] + 2,
    fontWeight: fontWeights.medium,
    color: '#818181',
    textAlign: 'center',
  },
  groupInfoContainer: {
    flex: 1,
    alignItems: 'center',
    gap: sizes[1],
    position: 'relative',
  },
  infoIcon: {
    height: sizes[4],
    width: sizes[4],
  },
  infoBtBox: {
    position: 'absolute',
    right: 0,
  },
});
