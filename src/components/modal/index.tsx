import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { ModalProps } from './../../types/components/modal.type';
import { ImageContainer, Row } from '../tools';
import { PrimaryButton } from '../button';
import { colors } from '../../infrastructure/theme/colors';
import { sizes } from '../../infrastructure/theme/sizes';
import { fontSizes } from '../../infrastructure/theme/fonts';

export const WelcomeModalComponent = (props: ModalProps) => {
  const { isVisible, onClose } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => onClose()}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.heading}>WELCOME</Text>
          <Text style={styles.subHeading}>
            Before you start,{'\n'}here’s what you need to know:
          </Text>
          <Row style={styles.row}>
            <ImageContainer
              style={styles.icon}
              source={require('../../assets/images/icons/userProfile.png')}
            />
            <Text style={styles.text}>
              Use your real name that matches your degree (only First Name shown
              by default), or add a display name.
            </Text>
          </Row>
          <Row style={styles.row}>
            <ImageContainer
              style={styles.icon}
              source={require('../../assets/images/icons/blockUser.png')}
            />
            <Text style={styles.text}>
              Once you verify, you can't change First Name, Last Name (not shown
              on profile), Email, DOB, or Gender.
            </Text>
          </Row>
          <Text style={styles.footerText}>
            Now, let's find your perfect match!
          </Text>
          <Row>
            <PrimaryButton onPress={() => onClose()} title="Continue" />
          </Row>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ui.opacity,
  },
  modalView: {
    margin: sizes[7],
    backgroundColor: 'white',
    borderRadius: sizes[4],
    paddingTop: sizes[7],
    paddingBottom: sizes[9],
    paddingHorizontal: sizes[3],
    shadowColor: colors.ui.black,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: sizes[0],
    elevation: sizes[0],
  },
  heading: {
    fontWeight: '700',
    fontSize: sizes[7],
    color: colors.ui.textHead,
    fontFamily: 'Urbanist-Regular',
  },
  subHeading: {
    paddingVertical: 16,
    color: colors.ui.secondary,
    fontSize: sizes[3],
    lineHeight: sizes[4],
    letterSpacing: 0.5,
    fontFamily: 'Urbanist-Regular',
  },
  row: {
    gap: sizes[1],
    width: '100%',
    marginVertical: sizes[1],
  },
  text: {
    color: colors.ui.text,
    fontSize: fontSizes.text,
    fontWeight: '400',
    fontFamily: 'Urbanist-Regular',
    lineHeight: sizes[4],
  },
  icon: {
    width: sizes[5],
    height: sizes[5],
    marginHorizontal: sizes[1],
  },
  footerText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: sizes[4],
    marginVertical: sizes[3],
    color: colors.ui.textHead,
    fontFamily: 'Urbanist-Regular',
  },
});
