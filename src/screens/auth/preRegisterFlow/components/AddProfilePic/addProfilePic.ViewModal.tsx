import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  pickPhotoFromGallary,
  pickPhotoFromUrl,
} from '../../../../../utils/uploads';
import { AvatarProps } from '.';
import { CloudinaryRepository } from '../../../../../repository/cloudinary.repo';
import {
  FlashMessageType,
  ShowFlashMessage,
} from '../../../../../components/flashBar';
import { Image } from 'react-native-image-crop-picker';
import { objects } from '../../../../../cometChat/src/shared/views/CometChatEmojiKeyboard/resources';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../../../store/reducers/user.reducer';
import { ROUTES } from '../../../../../navigation';

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
export const useAddProfilePicViewModal = (props: any) => {
  const { user } = useSelector(({ userState }) => userState);
  const sidePicConstant = 'sidePicConstant';
  const bottomPicConstant = 'bottomPicConstant';
  const cloudinaryRepository = new CloudinaryRepository();
  const [loading, setLoading] = useState(false);
  const { navigation } = props;

  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const [isPicUploadInfoModalVisible, setPicUploadInfoModalVisible] =
    useState(false);

  const token = useRef(user?.token ? user?.token : null).current;

  const dispatch = useDispatch();
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
  useEffect(() => {
    if (props?.setAllPics) {
      props?.setAllPics({
        bottomUris: bottomUris?.filter((item) => item),
        sidePicUri: sidePicUri?.filter((item) => item),
        profilePicUri: profilePicUri,
      });
    }
  }, [bottomUris, sidePicUri, profilePicUri]);
  const fillSavedPhotos = (photos: any) => {
    if (!photos) {
      return [];
    }

    const newPhotos = [];
    if (photos?.length < 6) {
      let count = 0;
      for (let i = 0; i < photos.length; i++) {
        count++;
        const photo = photos[i];
        const resultImage: ImageDataType = {
          path: photo?.url,
          mime: 'image/jpeg',
          name: photo?.url?.split('/').pop()!,
        };
        newPhotos.push(resultImage);
      }
      for (let i = count; i < 6; i++) {
        newPhotos.push(null);
      }
    }
    return newPhotos;
  };

  const getSavedPics = () => {
    const profilePic = user?.profilePicture;
    const photos = fillSavedPhotos(user?.photos);
    if (profilePic?.url) {
      const resultImage: ImageDataType = {
        path: profilePic?.url,
        mime: 'image/jpeg',
        name: profilePic?.url?.split('/').pop()!,
      };
      setProfilePicUri(resultImage);
    }

    if (photos) {
      let indexForBottomPics = 0;
      const updatedUris = [...sidePicUri!];
      const updatedBottomUris = [...bottomUris!];

      photos.forEach((photo: any, index: number) => {
        if (index < 2) {
          updatedUris[index] = photo;
        }
        if (index < 5 && index >= 2) {
          updatedBottomUris[indexForBottomPics] = photo;
          indexForBottomPics++;
        }
      });
      setSidePicUris([...updatedUris]);
      setBottomUris([...updatedBottomUris]);
    }
  };

  useLayoutEffect(() => {
    getSavedPics();
  }, []);

  const setProfilePicFromModel = async (imageValue: ModalImageSelectedType) => {
    const image: Image = await pickPhotoFromUrl(undefined, imageValue.path);
    if (image?.cropRect) {
      imageValue.path = image?.path;
    }
    if (imageValue.type == sidePicConstant) {
      exchangeSidePic(imageValue.index, imageValue.path);
      setImageModal(!imageModal);
      return;
    }

    if (imageValue.type == bottomPicConstant) {
      exchangeBottomSidePic(imageValue.index, imageValue.path);
      setImageModal(!imageModal);
      return;
    }
  };

  const exchangeSidePic = (index: number, path: string) => {
    const updatedUris = [...sidePicUri!];
    const currentPic = updatedUris[index];
    currentPic.path = path;
    updatedUris[index] = profilePicUri!;
    setProfilePicUri(currentPic);
    setSidePicUris(updatedUris);
  };

  const exchangeBottomSidePic = (index: number, path: string) => {
    const updatedUris = [...bottomUris!];
    const currentPic = updatedUris[index];
    currentPic.path = path;
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

  const [imageModal, setImageModal] = useState(false);
  const [selectedUri, setSelectedUri] = useState<ModalImageSelectedType | null>(
    null,
  );

  const toggleImageModal = async (
    imagePath: string,
    type: string,
    index: number,
  ) => {
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
      setLoading(true);
      const profileCloudURL = await uploadImageToCloudinary(profilePicUri);
      const profileImage = {
        url: profileCloudURL,
        caption: 'User Profile',
      };
      const photos: object[] = [];
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
        photos.push({ url: cloudURL! });
      }
      await updateImagesInDatabase(profileImage, photos);
    } catch (error) {}
  };

  const updateImagesInDatabase = async (
    profileImage: objects,
    photos: object[],
  ) => {
    try {
      const userData = await updateUserDetailsRepository.updateUserDetails(
        user._id,
        {
          update: {
            profilePicture: profileImage,
            photos: photos,
          },
        },
      );
      const data = token
        ? {
            user: {
              ...userData,
              token,
            },
          }
        : {
            user: userData,
          };
      dispatch(addUser(data));
      setLoading(false);
      navigateToHeightScreen();
      if (showHeader) {
        navigateToHeightScreen();
      } else {
        ShowFlashMessage(
          'Success',
          'successfully Updated your pics',
          FlashMessageType.SUCCESS,
        );
      }
    } catch (err) {
      setLoading(false);
    }
  };

  const uploadImageToCloudinary = async (
    imageData: ImageDataType,
  ): Promise<string | undefined> => {
    const verificationFolder = 'verificationProof';
    try {
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
        return response?.secure_url;
      } else {
        return undefined;
      }
    } catch (error) {}
  };

  const navigateToHeightScreen = () => {
    navigation.navigate(ROUTES.Height);
  };
  let showHeader = props?.showHeader === false ? false : true;
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
    showHeader,
    setImageModal,
  };
};
