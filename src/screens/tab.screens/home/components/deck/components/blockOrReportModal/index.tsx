import React from 'react';
import { View, StyleSheet, Modal, Text, Pressable } from 'react-native';
import { dimensions } from '../../../../../../../components/tools';
import { colors } from '../../../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
} from '../../../../../../../infrastructure/theme/fonts';

export const BlockAndReportModal = (props: any) => {
  const { showModal, setShowModal, handleBlockUser, handleReport } = props;
  return (
    <>
      <Modal
        visible={showModal}
        animationType="slide"
        presentationStyle="pageSheet" // For bottom sheet-style
        transparent={true} // Allow background visibility
        style={styles.modalContainer}
      >
        <View style={styles.modalContent}>
          <View style={styles.buttonContainer}>
            <Pressable onPress={handleBlockUser}>
              <Text style={styles.textOne}>Block</Text>
            </Pressable>
            <Pressable onPress={handleReport}>
              <View style={styles.hrLine} />
            </Pressable>
            <Text style={styles.textTwo}>Report</Text>
          </View>
          <View style={styles.backContainer}>
            <Pressable onPress={() => setShowModal(false)}>
              <Text style={styles.textBack}>Cancle</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0)', // Adjust opacity as needed
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    margin: 10,
    width: dimensions.width - 20,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'rgba(245, 245, 245, 0.85)',
    width: '100%',
    borderRadius: 13,
    gap: 20,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginBottom: 8,
  },
  hrLine: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    width: dimensions.width - 63,
  },
  backContainer: {
    backgroundColor: colors.ui.white,
    width: '100%',
    alignItems: 'center',
    borderRadius: 13,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginBottom: 8,
  },
  textBack: {
    color: '#007AFF',
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.title,
  },
  textOne: {
    color: colors.ui.primary,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.title,
  },
  textTwo: {
    color: colors.ui.textHead,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.text,
  },

  backButton: {
    alignSelf: 'flex-end',
    margin: 10,
  },
});
