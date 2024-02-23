import React from 'react';
import {
  Modal,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import { Column, Row, ScreenContainer } from '../../../components/tools';
import { HeaderBar } from '../../../components/header';
import {
  firstModalStyle,
  verificationStyle,
} from '../stepOne/verificationSteps';
import { PrimaryButton } from '../../../components/button';
import { modalStyles } from '../../auth/preRegisterFlow/components/AddProfilePic/AddProfilePicStyle';
import { useVerificationViewModalStepTwo } from './stepTwo.ViewModal';
import {
  IdverifyModal,
  IdverifyStudentModal,
} from '../../../components/verificationModal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AvatarProps } from '../../../types/screen.type/preRegister.type';
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
    isStudentInfoModalVisible,
    isVerificationImagePreviewVisible,
    onCloseVerificationImagePreview,
    removeDocument,
    removeSelfie,
    isShowPreview,
    error,
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
          error={error}
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
          </View>
          <View style={verificationStyle.footerDiv}>
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
        </View>
      </ScreenContainer>
    </Pressable>
  );
};

export default VerificationStepTwo;
