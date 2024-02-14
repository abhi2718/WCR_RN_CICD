import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  SafeAreaView,
  Pressable,
} from 'react-native';
import { PrimaryButton } from '../../../../../../../components/button';
import { Column, Row } from '../../../../../../../components/tools';
import { theme } from '../../../../../../../infrastructure/theme';
import { CheckBox } from '../../../../../../../components/inputBox';
import { useOrientationViewModal } from './useViewModal';
import { OrientationModalProps } from '../../../../../../../types/screen.type/profile.type';

export const OrientationModal = (props: OrientationModalProps) => {
  const {
    handleClick,
    showOrientationModal,
    setShowOrientationModal,
    optionList,
    heading,
    objectKey,
    selectedValue,
    isChecked,
    _handleCheckboxChange
  } = useOrientationViewModal(props);
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={showOrientationModal}
    >
      <SafeAreaView style={styles.flex1}>
        <Text style={styles.heading}>{heading}</Text>
        <Column justifyContent="space-between" style={styles.flex1}>
          <View>
            {optionList.map((option, index) => (
              <Pressable
                key={index}
                onPress={() => handleClick(objectKey, option)}
              >
                <View>
                  <Text
                    style={
                      selectedValue === option
                        ? styles.activeOptionText
                        : styles.optionText
                    }
                  >
                    {option}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
          <View style={styles.footerView}>
            <Row style={styles.rowView} alignItems="center">
              <CheckBox
                onPress={_handleCheckboxChange}
                isChecked={isChecked}
              />
              <Text style={styles.btnText}>Visible on profile</Text>
            </Row>
            <PrimaryButton
              title="Close"
              onPress={() => {
                setShowOrientationModal(objectKey, false);
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
  activeOptionText: {
    backgroundColor: theme.colors.bg.secondary,
    fontSize: theme.fontSizes.text,
    fontWeight: theme.fontWeights.semiBold,
    color: theme.colors.ui.text,
    paddingHorizontal: 16,
    fontFamily: theme.fontFamily.body,
    paddingVertical: 8,
  },
  optionText: {
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
