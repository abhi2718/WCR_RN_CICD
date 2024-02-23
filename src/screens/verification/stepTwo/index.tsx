import React from 'react';
import {
  Modal,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {
  Column,
  Logo,
  Row,
  ScreenContainer,
  Spacer,
  dimensions,
  isAndroid,
} from '../../../components/tools';
import { HeaderBar } from '../../../components/header';
import {
  firstModalStyle,
  verificationStyle,
} from '../stepOne/verificationSteps';
import { FlatInput } from '../../../components/inputBox';
import { PrimaryButton } from '../../../components/button';
import { modalStyles } from '../../auth/preRegisterFlow/components/AddProfilePic/AddProfilePicStyle';
import { useVerificationViewModalStepTwo } from './stepTwo.ViewModal';
import {
  IdverifyModal,
  IdverifyStudentModal,
} from '../../../components/verificationModal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AvatarProps } from '../../../types/screen.type/preRegister.type';
import { ScrollView } from 'react-native-gesture-handler';
import { insModalStyle } from '../../../components/profilePicInfoModal/profileInfoStyle';
import { VerificationImagePreviewModal } from './component/verificationImagePreview';

const VerificationStepTwo = (props: AvatarProps) => {
  const {
    verificationOption,
    clickSelfieImage,
    visibleModal,
    documentImage,
    clickPicture,
    selfie,
    loading,
    closePicModal,
    toggleModal,
    visiblePicModal,
    navigateToVerificationImagePreview,
    sumbitVerificationForm,
    isSelfie,
    setIsSelfie,
    PhdOptionImage,
    closePhdOptionPicUploadingModal,
    PhdOptionPicUploadingModal,
    isVerificationInfoModalVisible,
    closeModal,
    openModal,
    closeStudentInfoModal,
    openStudentInfoModal,
    isStudentInfoModalVisible,
    isVerificationImagePreviewVisible,
    onCloseVerificationImagePreview,
    removeDocument,
    removeSelfie,
    isShowPreview,
  } = useVerificationViewModalStepTwo(props);
  const { top, bottom } = useSafeAreaInsets();
  return (
    <Pressable onPress={Keyboard.dismiss} style={verificationStyle.wrapper}>
      <ScreenContainer>
        <IdverifyModal
          isVisible={isVerificationInfoModalVisible}
          onClose={closeModal}
        ></IdverifyModal>
        <IdverifyStudentModal
          isVisible={isStudentInfoModalVisible}
          onClose={closeStudentInfoModal}
        ></IdverifyStudentModal>
        <VerificationImagePreviewModal
          sumbitVerificationForm={sumbitVerificationForm}
          clickSelfieImage={clickSelfieImage}
          removeDocument={removeDocument}
          removeSelfie={removeSelfie}
          onCloseVerificationImagePreview={onCloseVerificationImagePreview}
          openModal={openModal}
          documentImage={documentImage}
          selfie={selfie}
          loading={loading}
          isVerificationImagePreviewVisible={isVerificationImagePreviewVisible}
          clickPicture={clickPicture}
          toggleModal={toggleModal}
          visibleModal={visibleModal}
        ></VerificationImagePreviewModal>
        <HeaderBar isVerificartionScreen={false} info={openModal} />

        <Column
          justifyContent="space-between"
          style={verificationStyle.wrapper}
        >
          <View style={verificationStyle.wrapper}>
            <Text style={verificationStyle.subHeader}>
              Step II - Photo Verification
            </Text>
            {verificationOption === 'Student' ? (
              <Text style={verificationStyle.subText}>
                Take a photo of your Student photo ID.
              </Text>
            ) : (
              <>
                <Text style={verificationStyle.subText}>
                  Take a photo of ONE of the following that clearly displays
                  your name on it.
                </Text>
                <Text style={verificationStyle.subText}>
                  White Coat/scrubs/jacket, work ID badge, business/license
                  card, desk/door nameplate
                </Text>
              </>
            )}
            {verificationOption === 'Student' ? (
              <Image
                // resizeMode="contain"
                style={insModalStyle.stepTwoImg}
                source={require('../../../assets/images/virificationModal3.png')}
              />
            ) : (
              <Image
                // resizeMode="contain"
                style={insModalStyle.stepTwoImg}
                source={require('../../../assets/images/virificationModal1.png')}
              />
            )}

            {/* {verificationOption === 'Student' ? null : (
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
            )} */}
          </View>
          <View style={verificationStyle.footerDiv}>
            {/* {verificationOption === 'License Number' && (
              <View style={verificationStyle.white}>
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
              </View>
            )}
            {verificationOption === 'HealthCare' && (
              <View style={verificationStyle.white}>
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
              </View>
            )}
            {verificationOption === 'Student' && (
              <View style={verificationStyle.white}>
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
              </View>
            )}
            {verificationOption === 'License Number' && (
              <Text style={verificationStyle.footerText}>
                We may request additional proof of degree if needed, depending
                on the type of degree.
              </Text>
            )} */}
            {/* <KeyboardAvoidingView
              enabled
              behavior={isAndroid ? 'height' : 'padding'}
            > */}
            <PrimaryButton
              onPress={() => {
                if (isShowPreview()) {
                  navigateToVerificationImagePreview();
                } else {
                  toggleModal();
                }
              }}
              title="Camera"
            />
            {/* </KeyboardAvoidingView> */}
          </View>
        </Column>
        <View>
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
                  <View style={modalStyles.backButtonWrapper}>
                    <Image
                      style={modalStyles.arrow}
                      source={require('../../../assets/images/icons/arrow.png')}
                    />
                  </View>
                </Pressable>
                {/* <View style={modalStyles.logoWrapper}>
                  <Logo width={50} height={35} />
                </View> */}
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
                    Take a selfie wearing or holding the{' '}
                    <Text style={modalStyles.subTextInner}>SAME</Text> item as
                    photo captured.
                  </Text>
                  {selfie ? (
                    <>
                      <Image
                        style={modalStyles.picture}
                        source={{ uri: selfie.path }}
                      />
                      <PrimaryButton
                        style={modalStyles.button}
                        title={'Continue'}
                        isLoading={loading}
                        onPress={() => navigateToVerificationImagePreview()}
                      />
                    </>
                  ) : (
                    <>
                      <View style={modalStyles.flex1}>
                        {/* <TouchableOpacity onPress={clickSelfieImage}> */}
                        <Image
                          resizeMode="center"
                          style={modalStyles.verificationStepTwoSelfieImg}
                          source={require('../../../assets/images/verificationStepTwoSelfie.png')}
                        />
                        <Text style={modalStyles.subTextImg}>
                          Make sure the photo is clear, without any shades,
                          masks, or obstructions.
                        </Text>
                        {/* </TouchableOpacity> */}
                      </View>
                      <PrimaryButton
                        onPress={clickSelfieImage}
                        style={modalStyles.button}
                        title="Camera"
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
            visible={PhdOptionPicUploadingModal}
            onRequestClose={closePhdOptionPicUploadingModal}
          >
            <View style={modalStyles.modalContent}>
              <Row
                style={modalStyles.row}
                justifyContent="space-between"
                alignItems="center"
              >
                <View style={modalStyles.backButtonWrapper}>
                  <Pressable onPress={closePicModal}>
                    <Image
                      style={modalStyles.arrow}
                      source={require('../../../assets/images/icons/arrow.png')}
                    />
                  </Pressable>
                </View>
                {/* <View style={modalStyles.logoWrapper}>
                  <Logo width={50} height={35} />
                </View> */}
                <View />
              </Row>
              <View style={modalStyles.content}>
                <Text style={modalStyles.subText}>Photo captured</Text>
                <Image
                  style={modalStyles.picture}
                  source={{ uri: PhdOptionImage?.path }}
                />
                <PrimaryButton
                  style={modalStyles.button}
                  onPress={() => navigateToVerificationImagePreview()}
                  isLoading={loading}
                  title="Next"
                />
              </View>
            </View>
          </Modal>

          {/* <Modal
            animationType="slide"
            transparent={true}
            visible={PhdOptionModal}
            onRequestClose={closePhdOptionModalModal}
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
                    <Pressable onPress={closePhdOptionModalModal}>
                      <View style={modalStyles.backButtonWrapper}>
                      <Image
                        style={modalStyles.arrow}
                        source={require('../../../assets/images/icons/arrow.png')}
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
          </Modal> */}
        </View>
      </ScreenContainer>
    </Pressable>
  );
};

export default VerificationStepTwo;
