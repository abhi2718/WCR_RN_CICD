import React from 'react';
import { Image, KeyboardAvoidingView, Modal, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { verificationStyle } from '../../screens/verification/stepOne/verificationSteps';
import { FlatInput } from '../inputBox';
import { PrimaryButton } from '../button';
import { modalStyles } from '../../screens/auth/preRegisterFlow/components/AddProfilePic/AddProfilePicStyle';
import { Logo, Row, isAndroid } from '../tools';
import { WebsitePhdModalProps } from '../../types/components/modal.type';

export const VerificationWebsitePhdMdal = (props: WebsitePhdModalProps) => {
  const {isVisible,uploadPhdOptionPhotos,onClose,validationErrorMessage,website,sumbitVerificationForm,loading,handleWebsite} = props;

  return(
    <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
          >
            <KeyboardAvoidingView
              style={verificationStyle.wrapper}
              enabled
              behavior={isAndroid ? 'height' : 'padding'}
            >
              <ScrollView style={modalStyles.modalContent}>
                <Row
                  style={modalStyles.row}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <View style={modalStyles.backButtonWrapper}>
                    <Pressable onPress={onClose}>
                      <View style={modalStyles.backButtonWrapper}>
                      <Image
                        style={modalStyles.arrow}
                        source={require('../../assets/images/icons/arrow.png')}
                      />
                      </View>
                    </Pressable>
                  </View>
                  <View style={modalStyles.logoWrapper}>
                    <Logo width={50} height={35} />
                  </View>
                  <View />
                </Row>
                <View style={verificationStyle.container}>
                  <Text>{validationErrorMessage}</Text>
                  <View style={verificationStyle.wrapper}>
                    <Text style={verificationStyle.subHeader}>
                      Provide The Following Degree Verification (Step III)
                    </Text>
                    <Text style={verificationStyle.subText}>
                      Upload Proof of Degree from USA showing name, institution,
                      degree, date degree awarded
                    </Text>
                    <Text style={verificationStyle.subText}>
                      ( e.g., Diploma, Transcript, Certificate of Completion,
                      Degree Verification )
                    </Text>
                    <TouchableOpacity
                      style={verificationStyle.uploadBtn}
                      onPress={() => uploadPhdOptionPhotos()}
                    >
                      <Text style={verificationStyle.uploadBtnText}>
                        Uplpoad
                      </Text>
                    </TouchableOpacity>
                    <Text style={verificationStyle.subText}>
                      Enter website to show proof of degree (e.g., Professional
                      licensing website, Institution website showing name and
                      year of graduation, Work website showing name and title).
                      We may request additional proof of degree if needed.
                    </Text>
                  </View>
                  <View style={verificationStyle.footerDiv}>
                    <FlatInput
                      label="Enter website"
                      placeholder="Enter website"
                      value={website}
                      onChangeText={handleWebsite}
                    />
                    <PrimaryButton
                      onPress={() => sumbitVerificationForm()}
                      title="Submit"
                      isLoading={loading}
                    />
                  </View>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </Modal>
  )
};
