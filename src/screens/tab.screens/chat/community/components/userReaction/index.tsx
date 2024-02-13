import React, { useState } from 'react';
import { Pressable, Text, View,StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ProfileModal } from '../../../../../../components/profile.component';
import { Row, Spacer } from '../../../../../../components/tools';
import {
  UserListProps,
  UserReactionProps,
} from '../../../../../../types/screen.type/communityChat';

export const UserList = (props: UserListProps) => {
  const { user } = props;
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <Row alignItems="center">
        <Pressable onPress={() => setShowModal(true)}>
          <FastImage
            source={{ uri: user.avatar }}
            style={styles.imageStyle}
          />
        </Pressable>
        <Text style={styles.container}>{user.name}</Text>
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

export const UserReaction = (props: UserReactionProps) => {
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
                  <Text style={styles.container}>
                    {item.emoji}
                  </Text>
                  <Text style={styles.container}>
                    {item.count}
                  </Text>
                </Row>
              </View>
            </Spacer>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { fontFamily: 'Urbanist-Regular' },
  imageStyle:{ width: 40, height: 40, borderRadius: 20 }
});