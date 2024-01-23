import React, { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';
import { ModalProps } from './../../../types/components/modal.type';
import { ImageContainer, Row, Spacer } from '../../tools';
import { PrimaryButton } from '../../button';
import { colors } from '../../../infrastructure/theme/colors';
import { sizes } from '../../../infrastructure/theme/sizes';
import { fontSizes, fonts } from '../../../infrastructure/theme/fonts';

export const WelocmeGroupModal = (props: ModalProps) => {
  const { isVisible, onClose } = props;
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Row justifyContent="space-between" alignItems="center">
            <Text style={styles.heading}>WELCOME</Text>
            <Pressable onPress={() => onClose(false)}>
              <Image
                style={styles.crossicon}
                source={require('../../../assets/images/icons/crossIcon.png')}
              />
            </Pressable>
          </Row>
          <Spacer position="bottom" size={15} />
          <Row style={styles.row}>
            <ImageContainer
              style={styles.icon}
              source={require('../../../assets/images/icons/blackCheck.png')}
            />
            <Text style={styles.text}>
              Experience a new and exciting way to connect with your fellow
              professionals through community chat. Engage in vibrant
              discussions, share photos, and explore diverse interest groups.
              Whether it's within the group or through private messages, this
              feature offers a chance to forge deeper connections beyond the
              typical swipe.
            </Text>
          </Row>
          <Row style={styles.row}>
            <ImageContainer
              style={styles.icon}
              source={require('../../../assets/images/icons/blackCheck.png')}
            />
            <Text style={styles.text}>
              Before joining, kindly accept the group rules. Let's come together
              and create meaningful connections!
            </Text>
          </Row>
          <View style={styles.centerContent}>
            <Text style={styles.footerText}>Let's get started.</Text>
            <Text style={styles.footerText}>
              Join our many interest groups!
            </Text>
          </View>
          <Row>
            <PrimaryButton onPress={() => onClose(true)} title="Continue" />
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
    fontSize: 26,
    color: colors.ui.textHead,
    fontFamily: fonts.body,
  },
  subHeading: {
    paddingVertical: 16,
    color: colors.ui.secondary,
    fontSize: sizes[3],
    lineHeight: sizes[4],
    letterSpacing: 0.5,
    fontFamily: fonts.body,
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
    lineHeight: sizes[4],
    fontFamily: fonts.body,
  },
  icon: {
    width: sizes[5],
    height: sizes[5],
    marginHorizontal: sizes[1],
  },
  crossicon: {
    width: sizes[3],
    height: sizes[3],
  },
  footerText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: sizes[4],
    color: colors.ui.textHead,
    fontFamily: fonts.body,
  },
  centerContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginVertical: 16,
  },
});
