import React from 'react';
import {
  View,
  Text,
  Pressable,
  Modal,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderDeck } from '../../../components/header';
import {
  dimensions,
  FullLoader,
  Row,
  ScreenWrapper,
  Spacer,
} from '../../../components/tools';
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
    count,
    goToNotification,
    isNoEvent,
  } = useViewModal();
  if (loading) {
    return <FullLoader />;
  }
  return (
    <ScreenWrapper>
      <View style={{ flex: 1 }}>
        <View style={{paddingLeft:16}}>
        <HeaderDeck count={count} goToNotification={goToNotification} />
      </View>
        {isNoEvent > 0 ? (
          <>
            <ScrollView style={{ flex: 1 }}>
              <View style={styles.container}>
                {data?.matchedUsersList?.length > 0 && (
                  <View style={{ height: 200 }}>
                    <Row justifyContent="space-between">
                      <Text>Match</Text>
                      <Pressable onPress={() => handleSetSeeAllState(3)}>
                        <Text>See All</Text>
                      </Pressable>
                    </Row>
                    <ScrollView
                      style={{ maxHeight: 250, maxWidth: dimensions.width }}
                      horizontal={true}
                    >
                      {data.matchedUsersList.map((item) => {
                        return (
                          <ProfileView
                            key={item._id}
                            item={item}
                            showDeleteIcon={false}
                            isMatch={true}
                            startChat={startChat}
                          />
                        );
                      })}
                    </ScrollView>
                  </View>
                )}
                <Spacer position="top" size={10} />
                {data?.likesReceived?.length > 0 && (
                  <View>
                    <Row justifyContent="space-between">
                      <Text>Likes Received</Text>
                      <Pressable onPress={() => handleSetSeeAllState(0)}>
                        <Text>See All</Text>
                      </Pressable>
                    </Row>
                    <ScrollView style={{ maxHeight: 250 }} horizontal={true}>
                      {data.likesReceived.map((item) => {
                        return (
                          <ProfileView
                            key={item._id}
                            item={item}
                            showDeleteIcon={false}
                            isLikesReceived={true}
                          />
                        );
                      })}
                    </ScrollView>
                  </View>
                )}
                <Spacer position="top" size={10} />
                {data?.liked?.length > 0 && (
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
                )}
                <Spacer position="top" size={10} />
                {data?.allFavourite?.length > 0 && (
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
                )}
              </View>
            </ScrollView>
            <Modal visible={modalVisible}>
              <SafeAreaView style={styles.container}>
                <Row justifyContent="space-between">
                  <Pressable onPress={() => toggleModal()}>
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
                            item={item}
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
                {seeAllState.state === 3 && (
                  <>
                    {
                      <FlatList
                        data={data.matchedUsersList}
                        renderItem={({ item }) => (
                          <ProfileView
                            key={item._id}
                            item={item}
                            showDeleteIcon={false}
                            isFavourite={false}
                            isMatch={true}
                            startChat={startChat}
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
          </>
        ) : (
          <>
            <View style={styles.content}>
            <Text style={styles.subHeading}>Matches</Text>
            <Image
              style={styles.noMatchIcon}
              resizeMode="contain"
              source={require('../../../../src/assets/images/icons/noMatchIcon.png')}
            />
            <Text style={styles.text}>
              You’re new here! No matches/likes yet.
            </Text>
          </View>
          </>
        )}
      </View>
    </ScreenWrapper>
  );
};
