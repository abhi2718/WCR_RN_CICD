import { useEffect, useRef, useState } from 'react';
import {
  defaultPhotoDimension,
  pickPhotoFromCammera,
  pickPhotoFromGallary,
} from '../../../utils/uploads';
import { Image } from 'react-native-image-crop-picker';
import { CloudinaryRepository } from '../../../repository/cloudinary.repo';
import { UpdateUserDetailsRepository } from '../../../repository/pregisterFlow.repo';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../store/reducers/user.reducer';
import { ROUTES } from '../../../navigation';
import { useNavigateToScreen } from '../../../utils/common.functions';
import { AvatarProps } from '../../../types/screen.type/preRegister.type';

export const useVerificationViewModalStepTwo = (props: AvatarProps) => {
  const { optionData, verificationOption, PhdImage } =
    props.route?.params?.data || 'No optionData received';
  const { user } = useSelector((state: any) => state.userState);
  const [error, setError] = useState<boolean>(false);
  const token = useRef(user?.token ? user?.token : null).current;
  const userWebsite =
    user.verificationId?.licenceWebsite ||
    user.verificationId?.studentEmail ||
    user.verificationId?.healthCareProfessionalEmail ||
    user.verificationId?.userWebsite
      ? user.verificationId?.licenceWebsite ||
        user.verificationId?.studentEmail ||
        user.verificationId?.healthCareProfessionalEmail ||
        user.verificationId?.userWebsite
      : '';

  const [visibleModal, setVisibleModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [website, setWebsite] = useState(userWebsite ? userWebsite : '');
  const cloudinaryRepository = new CloudinaryRepository();
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const savedDocImage = user.verificationId.photo.filter(
    (image: any) => image.section === 'userIdUpload',
  );
  const savedSelfieImage = user.verificationId.photo.filter(
    (image: any) => image.section === 'cameraImage',
  );
  const getSavedImage = (savedImage: any) => {
    if (savedImage?.length > 0) {
      const resultImage = {
        path: savedImage[0]?.url,
        mime: 'image/jpeg',
        name: savedImage[0]?.url?.split('/').pop()!,
      };
      return resultImage;
    } else {
      return undefined;
    }
  };
  const [documentImage, setdocumentImage] = useState<any>(
    props.source?.uri || getSavedImage(savedDocImage),
  );
  const [PhdOptionImage, setPhdOptionImage] = useState<any>(
    props.source?.uri || (PhdImage ?? undefined),
  );

  const isShowPreview = (): boolean => {
    return (
      (documentImage != undefined || savedDocImage.length > 0) &&
      (selfie != undefined || savedSelfieImage.length > 0)
    );
  };

  const alreadySetVerificationOption = () => {
    let result;
    if (user.verificationId?.idType === 'npi') {
      result = 'NPI Number';
    } else if (user.verificationId?.idType === 'medicalLicense') {
      result = 'License Number';
    } else if (user.verificationId?.isPhd) {
      result = 'Others';
    } else if (user.verificationId?.isDoctoralCandidate) {
      result = 'Student';
    } else if (user.verificationId?.territory) {
      result = 'HealthCare';
    }
    return result;
  };
  const { resetState } = useNavigateToScreen();
  const navigateToVerificationState = () => {
    resetState(ROUTES.VerificationPending);
  };
  const navigateToVerificationImagePreview = () => {
    closePicModal();
    setIsVerificationImagePreviewVisible(true);
  };

  const [previousSetVerificationOption, setPreviousSetVerificationOption] =
    useState(alreadySetVerificationOption());

  useEffect(() => {
    if (previousSetVerificationOption !== verificationOption) {
      setWebsite('');
    }
  }, [previousSetVerificationOption]);
  const dispatch = useDispatch();
  const toggleModal = () => setVisibleModal(!visibleModal);
  const clickPicture = async (source: string) => {
    toggleModal();

    if (source === 'camera') {
      const image: Image = await pickPhotoFromCammera(undefined, true);
      if (image?.cropRect) {
        const resultImage = {
          path: image?.path,
          mime: image?.mime,
          name: image?.path?.split('/').pop()!,
        };
        setdocumentImage(resultImage);
        props.onChange?.(image);
        if (!isSelfie) {
          openPicModal();
        }
        if (selfie) {
          setError((oldState)=>{
            return false
          });
        }
      }
      if (selfie) {
        setError(false);
      }
      if (!isSelfie) {
        openPicModal();
      }
    } else if (source === 'library') {
      const image: Image = await pickPhotoFromGallary(
        defaultPhotoDimension,
        false,
      );
      if (image) {
        const resultImage = {
          path: image?.path,
          mime: image?.mime,
          name: image?.path?.split('/').pop()!,
        };
        props.onChange?.(image);

        setdocumentImage(resultImage);
        if (selfie) {
          setError(false);
        }
        if (!isSelfie) {
          openPicModal();
        }
      }
      if (selfie) {
        setError(false);
      }
      if (!isSelfie) {
        openPicModal();
      }
    }
  };
  const uploadPhdOptionPhotos = async (source: string) => {
    if (source === 'camera') {
      const image: Image = await pickPhotoFromCammera(undefined, true);
      if (image?.cropRect) {
        const resultImage = {
          path: image?.path,
          mime: image?.mime,
          name: image?.path?.split('/').pop()!,
        };
        setPhdOptionImage(resultImage);
        props.onChange?.(image);
        setIsSelfie(false);
      }
    } else if (source === 'library') {
      const image: Image = await pickPhotoFromGallary(
        defaultPhotoDimension,
        false,
      );
      if (image) {
        const resultImage = {
          path: image?.path,
          mime: image?.mime,
          name: image?.path?.split('/').pop()!,
        };
        setPhdOptionImage(resultImage);
        props.onChange?.(image);
        setIsSelfie(false);
      }
    }
    toggleModal();
    openPhdOptionPicUploadingModal();
  };

  const handleWebsite = (website: string) => {
    setWebsite(website);
  };
  const [visiblePicModal, setVisiblePicModal] = useState(false);
  const closePicModal = () => setVisiblePicModal(false);
  const openPicModal = () => setVisiblePicModal(true);
  const [PhdOptionPicUploadingModal, setPhdOptionPicUploadingModal] =
    useState(false);
  const closePhdOptionPicUploadingModal = () =>
    setPhdOptionPicUploadingModal(false);
  const openPhdOptionPicUploadingModal = () =>
    setPhdOptionPicUploadingModal(true);
  const [isSelfie, setIsSelfie] = useState(false);
  const [selfie, setSelfie] = useState<any>(
    props.source?.uri || getSavedImage(savedSelfieImage),
  );
  const clickSelfieImage = async () => {
    const image: Image = await pickPhotoFromCammera(undefined, true);
    if (image?.cropRect) {
      const resultImage = {
        path: image?.path,
        mime: image?.mime,
        name: image?.path?.split('/').pop()!,
      };
      setSelfie(resultImage);
      if (documentImage) {
        setError(false);
      }
      props.onChange?.(image);
    }
  };

  const removeSelfie = () => {
    setSelfie(null);
    closePicModal();
    if (documentImage) {
      setIsSelfie(false);
    }
  };
  const removeDocument = () => {
    setdocumentImage(null);
    setIsSelfie(false);
    closePicModal();
  };

  type imageObject = {
    photo: any;
    caption: string;
  };

  const sumbitVerificationForm = async () => {
    try {
      if (!documentImage?.path) {
        return setError(true);
      }
      if (!selfie?.path) {
        return setError(true);
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
      closePicModal();
      closePhdOptionPicUploadingModal();
      onCloseVerificationImagePreview();
      navigateToVerificationState();
    } catch (err) {}
  };

  const updateImagesInDatabase = async (photos: object[]) => {
    try {
      const userData = await updateUserDetailsRepository.updateUserDetails(
        user._id,
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
              licenceWebsite: optionData.licenceWebsite
                ? optionData.licenceWebsite
                : '',
              studentEmail: optionData.studentEmail
                ? optionData.studentEmail
                : '',
              userWebsite: optionData.userWebsite ? optionData.userWebsite : '',
              healthCareProfessionalEmail:
                optionData.healthCareProfessionalEmail
                  ? optionData.healthCareProfessionalEmail
                  : '',
              degreeIdentifierType: optionData?.degreeIdentifierType,
              territory: optionData?.teritory,
              degreeIdentifier: optionData?.degreeIdentifier,
              photo: photos,
              submitted: true,
            },
            verification: {
              status: 'Pending',
            },
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
      return user;
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const uploadImageToCloudinary = async (
    imageData: any,
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

  const [isVerificationInfoModalVisible, setVerificvationInfoModalVisible] =
    useState(false);

  const closeModal = () => {
    setVerificvationInfoModalVisible(false);
  };

  const [isStudentInfoModalVisible, setStudentInfoModalVisible] =
    useState(false);

  const [
    isVerificationImagePreviewVisible,
    setIsVerificationImagePreviewVisible,
  ] = useState(false);

  const closeStudentInfoModal = () => {
    setStudentInfoModalVisible(false);
  };
  const openStudentInfoModal = () => {
    setStudentInfoModalVisible(true);
  };

  const openInfoModal = () => {
    setStudentInfoModalVisible(true);
  };
  const onCloseVerificationImagePreview = () => {
    setIsVerificationImagePreviewVisible(false);
  };

  const openModal = () => {
    if (verificationOption === 'Student') {
      setStudentInfoModalVisible(true);
    } else {
      setVerificvationInfoModalVisible(true);
    }
  };

  return {
    loading,
    removeDocument,
    removeSelfie,
    onCloseVerificationImagePreview,
    isVerificationImagePreviewVisible,
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
    navigateToVerificationImagePreview,
    openPicModal,
    toggleModal,
    visiblePicModal,
    setVisiblePicModal,
    isSelfie,
    handleWebsite,
    setIsSelfie,
    sumbitVerificationForm,
    closePhdOptionPicUploadingModal,
    openPhdOptionPicUploadingModal,
    PhdOptionPicUploadingModal,
    uploadPhdOptionPhotos,
    PhdOptionImage,
    website,
    isVerificationInfoModalVisible,
    openInfoModal,
    closeModal,
    openModal,
    closeStudentInfoModal,
    openStudentInfoModal,
    isStudentInfoModalVisible,
    isShowPreview,
    error,
  };
};
