import React from 'react';
import {
  View,
  Text,
  Pressable,
  Modal,
  SafeAreaView,
  FlatList,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { ScrollView } from 'react-native-gesture-handler';
import { FullLoader, Row, Spacer } from '../../../components/tools';
import { ProfileView } from './components/profile';
import { styles } from './styles';
import { useViewModal } from './useViewModal';

export const LikeScreen = () => {
  const {
    loading,
    data,
    deleteFavourite,
    deleteLiked,
    toggleModal,
    modalVisible,
    handleSetSeeAllState,
    seeAllState,
    startChat,
  } = useViewModal();
  if (loading) {
    return <FullLoader />;
  }
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
        <View style={{ height: 200 }}>
            <Row justifyContent="space-between">
              <Text>Match</Text>
              <Pressable onPress={() => handleSetSeeAllState(3)}>
                <Text>See All</Text>
              </Pressable>
            </Row>
            <ScrollView style={{ maxHeight: 250 }} horizontal={true}>
              {/* <Pressable onPress={startChat}>
              <View>
                <FastImage
                  style={{height:200,width:200}}
                  source={{uri:"https://res.cloudinary.com/wcr-byldd/image/upload/v1692176659/verificationProof/hqpauxj1absd0kuou1kq.png"}}
                />
              </View>
             </Pressable> */}
              <View>
                {data.matchedUsersList.map((item) => (
                  <ProfileView
                    key={item._id}
                    item={item.actedOn}
                    showDeleteIcon={false}
                    isMatch={true}
                    startChat={startChat}
                  />
                ))}
              </View>
            </ScrollView>
          </View>

          <Spacer position="top" size={10} />
          <View>
            <Row justifyContent="space-between">
              <Text>Likes Received</Text>
              <Pressable onPress={() => handleSetSeeAllState(0)}>
                <Text>See All</Text>
              </Pressable>
            </Row>
            <ScrollView style={{ maxHeight: 250 }} horizontal={true}>
              <View style={{ height: 200 }}>
                {data.likesReceived.map((item) => (
                  <ProfileView
                    key={item._id}
                    item={item.actedOn}
                    showDeleteIcon={false}
                    isLikesReceived = {true}
                  />
                ))}
              </View>
            </ScrollView>
          </View>

          <Spacer position="top" size={10} />
          <View>
            <Row justifyContent="space-between">
              <Text>Liked</Text>
              <Pressable onPress={() => handleSetSeeAllState(1)}>
                <Text>See All</Text>
              </Pressable>
            </Row>
            <ScrollView style={{ maxHeight: 250 }} horizontal={true}>
              {data.liked.map((item) => {
                return (
                  <ProfileView
                    key={item._id}
                    item={item.actedOn}
                    deleteLiked={deleteLiked}
                    showDeleteIcon={true}
                    isLiked={true}
                  />
                );
              })}
            </ScrollView>
          </View>

          <Spacer position="top" size={10} />
          <View>
            <Row justifyContent="space-between">
              <Text>Saved</Text>
              <Pressable onPress={() => handleSetSeeAllState(2)}>
                <Text>See All</Text>
              </Pressable>
            </Row>
            <ScrollView style={{ maxHeight: 250 }} horizontal={true}>
              {data.allFavourite.map((item) => {
                return (
                  <ProfileView
                    key={item._id}
                    item={item.favourite}
                    deleteFavourite={deleteFavourite}
                    showDeleteIcon={true}
                    isFavourite={true}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <Modal visible={modalVisible}>
        <SafeAreaView style={styles.container}>
          <Row justifyContent="space-between">
            <Pressable onPress={()=>toggleModal()}>
              <Text>X</Text>
            </Pressable>
            <Text>{seeAllState.title}</Text>
          </Row>
          {seeAllState.state === 0 && (
            <>
              {
                <FlatList
                  data={data.likesReceived}
                  renderItem={({ item }) => (
                    <ProfileView
                      key={item._id}
                      item={item.actedOn}
                      showDeleteIcon={false}
                      isLikesReceived={true}
                      handleToggleOuterModal={toggleModal}
                    />
                  )}
                  numColumns={2}
                  keyExtractor={(item) => item._id}
                />
              }
            </>
          )}
          {seeAllState.state === 1 && (
            <>
              {
                <FlatList
                  data={data.liked}
                  renderItem={({ item }) => (
                    <ProfileView
                      key={item._id}
                      item={item.actedOn}
                      deleteLiked={deleteLiked}
                      showDeleteIcon={true}
                      isLiked={true}
                      handleToggleOuterModal={toggleModal}
                    />
                  )}
                  numColumns={2}
                  keyExtractor={(item) => item._id}
                />
              }
            </>
          )}
          {seeAllState.state === 2 && (
            <>
              {
                <FlatList
                  data={data.allFavourite}
                  renderItem={({ item }) => (
                    <ProfileView
                      key={item._id}
                      item={item.favourite}
                      deleteFavourite={deleteFavourite}
                      showDeleteIcon={true}
                      isFavourite={true}
                      handleToggleOuterModal={toggleModal}
                    />
                  )}
                  numColumns={2}
                  keyExtractor={(item) => item._id}
                />
              }
            </>
          )}
        </SafeAreaView>
      </Modal>
    </View>
  );
};
