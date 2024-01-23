import React from 'react';
import { View, StyleSheet, Modal, Text, Pressable } from 'react-native';
import { dimensions } from '../../../../../../../components/tools';
import { colors } from '../../../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../../../../../../infrastructure/theme/fonts';

export const BlockAndReportModal = (props: any) => {
  const { showModal, setShowModal, handleBlockUser, handleReport } = props;
  return (
    <>
      <Modal
        visible={showModal}
        animationType="fade"
        //presentationStyle="pageSheet" // For bottom sheet-style
        transparent={true} // Allow background visibility
        style={styles.modalContainer}
      >
        <Pressable
          onPress={() => setShowModal(false)}
          style={styles.modalContent}
        >
          <View style={styles.buttonContainer}>
            <Pressable style={styles.btnContainer} onPress={handleBlockUser}>
              <Text style={styles.textOne}>Block</Text>
            </Pressable>
            <View style={styles.hrLine} />
            <Pressable style={styles.btnContainer} onPress={handleReport}>
              <Text style={styles.textTwo}>Report</Text>
            </Pressable>
          </View>
          <Pressable
            style={styles.backContainer}
            onPress={() => setShowModal(false)}
          >
            <View>
              <Text style={styles.textBack}>Cancel</Text>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0,0.1)', // Adjust opacity as needed
  },
  modalContent: {
    height: dimensions.height,
    padding: 20,
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    left: 0,
    backgroundColor: 'rgba(0, 0, 0,0.4)',
    width: dimensions.width,
    justifyContent: 'flex-end',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    fontFamily: fonts.body,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'rgba(245, 245, 245, 1)',
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
  btnContainer: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 13,
  },
  textBack: {
    color: '#007AFF',
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.title,
    fontFamily: fonts.body,
  },
  textOne: {
    color: colors.ui.primary,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.title,
    fontFamily: fonts.body,
  },
  textTwo: {
    color: colors.ui.textHead,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.text,
    fontFamily: fonts.body,
  },

  backButton: {
    alignSelf: 'flex-end',
    margin: 10,
  },
});
