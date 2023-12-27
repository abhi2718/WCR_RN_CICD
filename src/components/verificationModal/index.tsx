import React from 'react';
import { Image, Modal, Text, View } from 'react-native';
import { Row } from '../tools';
import { PrimaryButton } from '../button';
import { VerificationInfoProps } from '../../types/components/modal.type';
import { modalStyle } from '../profilePicInfoModal/profileInfoStyle';
// import { modalStyle } from './profileInfoStyle';

export const VerificationInfoModal = (props: VerificationInfoProps) => {
  const { isVisible, onClose } = props;

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={modalStyle.centeredView}>
        <View style={modalStyle.modalView}>
          <View>
            <Text style={modalStyle.heading}>You’re halfway {'\n'} there!</Text>
            <Text style={modalStyle.subHeading}>Your Safety Matters!</Text>

            <Row style={modalStyle.row}>
              <Image
                resizeMode="contain"
                style={modalStyle.icon}
                source={require('../../assets/images/icons/modalIconLock.png')}
              />
              <Text style={modalStyle.text}>
                To enhance your dating app experience and ensure authenticity,
                we kindly request all users to complete our ID verification
                process.
              </Text>
            </Row>
            <Row style={modalStyle.row}>
              <Image
                style={modalStyle.icon}
                source={require('../../assets/images/icons/modalIconOne.png')}
              />
              <Text style={modalStyle.text}>
                It helps us create a safer and more enjoyable community.
              </Text>
            </Row>
            <Row style={modalStyle.row}>
              <Image
                style={modalStyle.icon}
                source={require('../../assets/images/icons/modalIconTwo.png')}
              />
              <Text style={modalStyle.text}>
                Make sure to have your camera ready for this next step
              </Text>
            </Row>
          </View>
          <View>
            <Row>
              <PrimaryButton onPress={() => onClose()} title="Continue" />
            </Row>
          </View>
        </View>
      </View>
    </Modal>
  );
};


export const VerificationInstructionModal = (props: VerificationInfoProps) => {
  const { isVisible, onClose } = props;

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={modalStyle.centeredView}>
        <View style={modalStyle.modalView}>
          <View>
            <Row>
              <PrimaryButton onPress={() => onClose()} title="Continue" />
            </Row>
          </View>
        </View>
      </View>
    </Modal>
  );
};
