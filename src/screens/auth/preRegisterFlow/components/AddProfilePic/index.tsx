import React, { useState } from 'react';
import {
  Image,
  Text,
  ImageProps,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from 'react-native';
import {
  Column,
  Logo,
  Row,
  ScreenContainer,
  Spacer,
} from '../../../../../components/tools';
import { addPicture, modalStyles } from './AddProfilePicStyle';
import { PrimaryButton } from '../../../../../components/button';
import { HeaderBar } from '../../../../../components/header';
import { ImageOrVideo } from 'react-native-image-crop-picker';
import { useAddProfilePicViewModal } from './addProfilePic.ViewModal';
import { ProfilePicInfoModal } from '../../../../../components/profilePicInfoModal';

export interface AvatarProps extends ImageProps {
  onChange?: (image: ImageOrVideo) => void;
  navigation?: any;
  route?: any;
  showHeader?: boolean;
}

const AddProfilePicScreen = (props: any) => {
  const {
    loading,
    closeModal,
    openModal,
    isPicUploadInfoModalVisible,
    pickProfilePicture,
    profilePicUri,
    sidePicUri,
    removeProfilePic,
    sidePickPhoto,
    toggleImageModal,
    selectedUri,
    bottomPicPhoto,
    removePicTwo,
    removePic,
    bottomUris,
    imageModal,
    setProfilePicFromModel,
    sidePicConstant,
    uploadImage,
    bottomPicConstant,
    showHeader,
    setImageModal,
  } = useAddProfilePicViewModal(props);

  return (
    <>
      <ScreenContainer>
        <ProfilePicInfoModal
          isVisible={isPicUploadInfoModalVisible}
          onClose={closeModal}
        ></ProfilePicInfoModal>
        <View style={addPicture.container}>
          <View>
            {showHeader && <HeaderBar info={openModal}></HeaderBar>}
            <Text style={addPicture.subHeader}>Show off your best side </Text>
            <Text style={addPicture.text}>(Add at least 2 photos)</Text>
            <View>
              <Row justifyContent="space-between" style={addPicture.row}>
                {profilePicUri ? (
                  <View>
                    <TouchableOpacity onPress={pickProfilePicture}>
                      <Image
                        style={addPicture.profilePic}
                        {...props}
                        source={
                          profilePicUri
                            ? { uri: profilePicUri.path }
                            : props.source
                        }
                      />
                      <Text style={addPicture.profilePicText}>
                        Profile Photo
                      </Text>
                      <TouchableOpacity onPress={() => removeProfilePic()}>
                        <Image
                          style={addPicture.deletImg}
                          source={require('../../../../../assets/images/icons/crossIcon.png')}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={addPicture.imageViewProfile}>
                    <TouchableOpacity onPress={pickProfilePicture}>
                      <Image
                        style={addPicture.imageIcon}
                        source={require('../../../../../assets/images/icons/addImg.png')}
                      />
                    </TouchableOpacity>
                  </View>
                )}

                <Column style={addPicture.columnOne}>
                  {sidePicUri?.map((sidePic, index) => (
                    <View key={index}>
                      {sidePic ? (
                        <View>
                          <TouchableOpacity
                            onPress={() =>
                              toggleImageModal(
                                sidePic.path,
                                sidePicConstant,
                                index,
                              )
                            }
                          >
                            <Image
                              style={addPicture.photo}
                              {...props}
                              source={{ uri: sidePic?.path }}
                            />
                          </TouchableOpacity>
                          {!showHeader && sidePicUri.length === 1 ? (
                            <>
                              <TouchableOpacity
                                onPress={() => removePic(index)}
                              >
                                <Image
                                  style={addPicture.deletImg}
                                  source={require('../../../../../assets/images/icons/crossIcon.png')}
                                />
                              </TouchableOpacity>
                            </>
                          ) : (
                            <>
                              <TouchableOpacity
                                onPress={() => removePic(index)}
                              >
                                <Image
                                  style={addPicture.deletImg}
                                  source={require('../../../../../assets/images/icons/crossIcon.png')}
                                />
                              </TouchableOpacity>
                            </>
                          )}
                        </View>
                      ) : (
                        <TouchableOpacity onPress={() => sidePickPhoto(index)}>
                          <View style={addPicture.imageView}>
                            <Image
                              style={addPicture.imageIcon}
                              source={require('../../../../../assets/images/icons/addImg.png')}
                            />
                          </View>
                        </TouchableOpacity>
                      )}
                    </View>
                  ))}
                </Column>
              </Row>

              <Row justifyContent="space-between" style={addPicture.row}>
                {bottomUris?.map((bottomUri, index) => (
                  <View key={index}>
                    {bottomUri ? (
                      <View>
                        <TouchableOpacity
                          onPress={() =>
                            toggleImageModal(
                              bottomUri.path,
                              bottomPicConstant,
                              index,
                            )
                          }
                        >
                          <Image
                            style={addPicture.photo}
                            {...props}
                            source={{ uri: bottomUri.path }}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => removePicTwo(index)}>
                          <Image
                            style={addPicture.deletImg}
                            source={require('../../../../../assets/images/icons/crossIcon.png')}
                          />
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <TouchableOpacity onPress={() => bottomPicPhoto(index)}>
                        <View style={addPicture.imageView}>
                          <Image
                            style={addPicture.imageIcon}
                            source={require('../../../../../assets/images/icons/addImg.png')}
                          />
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                ))}
              </Row>
            </View>
          </View>
          {showHeader && (
            <PrimaryButton
            onPress={() => uploadImage()}
            title="Next"
            isLoading={loading}
          />
          )}
        </View>
      </ScreenContainer>

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={imageModal}
          onRequestClose={() => setImageModal(false)}
        >
          <View style={modalStyles.modalContent}>
            <Row
              style={modalStyles.row}
              justifyContent="space-between"
              alignItems="center"
            >
              <Pressable onPress={() => setImageModal(false)}>
                <Image
                  style={modalStyles.arrow}
                  source={require('../../../../../assets/images/icons/arrow.png')}
                />
              </Pressable>
              <Logo width={50} height={35} />
              <View />
            </Row>
            <View style={modalStyles.content}>
              <Image
                style={modalStyles.picture}
                source={{ uri: selectedUri?.path }}
              />
              <PrimaryButton
                onPress={() => setProfilePicFromModel(selectedUri!)}
                style={modalStyles.button}
                title="Set as profile"
              />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default AddProfilePicScreen;
