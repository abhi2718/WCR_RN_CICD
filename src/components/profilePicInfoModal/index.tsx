import React from 'react';
import { Image, Modal, StyleSheet, Text, View } from 'react-native';
import { sizes } from '../../infrastructure/theme/sizes';
import { colors } from '../../infrastructure/theme/colors';
import { Row, dimensions } from '../tools';
import { PrimaryButton } from '../button';
import { ProfilePicInfoModalProps } from '../../types/components/modal.type';



export const ProfilePicInfoModal = (props:ProfilePicInfoModalProps) =>{
    const { isVisible, onClose } = props;
    
    return(
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
                  Your profile picture shows your face {`\n`} clearly - no
                  shades, masks, or obstructions
                </Text>
              </Row>
            </View>
            <View>
              <Text style={modalStyle.footerText}>
                Now, let's find your perfect match!
              </Text>
              <Row>
                <PrimaryButton
                  onPress={() => onClose()}
                  title="Continue"
                />
              </Row>
            </View>
          </View>
        </View>
      </Modal>
    )
}

const modalStyle = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.ui.opacity,
    },
    modalView: {
      justifyContent: 'space-between',
      margin: sizes[5],
      backgroundColor: 'white',
      borderRadius: sizes[4],
      paddingTop: sizes[5],
      paddingBottom: sizes[4],
      paddingHorizontal: sizes[3],
      shadowColor: colors.ui.black,
      height: dimensions.height - 300,
  
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: sizes[0],
      elevation: sizes[0],
    },
    heading: {
      fontWeight: '600',
      fontSize: sizes[7],
      color: colors.ui.text,
      marginBottom: sizes[4],
    },
  
    row: {
      gap: sizes[1],
      width: '100%',
      marginVertical: sizes[1],
    },
    text: {
      color: colors.ui.text,
      fontSize: sizes[3],
    },
    icon: {
      width: sizes[5],
      height: sizes[5],
      marginRight: sizes[1],
    },
    footerText: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize: sizes[4],
      marginVertical: sizes[3],
      color: colors.ui.black,
    },
  });