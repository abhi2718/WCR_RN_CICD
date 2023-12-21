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
      <SafeAreaView style={searchStyle.container}>
        <View style={searchStyle.container}>
          {loading ? (
            <FullLoader />
          ) : (
            <View style={searchStyle.container}>
              <Row style={searchStyle.header} alignItems="center" gap={15}>
                <TextInput
                  style={searchStyle.searchBox}
                  onChangeText={handleSearch}
                  placeholder="Search"
                />
                <Pressable onPress={handleClose} style={searchStyle.crossBox}>
                  <Image
                    resizeMode="contain"
                    style={searchStyle.crossImg}
                    source={require('../../../../../../../assets/images/icons/crossIcon.png')}
                  />
                </Pressable>
              </Row>

              {users.length === 0 ? (
                // <View style={searchStyle.content}>
                //   <Column gap={25} alignItems="center">
                //     <Text style={searchStyle.subHeading}>No results found</Text>
                //     <Image
                //       style={searchStyle.pendingIcon}
                //       resizeMode="contain"
                //       source={require('../../../../../../../assets/images/icons/noSearchResultIcon.png')}
                //     />
                //     <Text style={searchStyle.text}>
                //       We could not find what you {`\n`} were searching for.
                //       Please try again.
                //     </Text>
                //   </Column>
                // </View>
                <View style={searchStyle.content}>
                  <Column gap={25} alignItems="center">
                    <Image
                      style={searchStyle.pendingIcon}
                      resizeMode="contain"
                      source={require('../../../../../../../assets/images/icons/searchBlank.png')}
                    />
                    <Text style={searchStyle.text}>
                      Discover new users! Use keywords to {`\n`} find your
                      match. Happy searching!
                    </Text>
                  </Column>
                </View>
              ) : (
                <ScrollView style={searchStyle.container}>
                  <Text style={searchStyle.subHeadingInner}>
                    Search Results
                  </Text>
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
                          <Text style={searchStyle.firstName}>
                            {user.first}
                          </Text>
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
              )}
            </View>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
};
