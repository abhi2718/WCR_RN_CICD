import ImagePicker from 'react-native-image-crop-picker';
export const defaultPhotoDimension = {
  width: 300,
  height: 400,
}
export const pickPhotoFromGallary = async (
  options = defaultPhotoDimension,
  cropping = false,
  cropperCircleOverlay = true,
) => {
  return await ImagePicker.openPicker({
    ...options,
    cropping,
    cropperCircleOverlay,
  });
};

export const pickPhotoFromCammera = async (
  options = {
    width: 300,
    height: 400,
  },
  cropping = false,
  cropperCircleOverlay = false,
) => {
  return await ImagePicker.openCamera({
    ...options,
    cropping,
    cropperCircleOverlay,
  });
};

export const pickPhotoFromUrl = async (
  options = {
    width: 300,
    height: 400,
    maxFiles: 1,
    showCropFrame: true,
    cropperCircleOverlay:true
  },
  path: string,
) => {
  return await ImagePicker.openCropper({
    mediaType: 'photo',
    path: path,
    ...options,
  });
};
