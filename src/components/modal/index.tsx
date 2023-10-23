import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {ModalProps} from './../../types/components/modal.type';
import {ImageContainer, Row} from '../tools';
import {RedButton} from '../button';

export const ModalComponent = (props: ModalProps) => {
  const {isVisible, onClose} = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => onClose()}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.heading}>WELCOME</Text>
          <Text style={styles.subHeading}>
            Before you start,{'\n'}here’s what you need to know:
          </Text>

          <Row style={styles.row}>
            <ImageContainer
              height={24}
              width={24}
              source={require('../../assets/images/icons/userProfile.png')}
            />

            <Text>
              Use your real name that matches your degree only First Name shown
              by default, or add a display name.
            </Text>
          </Row>

          <Row style={styles.row}>
            <ImageContainer
              height={24}
              width={24}
              source={require('../../assets/images/icons/blockUser.png')}
            />

            <Text>
              Your profile picture shows your face clearly - no shades, masks,
              or obstructions
            </Text>
          </Row>

          <Row style={styles.row}>
            <ImageContainer
              height={24}
              width={24}
              source={require('../../assets/images/icons/blackCheck.png')}
            />

            <Text>
              Use your real name that matches your degree only First Name shown
              by default, or add a display name.
            </Text>
          </Row>

          <Text style={styles.footerText}>
            Now, let's find your perfect match!
          </Text>
          <Row>
            <RedButton onPress={() => onClose()} title="Continue" />
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
    backgroundColor: 'background: rgba(0,0,0, 0.7)',
  },
  modalView: {
    margin: 28,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 26,
    paddingBottom: 20,
    paddingHorizontal: 18,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 34,
    color: '#253245',
  },
  subHeading: {
    paddingVertical: 16,
    color: '#656565',
    fontSize: 15,
  },
  row: {
    gap: 10,
    width: '100%',
    marginVertical: 10,
  },
  footerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
