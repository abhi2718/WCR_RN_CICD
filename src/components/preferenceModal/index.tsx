import React from 'react';
import { Image, Modal, Pressable, Text, View } from 'react-native';
import { VerificationInfoProps } from '../../types/components/modal.type';
import { Row } from '../tools';
import { modalStylePreference } from './style';
export const PreferenceyModal = (props: VerificationInfoProps) => {
  const { isVisible, onClose } = props;
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={modalStylePreference.centeredView}>
        <View style={modalStylePreference.modalView}>
          <View>
            <Row justifyContent="space-between" alignItems="center">
              <Text style={modalStylePreference.heading}>Preference Info</Text>
              <Pressable onPress={onClose}>
                <Image
                  resizeMode="contain"
                  style={modalStylePreference.headericon}
                  source={require('../../assets/images/icons/crossIcon.png')}
                />
              </Pressable>
            </Row>
            <Row style={modalStylePreference.row}>
              <Image
                resizeMode="contain"
                style={modalStylePreference.icon}
                source={require('../../assets/images/icons/blackCheck.png')}
              />
              <Text style={modalStylePreference.text}>
                We are working diligently to give you the option to select
                multiple choices for each preference category.
              </Text>
            </Row>
            <Row style={modalStylePreference.row}>
              <Image
                style={modalStylePreference.icon}
                source={require('../../assets/images/icons/blackCheck.png')}
              />
              <Text style={modalStylePreference.text}>
                You will also have the ability to prioritize which preference
                category matters most to you.
              </Text>
            </Row>
            <Row style={modalStylePreference.row}>
              <Image
                style={modalStylePreference.icon}
                source={require('../../assets/images/icons/blackCheck.png')}
              />
              <Text style={modalStylePreference.text}>
                These combined features will allow you to better personalize and
                optimize your dating journey.
              </Text>
            </Row>
          </View>
        </View>
      </View>
    </Modal>
  );
};
