import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { Column, Row, ScreenContainer } from '../../../../../components/tools';
import { addPicture } from './AddProfilePicStyle';
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
          <Text style={addPicture.subHeader}>Show off your best side </Text>
          <Text style={addPicture.text}>(Add at least 2 photos)</Text>
          <View>
            <Row justifyContent="space-between" style={addPicture.row}>
              <View style={addPicture.imageViewProfile}>
                <Image
                  style={addPicture.imageIcon}
                  source={require('../../../../../assets/images/icons/addImg.png')}
                />
              </View>
              <Column style={addPicture.columnOne}>
                <View style={addPicture.imageView}>
                  <Image
                    style={addPicture.imageIcon}
                    source={require('../../../../../assets/images/icons/addImg.png')}
                  />
                </View>
                <View style={addPicture.imageView}>
                  <Image
                    style={addPicture.imageIcon}
                    source={require('../../../../../assets/images/icons/addImg.png')}
                  />
                </View>
              </Column>
            </Row>
            <Row justifyContent="space-between" style={addPicture.row}>
              <View style={addPicture.imageView}>
                <Image
                  style={addPicture.imageIcon}
                  source={require('../../../../../assets/images/icons/addImg.png')}
                />
              </View>
              <View style={addPicture.imageView}>
                <Image
                  style={addPicture.imageIcon}
                  source={require('../../../../../assets/images/icons/addImg.png')}
                />
              </View>
              <View style={addPicture.imageView}>
                <Image
                  style={addPicture.imageIcon}
                  source={require('../../../../../assets/images/icons/addImg.png')}
                />
              </View>
            </Row>
          </View>
        </View>
        <PrimaryButton title="Next" />
      </View>
    </ScreenContainer>
  );
};

export default AddProfilePic;
