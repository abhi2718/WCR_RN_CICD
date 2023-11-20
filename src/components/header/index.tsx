import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Row, Logo } from '../tools';
import { useNavigation } from '@react-navigation/native';
import { sizes } from '../../infrastructure/theme/sizes';
import { colors } from '../../infrastructure/theme/colors';

interface HeaderBarProps {
  skip?: () => void;
  goBack?: () => void;
  showModal?: () => void;
}
export const HeaderBar = (props: HeaderBarProps) => {
  const { goBack, skip,showModal } = props;
  const navigation = useNavigation();
  const _goBack = goBack ? goBack : navigation.goBack;
  return (
    <Row justifyContent="space-between" alignItems="center">
      <Pressable onPress={_goBack}>
        <View style={headerStyle.arrowContainer} >
          <Image
            style={headerStyle.arrow}
            source={require('../../assets/images/icons/arrow.png')}
          />
        </View>
      </Pressable>
      <Logo width={50} height={35} />
      {props.skip ? (
        <Pressable onPress={skip}>
          <Text style={headerStyle.skipBtn}>Skip</Text>
        </Pressable>
      ) : (
        <View style={headerStyle.emptyView} />
      )}
      {props.showModal ? (
        <Pressable onPress={showModal}>
          <Text style={headerStyle.skipBtn}>
          <Image
            source={require('../../assets/images/icons/infoIcon.png')}
          /></Text>
        </Pressable>
      ) : (
        <View style={headerStyle.emptyView} />
      )}
    </Row>
  );
};
export const headerStyle = StyleSheet.create({
  arrow: {
    height: sizes[4],
    width:sizes[2],
  },
  logo: {
    marginLeft: -5,
    width: sizes[11],
    height: sizes[8],
    overflow: 'visible',
  },
  skipBtn: {
    fontSize: sizes[4],
    color: colors.ui.text,
  },
  emptyView: {
    height: sizes[11],
    width: sizes[11],
  },

  arrowContainer: {
    height: sizes[11],
    width: sizes[11],
    justifyContent: 'center',
  },
});
