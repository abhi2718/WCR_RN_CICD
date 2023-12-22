import React, { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
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
        name: item.profile.displayName ??  item.profile.name.first,
      });
    }
  };
  if (isMatch) {
    return (
      <View style={{ width: 200, backgroundColor: '#fff' }}>
        <Pressable onPress={toggleModal}>
          <Column>
            <Spacer position="right" size={10}>
              <FastImage
                style={{ width: 180, height: 100 }}
                source={{
                  uri: item?.profilePicture?.url,
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
            </Spacer>
            <Column>
              <Text>{item?.profile?.displayName ??  item?.profile?.name?.first}</Text>
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
      <View style={{ width: 200, backgroundColor: '#fff' }}>
        <Pressable onPress={toggleModal}>
          <Column>
            <Spacer position="right" size={10}>
              <FastImage
                style={{ width: 180, height: 100 }}
                source={{
                  uri: item?.userId?.profilePicture?.url,
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
            </Spacer>
            <Column>
              <Text>{item?.profile?.displayName ?? item?.profile?.name?.first}</Text>
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
      <View style={{ width: 200, backgroundColor: '#fff' }}>
        <Pressable onPress={toggleModal}>
          <Column>
            <Spacer position="right" size={10}>
              <FastImage
                style={{ width: 180, height: 100 }}
                source={{
                  uri: item?.profilePicture?.url,
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
            </Spacer>
            <Column>
              <Text>{item?.profile?.displayName ?? item?.profile?.name?.first}</Text>
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
  return <View></View>;
};
