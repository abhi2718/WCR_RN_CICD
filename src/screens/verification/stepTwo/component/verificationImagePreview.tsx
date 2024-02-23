import React from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { HeaderBar } from '../../../../components/header';

import { VerificationImagePreviewProps } from '../../../../types/screen.type/preRegister.type';
import {
  firstModalStyle,
  verificationStyle,
} from '../../stepOne/verificationSteps';
import { PrimaryButton } from '../../../../components/button';
import { ScrollView } from 'react-native-gesture-handler';
import { sizes } from '../../../../infrastructure/theme/sizes';
import { colors } from '../../../../infrastructure/theme/colors';
import { Column, dimensions } from '../../../../components/tools';
import { ErrorText } from '../../../auth/signin/signInStyle';

export const VerificationImagePreviewModal = (
  props: VerificationImagePreviewProps,
) => {
  const {
    onCloseVerificationImagePreview,
    isVerificationImagePreviewVisible,
    openModal,
    documentImage,
    clickSelfieImage,
    sumbitVerificationForm,
    loading,
    selfie,
    removeSelfie,
    removeDocument,
    toggleModal,
    visibleModal,
    clickPicture,
    error,
  } = props;

  return (
    <Modal
      animationType="slide"
      visible={isVerificationImagePreviewVisible}
      onRequestClose={onCloseVerificationImagePreview}
    >
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
      <View style={{ padding: 16 }}>
        <HeaderBar
          isVerificartionScreen={false}
          info={openModal}
          goBack={onCloseVerificationImagePreview}
        />
      </View>
      <ScrollView>
        <Column>
          <View>
            <View>
              {documentImage ? (
                <View style={verificationImageUploaderStyle.uploadeFinalImg}>
                  <Image
                    style={verificationImageUploaderStyle.profilePic}
                    source={
                      documentImage ? { uri: documentImage.path } : props.source
                    }
                  />
                  <TouchableOpacity
                    style={verificationImageUploaderStyle.deletImgWrapper}
                    onPress={removeDocument}
                  >
                    <Image
                      style={verificationImageUploaderStyle.deletImg}
                      source={require('../../../../assets/images/icons/redCrossIcon.png')}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={verificationImageUploaderStyle.imageViewProfile}>
                  <TouchableOpacity onPress={toggleModal}>
                    <Image
                      style={verificationImageUploaderStyle.imageIcon}
                      source={require('../../../../assets/images/icons/addImg.png')}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View>
              <View>
                {selfie ? (
                  <View style={verificationImageUploaderStyle.uploadeFinalImg}>
                    <Image
                      style={verificationImageUploaderStyle.profilePic}
                      source={selfie ? { uri: selfie.path } : props.source}
                    />
                    <TouchableOpacity
                      style={verificationImageUploaderStyle.deletImgWrapper}
                      onPress={removeSelfie}
                    >
                      <Image
                        style={verificationImageUploaderStyle.deletImg}
                        source={require('../../../../assets/images/icons/redCrossIcon.png')}
                      />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={verificationImageUploaderStyle.imageViewProfile}>
                    <TouchableOpacity onPress={clickSelfieImage}>
                      <Image
                        style={verificationImageUploaderStyle.imageIcon}
                        source={require('../../../../assets/images/icons/addImg.png')}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          </View>
        </Column>
        <View style={{ paddingHorizontal: 16 }}>
          <PrimaryButton
            onPress={() => sumbitVerificationForm()}
            title="Submit"
            isLoading={loading}
          />
          {error ? (
            <ErrorText>Both photos required. Please upload.</ErrorText>
          ) : (
            <View />
          )}
        </View>
      </ScrollView>
    </Modal>
  );
};

export const verificationImageUploaderStyle = StyleSheet.create({
  imageViewProfile: {
    
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.ui.primary,
    justifyContent: 'center',
    height: 300,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 16,
    overflow: 'hidden',
    borderRadius: 20,
  },
  uploadeFinalImg: {
    borderRadius: sizes[4],
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    borderRadius: sizes[4],
    paddingTop: sizes[4],
    width: dimensions.width - 20,
    height: 300,
    resizeMode: 'cover',
  },
  uploaderPic: {
    borderRadius: sizes[4],
    paddingTop: sizes[4],
    height: 300,
    resizeMode: 'contain',
  },
  deletImg: {
    width: sizes[6],
    height: sizes[6],
    padding: sizes[0],
    borderRadius: sizes[10],
  },
  deletImgWrapper: {
    position: 'absolute',
    top: 20,
    right: 20,
    overflow: 'hidden',
  },
  imageIcon: {
    width: sizes[8],
    height: sizes[6],
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  cancelButton: {
    borderRadius: 23,
    paddingVertical: 16,
    backgroundColor: colors.ui.primary,
    marginHorizontal: 20,
  },
});
