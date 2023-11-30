import React from 'react';
import { View, Text, SafeAreaView, Image, Pressable } from 'react-native';
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
      style={{
        ...styles.container,
        height: isAndroid ? androidActualHeight : iOSActualHeight,
      }}
    >
      <View style={styles.headerViewStyle}>
        <Row justifyContent="space-between" alignItems="center">
          <Row>
            <Pressable onPress={goToNotification}>
              <Text>{count}</Text>
              <Image
                resizeMode="contain"
                style={styles.iconStyle}
                source={require('../../../../../assets/images/notification.png')}
              />
            </Pressable>
            <Spacer position="left" size={10}>
              <Pressable onPress={toggleSearchModal}>
                <Image
                  style={styles.iconStyle}
                  source={require('../../../../../assets/images/Magnifier.png')}
                />
              </Pressable>
            </Spacer>
          </Row>
          <Logo width={20} height={20} />
          <Pressable>
            <Image
              style={styles.iconStyle}
              source={require('../../../../../assets/images/Filter.png')}
            />
          </Pressable>
        </Row>
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
      <SearchModal
        showSearchModal={showSearchModal}
        toggleSearchModal={toggleSearchModal}
        handleSetProfiles={handleSetProfiles}
      />
    </View>
  );
}
