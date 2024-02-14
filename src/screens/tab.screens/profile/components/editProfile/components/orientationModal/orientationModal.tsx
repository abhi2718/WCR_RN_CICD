import React, { Dispatch, SetStateAction, useState } from 'react';
import { View, Text, StyleSheet, Modal, SafeAreaView } from 'react-native';
import { PrimaryButton } from '../../../../../../../components/button';
import { Column, Row } from '../../../../../../../components/tools';
import { theme } from '../../../../../../../infrastructure/theme';
import { CheckBox } from '../../../../../../../components/inputBox';
import { useOrientationViewModal } from './useViewModal';

interface OrientationModalProps {
  showOrientationModal: boolean;
  setShowOrientationModal: Dispatch<SetStateAction<boolean>>;
}
export const OrientationModal = (props: OrientationModalProps) => {
  const { handleCheckboxChange, checkboxState } =
    useOrientationViewModal(props);

  const { showOrientationModal, setShowOrientationModal } = props;

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={showOrientationModal}
    >
      <SafeAreaView style={styles.flex1}>
        <Text style={styles.heading}>Pronoun</Text>
        <Column justifyContent="space-between" style={{ flex: 1 }}>
          <View>
            <Text style={styles.optionText}>He/Him</Text>
            <Text style={styles.optionText}>Prefer not to say</Text>
          </View>
          <View style={styles.footerView}>
            <Row style={styles.rowView} alignItems="center">
              <CheckBox
                onPress={handleCheckboxChange}
                isChecked={checkboxState}
              />
              <Text style={styles.btnText}>Visible on profile</Text>
            </Row>
            <PrimaryButton
              title="Close"
              onPress={() => {
                setShowOrientationModal(false);
              }}
            />
          </View>
        </Column>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    padding: 16,
  },
  flex1: {
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    fontSize: theme.fontSizes.h5,
    fontWeight: theme.fontWeights.semiBold,
    marginBottom: 20,
    color: theme.colors.ui.textHead,
    fontFamily: theme.fontFamily.body,
  },
  optionText: {
    backgroundColor: theme.colors.bg.secondary,
    fontSize: theme.fontSizes.text,
    fontWeight: theme.fontWeights.semiBold,
    color: theme.colors.ui.text,
    paddingHorizontal: 16,
    fontFamily: theme.fontFamily.body,
    paddingVertical: 8,
  },
  rowView: {
    marginBottom: theme.sizes[2],
  },
  btnText: {
    fontSize: theme.sizes[3],
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.ui.text,
    fontFamily: theme.fontFamily.body,
  },
  footerView: {
    paddingHorizontal: 20,
  },
});
