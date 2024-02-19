import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  firstModalStyle,
  verificationStyle,
} from '../../screens/verification/stepOne/verificationSteps';
import { FlatInput } from '../inputBox';
import { PrimaryButton } from '../button';
import { modalStyles } from '../../screens/auth/preRegisterFlow/components/AddProfilePic/AddProfilePicStyle';
import { Logo, Row, isAndroid } from '../tools';
import { WebsitePhdModalProps } from '../../types/components/modal.type';
import { verificationImageUploaderStyle } from '../../screens/verification/stepTwo/component/verificationImagePreview';
import { ErrorText } from '../../screens/auth/signin/signInStyle';

export const VerificationWebsitePhdMdal = (props: WebsitePhdModalProps) => {
  const {
    isVisible,
    uploadPhdOptionPhotos,
    onClose,
    website,
    navigateToVerificationStepTwo,
    loading,
    handleWebsite,
    PhdOptionImage,
    visibleModal,
    toggleModal,
    isValidWebsiteUrlPhduser,
    optionData,
    verificationWebsiteValid,
    validateUserWebsiteUrlPhdUser,
  } = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleModal}
        onRequestClose={toggleModal}
      >
        <View style={firstModalStyle.centeredView}>
          <View style={firstModalStyle.modalView}>
            <TouchableOpacity onPress={() => uploadPhdOptionPhotos('camera')}>
              <Text style={firstModalStyle.text}>Take a photo</Text>
            </TouchableOpacity>
            <View style={firstModalStyle.borderView} />
            <TouchableOpacity onPress={() => uploadPhdOptionPhotos('library')}>
              <Text style={firstModalStyle.text}> Choose from library</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={toggleModal}>
            <View
              style={[
                firstModalStyle.modalView,
                firstModalStyle.modalViewTwo,
                verificationStyle.backButtonWrapper,
              ]}
            >
              <Text style={firstModalStyle.backBtnText}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
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
            <View style={verificationStyle.wrapper}>
              {verificationWebsiteValid ? (
                <ErrorText>
                  Please select any of the either two fields
                </ErrorText>
              ) : (
                <View />
              )}
              <Text style={verificationStyle.subHeader}>
                Provide The Following Degree Verification (Step III)
              </Text>
              <Text style={verificationStyle.subText}>
                Upload Proof of Degree from USA showing name, institution,
                degree, date degree awarded
              </Text>
              <Text style={verificationStyle.subText}>
                ( e.g., Diploma, Transcript, Certificate of Completion, Degree
                Verification )
              </Text>
              <TouchableOpacity
                style={verificationStyle.uploadBtn}
                onPress={() => toggleModal()}
              >
                <Text style={verificationStyle.uploadBtnText}>Uplpoad</Text>
              </TouchableOpacity>
              {PhdOptionImage ? (
                <View>
                  <TouchableOpacity>
                    <Image
                      style={verificationImageUploaderStyle.profilePic}
                      source={
                        PhdOptionImage
                          ? { uri: PhdOptionImage.path }
                          : props.source
                      }
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View />
              )}
              <Text style={verificationStyle.subText}>
                Enter website to show proof of degree (e.g., Professional
                licensing website, Institution website showing name and year of
                graduation, Work website showing name and title). We may request
                additional proof of degree if needed.
              </Text>
            </View>
            <View style={verificationStyle.footerDiv}>
              <FlatInput
                label="Enter website"
                placeholder="Enter website"
                value={optionData?.userWebsite}
                onChangeText={(text: string) =>
                  validateUserWebsiteUrlPhdUser(text)
                }
              />

              {!isValidWebsiteUrlPhduser && optionData?.userWebsite?.length ? (
                <ErrorText>Please enter a valid Website.</ErrorText>
              ) : (
                <View />
              )}

              <PrimaryButton
                onPress={navigateToVerificationStepTwo}
                title="Next"
                isLoading={loading}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};
