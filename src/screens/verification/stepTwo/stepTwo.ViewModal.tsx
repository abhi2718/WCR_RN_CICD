import { useEffect, useState } from 'react';
import {
  pickPhotoFromCammera,
  pickPhotoFromGallary,
} from '../../../utils/uploads';
import { AvatarProps } from '../../auth/preRegisterFlow/components/AddProfilePic';
import { Image } from 'react-native-image-crop-picker';
import { CloudinaryRepository } from '../../../repository/cloudinary.repo';
import { ImageDataType } from '../../auth/preRegisterFlow/components/AddProfilePic/addProfilePic.ViewModal';
import {
  FlashMessageType,
  ShowFlashMessage,
} from '../../../components/flashBar';
import { UpdateUserDetailsRepository } from '../../../repository/pregisterFlow.repo';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../store/reducers/user.reducer';
import { ROUTES } from '../../../navigation';

export const useVerificationViewModal = (props: AvatarProps) => {
  const { optionData, loggInUserId, verificationOption } =
    props.route?.params.data || 'No optionData received';
  const { user } = useSelector((state: any) => state.userState);
  const userWebsite =
    user.verificationId.licenceWebsite ||
    user.verificationId.studentEmail ||
    user.verificationId.healthCareProfessionalEmail ||
    user.verificationId.userWebsite
      ? user.verificationId.licenceWebsite ||
        user.verificationId.studentEmail ||
        user.verificationId.healthCareProfessionalEmail ||
        user.verificationId.userWebsite
      : '';

  const { navigation } = props;
  const [visibleModal, setVisibleModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [website, setWebsite] = useState(userWebsite ? userWebsite : '');
  const cloudinaryRepository = new CloudinaryRepository();
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();

  const [documentImage, setdocumentImage] = useState<ImageDataType | null>(
    props.source?.uri || undefined,
  );
  const [PhdOptionImage, setPhdOptionImage] = useState<ImageDataType | null>(
    props.source?.uri || undefined,
  );

  const alreadySetVerificationOption = () => {
    let result;
    if (user.verificationId.idType === 'npi') {
      result = 'NPI Number';
    } else if (user.verificationId.idType === 'medicalLicense') {
      result = 'License Number';
    } else if (user.verificationId.isPhd) {
      result = 'Others';
    } else if (user.verificationId.isDoctoralCandidate) {
      result = 'Student';
    } else if (user.verificationId.territory) {
      result = 'HealthCare';
    }
    return result;
  };

  const navigateToVerificationState = () => {
    navigation.navigate(ROUTES.VerificationPending);
  };

  const [previousSetVerificationOption, setPreviousSetVerificationOption] =
    useState(alreadySetVerificationOption());

  useEffect(() => {
    if (previousSetVerificationOption !== verificationOption) {
      setWebsite('');
    }
  }, [previousSetVerificationOption]);

  const dispatch = useDispatch();
  const [validationErrorMessage, setValidationErrorMessage] = useState('');

  const toggleModal = () => setVisibleModal(!visibleModal);

  const clickPicture = async (source: string) => {
    if (source === 'camera') {
      const image: Image = await pickPhotoFromCammera(undefined, true);
      if (image?.cropRect) {
        const resultImage: ImageDataType = {
          path: image?.path,
          mime: image?.mime,
          name: image?.path?.split('/').pop()!,
        };
        setdocumentImage(resultImage);
        props.onChange?.(image);
        openPicModal();
      }

      openPicModal();
    } else if (source === 'library') {
      const image: Image = await pickPhotoFromGallary(undefined, false);
      if (image) {
        const resultImage: ImageDataType = {
          path: image?.path,
          mime: image?.mime,
          name: image?.path?.split('/').pop()!,
        };
        setdocumentImage(resultImage);
        props.onChange?.(image);
      }
      openPicModal();
    }
    toggleModal();
  };
  const uploadPhdOptionPhotos = async () => {
    const image: Image = await pickPhotoFromGallary(null, false);
    if (image) {
      const resultImage: ImageDataType = {
        path: image?.path,
        mime: image?.mime,
        name: image?.path?.split('/').pop()!,
      };
      setPhdOptionImage(resultImage);
      props.onChange?.(image);
    }
    openPhdOptionPicUploadingModal();
  };

  const handleWebsite = (website: string) => {
    setWebsite(website);
  };

  const [visiblePicModal, setVisiblePicModal] = useState(false);
  const closePicModal = () => setVisiblePicModal(false);
  const openPicModal = () => setVisiblePicModal(true);

  const [PhdOptionModal, setVisiblePhdOptionModal] = useState(false);
  const closePhdOptionModalModal = () => setVisiblePhdOptionModal(false);
  const openPhdOptionModal = () => setVisiblePhdOptionModal(true);

  const [PhdOptionPicUploadingModal, setPhdOptionPicUploadingModal] =
    useState(false);
  const closePhdOptionPicUploadingModal = () =>
    setPhdOptionPicUploadingModal(false);
  const openPhdOptionPicUploadingModal = () =>
    setPhdOptionPicUploadingModal(true);

  // ----------------------------------------------------------------
  const [isSelfie, setIsSelfie] = useState(false);

  const [selfie, setSelfie] = useState<ImageDataType | null>(
    props.source?.uri || undefined,
  );

  const clickSelfieImage = async () => {
    const image: Image = await pickPhotoFromCammera(undefined, true);
    if (image?.cropRect) {
      const resultImage: ImageDataType = {
        path: image?.path,
        mime: image?.mime,
        name: image?.path?.split('/').pop()!,
      };
      setSelfie(resultImage);
      props.onChange?.(image);
    }
  };

  type imageObject = {
    photo: ImageDataType;
    caption: string;
  };

  const sumbitVerificationForm = async () => {
    try {
      if (!documentImage?.path && !selfie?.path) {
        return ShowFlashMessage(
          'Warning',
          'Pictures are not selected!',
          FlashMessageType.DANGER,
        );
      }
      if (
        verificationOption === 'Others' &&
        !PhdOptionImage?.path &&
        !website
      ) {
        return setValidationErrorMessage(
          'Message: website or id image either of two is required',
        );
      } else {
        setValidationErrorMessage('');
      }

      const photos: imageObject[] = PhdOptionImage
        ? [
            { photo: documentImage!, caption: 'userIdUpload' },
            { photo: selfie!, caption: 'cameraImage' },
            { photo: PhdOptionImage, caption: 'userIdUpload' },
          ]
        : [
            { photo: documentImage!, caption: 'userIdUpload' },
            { photo: selfie!, caption: 'cameraImage' },
          ];
      const imageUrls: object[] = [];
      for (let i = 0; i < photos.length; i++) {
        const cloudURL = await uploadImageToCloudinary(photos[i].photo);
        if (cloudURL) {
          imageUrls.push({
            url: cloudURL!,
            section: photos[i].caption,
          });
        }
      }
      const verificationData = await updateImagesInDatabase(imageUrls);
      navigateToVerificationState()
    } catch (err) {
    }
  };

  const updateImagesInDatabase = async (photos: object[]) => {
    try {
      const user = await updateUserDetailsRepository.updateUserDetails(
        loggInUserId,
        {
          update: {
            verificationId: {
              idType: optionData.idType,
              state: optionData?.state,
              idNumber:
                optionData?.npiNumber || optionData?.licenseNumber
                  ? optionData?.npiNumber || optionData?.licenseNumber
                  : '',
              isDoctoralCandidate: optionData?.isDoctoralCandidate,
              isPhd: optionData.isPhd,
              licenceWebsite: optionData.licenceWebsite ? website : '',
              studentEmail: optionData.studentEmail ? website : '',
              userWebsite: optionData.userWebsite ? website : '',
              healthCareProfessionalEmail:
                optionData.healthCareProfessionalEmail ? website : '',
              degreeIdentifierType: optionData?.degreeIdentifierType,
              territory: optionData?.teritory,
              degreeIdentifier: optionData?.degreeIdentifier,
              photo: photos,
              submitted: true,
            },
          },
        },
      );
      const formData = {
        user: user,
      };
      dispatch(addUser(formData));
      setLoading(false);
      //navigateToHeightScreen(loggInUserId);
      return user;
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

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
        const response = await cloudinaryRepository.uploadImage({
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
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    verificationOption,
    clickSelfieImage,
    visibleModal,
    setVisibleModal,
    documentImage,
    setdocumentImage,
    clickPicture,
    selfie,
    setSelfie,
    closePicModal,
    openPicModal,
    toggleModal,
    visiblePicModal,
    setVisiblePicModal,
    isSelfie,
    handleWebsite,
    setIsSelfie,
    sumbitVerificationForm,
    closePhdOptionModalModal,
    openPhdOptionModal,
    PhdOptionModal,
    closePhdOptionPicUploadingModal,
    openPhdOptionPicUploadingModal,
    PhdOptionPicUploadingModal,
    uploadPhdOptionPhotos,
    PhdOptionImage,
    validationErrorMessage,
    website,
  };
};
