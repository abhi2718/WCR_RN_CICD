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
  FullLoader,
  Row,
  ScreenWrapper,
  Spacer,
} from '../../../components/tools';
import { ProfileView } from './components/profile';
import { styles, seeAllstyles } from './styles';
import { useViewModal } from './useViewModal';
import { BlurView } from '@react-native-community/blur';

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
      <View style={styles.container}>
        <View style={styles.headerViewStyle}>
          <HeaderDeck count={count} goToNotification={goToNotification} />
        </View>
        {isNoEvent > 0 ? (
          <>
            <ScrollView style={styles.flexContainer}>
              <View>
                {data?.matchedUsersList?.length > 0 ? (
                  <View>
                    <Row
                      justifyContent="space-between"
                      alignItems="center"
                      style={styles.headerPadding}
                    >
                      <Text style={styles.matchHeading}>Match</Text>
                      <Pressable onPress={() => handleSetSeeAllState(3)}>
                        <Text style={styles.seeAll}>See All</Text>
                      </Pressable>
                    </Row>
                    <ScrollView
                      style={styles.paddingBottom20}
                      horizontal={true}
                    >
                      {data.matchedUsersList.map((item, index) => {
                        return (
                          <Spacer key={item._id} position="right" size={8}>
                            <ProfileView
                              item={item}
                              showDeleteIcon={false}
                              isMatch={true}
                              startChat={startChat}
                              path="scrollView"
                            />
                          </Spacer>
                        );
                      })}
                    </ScrollView>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.matchHeading}>Match</Text>
                    <View style={[styles.noDataList, styles.noMatch]}>
                      <Image
                        style={styles.noDataImg}
                        source={require('../../../assets/images/icons/noMatchIcon.png')}
                      />
                      <Spacer position="top" size={20} />
                      <Text
                        style={[styles.noDataListText, styles.paddingMatches]}
                      >
                        No matches so far; begin swiping to find new connections
                      </Text>
                    </View>
                  </View>
                )}
                <Spacer position="top" size={10} />
                {data?.likesReceived?.length > 0 ? (
                  <View>
                    <Row
                      justifyContent="space-between"
                      alignItems="center"
                      style={styles.headerPadding}
                    >
                      <Text style={styles.matchHeading}>Likes Received</Text>
                      <Pressable onPress={() => handleSetSeeAllState(0)}>
                        <Text style={styles.seeAll}>See All</Text>
                      </Pressable>
                    </Row>
                    <ScrollView
                      style={styles.paddingBottom20}
                      horizontal={true}
                    >
                      {data.likesReceived.map((item, index) => {
                        return (
                          <Spacer key={index} position="right" size={8}>
                            <ProfileView
                              item={item}
                              showDeleteIcon={false}
                              isLikesReceived={true}
                              path="scrollView"
                            />
                          </Spacer>
                        );
                      })}
                    </ScrollView>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.matchHeading}>Likes Received</Text>
                    <View style={[styles.noDataList]}>
                      <Image
                        style={styles.noLikes}
                        source={require('../../../assets/images/icons/noLikes.png')}
                      />
                      <Spacer position="top" size={20} />
                      <Text
                        style={[styles.noDataListText, styles.paddingMatches]}
                      >
                        Someone Liked you, Unlock the Premium feature to
                        discover who's interested in you.
                      </Text>
                    </View>
                  </View>
                )}

                <Spacer position="top" size={10} />
                {data?.liked?.length > 0 ? (
                  <View>
                    <Row
                      justifyContent="space-between"
                      alignItems="center"
                      style={styles.headerPadding}
                    >
                      <Text style={styles.matchHeading}>Liked</Text>
                      <Pressable onPress={() => handleSetSeeAllState(1)}>
                        <Text style={styles.seeAll}>See All</Text>
                      </Pressable>
                    </Row>
                    <ScrollView
                      horizontal={true}
                      style={styles.paddingBottom20}
                    >
                      {data.liked.map((item, index) => {
                        return (
                          <Spacer key={index} position="right" size={8}>
                            <ProfileView
                              item={item.actedOn}
                              deleteLiked={deleteLiked}
                              showDeleteIcon={true}
                              isLiked={true}
                              path="scrollView"
                            />
                          </Spacer>
                        );
                      })}
                    </ScrollView>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.matchHeading}>Liked</Text>
                    <View style={[styles.noDataList]}>
                      <Image
                        style={styles.noLikes}
                        source={require('../../../assets/images/icons/noLkeDislike.png')}
                      />

                      <Spacer position="top" size={20} />
                      <Text
                        style={[styles.noDataListText, styles.paddingMatches]}
                      >
                        Start swiping and giving likes to view profiles here.
                      </Text>
                      {/* <BlurView
                        style={styles.likedTextBlur}
                        blurType="light"
                        blurAmount={2}
                        reducedTransparencyFallbackColor="white"
                      /> */}
                    </View>
                  </View>
                )}
                <Spacer position="top" size={10} />
                {data?.allFavourite?.length > 0 ? (
                  <View>
                    <Row
                      justifyContent="space-between"
                      alignItems="center"
                      style={styles.headerPadding}
                    >
                      <Text style={styles.matchHeading}>Saved</Text>
                      <Pressable onPress={() => handleSetSeeAllState(2)}>
                        <Text style={styles.seeAll}>See All</Text>
                      </Pressable>
                    </Row>
                    <ScrollView
                      style={styles.paddingBottom20}
                      horizontal={true}
                    >
                      {data.allFavourite.map((item, index) => {
                        return (
                          <Spacer key={index} position="right" size={8}>
                            <ProfileView
                              item={item.favourite}
                              deleteFavourite={deleteFavourite}
                              showDeleteIcon={true}
                              isFavourite={true}
                              path="scrollView"
                            />
                          </Spacer>
                        );
                      })}
                    </ScrollView>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.matchHeading}>Saved</Text>
                    <View style={[styles.noDataList]}>
                      <Image
                        style={styles.noLikes}
                        source={require('../../../assets/images/icons/noSavedIcon.png')}
                      />

                      <Spacer position="top" size={20} />
                      <Text
                        style={[styles.noDataListText, styles.paddingMatches]}
                      >
                        Start saving profiles to like them later.
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            </ScrollView>
            <Modal visible={modalVisible}>
              <SafeAreaView>
                <Row alignItems="center" style={styles.backArrowPadding}>
                  <Pressable onPress={() => toggleModal()}>
                    <View style={styles.modalBackButtonContainer}>
                      <Image
                        style={styles.backArrowSize}
                        source={require('../../../assets/images/icons/back-arrow.png')}
                      />
                    </View>
                  </Pressable>
                  <Text style={styles.headerText}>{seeAllState.title}</Text>
                </Row>
                {seeAllState.state === 0 && (
                  <View style={seeAllstyles.container}>
                    {
                      <FlatList
                        data={data.likesReceived}
                        columnWrapperStyle={styles.flatListWrapperStyle}
                        renderItem={({ item, index }) => (
                          <Spacer
                            position="bottom"
                            size={
                              index === data.likesReceived.length - 1 ? 200 : 16
                            }
                            key={item._id}
                          >
                            <ProfileView
                              key={item._id}
                              item={item}
                              showDeleteIcon={false}
                              isLikesReceived={true}
                              handleToggleOuterModal={toggleModal}
                              path="modalView"
                            />
                          </Spacer>
                        )}
                        numColumns={2}
                        keyExtractor={(item) => item._id}
                      />
                    }
                  </View>
                )}
                {seeAllState.state === 1 && (
                  <View style={seeAllstyles.container}>
                    {
                      <FlatList
                        data={data.liked}
                        columnWrapperStyle={styles.flatListWrapperStyle}
                        renderItem={({ item, index }) => (
                          <Spacer
                            position="bottom"
                            size={index === data.liked.length - 1 ? 200 : 16}
                            key={item._id}
                          >
                            <ProfileView
                              key={item._id}
                              item={item.actedOn}
                              deleteLiked={deleteLiked}
                              showDeleteIcon={true}
                              isLiked={true}
                              handleToggleOuterModal={toggleModal}
                              path="modalView"
                            />
                          </Spacer>
                        )}
                        numColumns={2}
                        keyExtractor={(item) => item._id}
                      />
                    }
                  </View>
                )}
                {seeAllState.state === 2 && (
                  <View style={seeAllstyles.container}>
                    {
                      <FlatList
                        data={data.allFavourite}
                        columnWrapperStyle={styles.flatListWrapperStyle}
                        renderItem={({ item, index }) => (
                          <Spacer
                            position="bottom"
                            size={
                              index === data.allFavourite.length - 1 ? 200 : 16
                            }
                            key={item._id}
                          >
                            <ProfileView
                              key={item._id}
                              item={item.favourite}
                              deleteFavourite={deleteFavourite}
                              showDeleteIcon={true}
                              isFavourite={true}
                              handleToggleOuterModal={toggleModal}
                              path="modalView"
                            />
                          </Spacer>
                        )}
                        numColumns={2}
                        keyExtractor={(item) => item._id}
                      />
                    }
                  </View>
                )}
                {seeAllState.state === 3 && (
                  <View style={seeAllstyles.container}>
                    {
                      <FlatList
                        data={data.matchedUsersList}
                        columnWrapperStyle={styles.flatListWrapperStyle}
                        renderItem={({ item, index }) => (
                          <Spacer
                            position="bottom"
                            size={
                              index === data.matchedUsersList.length - 1
                                ? 200
                                : 16
                            }
                            key={item._id}
                          >
                            <ProfileView
                              key={item._id}
                              item={item}
                              showDeleteIcon={false}
                              isFavourite={false}
                              isMatch={true}
                              startChat={startChat}
                              handleToggleOuterModal={toggleModal}
                              path="modalView"
                            />
                          </Spacer>
                        )}
                        numColumns={2}
                        keyExtractor={(item) => item._id}
                      />
                    }
                  </View>
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
