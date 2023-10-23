import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {ModalProps} from './../../types/components/modal.type';

export const ModalComponent = (props: ModalProps) => {
  const {isVisible, onClose} = props;
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => onClose()}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>WELCOME</Text>
            <Text style={styles.listItemStyle}>
              1. Use your real name that matches your degree (only First Name
              shown by default), or add a display name.
            </Text>
            <Text style={styles.listItemStyle}>
              2. Once you verify, you can't change First Name, Last Name (not
              shown on profile), Email, DOB, or Gender.
            </Text>
            <Text style={styles.listItemStyle}>
              3. Your profile picture shows your face clearly - no shades,
              masks, or obstructions
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onClose()}>
              <Text style={styles.textStyle}>close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 32,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  listItemStyle: {
    marginLeft: 20,
    fontSize: 16,
  },
});
