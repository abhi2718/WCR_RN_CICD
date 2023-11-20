import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';

export const pickPhotoFromGallary = async (
  options = {
    width: 300,
    height: 400,
  },
  cropping = false,
) => {
  return await ImagePicker.openPicker({ ...options, cropping });
};
