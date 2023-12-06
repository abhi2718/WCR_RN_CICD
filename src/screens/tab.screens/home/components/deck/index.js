import React from 'react';
import { View } from 'react-native';
import { styles } from './homeStyle';
import { useViewModal } from './homeViewModal';
import {
  FullLoader,
  Spacer,
  isAndroid,
  Row,
  Logo,
} from '../../../../../components/tools';
import CardCompoent from './components/card.component/card';
import CardStack from './components/swiper';
import { SearchModal } from './components/searchModal';
import { RunOutOffProfile } from './components/runOutOffProfile';
import { PausedProfile } from './components/pausedProfile';
import { HeaderDeck } from '../../../../../components/header';

export default function Deck() {
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
  } = useViewModal();
  if (isLoading) {
    return <FullLoader />;
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
        />
      </View>
      <Spacer position="bottom" size={8} />
      <CardStack
        onSwipedLeft={handleDisLike}
        onSwipedRight={handleLike}
        horizontalThreshold={isAndroid ? 10 : 10}
        verticalSwipe={false}
        ref={cardRef}
      >
        {profiles.map((item, index) => (
          <CardCompoent
            height={isAndroid ? androidActualHeight - 64 : iOSActualHeight - 70}
            key={index}
            item={item}
            cardRef={cardRef}
          />
        ))}
      </CardStack>
      {/* <RunOutOffProfile /> */}
      {/* <PausedProfile /> */}
      <SearchModal
        showSearchModal={showSearchModal}
        toggleSearchModal={toggleSearchModal}
        handleSetProfiles={handleSetProfiles}
      />
    </View>
  );
}
