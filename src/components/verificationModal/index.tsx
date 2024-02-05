import React from 'react';
import {
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Row, Spacer } from '../tools';
import { PrimaryButton } from '../button';
import { VerificationInfoProps } from '../../types/components/modal.type';
import {
  modalStyle,
  insModalStyle,
} from '../profilePicInfoModal/profileInfoStyle';
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
export const IdverifyModal = (props: VerificationInfoProps) => {
  const { isVisible, onClose } = props;

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={insModalStyle.centeredView}>
        <View style={insModalStyle.modalView}>
          <Row justifyContent="space-between" alignItems="center">
            <View style={insModalStyle.icon} />
            <Text style={insModalStyle.headerText}>Tips to upload</Text>
            <Pressable onPress={() => onClose()}>
              <Image
                resizeMode="contain"
                style={insModalStyle.icon}
                source={require('../../assets/images/icons/crossIcon.png')}
              />
            </Pressable>
          </Row>
          <ScrollView>
            <Row>
              <Text style={insModalStyle.text}>1.</Text>
              <Text style={insModalStyle.text}>
                Take a photo of ONE of the fo llowing that clearly displays your
                name on it {'\n'} {'\n'}White Coat/scrubs/jacket, work ID badge,
                business/license card, desk/door nameplate
              </Text>
            </Row>
            <Image
              resizeMode="center"
              style={insModalStyle.rowOneImg}
              source={require('../../assets/images/virificationModal1.png')}
            />
            <Spacer position="top" size={20} />
            <Row>
              <Text style={insModalStyle.text}>2.</Text>
              <Text style={insModalStyle.text}>
                Take a selfie wearing or holding the SAME item above.
              </Text>
            </Row>
            <Image
              resizeMode="center"
              style={insModalStyle.rowOneImg}
              source={require('../..//assets/images/virificationModal2.png')}
            />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export const IdverifyStudentModal = (props: VerificationInfoProps) => {
  const { isVisible, onClose } = props;

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={insModalStyle.centeredView}>
        <View style={insModalStyle.modalView}>
          <Row justifyContent="space-between" alignItems="center">
            <View style={insModalStyle.icon} />
            <Text style={insModalStyle.headerText}>Tips to upload</Text>
            <Pressable onPress={() => onClose()}>
              <Image
                resizeMode="contain"
                style={insModalStyle.icon}
                source={require('../../assets/images/icons/crossIcon.png')}
              />
            </Pressable>
          </Row>
          <ScrollView>
            <Row>
              <Text style={insModalStyle.text}>1.</Text>
              <Text style={insModalStyle.text}>
                Take a photo of your Student photo ID.
              </Text>
            </Row>
            <Image
              resizeMode="center"
              style={insModalStyle.rowOneImg}
              source={require('../../assets/images/virificationModal3.png')}
            />
            <Spacer position="top" size={20} />
            <Row>
              <Text style={insModalStyle.text}>2.</Text>
              <Text style={insModalStyle.text}>
                Take a selfie holding the SAME photo ID.
              </Text>
            </Row>
            <Image
              resizeMode="center"
              style={insModalStyle.rowOneImg}
              source={require('../..//assets/images/virificationModal2.png')}
            />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
