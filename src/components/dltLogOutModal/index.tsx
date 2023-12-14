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
import { colors } from '../../infrastructure/theme/colors';
import { sizes } from '../../infrastructure/theme/sizes';
import { fontSizes, fontWeights } from '../../infrastructure/theme/fonts';

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
    logOut();
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
                <View style={styles.modalheight}>
                  <View style={styles.btnContainer}>
                    <Row justifyContent="center">
                      <Pressable
                        onPress={showDeleteAccountModal}
                        style={styles.delBtn}
                      >
                        <Text style={styles.btnText}>Account Delete</Text>
                      </Pressable>
                    </Row>
                    <Row justifyContent="center">
                      <Pressable
                        onPress={logOutModalShow}
                        style={styles.logoutBtn}
                      >
                        <Text style={styles.btnText}>Logout</Text>
                      </Pressable>
                    </Row>
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
    height: sizes[4] * 5,
    width: dimensions.width - 80,
    borderRadius: sizes[3],
    backgroundColor: '#fff',
  },

  mainContainerWrapper: {
    alignItems: 'flex-end',
  },

  btnContainer: {
    flex: 1,
    justifyContent: 'space-between',
    height: '100%',
    alignItems: 'center',
  },

  bottomContainer: {
    height: dimensions.height - 150,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  sideContainer: {
    height: 150,
    width: sizes[4] * 5,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },

  modalheight: {
    height: 150,
  },
  delBtn: {
    backgroundColor: colors.ui.white,
    minHeight: sizes[10],
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: sizes[3],
    borderTopLeftRadius: sizes[3],
    height: 75,
  },
  logoutBtn: {
    backgroundColor: colors.ui.white,
    minHeight: sizes[10],
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: sizes[3],
    borderBottomLeftRadius: sizes[3],
    borderTopColor: '00000026',
    borderTopWidth: 1,
    height: 75,
  },
  btnText: {
    fontSize: fontSizes.h6,
    color: colors.ui.text,
    fontweight: fontWeights.semiBold,
  },
});
