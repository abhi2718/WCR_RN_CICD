import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ProfileModal } from '../../../../components/profile.component';
import { Column, Row, Spacer, dimensions } from '../../../../components/tools';
import { ProfileViewProps } from '../../../../types/screen.type/like.type';
import { theme } from '../../../../infrastructure/theme';
import LinearGradient from 'react-native-linear-gradient';
import { calculateAge } from '../../../../utils/common.functions';
import { fonts } from '../../../../infrastructure/theme/fonts';

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
      <View>
        <Pressable onPress={toggleModal}>
          <Spacer position="bottom" size={10} />
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
                      <Row justifyContent="flex-end">
                        <Spacer position="right" size={20}>
                          {isMatch && (
                            <Pressable onPress={navigateToChat}>
                              <Image
                                style={styles.chatIcon}
                                source={require('../../../../assets/images/icons/matchNew.png')}
                                resizeMode="contain"
                              />
                            </Pressable>
                          )}
                        </Spacer>
                      </Row>
                      <View style={[styles.userTextView, { width: '100%' }]}>
                        <Row justifyContent="space-between" alignItems="center">
                          <Column style={styles.columnWrapper}>
                            {/* <Text style={styles.userNameText}>
                              {item?.profile?.displayName ??
                                item?.profile?.name?.first}{' '}
                              {calculateAge(item?.profile?.dob)}
                            </Text> */}
                            <Text style={styles.userNameText}>
                              {item?.profile?.name?.first}
                            </Text>
                            <Text
                              style={[
                                styles.textDegree,
                                styles.textDesignation,
                              ]}
                            >
                              {item?.designation?.title}
                            </Text>
                          </Column>
                        </Row>
                      </View>
                    </LinearGradient>
                  )}
                  {path === 'modalView' && (
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0.00)', ' rgba(0, 0, 0, 0.9)']}
                      style={styles.gradient}
                    >
                      <Column alignItems="flex-end">
                        <Spacer position="right" size={20}>
                          {isMatch && (
                            <Pressable onPress={navigateToChat}>
                              <Image
                                style={styles.chatIcon}
                                source={require('../../../../assets/images/icons/matchNew.png')}
                                resizeMode="contain"
                              />
                            </Pressable>
                          )}
                        </Spacer>
                      </Column>
                    </LinearGradient>
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
      <View>
        <Pressable onPress={toggleModal}>
          <Spacer position="bottom" size={10} />
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
              ></FastImage>
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
          showLike={true}
          showDisLike={true}
          showSave={true}
        />
      </View>
    );
  }
  if (isLiked || isFavourite) {
    return (
      <View>
        <Pressable onPress={toggleModal}>
          <Spacer position="bottom" size={10} />
          <Column>
            <Spacer position="right" size={0}>
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
          showLike={isFavourite ? true : false}
          showDisLike={isFavourite ? true : false}
          showSave={false}
        />
      </View>
    );
  }
  return <View></View>;
};

export const styles = StyleSheet.create({
  columnWrapper: {
    width: (dimensions.width - 38) / 2,
    paddingLeft: 8,
  },
  chatIcon: {
    width: 32,
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
    width: (dimensions.width - 32) / 2,
    height: theme.units.sizes[165],
    borderRadius: theme.units.sizes[30],
  },
  avatarModalWidth: {
    width: (dimensions.width - 48) / 2,
    height: theme.units.sizes[165],
    borderRadius: theme.units.sizes[30],
  },
  matchAvatar: {
    width: dimensions.width / 1.7,
    height: theme.units.sizes[300],
    borderRadius: theme.units.sizes[30],
  },
  textName: {
    color: theme.colors.ui.textHead,
    fontSize: theme.fontSizes.text,
    fontWeight: theme.fontWeights.bold,
    lineHeight: 30,
    textAlign: 'center',
    fontFamily: fonts.body,
  },
  textDegree: {
    color: theme.colors.ui.primary,
    fontSize: theme.fontSizes.caption,
    fontWeight: theme.fontWeights.medium,
    lineHeight: 14,
    letterSpacing: 0.59,
    textAlign: 'center',
    fontFamily: fonts.body,
  },
  textDesignation: {
    color: theme.colors.ui.white,
    fontFamily: fonts.body,
  },
  gradient: {
    height: '100%',
    width: '100%',
  },
  userTextView: {
    position: 'absolute',
    bottom: theme.units.sizes[20],
  },
  userNameText: {
    fontSize: theme.fontSizes.h6,
    color: theme.colors.ui.white,
    fontWeight: theme.fontWeights.bold,
    fontFamily: fonts.body,
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
    fontFamily: fonts.body,
  },
  textBlack: {
    color: theme.colors.ui.black,
    marginTop: 4,
  },
});
