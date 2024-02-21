import React from 'react';
import {
  View,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { Column, FullLoader, Row } from '../../../../../../../components/tools';
import { SearchModalProps } from '../../../../../../../types/screen.type/home.type';
import { useViewModal } from './useViewModal';
import { searchStyle } from './searchStyle';
import {
  calculateAge,
  showDisplayOrFirstName,
} from '../../../../../../../utils/common.functions';
import { ProfileModal } from '../../../../../../../components/profile.component';

export const SearchModal = (props: SearchModalProps) => {
  const {
    handleSearch,
    users,
    handleClose,
    showSearchModal,
    isSearchActive,
    _setSelectedProfile,
    selectedProfile,
    clearSelectedProfile,
  } = useViewModal(props);
  return (
    <Modal visible={showSearchModal}>
      {selectedProfile.state && selectedProfile.userId ? (
        <ProfileModal
          showOnlyProfileView={true}
          showModal={true}
          userId={selectedProfile.userId}
          toggleModal={clearSelectedProfile}
          showLike={true}
          showDisLike={true}
          showSave={true}
        />
      ) : (
        <SafeAreaView style={searchStyle.container}>
          <View style={searchStyle.container}>
            <View style={searchStyle.container}>
              <Row style={searchStyle.header} alignItems="center" gap={15}>
                <TextInput
                  style={searchStyle.searchBox}
                  onChangeText={handleSearch}
                  placeholder="Search"
                  placeholderTextColor="#999"
                />
                <Pressable onPress={handleClose} style={searchStyle.crossBox}>
                  <Image
                    resizeMode="contain"
                    style={searchStyle.crossImg}
                    source={require('../../../../../../../assets/images/icons/crossIcon.png')}
                  />
                </Pressable>
              </Row>
              {isSearchActive && users.length === 0 ? (
                <View style={searchStyle.content}>
                  <Column gap={25} alignItems="center">
                    <Text style={searchStyle.subHeading}>No results found</Text>
                    <Image
                      style={searchStyle.pendingIcon}
                      resizeMode="contain"
                      source={require('../../../../../../../assets/images/icons/noSearchResultIcon.png')}
                    />
                    <Text style={searchStyle.text}>
                      We could not find what you {`\n`} were searching for.
                      Please try again.
                    </Text>
                  </Column>
                </View>
              ) : users.length === 0 ? (
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
                      onPress={() => _setSelectedProfile(user._id)}
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
                            {showDisplayOrFirstName(
                              user?.displayName,
                              user?.first,
                            )}
                            , {calculateAge(user.dob)}
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
          </View>
        </SafeAreaView>
      )}
    </Modal>
  );
};
