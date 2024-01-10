import React, { useState } from 'react';
import { Modal, Pressable, Text, View, StyleSheet, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ProfileModal } from '../../../../components/profile.component';
import { Column, Row, Spacer, dimensions } from '../../../../components/tools';
import { ProfileViewProps } from '../../../../types/screen.type/like.type';
import { theme } from '../../../../infrastructure/theme';
import LinearGradient from 'react-native-linear-gradient';
import { calculateAge } from '../../../../utils/common.functions';

export const ProfileView = (props: ProfileViewProps) => {
  const {
    item,
    deleteFavourite,
    deleteLiked,
    showDeleteIcon,
    isLiked,
    isLikesReceived,
    isMatch,
    isFavourite,
    handleToggleOuterModal,
    startChat,
    path,
  } = props;
  const handleRemove = () => {
    if (deleteFavourite) {
      deleteFavourite(item._id);
    }
    if (deleteLiked) {
      deleteLiked(item._id);
    }
  };
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    if (handleToggleOuterModal && showModal) {
      handleToggleOuterModal(false);
    }
    setShowModal((oldValue) => !oldValue);
  };
  const navigateToChat = () => {
    if (startChat) {
      if (handleToggleOuterModal) {
        handleToggleOuterModal(false);
      }
      startChat({
        senderId: item?._id,
        name: item.profile.displayName ?? item.profile.name.first,
      });
    }
  };
  if (isMatch) {
    return (
      <View style={styles.sectionView}>
        <Pressable onPress={toggleModal}>
          <Column style={styles.relative}>
            <Spacer position="right" size={10}>
              <Spacer position="bottom" size={10}>
                <FastImage
                  style={
                    path === 'scrollView'
                      ? styles.matchAvatar
                      : styles.avatarModalWidth
                  }
                  source={{
                    uri: item?.profilePicture?.url,
                  }}
                  resizeMode={FastImage.resizeMode.stretch}
                >
                  {path === 'scrollView' && (
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0.00)', ' rgba(0, 0, 0, 0.9)']}
                      style={styles.gradient}
                    >
                      <View style={[styles.userTextView, { width: '100%' }]}>
                        <Row justifyContent="space-between" alignItems="center">
                          <Column>
                            <Text style={styles.userNameText}>
                              {item?.profile?.displayName ??
                                item?.profile?.name?.first}{' '}
                              {calculateAge(item?.profile?.dob)}
                            </Text>
                            <Text
                              style={[
                                styles.textDegree,
                                styles.textDesignation,
                              ]}
                            >
                              {item?.designation?.title}
                            </Text>
                            {/* {showDeleteIcon && (
                        <Pressable onPress={handleRemove}>
                          <Text>Remove</Text>
                        </Pressable>
                      )} */}
                          </Column>
                          <Spacer position="right" size={20}>
                            {isMatch && (
                              <Pressable onPress={navigateToChat}>
                                <Image
                                  style={{ width: 32 }}
                                  source={require('../../../../assets/images/icons/matchChat.png')}
                                  resizeMode="contain"
                                />
                              </Pressable>
                            )}
                          </Spacer>
                        </Row>
                      </View>
                    </LinearGradient>
                  )}
                  {path === 'modalView' && (
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0.00)', ' rgba(0, 0, 0, 0.9)']}
                      style={styles.gradient}
                    />
                  )}
                </FastImage>
              </Spacer>
            </Spacer>
            {path === 'modalView' && (
              <Column>
                <Spacer position="bottom" size={10}>
                  <Row justifyContent="space-between" alignItems="center">
                    <Column>
                      <Text style={styles.textName}>
                        {item?.profile?.displayName ??
                          item?.profile?.name?.first}{' '}
                        {calculateAge(item?.profile?.dob)}
                      </Text>
                      <Text style={styles.textDegree}>
                        {item?.designation?.title}
                      </Text>
                    </Column>
                    {showDeleteIcon && (
                      <Pressable
                        onPress={handleRemove}
                        style={styles.removeIcon}
                      >
                        <Image
                          style={styles.removeIcon}
                          source={require('../../../../assets/images/icons/trash.png')}
                        />
                      </Pressable>
                    )}
                    <Spacer position="right" size={20}>
                      {isMatch && (
                        <Pressable onPress={navigateToChat}>
                          <Text style={styles.chatButton}>Chat</Text>
                        </Pressable>
                      )}
                    </Spacer>
                  </Row>
                </Spacer>
              </Column>
            )}
          </Column>
        </Pressable>
        <ProfileModal
          showModal={showModal}
          userId={item?._id}
          toggleModal={toggleModal}
          showLike={false}
          showDisLike={false}
          showSave={false}
        />
      </View>
    );
  }
  if (isLikesReceived) {
    return (
      <View style={styles.sectionView}>
        <Pressable onPress={toggleModal}>
          <Column>
            <Spacer position="right" size={10}>
              <FastImage
                style={
                  path === 'modalView'
                    ? styles.avatarModalWidth
                    : styles.avatarWidth
                }
                source={{
                  uri: item?.userId?.profilePicture?.url,
                }}
                resizeMode={FastImage.resizeMode.cover}
              >
                <LinearGradient
                  colors={['rgba(0, 0, 0, 0.00)', ' rgba(0, 0, 0, 0.9)']}
                  style={styles.gradient}
                />
              </FastImage>
            </Spacer>
            <Column>
              <Spacer position="bottom" size={10}>
                <Text style={styles.textName}>
                  {item?.profile?.displayName ?? item?.profile?.name?.first}{' '}
                  {calculateAge(item?.profile?.dob)}
                </Text>
                <Text style={styles.textDegree}>
                  {item?.userId?.designation?.title}
                </Text>
                {isMatch && (
                  <Pressable onPress={navigateToChat}>
                    <Text style={styles.chatButton}>Chat</Text>
                  </Pressable>
                )}
              </Spacer>
            </Column>
            {showDeleteIcon && (
              <Pressable onPress={handleRemove}>
                <Image
                  style={styles.removeIcon}
                  source={require('../../../../assets/images/icons/trash.png')}
                />
              </Pressable>
            )}
          </Column>
        </Pressable>
        <ProfileModal
          showModal={showModal}
          userId={item?.userId?._id}
          toggleModal={toggleModal}
          showLike={false}
          showDisLike={false}
          showSave={false}
        />
      </View>
    );
  }
  if (isLiked || isFavourite) {
    return (
      <View style={styles.sectionView}>
        <Pressable onPress={toggleModal}>
          <Column>
            <Spacer position="right" size={10}>
              <FastImage
                style={
                  path === 'modalView'
                    ? styles.avatarModalWidth
                    : styles.avatarWidth
                }
                source={{
                  uri: item?.profilePicture?.url,
                }}
                resizeMode={FastImage.resizeMode.cover}
              >
                <LinearGradient
                  colors={['rgba(0, 0, 0, 0.00)', ' rgba(0, 0, 0, 0.9)']}
                  style={styles.gradient}
                />
              </FastImage>
            </Spacer>
            <Column justifyContent="center" alignItems="center">
              <Spacer position="bottom" size={10}>
                <Text style={styles.textName}>
                  {item?.profile?.displayName ?? item?.profile?.name?.first},{' '}
                  {calculateAge(item?.profile?.dob)}
                </Text>
                <Text style={styles.textDegree}>
                  {item?.designation?.title}
                </Text>
                {isMatch && (
                  <Pressable onPress={navigateToChat}>
                    <Text style={styles.chatButton}>Chat</Text>
                  </Pressable>
                )}
              </Spacer>
            </Column>
            {showDeleteIcon && (
              <Pressable onPress={handleRemove} style={styles.removeIcon}>
                <Image
                  style={styles.removeIcon}
                  source={require('../../../../assets/images/icons/trash.png')}
                />
              </Pressable>
            )}
          </Column>
        </Pressable>
        <ProfileModal
          showModal={showModal}
          userId={item?._id}
          toggleModal={toggleModal}
          showLike={false}
          showDisLike={false}
          showSave={false}
        />
      </View>
    );
  }
  return <View></View>;
};

export const styles = StyleSheet.create({
  sectionView: {
    flex: 1,
    maxWidth: 200,
    backgroundColor: theme.colors.ui.white,
  },
  relative: {
    position: 'relative',
  },
  removeIcon: {
    position: 'absolute',
    right: theme.units.sizes[10],
    top: theme.units.sizes[6],
    width: theme.units.sizes[24],
    height: theme.units.sizes[24],
    borderRadius: theme.units.sizes[100],
  },
  avatarWidth: {
    width: (dimensions.width - 38) / 2,
    height: theme.units.sizes[165],
    borderRadius: theme.units.sizes[30],
  },
  avatarModalWidth: {
    width: (dimensions.width - 48) / 2,
    height: theme.units.sizes[165],
    borderRadius: theme.units.sizes[30],
  },
  matchAvatar: {
    width: (dimensions.width - 38) / 2,
    height: theme.units.sizes[300],
    borderRadius: theme.units.sizes[30],
  },
  textName: {
    color: theme.colors.ui.textHead,
    fontSize: theme.fontSizes.text,
    fontWeight: theme.fontWeights.bold,
    lineHeight: 30,
  },
  textDegree: {
    color: theme.colors.ui.primary,
    fontSize: theme.fontSizes.caption,
    fontWeight: theme.fontWeights.medium,
    lineHeight: 14,
    letterSpacing: 0.59,
  },
  textDesignation: {
    color: theme.colors.ui.white,
  },
  gradient: {
    height: '100%',
    width: '100%',
  },
  userTextView: {
    position: 'absolute',
    bottom: theme.units.sizes[20],
    left: theme.units.sizes[12],
  },
  userNameText: {
    fontSize: theme.fontSizes.h6,
    color: theme.colors.ui.white,
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fontFamily.body,
  },
  chatButton: {
    padding: theme.units.sizes[3],
    paddingLeft: theme.units.sizes[8],
    paddingRight: theme.units.sizes[8],
    backgroundColor: theme.colors.bg.secondary,
    color: theme.colors.ui.primary,
    borderRadius: theme.units.sizes[6],
    fontSize: theme.fontSizes.caption,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  textBlack: {
    color: theme.colors.ui.black,
    marginTop: 4,
  },
});
