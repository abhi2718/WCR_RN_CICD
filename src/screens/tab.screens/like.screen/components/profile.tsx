import React from 'react';
import { Pressable, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Column, Spacer } from '../../../../components/tools';
export const ProfileView = (props) => {
  const { item, deleteFavourite, deleteLiked, showDeleteIcon } = props;
  const handleRemove = () => {
    if (deleteFavourite) {
      deleteFavourite(item._id);
    }
    if (deleteLiked) {
      deleteLiked(item._id);
    }
  };
  return (
    <View>
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
        </Column>
      </Column>
    </View>
  );
};
