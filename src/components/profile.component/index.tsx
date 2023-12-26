import React from 'react';
import {
  View,
  Modal,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { profileProps } from '../../types/components/profile.type';
import { FullLoader, Row, Spacer } from '../tools';
import { useViewModal } from './useViewModal';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../infrastructure/theme';

export const ProfileModal = (props: profileProps) => {
  const {
    showModal,
    toggleModal,
    loading,
    user,
    handleShare,
    handleBlockUser,
    addFavourite,
    handleLike,
    handleDisLike,
    showLike,
    showDisLike,
    showSave,
    showBlock,
  } = useViewModal(props);

  return (
    <Modal visible={showModal}>
      <SafeAreaView style={{ flex: 1 }}>
        {loading ? (
          <View style={{ flex: 1 }}>
            <FullLoader />
          </View>
        ) : (
          <View>
            <Spacer position="top" size={10} />
            <Row style={styles.backHeaderPadding}>
              <Pressable onPress={toggleModal}>
                <Image
                  style={styles.backArrowSize}
                  source={require('../../assets/images/icons/back-arrow.png')}
                />
              </Pressable>
            </Row>
            <View style={styles.sectionWhite}>
              <View>
                {user && (
                  <ScrollView bounces={false}>
                    <View>
                      <Row style={styles.relative}>
                        <FastImage
                          style={styles.profileImage}
                          source={{ uri: user.profilePicture.url }}
                        >
                          <LinearGradient
                            colors={[
                              'rgba(0, 0, 0, 0.00)',
                              ' rgba(0, 0, 0, 0.9)',
                            ]}
                            style={styles.gradient}
                          />
                          <Text style={styles.userNameText}>
                            {user.first} ({user.genderPronoun})
                          </Text>
                        </FastImage>
                      </Row>
                      <View style={styles.userInfo}>
                        <Row alignItems="center">
                          <Image
                            style={styles.imageIcon}
                            source={require('../../assets/images/icons/degree.png')}
                          />
                          <Text style={styles.aboutText}>
                            {user.designation.userDegree}
                          </Text>
                        </Row>
                        <Row alignItems="center">
                          <Image
                            style={styles.imageIcon}
                            source={require('../../assets/images/icons/degTitle.png')}
                          />
                          <Text style={styles.aboutText}>
                            {user.designation.title}
                          </Text>
                        </Row>
                        <Row alignItems="center">
                          <Image
                            style={styles.imageIcon}
                            source={require('../../assets/images/icons/location.png')}
                          />
                          <Text style={styles.aboutText}>{user.state}</Text>
                        </Row>
                      </View>

                      <View style={styles.userInfo}>
                        <Text style={styles.vitalSigns}>Vital Signs</Text>
                      </View>
                    </View>
                    {user?.photos.map(({ url, _id }) => {
                      return (
                        <View style={styles.padding10}>
                          <FastImage
                            key={_id}
                            source={{ uri: url }}
                            style={styles.galleryImage}
                            resizeMode={FastImage.resizeMode.cover}
                          />
                        </View>
                      );
                    })}
                    <Pressable onPress={handleShare}>
                      <Text>Share</Text>
                    </Pressable>
                    <Row justifyContent="space-between">
                      {showLike && (
                        <Pressable onPress={handleLike}>
                          <Text>Like</Text>
                        </Pressable>
                      )}
                      {showSave && (
                        <Pressable onPress={addFavourite}>
                          <Text>Save</Text>
                        </Pressable>
                      )}
                      {showDisLike && (
                        <Pressable onPress={handleDisLike}>
                          <Text>DisLike</Text>
                        </Pressable>
                      )}
                    </Row>
                    {showBlock && (
                      <Row>
                        <Pressable onPress={handleBlockUser}>
                          <Text>Block/Report</Text>
                        </Pressable>
                      </Row>
                    )}
                    <Spacer position="bottom" size={60} />
                  </ScrollView>
                )}
              </View>
            </View>
          </View>
        )}
      </SafeAreaView>
    </Modal>
  );
};

export const styles = StyleSheet.create({
  profileImage: {
    width: '100%',
    height: 600,
  },
  relative: {
    position: 'relative',
  },
  userNameText: {
    position: 'absolute',
    bottom: theme.units.sizes[20],
    left: theme.units.sizes[12],
    fontSize: theme.fontSizes.h6,
    color: theme.colors.ui.white,
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fontFamily.body,
  },
  gradient: {
    height: '100%',
    width: '100%',
  },
  aboutText: {
    color: theme.colors.ui.text,
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.fontSizes.text,
    paddingLeft: 6,
  },
  userInfo: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  gallery: {
    fontSize: 22,
    fontWeight: theme.fontWeights.semiBold,
  },
  galleryImage: {
    width: theme.units.sizes[200],
    height: theme.units.sizes[200],
    borderRadius: theme.units.sizes[32],
  },
  backHeaderPadding: {
    paddingTop: theme.units.sizes[0],
    paddingBottom: theme.units.sizes[10],
    paddingLeft: theme.units.sizes[10],
  },
  backArrowSize: {
    width: theme.units.sizes[21],
    height: theme.units.sizes[21],
  },
  sectionWhite: {
    backgroundColor: theme.colors.ui.white,
  },
  padding10: {
    padding: theme.units.sizes[10],
  },
  vitalSigns: {
    fontSize: theme.fontSizes.text,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.ui.text,
  },
  imageIcon: {
    width: theme.units.sizes[19],
    height: theme.units.sizes[19],
    resizeMode: 'contain',
  },
});
