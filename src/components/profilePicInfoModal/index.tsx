import React from 'react';
import { Image, Modal, Text, View } from 'react-native';
import { Row } from '../tools';
import { PrimaryButton } from '../button';
import { ProfilePicInfoModalProps } from '../../types/components/modal.type';
import { modalStyle } from './profileInfoStyle';

export const ProfilePicInfoModal = (props: ProfilePicInfoModalProps) => {
  const { isVisible, onClose } = props;

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={modalStyle.centeredView}>
        <View style={modalStyle.modalView}>
          <View>
            <Text style={modalStyle.heading}>Profile</Text>
            <Row style={modalStyle.row}>
              <Image
                style={modalStyle.icon}
                source={require('../../assets/images/icons/blackCheck.png')}
              />
              <Text style={modalStyle.text}>
                Your profile picture shows your face {`\n`} clearly - no shades,
                masks, or obstructions
              </Text>
            </Row>
          </View>
          <View>
            <Text style={modalStyle.footerText}>
              Now, let's find your perfect match!
            </Text>
            <Row>
              <PrimaryButton onPress={() => onClose()} title="Continue" />
            </Row>
          </View>
        </View>
      </View>
    </Modal>
  );
};
