import React from 'react';
import { View, Text, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import Image from 'react-native-fast-image';
import { Column, Row, Spacer } from '../../../components/tools';
import { useViewModal } from './profileViewModal';
import * as Progress from 'react-native-progress';
import { styles } from './styles';

export const ProfileScreen = () => {
  const { user,goToPreview } = useViewModal();
  return (
    <View style={styles.container}>
      <View></View>
      <Spacer position="bottom" size={20}>
        <Column>
          <Row>
            <FastImage
              source={{
                uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
              }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
              }}
            />
            <Column>
              <Text>{user.fullName}</Text>
              <Progress.Bar progress={0.3} width={200} />
              <Text>34% Profile Complete</Text>
            </Column>
          </Row>
        </Column>
      </Spacer>
      <Pressable onPress={goToPreview}>
        <Row alignItems="center">
          <Image
            style={styles.iconStyle}
            source={require('../../../assets/images/Pewview.png')}
          />
          <Text>Preview</Text>
        </Row>
      </Pressable>
      <Spacer position={'top'} size={20} />
      <Pressable>
        <Row alignItems="center">
          <Image
            style={styles.iconStyle}
            source={require('../../../assets/images/EditProfile.png')}
          />
          <Text>Edit profile</Text>
        </Row>
      </Pressable>
      <Spacer position={'top'} size={20} />
      <Pressable>
        <Row alignItems="center">
          <Image
            style={styles.iconStyle}
            source={require('../../../assets/images/Preferences.png')}
          />
          <Text>Preferences</Text>
        </Row>
      </Pressable>
      <Spacer position={'top'} size={20} />
      <Pressable>
        <Row alignItems="center">
          <Image
            style={styles.iconStyle}
            source={require('../../../assets/images/Setting.png')}
          />
          <Text>Setting</Text>
        </Row>
      </Pressable>
      <Spacer position={'top'} size={20} />
      <Pressable>
        <Row alignItems="center">
          <Image
            style={styles.iconStyle}
            source={require('../../../assets/images/logout.png')}
          />
          <Text>Logout</Text>
        </Row>
      </Pressable>
    </View>
  );
};
