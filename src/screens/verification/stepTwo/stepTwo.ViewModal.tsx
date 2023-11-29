import { useState } from 'react';
import { pickPhotoFromCammera, pickPhotoFromGallary } from '../../../utils/uploads';
import { AvatarProps } from '../../auth/preRegisterFlow/components/AddProfilePic';

export const useVerificationViewModal = (props:AvatarProps) => {
    const verificationOption = props.route?.params?.data || 'No data received';

    const [visibleModal, setVisibleModal] = useState(false);
    const toggleModal = () => setVisibleModal(!visibleModal);
  
    const [documentImage, setdocumentImage] = useState(
      props.source?.uri || undefined,
    );
    const clickPicture = async (source) => {
      if (source === 'camera') {
        const image = await pickPhotoFromCammera(null, true);
        setdocumentImage(image.path);
        props.onChange?.(image);
  
        openPicModal();
      } else if (source === 'library') {
        const image = await pickPhotoFromGallary(null, false);
        setdocumentImage(image.path);
        props.onChange?.(image);
        openPicModal();
      }
      toggleModal();
    };
  
    const [visiblePicModal, setVisiblePicModal] = useState(false);
    const closePicModal = () => setVisiblePicModal(false);
    const openPicModal = () => setVisiblePicModal(true);
  
    // ----------------------------------------------------------------
     const [isSelfie, setIsSelfie] = useState(false);
  
    const [selfie, setSelfie] = useState(props.source?.uri || undefined);
  
    const clickSelfieImage = async () => {
      const image = await pickPhotoFromCammera(null, true);
      setSelfie(image.path);
      props.onChange?.(image);
    };

    return({
        verificationOption,clickSelfieImage,visibleModal, setVisibleModal,documentImage, setdocumentImage,clickPicture,selfie, setSelfie ,closePicModal,openPicModal,toggleModal,visiblePicModal, setVisiblePicModal,isSelfie, setIsSelfie
    })
}
