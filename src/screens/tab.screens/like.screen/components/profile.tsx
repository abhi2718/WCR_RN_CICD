import React, { useState } from 'react';
import { Modal, Pressable, Text, View, StyleSheet, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ProfileModal } from '../../../../components/profile.component';
import { Column, Spacer } from '../../../../components/tools';
import { ProfileViewProps } from '../../../../types/screen.type/like.type';

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
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Pressable onPress={toggleModal}>
          <Column>
            <Spacer position="right" size={10}>
              <FastImage
                style={{ width: 200, height: 219 }}
                source={{
                  uri: item?.profilePicture?.url,
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
            </Spacer>
            <Column>
              <Spacer position="bottom" size={10}>
                <Text>
                  {item?.profile?.displayName ?? item?.profile?.name?.first}
                </Text>
                <Text>{item?.designation?.title}</Text>
                {showDeleteIcon && (
                  <Pressable onPress={handleRemove}>
                    <Text>Remove</Text>
                  </Pressable>
                )}
                {isMatch && (
                  <Pressable onPress={navigateToChat}>
                    <Text>Chat</Text>
                  </Pressable>
                )}
              </Spacer>
            </Column>
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
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Pressable onPress={toggleModal}>
          <Column>
            <Spacer position="right" size={10}>
              <FastImage
                style={{ width: 200, height: 219 }}
                source={{
                  uri: item?.userId?.profilePicture?.url,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            </Spacer>
            <Column>
              <Text>
                {item?.profile?.displayName ?? item?.profile?.name?.first}
              </Text>
              <Text>{item?.userId?.designation?.title}</Text>
              {showDeleteIcon && (
                <Pressable onPress={handleRemove}>
                  <Text>Remove</Text>
                </Pressable>
              )}
              {isMatch && (
                <Pressable onPress={navigateToChat}>
                  <Text>Chat</Text>
                </Pressable>
              )}
            </Column>
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
      <View style={{ flex: 1, maxWidth: 200, backgroundColor: '#fff' }}>
        <Pressable onPress={toggleModal}>
          <Column>
            <Spacer position="right" size={10}>
              <FastImage
                style={styles.avatar}
                source={{
                  uri: item?.profilePicture?.url,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            </Spacer>
            <Column justifyContent="center" alignItems="center">
              <Spacer position="bottom" size={10}>
                <Text style={styles.textName}>
                  {item?.profile?.displayName ?? item?.profile?.name?.first}
                </Text>
                <Text style={styles.textDegree}>
                  {item?.designation?.title}
                </Text>
                {isMatch && (
                  <Pressable onPress={navigateToChat}>
                    <Text>Chat</Text>
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
  relative: {
    position: 'relative',
  },
  removeIcon: {
    position: 'absolute',
    right: 10,
    top: 6,
    width: 24,
    height: 24,
    borderRadius: 100,
  },
  avatar: {
    width: 185,
    height: 152,
    borderRadius: 30,
  },
  textName: {
    color: '#404040',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 30,
  },
  textDegree: {
    color: '#B00',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
    letterSpacing: 0.59,
  },
});
