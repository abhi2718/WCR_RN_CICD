import React from 'react';
import {
  View,
  Modal,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { profileProps } from '../../types/components/profile.type';
import { FullLoader, Row, Spacer } from '../tools';
import { useViewModal } from './useViewModal';

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
  const heightStyle = { height: 600, width: 300 };
  return (
    <Modal visible={showModal}>
      <SafeAreaView style={{ flex: 1 }}>
        {loading ? (
          <View style={{ flex: 1 }}>
            <FullLoader />
          </View>
        ) : (
          <View>
            <Row>
              <Pressable onPress={toggleModal}>
                <Text>Close</Text>
              </Pressable>
            </Row>
            <View style={{ backgroundColor: '#fff' }}>
              <View>
                {user && (
                  <ScrollView bounces={false}>
                    <View>
                      <FastImage
                        style={{ ...heightStyle, borderRadius: 0 }}
                        source={{ uri: user.profilePicture.url }}
                      />
                      <Text>
                        {user.first} ({user.genderPronoun})
                      </Text>
                      <Row>
                        <Text>{user.designation.userDegree}</Text>
                      </Row>
                      <Row>
                        <Text>{user.designation.title}</Text>
                      </Row>
                      <Row>
                        <Text>{user.designation.title}</Text>
                      </Row>
                      <Row>
                        <Text>{user.state}</Text>
                      </Row>
                      <View>
                        <Text>Vital Signs</Text>
                      </View>
                    </View>
                    {user?.photos.map(({ url, _id }) => {
                      return (
                        <FastImage
                          key={_id}
                          style={{ ...heightStyle, borderRadius: 0 }}
                          source={{ uri: url }}
                        />
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
