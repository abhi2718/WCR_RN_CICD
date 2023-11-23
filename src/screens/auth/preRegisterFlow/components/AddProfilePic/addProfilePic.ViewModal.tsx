import { useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { pickPhotoFromGallary } from '../../../../../utils/uploads';
import { AvatarProps } from '.';

export type ModalImageSelectedType = {
  path: string;
  index: number;
  type: string;
};
export const useAddProfilePicViewModal = (props: AvatarProps) => {
  const sidePicConstant = 'sidePicConstant';
  const bottomPicConstant = 'bottomPicConstant';
  const [isPicUploadInfoModalVisible, setPicUploadInfoModalVisible] =
    useState(false);

  const closeModal = () => {
    setPicUploadInfoModalVisible(false);
  };
  const openModal = () => {
    setPicUploadInfoModalVisible(true);
  };

  const [profilePicUri, setProfilePicUri] = useState(
    props.source?.uri || undefined,
  );

  const pickProfilePicture = async () => {
    const image = await pickPhotoFromGallary(null, true);
    if (image?.cropRect) {
      setProfilePicUri(image?.path);
      props.onChange?.(image);
    }
  };

  const removeProfilePic = () => {
    setProfilePicUri(null);
  };

  const [sidePicUri, setSidePicUris] = useState(Array(2).fill(null));

  const sidePickPhoto = async (index: number) => {
    const image = await pickPhotoFromGallary(null, false);
    const updatedUris = [...sidePicUri];
    updatedUris[index] = image.path;
    setSidePicUris(updatedUris);
    // props.onChange?.(updatedUris);
  };

  const [bottomUris, setBottomUris] = useState(Array(3).fill(null));

  const bottomPicPhoto = async (index: number) => {
    const image = await pickPhotoFromGallary(null, false);
    const updatedUris = [...bottomUris];
    updatedUris[index] = image.path;
    setBottomUris(updatedUris);
    // props.onChange?.(updatedUris);
  };

  const setProfilePicFromModel = (imageValue: ModalImageSelectedType) => {
    if (imageValue.type == sidePicConstant) {
      exchangeSidePic(imageValue.index);
      setImageModal(!imageModal);
      return;
    }

    if (imageValue.type == bottomPicConstant) {
      exchangeBottomSidePic(imageValue.index);
      setImageModal(!imageModal);
      return;
    }
  };

  const exchangeSidePic = (index: number) => {
    const updatedUris = [...sidePicUri];
    const currentPic = updatedUris[index];
    updatedUris[index] = profilePicUri;
    setProfilePicUri(currentPic);
    setSidePicUris(updatedUris);
  };

  const exchangeBottomSidePic = (index: number) => {
    const updatedUris = [...bottomUris];
    const currentPic = updatedUris[index];
    updatedUris[index] = profilePicUri;
    setProfilePicUri(currentPic);
    setBottomUris(updatedUris);
  };

  const removePic = (index: number) => {
    const updatedUris = [...sidePicUri];
    updatedUris[index] = null;
    setSidePicUris(updatedUris);
  };
  const removePicTwo = (index: number) => {
    const updatedUris = [...bottomUris];
    updatedUris[index] = null;
    setBottomUris(updatedUris);
  };

  // ---------Modal --------------------------------
  const [imageModal, setImageModal] = useState(false);

  const [selectedUri, setSelectedUri] = useState<ModalImageSelectedType | null>(
    null,
  );

  const toggleImageModal = (imagePath: string, type: string, index: number) => {
    const newResult: ModalImageSelectedType = {
      path: imagePath,
      type: type,
      index: index,
    };
    setSelectedUri(newResult);
    setImageModal(!imageModal);
  };
  return {
    closeModal,
    openModal,
    isPicUploadInfoModalVisible,
    pickProfilePicture,
    profilePicUri,
    sidePicUri,
    setProfilePicUri,
    removeProfilePic,
    sidePickPhoto,
    toggleImageModal,
    selectedUri,
    setSelectedUri,
    removePicTwo,
    removePic,
    bottomUris,
    bottomPicPhoto,
    imageModal,
    setProfilePicFromModel,
    sidePicConstant,
    bottomPicConstant,
  };
};
