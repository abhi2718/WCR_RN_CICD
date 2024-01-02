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
            <ScrollView style={{ flex: 1 }}>
              <View style={styles.container}>
                {data?.matchedUsersList?.length > 0 ? (
                  <View>
                    <Row
                      justifyContent="space-between"
                      style={styles.headerPadding}
                    >
                      <Text style={styles.matchHeading}>Match</Text>
                      <Pressable onPress={() => handleSetSeeAllState(3)}>
                        <Spacer position="right" size={12}>
                          <Text style={styles.seeAll}>See All</Text>
                        </Spacer>
                      </Pressable>
                    </Row>
                    <ScrollView
                      style={styles.paddingBottom20}
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
                            path="scrollView"
                          />
                        );
                      })}
                    </ScrollView>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.matchHeading}>Match</Text>
                    <View style={styles.noDataList}>
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
                      style={styles.headerPadding}
                    >
                      <Text style={styles.matchHeading}>Likes Received</Text>
                      <Pressable onPress={() => handleSetSeeAllState(0)}>
                        <Spacer position="right" size={12}>
                          <Text style={styles.seeAll}>See All</Text>
                        </Spacer>
                      </Pressable>
                    </Row>
                    <ScrollView
                      style={styles.paddingBottom20}
                      horizontal={true}
                    >
                      {data.likesReceived.map((item) => {
                        return (
                          <ProfileView
                            key={item._id}
                            item={item}
                            showDeleteIcon={false}
                            isLikesReceived={true}
                            path="scrollView"
                          />
                        );
                      })}
                    </ScrollView>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.matchHeading}>Likes Received</Text>
                    <View style={styles.noDataList}>
                      <Text
                        style={[
                          styles.noDataListText,
                          styles.paddingReceiveLiked,
                        ]}
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
                      style={styles.headerPadding}
                    >
                      <Text style={styles.matchHeading}>Liked</Text>
                      <Pressable onPress={() => handleSetSeeAllState(1)}>
                        <Spacer position="right" size={12}>
                          <Text style={styles.seeAll}>See All</Text>
                        </Spacer>
                      </Pressable>
                    </Row>
                    <ScrollView
                      horizontal={true}
                      style={styles.paddingBottom20}
                    >
                      {data.liked.map((item) => {
                        return (
                          <ProfileView
                            key={item._id}
                            item={item.actedOn}
                            deleteLiked={deleteLiked}
                            showDeleteIcon={true}
                            isLiked={true}
                            path="scrollView"
                          />
                        );
                      })}
                    </ScrollView>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.matchHeading}>Liked</Text>
                    <View style={styles.noDataList}>
                      <Text
                        style={[styles.noDataListText, styles.paddingLiked]}
                      >
                        Start swiping and giving likes to view profiles here.
                      </Text>
                      <BlurView
                        style={styles.likedTextBlur}
                        blurType="light"
                        blurAmount={2}
                        reducedTransparencyFallbackColor="white"
                      />
                    </View>
                  </View>
                )}
                <Spacer position="top" size={10} />
                {data?.allFavourite?.length > 0 ? (
                  <View>
                    <Row
                      justifyContent="space-between"
                      style={styles.headerPadding}
                    >
                      <Text style={styles.matchHeading}>Saved</Text>
                      <Pressable onPress={() => handleSetSeeAllState(2)}>
                        <Spacer position="right" size={12}>
                          <Text style={styles.seeAll}>See All</Text>
                        </Spacer>
                      </Pressable>
                    </Row>
                    <ScrollView
                      style={styles.paddingBottom20}
                      horizontal={true}
                    >
                      {data.allFavourite.map((item) => {
                        return (
                          <ProfileView
                            key={item._id}
                            item={item.favourite}
                            deleteFavourite={deleteFavourite}
                            showDeleteIcon={true}
                            isFavourite={true}
                            path="scrollView"
                          />
                        );
                      })}
                    </ScrollView>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.matchHeading}>Saved</Text>
                    <View style={styles.noDataList}>
                      <Text
                        style={[styles.noDataListText, styles.paddingSaved]}
                      >
                        Start saving profiles to like them later.
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            </ScrollView>
            <Modal visible={modalVisible}>
              <SafeAreaView style={styles.container}>
                <Row alignItems="center" style={styles.backArrowPadding}>
                  <Pressable onPress={() => toggleModal()}>
                    <Image
                      style={styles.backArrowSize}
                      source={require('../../../assets/images/icons/back-arrow.png')}
                    />
                  </Pressable>
                  <Text style={styles.headerText}>{seeAllState.title}</Text>
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
                            path="modalView"
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
