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
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { Column, FullLoader, Row } from '../../../../../../../components/tools';
import { SearchModalProps } from '../../../../../../../types/screen.type/home.type';
import { useViewModal } from './useViewModal';

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
      <SafeAreaView style={styles.container}>
        {loading ? (
          <FullLoader />
        ) : (
          <View style={styles.container}>
            <Row>
              <View style={styles.searchBox}>
                <TextInput onChangeText={handleSearch} placeholder="Search" />
              </View>
              <View>
                <Pressable onPress={handleClose}>
                  <Text>X</Text>
                </Pressable>
              </View>
            </Row>
            <ScrollView style={styles.container}>
              {users.map((user) => (
                <Pressable
                  onPress={() => fetchSelectedUser(user._id)}
                  key={user._id}
                >
                  <Row>
                    <FastImage
                      style={styles.imageStyle}
                      source={{
                        uri: user.profilePicture.url,
                      }}
                    />
                    <Column>
                      <Text>{user.first}</Text>
                      <Row>
                        <Text>{user.designation.title}</Text>
                        <Text>, {user.city}</Text>
                      </Row>
                    </Column>
                  </Row>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        )}
      </SafeAreaView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBox: {
    flex: 0.9,
  },
});


    
