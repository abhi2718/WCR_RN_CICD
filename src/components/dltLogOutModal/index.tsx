import React, { useState } from 'react';
import { DltLogOutType } from '../../types/components/modal.type';
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Row, Spacer, dimensions } from '../tools';
import { AlertScreen } from '../alert';
import { UserProfileRepository } from '../../repository/userProfile.repo';

import { useLogOutViewModal } from '../../utils/logOut';

export const DltLogOutModal = (props: DltLogOutType) => {
  const { showModal, setShowModal } = props;
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [showLogOutModal, setLogOutModal] = useState(false);
  const userProfileRepository = new UserProfileRepository();
  const { logOut } = useLogOutViewModal();

  const deleteUser = async (status: boolean) => {
    try {
      await userProfileRepository.deleteUser();
    } catch (error) {}
  };

  const logOutModalShow = () => {
    setLogOutModal(true);
  };

  const showDeleteAccountModal = () => {
    setDeleteModal(true);
    logOut()
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal transparent={true} visible={showModal}>
        <SafeAreaView style={styles.container}>
          <View style={styles.mainContainerWrapper}>
            <Row>
              <Pressable onPress={closeModal}>
                <View style={styles.sideContainer}></View>
              </Pressable>
              <View style={styles.mainContainer}>
                <View style={{ height: 200 - 32 }}>
                  <View>
                    <Row justifyContent="center">
                      <Pressable onPress={logOutModalShow}>
                        <Text>'Log Out'</Text>
                      </Pressable>
                    </Row>
                    <Spacer position="top" size={16}>
                      <Row justifyContent="center">
                        <Pressable onPress={showDeleteAccountModal}>
                          <Text>'Delete Account'</Text>
                        </Pressable>
                      </Row>
                    </Spacer>
                  </View>
                </View>
              </View>
            </Row>
          </View>

          <Pressable onPress={closeModal}>
            <View style={styles.bottomContainer}></View>
          </Pressable>
        </SafeAreaView>
      </Modal>
      <AlertScreen
        showModal={showLogOutModal}
        setShowModal={setLogOutModal}
        title="Logout?"
        description="Are you sure want to log out?"
        onPress={logOut}
      ></AlertScreen>
      <AlertScreen
        showModal={showDeleteModal}
        setShowModal={setDeleteModal}
        title="Delete Account?"
        description="Are you sure you want to 
         delete your account permanently?"
        onPress={() => deleteUser}
      ></AlertScreen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  mainContainer: {
    padding: 16,
    height: 200,
    width: dimensions.width - 80,
    borderRadius: 16,
    backgroundColor: '#fff',
  },

  mainContainerWrapper: {
    alignItems: 'flex-end',
  },

  bottomContainer: {
    height: dimensions.height - 200,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  sideContainer: {
    height: 200,
    width: 100,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
});
