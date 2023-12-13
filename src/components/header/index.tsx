import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Row, Logo } from '../tools';
import { useNavigation } from '@react-navigation/native';
import { sizes } from '../../infrastructure/theme/sizes';
import { colors } from '../../infrastructure/theme/colors';
import { ROUTES } from '../../navigation';
import { DltLogOutModal } from '../dltLogOutModal';

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
  const { navigate } = useNavigation();
  const goToPrefrence = () => navigate(ROUTES.Preferences);
  return (
    <View>
      <Row justifyContent="space-between" alignItems="center">
        <Row alignItems="center" style={headerDeckStyle.row} gap={25}>
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
        <Pressable onPress={goToPrefrence} style={headerDeckStyle.row}>
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
    width: sizes[4],
    height: sizes[6],
  },
  searchIcon: {
    width: sizes[6],
    height: sizes[6],
  },
  count: {
    position: 'absolute',
    right: -sizes[1],
    top: -sizes[0],
    backgroundColor: colors.ui.primary,
    color: colors.ui.white,
    width: sizes[4],
    paddingTop: 1,
    textAlign: 'center',
    height: sizes[4],
    borderRadius: 13.5,
    overflow: 'hidden',
    fontSize: sizes[2],
    borderColor: colors.ui.white,
    borderWidth: 1,
    zIndex: sizes[2],
  },
  row: {
    width: sizes[10],
  },
});

export const ErrorScreenHeader = () => {
  const [showModal, setShowModal] = useState(false);
 

  const modalShow = () => {
    console.log('show modal')
    setShowModal(true);
  };

  return (
    <>
      <Row
        style={errorScreenHeaderStyle.headerRow}
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo width={40} height={40} />
        <Pressable onPress={modalShow} >
          <Image
            style={errorScreenHeaderStyle.threeDots}
            resizeMode="contain"
            source={require('../../assets/images/icons/threeDots.png')}
          />
        </Pressable>
      </Row>
      <DltLogOutModal
        showModal={showModal}
        setShowModal={setShowModal}
      ></DltLogOutModal>
    </>
  );
};

export const errorScreenHeaderStyle = StyleSheet.create({
  headerRow: {
    width: '100%',
    paddingHorizontal: sizes[3],
    paddingBottom: sizes[2],
    borderBottomColor: colors.ui.chatBorder,
    borderBottomWidth: 1,
  },
  backArrow: {
    width: sizes[6],
  },
  threeDots: {
    height: sizes[4],
  },
});
