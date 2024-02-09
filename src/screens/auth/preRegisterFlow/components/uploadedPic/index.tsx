import React from 'react';
import { Image, Text, View } from 'react-native';
import { ScreenContainer } from '../../../../../components/tools';
import { uploadedPic } from './uploadedPicStyle';
import { PrimaryButton } from '../../../../../components/button';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { useUploadPicViewModal } from './uploadPic.viewModal';
import { HeaderBar } from '../../../../../components/header';

const UploadedPic = (props: ScreenParams) => {
  const { openModal } = useUploadPicViewModal(props);
  return (
    <ScreenContainer>
      <View style={uploadedPic.container}>
        <View>
          <HeaderBar info={openModal}></HeaderBar>
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
