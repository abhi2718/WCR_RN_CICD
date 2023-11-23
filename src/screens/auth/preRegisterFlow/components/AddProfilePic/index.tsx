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
} from '../../../../../components/tools';
import { addPicture, modalStyles } from './AddProfilePicStyle';
import { PrimaryButton } from '../../../../../components/button';
import { HeaderBar } from '../../../../../components/header';
import { ImageOrVideo } from 'react-native-image-crop-picker';
import { pickPhotoFromGallary } from '../../../../../utils/uploads';
import { useAddProfilePicViewModal } from './addProfilePic.ViewModal';
import { ProfilePicInfoModal } from '../../../../../components/profilePicInfoModal';

interface AvatarProps extends ImageProps {
  onChange?: (image: ImageOrVideo) => void;
  navigation: any;
  route: any;

}

const AddProfilePic = (props: AvatarProps) => {
 const {closeModal, openModal, isPicUploadInfoModalVisible} = useAddProfilePicViewModal(props)
  const [uri, setUri] = React.useState(props.source?.uri || undefined);

  const pickProfilePicture = async () => {
    const image = await pickPhotoFromGallary(null, true);
    setUri(image.path);
    props.onChange?.(image);
    console.log(image, 'profile picture');
  };
  const removeProfilePic = () => {
    setUri(null);
  };

  const [uris, setUris] = useState(Array(2).fill(null));

  const pickPhoto = async (index: number) => {
    const image = await pickPhotoFromGallary(null, false);
    const updatedUris = [...uris];
    updatedUris[index] = image.path;
    setUris(updatedUris);
    // props.onChange?.(updatedUris);
  };

  const [urisTwo, seturisTwo] = useState(Array(3).fill(null));

  const pickPhotoTwo = async (index: number) => {
    const image = await pickPhotoFromGallary(null, false);
    const updatedUris = [...urisTwo];
    updatedUris[index] = image.path;
    seturisTwo(updatedUris);
    // props.onChange?.(updatedUris);
  };

  const removePic = (index: number) => {
    const updatedUris = [...uris];
    updatedUris[index] = null;
    setUris(updatedUris);
  };
  const removePicTwo = (index: number) => {
    const updatedUris = [...urisTwo];
    updatedUris[index] = null;
    seturisTwo(updatedUris);
  };

  // ---------Modal --------------------------------
  const [imageModal, setImageModal] = useState(false);

  const [selectedUri, setSelectedUri] = useState(null);

  const toggleImageModal = (uri: string) => {
    setSelectedUri(uri);
    setImageModal(!imageModal);
  };

  return (
    <>
      <ScreenContainer>
      <ProfilePicInfoModal
        isVisible={isPicUploadInfoModalVisible}
        onClose={closeModal}
      ></ProfilePicInfoModal>
        <View style={addPicture.container}>
          <View>
            <HeaderBar info={openModal}></HeaderBar>
            <Text style={addPicture.subHeader}>Show off your best side </Text>
            <Text style={addPicture.text}>(Add at least 2 photos)</Text>
            <View>
              <Row justifyContent="space-between" style={addPicture.row}>
                {uri ? (
                  <View>
                    <TouchableOpacity onPress={pickProfilePicture}>
                      <Image
                        style={addPicture.profilePic}
                        {...props}
                        source={uri ? { uri } : props.source}
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
                  {uris.map((uri, index) => (
                    <View key={index}>
                      {uri ? (
                        <View>
                          <TouchableOpacity
                            onPress={() => toggleImageModal(uri)}
                          >
                            <Image
                              style={addPicture.photo}
                              {...props}
                              source={{ uri }}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => removePic(index)}>
                            <Image
                              style={addPicture.deletImg}
                              source={require('../../../../../assets/images/icons/crossIcon.png')}
                            />
                          </TouchableOpacity>
                        </View>
                      ) : (
                        <TouchableOpacity onPress={() => pickPhoto(index)}>
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
                {urisTwo.map((uri, index) => (
                  <View key={index}>
                    {uri ? (
                      <View>
                        <TouchableOpacity onPress={() => toggleImageModal(uri)}>
                          <Image
                            style={addPicture.photo}
                            {...props}
                            source={{ uri }}
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
                      <TouchableOpacity onPress={() => pickPhotoTwo(index)}>
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
          <PrimaryButton title="Next" />
        </View>
      </ScreenContainer>

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={imageModal}
          onRequestClose={toggleImageModal}
        >
          <View style={modalStyles.modalContent}>
            <Row
              style={modalStyles.row}
              justifyContent="space-between"
              alignItems="center"
            >
              <Pressable onPress={toggleImageModal}>
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
                source={{ uri: selectedUri }}
              />
              <PrimaryButton
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

export default AddProfilePic;
