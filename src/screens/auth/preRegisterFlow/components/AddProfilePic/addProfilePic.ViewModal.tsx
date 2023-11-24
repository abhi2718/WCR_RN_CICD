import { useState } from 'react';
import { pickPhotoFromGallary } from '../../../../../utils/uploads';
import { AvatarProps } from '.';
import { CloudinaryRepository } from '../../../../../repository/cloudinary.repo';
import {
  FlashMessageType,
  ShowFlashMessage,
} from '../../../../../components/flashBar';
import { Image } from 'react-native-image-crop-picker';
import { objects } from '../../../../../cometChat/src/shared/views/CometChatEmojiKeyboard/resources';

export type ModalImageSelectedType = {
  path: string;
  index: number;
  type: string;
};
export type ImageDataType = {
  path: string;
  mime: string;
  name: string;
};
export const useAddProfilePicViewModal = (props: AvatarProps) => {
  const sidePicConstant = 'sidePicConstant';
  const bottomPicConstant = 'bottomPicConstant';
  const cloudinaryRepository = new CloudinaryRepository();
  const [loading, setLoading] = useState(false);

  const [isPicUploadInfoModalVisible, setPicUploadInfoModalVisible] =
    useState(false);

  const closeModal = () => {
    setPicUploadInfoModalVisible(false);
  };
  const openModal = () => {
    setPicUploadInfoModalVisible(true);
  };

  const [profilePicUri, setProfilePicUri] = useState<ImageDataType | null>(
    props.source?.uri || undefined,
  );

  const pickProfilePicture = async () => {
    const image: Image = await pickPhotoFromGallary(null, true);
    if (image?.cropRect) {
      const resultImage: ImageDataType = {
        path: image?.path,
        mime: image?.mime,
        name: image?.path?.split('/').pop()!,
      };
      console.log('resultImage-->', resultImage);
      setProfilePicUri(resultImage);
      props.onChange?.(image);
    }
  };

  const removeProfilePic = () => {
    setProfilePicUri(null);
  };

  const [sidePicUri, setSidePicUris] = useState<ImageDataType[] | null>(
    Array(2).fill(null),
  );

  const sidePickPhoto = async (index: number) => {
    const image: Image = await pickPhotoFromGallary(null, false);
    const updatedUris = [...sidePicUri!];
    const resultImage: ImageDataType = {
      path: image?.path,
      mime: image?.mime,
      name: image?.path?.split('/').pop()!,
    };
    updatedUris[index] = resultImage;
    setSidePicUris(updatedUris);
    // props.onChange?.(updatedUris);
  };

  const [bottomUris, setBottomUris] = useState<ImageDataType[] | null>(
    Array(3).fill(null),
  );

  const bottomPicPhoto = async (index: number) => {
    const image: Image = await pickPhotoFromGallary(null, false);
    const resultImage: ImageDataType = {
      path: image?.path,
      mime: image?.mime,
      name: image?.path?.split('/').pop()!,
    };
    const updatedUris = [...bottomUris!];
    updatedUris[index] = resultImage;
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
    const updatedUris = [...sidePicUri!];
    const currentPic = updatedUris[index];
    updatedUris[index] = profilePicUri!;
    setProfilePicUri(currentPic);
    setSidePicUris(updatedUris);
  };

  const exchangeBottomSidePic = (index: number) => {
    const updatedUris = [...bottomUris!];
    const currentPic = updatedUris[index];
    updatedUris[index] = profilePicUri!;
    setProfilePicUri(currentPic);
    setBottomUris(updatedUris);
  };

  const removePic = (index: number) => {
    const updatedUris = [...sidePicUri!];
    updatedUris[index] = null!;
    setSidePicUris(updatedUris);
  };
  const removePicTwo = (index: number) => {
    const updatedUris = [...bottomUris!];
    updatedUris[index] = null!;
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

  const uploadImage = async () => {
    const sidePics = sidePicUri?.filter((item) => item != null);
    const bottomPics = bottomUris?.filter((item) => item != null);
    const totalSize = sidePics?.length! + bottomPics?.length!;

    if (!profilePicUri) {
      return ShowFlashMessage(
        'Warning',
        'Please add your profile picture!',
        FlashMessageType.DANGER,
      );
    }
    if (totalSize < 1) {
      return ShowFlashMessage(
        'Warning',
        'Please atleast add two pictures!',
        FlashMessageType.DANGER,
      );
    }
    try {
      const photos: string[] = [];
      const profileCloudURL = await uploadImageToCloudinary(profilePicUri);
      const profileImage = {
        url: profileCloudURL,
        caption: 'User Profile',
      };
      const allPhotos = [...sidePics!, ...bottomPics!];
      for (let i = 0; i < allPhotos.length; i++) {
        const cloudURL = await uploadImageToCloudinary(allPhotos[i]);
        if (!cloudURL) {
          ShowFlashMessage(
            'Warning',
            'Something went wrong, please try again',
            FlashMessageType.DANGER,
          );
          break;
        }
        photos.push(cloudURL!);
      }

      await updateImagesInDatabase(profileImage, photos);
    } catch (error) {
      console.error(error);
    }
  };

  const updateImagesInDatabase = async (
    profileImage: objects,
    photos: string[],
  ) => {};

  const uploadImageToCloudinary = async (
    imageData: ImageDataType,
  ): Promise<string | undefined> => {
    const verificationFolder = 'verificationProof';
    try {
      setLoading(true);

      const responseData = await cloudinaryRepository.signature(
        verificationFolder,
      );

      if (responseData?.data) {
        const response = await await cloudinaryRepository.uploadImage({
          folder: verificationFolder,
          imageData: imageData,
          timestamp: responseData?.data?.timestamp,
          signature: responseData?.data?.data,
        });
        if (response?.error) {
          throw response.error;
        }
        console.warn('🚀 ~ file: addProfilePic.tsx:155 ~ ~:', response);
        return response?.secure_url;
      } else {
        return undefined;
      }
    } catch (error) {
      console.error(
        '🚀 ~ file: addProfilePic.ViewModal.tsx:160 ~ ~ error:',
        error,
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
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
    uploadImage,
  };
};
