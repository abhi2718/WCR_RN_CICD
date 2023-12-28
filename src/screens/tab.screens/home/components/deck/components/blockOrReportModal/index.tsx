import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';
import { Row, dimensions } from '../../../../../../../components/tools';
import { sizes } from '../../../../../../../infrastructure/theme/sizes';
import { colors } from '../../../../../../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
} from '../../../../../../../infrastructure/theme/fonts';

export const BlockAndReportModal = (props:any) => {
  const { showModal, setShowModal, handleBlockUser, handleReport } = props;
  return (
    <>
      <Modal visible={showModal}>
        <SafeAreaView style={styles.container}>
          <View style={styles.mainContainer}>
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }}>
                <Row
                  justifyContent="space-between"
                  alignItems="center"
                  style={styles.rowOne}
                >
                  <Text style={styles.title}>
                    Do you want to Block or Report
                  </Text>
                  <Pressable onPress={() => setShowModal(false)}>
                    <Image
                      style={styles.closeIcon}
                      source={require('../../../../../../../assets/images/icons/crossIcon.png')}
                    />
                  </Pressable>
                </Row>
              </View>
              <View style={styles.btnContainer}>
                <Row justifyContent="space-between">
                  <Pressable onPress={handleBlockUser} style={styles.secondBtn}>
                    <Text style={styles.btnText}>Block</Text>
                  </Pressable>
                  <Pressable onPress={handleReport} style={styles.primeBtn}>
                    <Text style={styles.reportText}>Report</Text>
                  </Pressable>
                </Row>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  mainContainer: {
    paddingTop: sizes[3],
    height: 100,
    width: dimensions.width - 35,
    borderRadius: sizes[3],
    backgroundColor: colors.ui.white,
  },
  rowOne: {
    paddingHorizontal: 16,
    gap: 25,
  },

  btnContainer: {
    borderTopColor: '#00000026',
    borderTopWidth: 1,
  },

  title: {
    color: colors.ui.black,
    fontSize: fontSizes.title,
    fontWeight: fontWeights.semiBold,
  },

  description: {
    color: colors.ui.text,
    fontSize: fontSizes.text,
  },

  primeBtn: {
    backgroundColor: colors.ui.primary,
    minHeight: sizes[10],
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: sizes[3],
    height: sizes[10],

    btnText: {
      fontSize: 20,
      color: colors.ui.white,
      fontWeight: fontWeights.semiBold,
    },
  },
  secondBtn: {
    backgroundColor: colors.ui.white,
    minHeight: sizes[10],
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: sizes[3],
    height: sizes[10],
  },
  btnText: {
    fontSize: fontSizes.h6,
    fontWeight: fontWeights.regular,
    color: colors.ui.text,
  },
  reportText: {
    fontSize: fontSizes.h6,
    fontWeight: fontWeights.regular,
    color: colors.ui.white,
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
});
