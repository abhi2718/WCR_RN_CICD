import React, { useState } from 'react';
import {
  Button,
  Image,
  ScrollView,
  Text,
  ImageProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Column,
  Row,
  ScreenContainer,
  dimensions,
} from '../../../../../components/tools';
import { addPicture } from './AddProfilePicStyle';
import { PrimaryButton } from '../../../../../components/button';
import { HeaderBar } from '../../../../../components/header';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { pickPhotoFromGallary } from '../../../../../utils/uploads';

interface AvatarProps extends ImageProps {
  onChange?: (image: ImageOrVideo) => void;
}

const AddProfilePic = (props: AvatarProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const [uri, setUri] = React.useState(props.source?.uri || undefined);

  const pickProfilePicture = async () => {
    const image = await pickPhotoFromGallary(null, true);
    setUri(image.path);
    props.onChange?.(image);
  };

  const [uris, setUris] = useState(Array(2).fill(null));

  const pickPhoto = async (index) => {
    const image = await pickPhotoFromGallary(null, false);
    const updatedUris = [...uris];
    updatedUris[index] = image.path;
    setUris(updatedUris);
    props.onChange?.(updatedUris);
  };

  const [urisTwo, seturisTwo] = useState(Array(3).fill(null));

  const pickPhotoTwo = async (index) => {
    const image = await pickPhotoFromGallary(null, false);
    const updatedUris = [...urisTwo];
    updatedUris[index] = image.path;
    seturisTwo(updatedUris);
    props.onChange?.(updatedUris);
  };

  return (
    <ScreenContainer>
      <View style={addPicture.container}>
        <View>
          <HeaderBar
            info={() => console.log('Info clicked')}
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
          />
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
                  <TouchableOpacity
                    key={index}
                    onPress={() => pickPhoto(index)}
                  >
                    {uri ? (
                      <Image
                        style={addPicture.photo}
                        {...props}
                        source={{ uri }}
                      />
                    ) : (
                      <View style={addPicture.imageView}>
                        <Image
                          style={addPicture.imageIcon}
                          source={require('../../../../../assets/images/icons/addImg.png')}
                        />
                      </View>
                    )}
                  </TouchableOpacity>
                ))}
              </Column>
            </Row>

            <Row justifyContent="space-between" style={addPicture.row}>
              {urisTwo.map((uri, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => pickPhotoTwo(index)}
                >
                  {uri ? (
                    <Image
                      style={addPicture.photo}
                      {...props}
                      source={{ uri }}
                    />
                  ) : (
                    <View style={addPicture.imageView}>
                      <Image
                        style={addPicture.imageIcon}
                        source={require('../../../../../assets/images/icons/addImg.png')}
                      />
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </Row>
          </View>
        </View>
        <PrimaryButton title="Next" />
      </View>
    </ScreenContainer>
  );
};

export default AddProfilePic;
