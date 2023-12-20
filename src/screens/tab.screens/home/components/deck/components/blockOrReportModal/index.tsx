import React from 'react';
import { View, StyleSheet, Modal, Text, SafeAreaView, Pressable } from 'react-native';

export const BlockAndReportModal = (props) => {
  const { showModal, setShowModal,handleBlockUser,handleReport } = props;
  return (
    <Modal visible={showModal}>
          <SafeAreaView style={styles.container}>
              <Pressable onPress={()=>setShowModal(false)}>
                  <Text>Close</Text>
              </Pressable>
        
              <Pressable onPress={handleBlockUser}>
                  <Text>Block</Text>
              </Pressable>
              <Pressable onPress={handleReport}>
                  <Text>Report</Text>
              </Pressable>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainCntainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
