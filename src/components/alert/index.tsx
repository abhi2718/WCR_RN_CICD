import React from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AlertScreenType } from '../../types/components/alert.type';
import { Column, dimensions, Row, Spacer } from '../tools';
import { colors } from '../../infrastructure/theme/colors';
import { fontSizes, fontWeights } from '../../infrastructure/theme/fonts';
import { sizes } from '../../infrastructure/theme/sizes';

export const AlertScreen = (props: AlertScreenType) => {
  const { showModal, setShowModal, title, description, onPress } = props;
  const handleCancel = () => {
    setShowModal(false);
  };
  const handlePress = () => {
    setShowModal(false);
    onPress();
  };
  return (
    <Modal transparent={true} visible={showModal}>
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <Row justifyContent="center">
                <Text style={styles.title}>{title}</Text>
              </Row>
              <Spacer position="top" size={16}>
                <Row justifyContent="center">
                  <Text style={styles.description}>{description}</Text>
                </Row>
              </Spacer>
            </View>
            <View style={styles.btnContainer}>
              <Row justifyContent="space-between">
                <Pressable onPress={handleCancel} style={styles.secondBtn}>
                  <Text style={styles.secondBtn.btnText}>Cancel</Text>
                </Pressable>
                <Pressable onPress={handlePress} style={styles.primeBtn}>
                  <Text style={styles.primeBtn.btnText}>Yes</Text>
                </Pressable>
              </Row>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
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
    height: 160,
    width: dimensions.width - 80,
    borderRadius: sizes[3],
    backgroundColor: colors.ui.white,
  },

  btnContainer: {
    // marginTop: sizes[10] + 1,
    borderTopColor: '#00000026',
    borderTopWidth: 1,
  },

  title: {
    color: colors.ui.black,
    fontSize: fontSizes.title,
    fontWeight: fontWeights.semiBold,
  },

  description: {
    paddingHorizontal: 16,
    color: colors.ui.text,
    fontSize: fontSizes.text,
    textAlign: 'center',
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

    btnText: {
      fontSize: fontSizes.h6,
      fontWeight: fontWeights.regular,
      color: colors.ui.text,
    },
  },
});
