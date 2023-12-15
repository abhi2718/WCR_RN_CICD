import React from 'react';
import { View, Text, Pressable, ActivityIndicator } from 'react-native';
import Image from 'react-native-fast-image';
import {
  Column,
  Row,
  ScreenContainer,
  ScreenWrapper,
  Spacer,
} from '../../../components/tools';
import { useViewModal } from './profileViewModal';
import * as Progress from 'react-native-progress';
import { styles } from './styles';
import { AlertScreen } from '../../../components/alert';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ProfileScreen = ({}) => {
  const {
    user,
    goToPreview,
    goToSetting,
    goToPreferences,
    goToEditProfile,
    showLogOutModal,
    setLogOutModal,
    _logOut,
    loading,
  } = useViewModal();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Spacer position="bottom" size={20}>
          <Column>
            <Row>
              <Image
                source={{
                  uri: user?.profilePicture?.url,
                }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                }}
              />
              <Column>
                <Text>{user.fullName}</Text>
                {/* <Progress.Bar progress={0.3} width={200} />
              <Text>34% Profile Complete</Text> */}
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
        <Pressable onPress={goToEditProfile}>
          <Row alignItems="center">
            <Image
              style={styles.iconStyle}
              source={require('../../../assets/images/EditProfile.png')}
            />
            <Text>Edit profile</Text>
          </Row>
        </Pressable>
        <Spacer position={'top'} size={20} />
        <Pressable onPress={goToPreferences}>
          <Row alignItems="center">
            <Image
              style={styles.iconStyle}
              source={require('../../../assets/images/Preferences.png')}
            />
            <Text>Preferences</Text>
          </Row>
        </Pressable>
        <Spacer position={'top'} size={20} />
        <Pressable onPress={goToSetting}>
          <Row alignItems="center">
            <Image
              style={styles.iconStyle}
              source={require('../../../assets/images/Setting.png')}
            />
            <Text>Setting</Text>
          </Row>
        </Pressable>
        <Spacer position={'top'} size={20} />
        <Pressable onPress={loading ? () => {} : () => setLogOutModal(true)}>
          <Row alignItems="center">
            <Image
              style={styles.iconStyle}
              source={require('../../../assets/images/logout.png')}
            />
            {loading ? (
              <Row>
                <Text>Logout</Text>
                <ActivityIndicator color="blue" animating={loading} />
              </Row>
            ) : (
              <Text>Logout</Text>
            )}
          </Row>
        </Pressable>
        <AlertScreen
          showModal={showLogOutModal}
          setShowModal={setLogOutModal}
          title="Logout?"
          description="Are you sure want to log out?"
          onPress={_logOut}
        />
      </View>
    </ScreenWrapper>
  );
};
