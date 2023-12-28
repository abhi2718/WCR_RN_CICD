import React, { useEffect, useState } from 'react';
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
  ScrollView,
  Keyboard,
} from 'react-native';

import {
  Logo,
  Row,
  ScreenContainer,
  dimensions,
  isAndroid,
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
import { VerificationInfoModal, VerificationInstructionModal } from '../../../components/verificationModal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
    website,
    documentImage,
    setdocumentImage,
    clickPicture,
    selfie,
    loading,
    validationErrorMessage,
    closePicModal,
    PhdOptionModal,
    toggleModal,
    visiblePicModal,
    sumbitVerificationForm,
    isSelfie,
    uploadPhdOptionPhotos,
    closePhdOptionModalModal,
    openPhdOptionModal,
    setIsSelfie,
    PhdOptionImage,
    closePhdOptionPicUploadingModal,
    openPhdOptionPicUploadingModal,
    PhdOptionPicUploadingModal,
    openInfoModal,
    isVerificationInfoModalVisible,
    closeModal,
    openModal,
  } = useVerificationViewModal(props);
  const { top, bottom } = useSafeAreaInsets();
  return (
    <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <ScreenContainer>
        <VerificationInstructionModal
          isVisible={isVerificationInfoModalVisible}
          onClose={closeModal}
        ></VerificationInstructionModal>
        <HeaderBar isVerificartionScreen={false} info={openModal}/>
        <KeyboardAvoidingView
          enabled
          behavior={isAndroid ? 'height' : 'padding'}
          keyboardVerticalOffset={100}
          style={{
            ...verificationStyle.container,
            height: dimensions.height - (top + bottom + 110),
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={verificationStyle.subHeader}>
              Photo Verification (Step II)
            </Text>
            {verificationOption === 'Student' ? (
              <Text style={verificationStyle.subText}>
                Take a photo of your Student photo ID.
              </Text>
            ) : (
              <Text style={verificationStyle.subText}>
                Take a photo of ONE of the following that clearly displays your
                name on it.
              </Text>
            )}
            {verificationOption === 'Student' ? null : (
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
            )}
          </View>

          <View style={{ ...verificationStyle.footerDiv }}>
            {verificationOption === 'License Number' && (
              <>
                <Text>
                  <Text style={verificationStyle.optionalText}>Optional: </Text>
                  <Text style={verificationStyle.pointText}>
                    For quicker verification, please provide a website to verify
                    your degree.
                  </Text>
                </Text>
                <KeyboardAvoidingView
                  enabled
                  behavior={isAndroid ? 'height' : 'padding'}
                >
                  <FlatInput
                    label="Enter website"
                    value={website}
                    onChangeText={handleWebsite}
                  />
                </KeyboardAvoidingView>
              </>
            )}
            {verificationOption === 'HealthCare' && (
              <>
                <Text>
                  <Text style={verificationStyle.optionalText}>Optional: </Text>
                  <Text style={verificationStyle.pointText}>
                    For quicker verification, please provide a website to verify
                    your degree.
                  </Text>
                </Text>
                <KeyboardAvoidingView
                  enabled
                  behavior={isAndroid ? 'height' : 'padding'}
                >
                  <FlatInput
                    label="Enter website"
                    value={website}
                    onChangeText={handleWebsite}
                  />
                </KeyboardAvoidingView>
              </>
            )}
            {verificationOption === 'Student' && (
              <>
                <Text>
                  <Text style={verificationStyle.optionalText}>Optional: </Text>
                  <Text style={verificationStyle.pointText}>
                    For faster verification, please provide your student email.
                    We may send an email to confirm your student status and
                    request further verification if necessary.
                  </Text>
                </Text>
                <KeyboardAvoidingView
                  enabled
                  behavior={isAndroid ? 'height' : 'padding'}
                >
                  <FlatInput
                    label="Enter student email"
                    onChangeText={handleWebsite}
                    value={website}
                  />
                </KeyboardAvoidingView>
              </>
            )}
            {verificationOption === 'License Number' && (
              <Text style={verificationStyle.footerText}>
                We may request additional proof of degree if needed, depending
                on the type of degree.
              </Text>
            )}
            <KeyboardAvoidingView
              enabled
              behavior={isAndroid ? 'height' : 'padding'}
            >
              <PrimaryButton onPress={toggleModal} title="Camera" />
            </KeyboardAvoidingView>
          </View>
        </KeyboardAvoidingView>
      </ScreenContainer>
    </Pressable>
  );
};

export default VerificationStepTwo;
