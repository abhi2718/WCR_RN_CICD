import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';

export const pickPhotoFromGallary = async (
  options = {
    width: 300,
    height: 400,
  },
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
