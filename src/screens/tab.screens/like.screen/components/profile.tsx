import React, { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ProfileModal } from '../../../../components/profile.component';
import { Column, Spacer } from '../../../../components/tools';
import { ProfileViewProps } from '../../../../types/screen.type/like.type';

export const ProfileView = (props:ProfileViewProps) => {
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
    startChat
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
  }
  const navigateToChat = (user) => {
    if (startChat) {
      startChat({
        senderId: user._id,
        name:item.profile.name.first
      })
    }
  }
  return (
    <View>
      <Pressable onPress={toggleModal}>
        <Column>
          <Spacer position="right" size={10}>
            <FastImage
              style={{ width: 180, height: 200 }}
              source={{
                uri: item.profilePicture.url,
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </Spacer>
          <Column>
            <Text>{item.profile.name.first}</Text>
            <Text>{item.designation.title}</Text>
            {showDeleteIcon && (
              <Pressable onPress={handleRemove}>
                <Text>Remove</Text>
              </Pressable>
            )}
            {
              isMatch && <Pressable onPress={navigateToChat}>
                <Text>Chat</Text>
              </Pressable>
            }
          </Column>
        </Column>
      </Pressable>
      <ProfileModal
        showModal={showModal}
        userId={item._id}
        toggleModal={toggleModal}
        showLike={isLiked ? false : true}
        showDisLike={true}
        showSave={isFavourite ? false : true}
      />
    </View>
  );
};
