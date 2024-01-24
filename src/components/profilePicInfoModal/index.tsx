import React from 'react';
import { Image, Modal, Text, View } from 'react-native';
import { Row, Spacer } from '../tools';
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
            <Text style={modalStyle.heading}>Profile photo:</Text>
            <Row style={modalStyle.row}>
              <Image
                style={modalStyle.icon}
                source={require('../../assets/images/icons/pp1.png')}
              />
              <Text style={modalStyle.text}>
                <Text style={modalStyle.textHead}>Required-</Text>
                We need that fabulous face front and center - no shades, masks,
                or obstructions.
              </Text>
            </Row>
            <Row style={modalStyle.row}>
              <Image
                style={modalStyle.icon}
                source={require('../../assets/images/icons/pp2.png')}
              />
              <Text style={modalStyle.text}>
                <Text style={modalStyle.textHead}> Your best invite?</Text>A
                real, friendly smile
              </Text>
            </Row>
            <Spacer position="top" size={15} />
            <Text style={modalStyle.heading}>Additional photos:</Text>
            <Row style={modalStyle.row}>
              <Image
                style={modalStyle.icon}
                source={require('../../assets/images/icons/pp3.png')}
              />
              <Text style={modalStyle.text}>
                <Text style={modalStyle.textHead}>Showcase your world - </Text>
                Capture your personality, both professional/personal sides, and
                highlight interests/hobbies
              </Text>
            </Row>
            <Row style={modalStyle.row}>
              <Image
                style={modalStyle.icon}
                source={require('../../assets/images/icons/pp4.png')}
              />
              <Text style={modalStyle.text}>
                <Text style={modalStyle.textHead}> Mix it up - </Text>
                from wearing a white coat/scrubs to sharing your passions and
                latest adventures- to reflect the vibrant, unique you!
              </Text>
            </Row>
          </View>
          <Spacer position="top" size={15} />
          <Row>
            <PrimaryButton onPress={() => onClose()} title="Continue" />
          </Row>
        </View>
      </View>
    </Modal>
  );
};
