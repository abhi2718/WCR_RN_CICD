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
import { sizes } from '../../../infrastructure/theme/sizes';
import { colors } from '../../../infrastructure/theme/colors';
import  YourComponent from '../../subscribe/components';
import { HeaderDeck } from '../../../components/header';


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

  if (1) {
    return (
      <View style={{ flex: 1, marginTop: 200 }}>
        <YourComponent />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <HeaderDeck isSearchIcon={false} isPrefrence={false} />
      <View>
        <Spacer position="bottom" size={20}>
          <Column style={styles.nameContainer}>
            <Row gap={20} alignItems="center">
              <Image
                source={{
                  uri: user?.profilePicture?.url,
                }}
                style={styles.profileImg}
              />
              <Column gap={5}>
                <Text style={styles.userName}>
                  {user.profile.displayName ?? user.profile.name?.first}
                </Text>
                <Text style={styles.address}>{user?.address?.city},</Text>
                <Text style={styles.address}>
                  {user?.address?.state}, {user?.address?.country}{' '}
                </Text>
              </Column>
            </Row>
          </Column>
        </Spacer>
        <Pressable onPress={goToPreview}>
          <Row justifyContent="space-between" alignItems="center">
            <Row gap={sizes[2]} alignItems="center">
              <Image
                style={styles.iconStyle}
                source={require('../../../assets/images/Pewview.png')}
              />
              <Text style={styles.text}>Preview</Text>
            </Row>
            <Row alignItems="center">
              <Image
                source={require('../../../assets/images/icons/buttonRightArrow.png')}
                style={styles.iconArrowStyle}
              />
            </Row>
          </Row>
        </Pressable>
        <Spacer position={'top'} size={30} />
        <Pressable onPress={goToEditProfile}>
          <Row justifyContent="space-between" alignItems="center">
            <Row gap={sizes[2]} alignItems="center">
              <Image
                style={styles.iconStyle}
                source={require('../../../assets/images/EditProfile.png')}
              />
              <Text style={styles.text}>Edit profile</Text>
            </Row>
            <Row alignItems="center">
              <Image
                source={require('../../../assets/images/icons/buttonRightArrow.png')}
                style={styles.iconArrowStyle}
              />
            </Row>
          </Row>
        </Pressable>
        <Spacer position={'top'} size={30} />
        <Pressable onPress={goToPreferences}>
          <Row justifyContent="space-between" alignItems="center">
            <Row gap={sizes[2]} alignItems="center">
              <Image
                style={styles.iconStyle}
                source={require('../../../assets/images/Preferences.png')}
              />
              <Text style={styles.text}>Preferences</Text>
            </Row>
            <Row alignItems="center">
              <Image
                source={require('../../../assets/images/icons/buttonRightArrow.png')}
                style={styles.iconArrowStyle}
              />
            </Row>
          </Row>
        </Pressable>
        <Spacer position={'top'} size={30} />
        <Pressable onPress={goToSetting}>
          <Row justifyContent="space-between" alignItems="center">
            <Row gap={sizes[2]} alignItems="center">
              <Image
                style={styles.iconStyle}
                source={require('../../../assets/images/Setting.png')}
              />
              <Text style={styles.text}>Settings</Text>
            </Row>
            <Row alignItems="center">
              <Image
                source={require('../../../assets/images/icons/buttonRightArrow.png')}
                style={styles.iconArrowStyle}
              />
            </Row>
          </Row>
        </Pressable>
        <Spacer position={'top'} size={30} />
        <Pressable onPress={() => setLogOutModal(true)}>
          <Row gap={sizes[2]} alignItems="center">
            <Image
              style={styles.iconStyle}
              source={require('../../../assets/images/logout.png')}
            />
            <Text style={styles.logoutText}>Logout</Text>
            {loading && <ActivityIndicator color="red" />}
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
    </SafeAreaView>
  );
};
