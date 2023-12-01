import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  Column,
  FullLoader,
  Row,
  ScreenContainer,
} from '../../../../../../../components/tools';
import { SearchModalProps } from '../../../../../../../types/screen.type/home.type';
import { useViewModal } from './useViewModal';
import { searchStyle } from './searchStyle';

export const SearchModal = (props: SearchModalProps) => {
  const {
    handleSearch,
    users,
    handleClose,
    showSearchModal,
    fetchSelectedUser,
    loading,
  } = useViewModal(props);

  return (
    <Modal visible={showSearchModal}>
      <ScreenContainer>
        <View style={searchStyle.container}>
          {loading ? (
            <FullLoader />
          ) : (
            <View style={searchStyle.container}>
              <Row alignItems="center" gap={15}>
                <TextInput
                  style={searchStyle.searchBox}
                  onChangeText={handleSearch}
                  placeholder="Search"
                />
                <Pressable onPress={handleClose}>
                  <Image
                    resizeMode="contain"
                    style={searchStyle.crossImg}
                    source={require('../../../../../../../assets/images/icons/crossIcon.png')}
                  />
                </Pressable>
              </Row>
              <ScrollView style={searchStyle.container}>
                {users.map((user) => (
                  <Pressable
                    onPress={() => fetchSelectedUser(user._id)}
                    key={user._id}
                  >
                    <Row alignItems="center" style={searchStyle.row} gap={12}>
                      <FastImage
                        style={searchStyle.imageStyle}
                        source={{
                          uri: user.profilePicture.url,
                        }}
                      />
                      <Column gap={5}>
                        <Text style={searchStyle.firstName}>{user.first}</Text>
                        <Row>
                          <Text style={searchStyle.ctiy}>
                            {user.designation.title}
                          </Text>
                          <Text style={searchStyle.ctiy}>, {user.city}</Text>
                        </Row>
                      </Column>
                    </Row>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          )}
        </View>
      </ScreenContainer>
    </Modal>
  );
};
