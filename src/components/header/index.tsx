import React from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { Row, Logo, dimensions, Spacer } from '../tools';
import { useNavigation } from '@react-navigation/native';
import { sizes } from '../../infrastructure/theme/sizes';
import { colors } from '../../infrastructure/theme/colors';
import { fontSizes } from '../../infrastructure/theme/fonts';
import { PrimaryButton } from '../button';

interface HeaderBarProps {
  skip?: () => void;
  info?: () => void;
  goBack?: () => void;
}
export const HeaderBar = (props: HeaderBarProps) => {
  const { goBack, skip, info } = props;

  const navigation = useNavigation();
  const _goBack = goBack ? goBack : navigation.goBack;
  return (
    <Row justifyContent="space-between" alignItems="center">
      <Pressable onPress={_goBack}>
        <View style={headerStyle.arrowContainer}>
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
      ) : props.info ? (
        <Pressable onPress={info}>
          <Image
            style={headerStyle.infoIcon}
            source={require('../../assets/images/icons/infoIcon.png')}
          />
        </Pressable>
      ) : (
        <View style={headerStyle.emptyView} />
      )}

      {/* Profile pic info Modal */}
    </Row>
  );
};

export const headerStyle = StyleSheet.create({
  arrow: {
    height: sizes[4],
    width: sizes[2],
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
  infoIcon: {
    height: sizes[4],
    width: sizes[4],
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

interface HeaderDeckProps {
  count?: number;
  toggleSearchModal?: any;
  goToNotification?: any;
}

export const HeaderDeck = (props: HeaderDeckProps) => {
  const { count, toggleSearchModal, goToNotification } = props;
  return (
    <View>
      <Row justifyContent="space-between" alignItems="center">
        <Row gap={25}>
          <Pressable onPress={goToNotification}>
            <Text style={headerDeckStyle.count}>{count}</Text>
            <Image
              style={headerDeckStyle.notificationIcon}
              resizeMode="contain"
              source={require('../../assets/images/notification.png')}
            />
          </Pressable>
          <Pressable onPress={toggleSearchModal}>
            <Image
              style={headerDeckStyle.searchIcon}
              source={require('../../assets/images/Magnifier.png')}
            />
          </Pressable>
        </Row>
        <Logo width={45} height={45} />
        <Pressable>
          <Image
            style={headerDeckStyle.searchIcon}
            source={require('../../assets/images/Filter.png')}
          />
        </Pressable>
      </Row>
    </View>
  );
};

export const headerDeckStyle = StyleSheet.create({
  notificationIcon: {
    width: 20,
    height: 35,
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  count: {
    position: 'absolute',
    right: -8,
    top: -4,
    backgroundColor: colors.ui.primary,
    color: colors.ui.white,
    width: 23,
    paddingTop: 1,
    textAlign: 'center',
    height: 23,
    borderRadius: 13.5,
    overflow: 'hidden',
    fontSize: 12,
    borderColor: colors.ui.white,
    borderWidth: 2,
    zIndex: 10,
  },
});
