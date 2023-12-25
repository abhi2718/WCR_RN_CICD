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
import { colors } from '../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../infrastructure/theme/fonts';

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
            <Row style={{ paddingTop: 0, paddingBottom: 10 }}>
              <Pressable onPress={toggleModal}>
                <Image
                  style={{ width: 21, height: 21 }}
                  source={require('../../assets/images/icons/back-arrow.png')}
                />
              </Pressable>
            </Row>
            <View style={{ backgroundColor: '#fff' }}>
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
                        <Text style={styles.aboutText}>
                          {user.designation.userDegree}
                        </Text>
                        <Text style={styles.aboutText}>
                          {user.designation.title}
                        </Text>
                        <Text style={styles.aboutText}>
                          {user.designation.title}
                        </Text>
                        <Text style={styles.aboutText}>{user.state}</Text>
                      </View>

                      <View style={styles.userInfo}>
                        <Text style={styles.gallery}>Vital Signs</Text>
                      </View>
                    </View>
                    {user?.photos.map(({ url, _id }) => {
                      return (
                        <View style={{ padding: 10 }}>
                          <FastImage
                            key={_id}
                            source={{ uri: url }}
                            style={{
                              width: 200,
                              height: 200,
                              borderRadius: 30,
                            }}
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
    bottom: 10,
    left: 10,
    fontSize: fontSizes.h6,
    color: colors.ui.white,
    fontWeight: fontWeights.bold,
    fontFamily: fonts.body,
  },
  gradient: {
    height: '100%',
    width: '100%',
  },
  aboutText: {
    color: colors.ui.text,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.text,
  },
  userInfo: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  gallery: {
    fontSize: 22,
    fontWeight: '600',
  },
});
