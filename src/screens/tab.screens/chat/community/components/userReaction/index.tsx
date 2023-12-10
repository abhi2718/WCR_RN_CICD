import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ProfileModal } from '../../../../../../components/profile.component';
import { Row, Spacer } from '../../../../../../components/tools';
import { UserListProps, UserReactionProps } from '../../../../../../types/screen.type/communityChat';

export const UserList = (props:UserListProps) => {
  const { user } = props;
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <Row alignItems="center">
        <Pressable onPress={() => setShowModal(true)}>
          <FastImage
            source={{ uri: user.avatar }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </Pressable>
        <Text>{user.name}</Text>
      </Row>
      {showModal && (
        <ProfileModal
          showModal={showModal}
          toggleModal={(state?: boolean) =>
            setShowModal((oldState) => (state ? state : !oldState))
          }
          userId={user.userId}
          showLike={false}
          showDisLike={false}
          showSave={false}
        />
      )}
    </View>
  );
};


export const UserReaction = (props:UserReactionProps) => {
  const { item, hanldePress } = props;
  return (
    <View>
      <View>
        {item.emoji.includes(':') ? (
          <View></View>
        ) : (
          <Pressable onPress={hanldePress}>
            <Spacer position={'right'} size={5}>
              <View>
                <Row>
                  <Text>{item.emoji}</Text>
                  <Text>{item.count}</Text>
                </Row>
              </View>
            </Spacer>
          </Pressable>
        )}
      </View>
    </View>
  );
};
