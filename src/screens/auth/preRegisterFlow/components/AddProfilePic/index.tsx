import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import {
  ImageContainer,
  Row,
  ScreenContainer,
} from '../../../../../components/tools';
import { addPicture } from './AddProfilePicStyle';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { PrimaryButton } from '../../../../../components/button';

const AddProfilePic = () => {
  return (
    <ScreenContainer>
      <View style={addPicture.container}>
        <View>
          <Row justifyContent="space-between" alignItems="center">
            <Image
              style={addPicture.arrow}
              source={require('../../../../../assets/images/icons/arrow.png')}
            />
            <Image
              style={addPicture.logo}
              source={require('../../../../../assets/images/logo.png')}
            />
            <View />
          </Row>
          <Text style={addPicture.subHeader}>Time to shine!</Text>
          <Text style={addPicture.text}>Add your best photo</Text>
          <Row
            justifyContent="center"
            alignItems="center"
            style={addPicture.imageContainer}
          >
            <ImageContainer
              source={require('../../../../../assets/images/icons/camera.png')}
            />
          </Row>
        </View>
        <PrimaryButton title="Next" />
      </View>
    </ScreenContainer>
  );
};

export default AddProfilePic;
