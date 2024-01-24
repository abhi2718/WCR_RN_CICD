import React from 'react';
import { View, Image, Pressable, Text } from 'react-native';
import { styles } from './homeStyle';
import { useViewModal } from './homeViewModal';
import {
  FullLoader,
  Spacer,
  isAndroid,
  Row,
  Logo,
  dimensions,
} from '../../../../../components/tools';
import CardCompoent from './components/card.component/card';
import CardStack from './components/swiper';
import { SearchModal } from './components/searchModal';
import { RunOutOffProfile } from './components/runOutOffProfile';
import { PausedProfile } from './components/pausedProfile';
import { HeaderDeck } from '../../../../../components/header';
import { MatchScreen } from './components/matchScreen';
export default function Deck({ route }) {
  const {
    isLoading,
    handleLike,
    cardRef,
    handleDisLike,
    profiles,
    iOSActualHeight,
    androidActualHeight,
    toggleSearchModal,
    showSearchModal,
    handleSetProfiles,
    goToNotification,
    count,
    user,
    clearProfile,
    isMatch,
    handleHideOfIsMatchScreen,
    startChat,
    handleUnDoFeature,
  } = useViewModal(route);
  if (isLoading) {
    return <FullLoader />;
  }
  if (isMatch?.status) {
    return (
      <MatchScreen
        isMatch={isMatch}
        startChat={startChat}
        handleHideOfIsMatchScreen={handleHideOfIsMatchScreen}
      />
    );
  }
  return (
    <View
      showsVerticalScrollIndicator={false}
      style={{
        ...styles.container,
        height: isAndroid ? androidActualHeight : iOSActualHeight,
      }}
    >
      <View style={styles.headerViewStyle}>
        <HeaderDeck
          count={count}
          toggleSearchModal={toggleSearchModal}
          goToNotification={goToNotification}
          handleUnDoFeature={handleUnDoFeature}
        />
        {/* <Pressable onPress={handleUnDoFeature}>
          <Text style={{ fontFamily: 'Urbanist-Regular' }}>Undo</Text>
        </Pressable> */}
      </View>
      <Spacer position="bottom" size={8} />
      <>
        {!user?.isVisible ? (
          <PausedProfile />
        ) : user?.dailyClickActions < 6 && profiles?.length > 0 ? (
          <>
            <CardStack
              onSwipedLeft={handleDisLike}
              onSwipedRight={handleLike}
              horizontalThreshold={isAndroid ? 10 : 10}
              verticalSwipe={false}
              ref={cardRef}
              onSwipedAll={clearProfile}
              swipeBackCard={true}
            >
              {profiles.map((item, index) => {
                if (!user?.homeInfoModal && index === 0) {
                  return (
                    <View
                      key={index}
                      style={styles.infoScreenContainer}
                      height={
                        isAndroid
                          ? androidActualHeight - 64
                          : iOSActualHeight - 70
                      }
                    >
                      <Image
                        style={styles.infoScreen}
                        source={require('../../../../../assets/images/infoScreen.png')}
                        resizeMode="stretch"
                      />
                    </View>
                  );
                }
                return (
                  <CardCompoent
                    height={
                      isAndroid
                        ? androidActualHeight - 64
                        : iOSActualHeight - 70
                    }
                    key={index}
                    item={item}
                    cardRef={cardRef}
                  />
                );
              })}
            </CardStack>
          </>
        ) : (
          <>
            <RunOutOffProfile />
          </>
        )}
      </>
      <SearchModal
        showSearchModal={showSearchModal}
        toggleSearchModal={toggleSearchModal}
        handleSetProfiles={handleSetProfiles}
      />
    </View>
  );
}
