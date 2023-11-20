import React, { useState } from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { Column, Row, ScreenContainer } from '../../../../../components/tools';
import { addPicture } from './AddProfilePicStyle';
import { PrimaryButton } from '../../../../../components/button';
import { HeaderBar } from '../../../../../components/header';

const AddProfilePic = () => {
  const [isModalVisible, setModalVisible] = useState(false);

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
