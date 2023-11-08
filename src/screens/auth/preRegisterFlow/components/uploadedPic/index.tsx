import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import {
  ImageContainer,
  Row,
  ScreenContainer,
} from '../../../../../components/tools';
import { uploadedPic } from './uploadedPicStyle';
import { sizes } from '../../../../../infrastructure/theme/sizes';
import { PrimaryButton } from '../../../../../components/button';

const UploadedPic = () => {
  return (
    <ScreenContainer>
      <View style={uploadedPic.container}>
        <View>
          <Row justifyContent="space-between" alignItems="center">
            <Image
              style={uploadedPic.arrow}
              source={require('../../../../../assets/images/icons/arrow.png')}
            />
            <Image
              style={uploadedPic.logo}
              source={require('../../../../../assets/images/logo.png')}
            />
            <View />
          </Row>
          <Text style={uploadedPic.subHeader}>Profile photo Uploaded</Text>
          <View style={uploadedPic.imageContainer}>
            <Image
              style={uploadedPic.profilePic}
              source={{
                uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=300',
              }}
            />
            <Image
              style={uploadedPic.editIcon}
              source={require('../../../../../assets/images/icons/editIcon.png')}
            />
          </View>
          <View style={uploadedPic.userDetails}>
            <Text style={uploadedPic.name}>Theresa William</Text>
            <Text style={uploadedPic.degree}>Neuroradiology</Text>
            <Text style={uploadedPic.loaction}>
              Los Angeles, California (CA)
            </Text>
          </View>
        </View>
        <PrimaryButton title="Next" />
      </View>
    </ScreenContainer>
  );
};

export default UploadedPic;
