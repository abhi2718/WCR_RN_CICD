import React, { useState } from 'react';
import {
  ImageProps,
  Modal,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';

import {
  Logo,
  Row,
  ScreenContainer,
  dimensions,
} from '../../../components/tools';
import { HeaderBar } from '../../../components/header';
import { RadioButton } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';
import {
  firstModalStyle,
  verificationStyle,
} from '../stepOne/verificationSteps';
import { FlatInput } from '../../../components/inputBox';
import { ErrorText } from '../../auth/signin/signInStyle';
import { PrimaryButton } from '../../../components/button';
import {
  pickPhotoFromCammera,
  pickPhotoFromGallary,
} from '../../../utils/uploads';
import { ImageOrVideo } from 'react-native-image-crop-picker';
import { sizes } from '../../../infrastructure/theme/sizes';
import { fontSizes, fontWeights } from '../../../infrastructure/theme/fonts';
import { modalStyles } from '../../auth/preRegisterFlow/components/AddProfilePic/AddProfilePicStyle';
import { useVerificationViewModal } from './stepTwo.ViewModal';

interface AvatarProps extends ImageProps {
  onChange?: (image: ImageOrVideo) => void;
  navigation: any;
  route: any;
}

const VerificationStepTwo = (props: AvatarProps) => {
  const {
    verificationOption,
    clickSelfieImage,
    visibleModal,
    handleWebsite,
    setVisibleModal,
    documentImage,
    setdocumentImage,
    clickPicture,
    selfie,
    loading,
    closePicModal,
    openPicModal,
    toggleModal,
    visiblePicModal,
    sumbitVerificationForm,
    isSelfie,
    setIsSelfie,
  } = useVerificationViewModal(props);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return (
    <>
      <ScreenContainer>
        <HeaderBar />
        <Text style={verificationStyle.subHeader}>
          Photo Verification (Step II)
        </Text>
        <Text style={verificationStyle.subText}>
          Take a photo of ONE of the following that clearly displays your name
          on it.
        </Text>
        <View style={verificationStyle.container}>
          <View>
            <Row style={verificationStyle.pointsRow} alignItems="center">
              <Text style={verificationStyle.redDot}>{'\u2B24'}</Text>
              <Text style={verificationStyle.pointText}>White Coat</Text>
            </Row>

            <Row style={verificationStyle.pointsRow} alignItems="center">
              <Text style={verificationStyle.redDot}>{'\u2B24'}</Text>
              <Text style={verificationStyle.pointText}>Scrubs</Text>
            </Row>
            <Row style={verificationStyle.pointsRow} alignItems="center">
              <Text style={verificationStyle.redDot}>{'\u2B24'}</Text>
              <Text style={verificationStyle.pointText}>Jacket</Text>
            </Row>
            <Row style={verificationStyle.pointsRow} alignItems="center">
              <Text style={verificationStyle.redDot}>{'\u2B24'}</Text>
              <Text style={verificationStyle.pointText}>Work ID badge</Text>
            </Row>
            <Row style={verificationStyle.pointsRow} alignItems="center">
              <Text style={verificationStyle.redDot}>{'\u2B24'}</Text>
              <Text style={verificationStyle.pointText}>
                Business/license card
              </Text>
            </Row>
            <Row style={verificationStyle.pointsRow} alignItems="center">
              <Text style={verificationStyle.redDot}>{'\u2B24'}</Text>
              <Text style={verificationStyle.pointText}>
                Desk/door nameplate
              </Text>
            </Row>
          </View>
          <View style={verificationStyle.footerDiv}>
            {verificationOption === 'License Number' && (
              <>
                <Text>
                  <Text style={verificationStyle.redDot}>Optional: </Text>
                  <Text style={verificationStyle.pointText}>
                    For quicker verification, please provide a website to verify
                    your degree.
                  </Text>
                </Text>
                <FlatInput label="Enter website" onChangeText={handleWebsite} />
              </>
            )}

            {verificationOption === 'Student' && (
              <>
                <Text>
                  <Text style={verificationStyle.redDot}>Optional: </Text>
                  <Text style={verificationStyle.pointText}>
                    For faster verification, please provide your student email.
                    We may send an email to confirm your student status and
                    request further verification if necessary.
                  </Text>
                </Text>
                <FlatInput
                  label="Enter student email"
                  onChangeText={handleWebsite}
                />
              </>
            )}

            {verificationOption === 'License Number' && (
              <Text style={verificationStyle.footerText}>
                We may request additional proof of degree if needed, depending
                on the type of degree.
              </Text>
            )}

            <PrimaryButton onPress={toggleModal} title="Camera" />
          </View>
        </View>
      </ScreenContainer>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleModal}
        onRequestClose={toggleModal}
      >
        <View style={firstModalStyle.centeredView}>
          <View style={firstModalStyle.modalView}>
            <TouchableOpacity onPress={() => clickPicture('camera')}>
              <Text style={firstModalStyle.text}>Take a photo</Text>
            </TouchableOpacity>
            <View style={firstModalStyle.borderView} />
            <TouchableOpacity onPress={() => clickPicture('library')}>
              <Text style={firstModalStyle.text}> Choose from library</Text>
            </TouchableOpacity>
          </View>

          <View
            style={[firstModalStyle.modalView, firstModalStyle.modalViewTwo]}
          >
            <TouchableOpacity onPress={toggleModal}>
              <Text style={firstModalStyle.backBtnText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visiblePicModal}
        onRequestClose={closePicModal}
      >
        <View style={modalStyles.modalContent}>
          <Row
            style={modalStyles.row}
            justifyContent="space-between"
            alignItems="center"
          >
            <Pressable onPress={closePicModal}>
              <Image
                style={modalStyles.arrow}
                source={require('../../../assets/images/icons/arrow.png')}
              />
            </Pressable>
            <Logo width={50} height={35} />
            <View />
          </Row>
          {!isSelfie ? (
            <View style={modalStyles.content}>
              <Text style={modalStyles.subText}>Photo captured</Text>
              <Image
                style={modalStyles.picture}
                source={{ uri: documentImage?.path }}
              />
              <PrimaryButton
                style={modalStyles.button}
                onPress={() => setIsSelfie(true)}
                title="Next"
              />
            </View>
          ) : (
            <View style={modalStyles.content}>
              <Text style={modalStyles.subText}>
                Take a selfie wearing or holding the SAME item.
              </Text>

              {selfie ? (
                <>
                  <Image
                    style={modalStyles.picture}
                    source={{ uri: selfie.path }}
                  />
                  <PrimaryButton
                    style={modalStyles.button}
                    title="Submit"
                    isLoading={loading}
                    onPress={() => sumbitVerificationForm()}
                  />
                </>
              ) : (
                <>
                  <View style={verificationStyle.imageViewProfile}>
                    <TouchableOpacity onPress={clickSelfieImage}>
                      <Image
                        style={verificationStyle.imageIcon}
                        source={require('../../../assets/images/icons/addImg.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <PrimaryButton
                    onPress={clickSelfieImage}
                    style={modalStyles.button}
                    title="Click Selfie"
                  />
                </>
              )}
            </View>
          )}
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={closePicModal}
      >
        <View style={modalStyles.modalContent}>
          <Row
            style={modalStyles.row}
            justifyContent="space-between"
            alignItems="center"
          >
            <Pressable onPress={closePicModal}>
              <Image
                style={modalStyles.arrow}
                source={require('../../../assets/images/icons/arrow.png')}
              />
            </Pressable>
            <Image
              style={modalStyles.arrow}
              source={require('../../../assets/images/icons/crossIcon.png')}
            />
          </Row>
          <View style={verificationStyle.container}>
            <View>
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
              <TouchableOpacity style={verificationStyle.uploadBtn}>
                <Text style={verificationStyle.uploadBtnText}>Uplpoad</Text>
              </TouchableOpacity>
              <Text style={verificationStyle.subText}>
                Enter website to show proof of degree (e.g., Professional
                licensing website, Institution website showing name and year of
                graduation, Work website showing name and title). We may request
                additional proof of degree if needed.
              </Text>
            </View>
            <KeyboardAvoidingView
              behavior="position"
              keyboardVerticalOffset={keyboardVerticalOffset}
            >
              <View style={verificationStyle.footerDiv}>
                <FlatInput
                  label="Enter student email"
                  placeholder="Enter website"
                />
                <PrimaryButton onPress={toggleModal} title="Submit" />
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default VerificationStepTwo;
