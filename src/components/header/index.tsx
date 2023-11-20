import React from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { Row, Logo, dimensions } from '../tools';
import { useNavigation } from '@react-navigation/native';
import { sizes } from '../../infrastructure/theme/sizes';
import { colors } from '../../infrastructure/theme/colors';
import { fontSizes } from '../../infrastructure/theme/fonts';
import { PrimaryButton } from '../button';

interface HeaderBarProps {
  skip?: () => void;
  info?: () => void;
  goBack?: () => void;
  isModalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export const HeaderBar = (props: HeaderBarProps) => {
  const { goBack, skip, info, isModalVisible, setModalVisible } = props;
  const handleInfoPress = () => {
    // Show the modal when info is pressed
    setModalVisible(true);

    // Call the info function if it is provided
    if (info) {
      info();
    }
  };

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
        <Pressable onPress={handleInfoPress}>
          <Image
            style={headerStyle.infoIcon}
            source={require('../../assets/images/icons/infoIcon.png')}
          />
        </Pressable>
      ) : (
        <View style={headerStyle.emptyView} />
      )}

      {/* Profile pic info Modal */}

      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={modalStyle.centeredView}>
          <View style={modalStyle.modalView}>
            <View>
              <Text style={modalStyle.heading}>Profile</Text>
              <Row style={modalStyle.row}>
                <Image
                  style={modalStyle.icon}
                  source={require('../../assets/images/icons/blackCheck.png')}
                />
                <Text style={modalStyle.text}>
                  Your profile picture shows your face {`\n`} clearly - no
                  shades, masks, or obstructions
                </Text>
              </Row>
            </View>
            <View>
              <Text style={modalStyle.footerText}>
                Now, let's find your perfect match!
              </Text>
              <Row>
                <PrimaryButton
                  onPress={() => setModalVisible(false)}
                  title="Continue"
                />
              </Row>
            </View>
          </View>
        </View>
      </Modal>
    </Row>
  );
};

const modalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ui.opacity,
  },
  modalView: {
    justifyContent: 'space-between',
    margin: sizes[5],
    backgroundColor: 'white',
    borderRadius: sizes[4],
    paddingTop: sizes[5],
    paddingBottom: sizes[4],
    paddingHorizontal: sizes[3],
    shadowColor: colors.ui.black,
    height: dimensions.height - 300,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: sizes[0],
    elevation: sizes[0],
  },
  heading: {
    fontWeight: '600',
    fontSize: sizes[7],
    color: colors.ui.text,
    marginBottom: sizes[4],
  },

  row: {
    gap: sizes[1],
    width: '100%',
    marginVertical: sizes[1],
  },
  text: {
    color: colors.ui.text,
    fontSize: sizes[3],
  },
  icon: {
    width: sizes[5],
    height: sizes[5],
    marginRight: sizes[1],
  },
  footerText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: sizes[4],
    marginVertical: sizes[3],
    color: colors.ui.black,
  },
});

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
    height: sizes[5],
    width: sizes[5],
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
