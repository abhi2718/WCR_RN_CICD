import React, { useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Animated,
  Image,
  SafeAreaView,
} from 'react-native';
import { HeaderBar } from '../../../components/header';
import { Column, FullLoader } from '../../../components/tools';
import { SwipeableListItem } from './components/tiles';
import { notificationStyle } from './notificationStyle';
import { useViewModal } from './useViewModal';

export const NotificationScreen = () => {
  const {
    onDeleteItem,
    notifications,
    notificationLoading,
    markAsRead,
    handleEndReached,
    flatListRef,
    htmlTextConvertPlainText,
  } = useViewModal();
  if (notificationLoading) {
    return (
      <SafeAreaView style={notificationStyle.padding}>
        <View style={notificationStyle.header}>
          <HeaderBar />
        </View>
        <FullLoader />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={notificationStyle.container}>
      <View style={notificationStyle.header}>
        <HeaderBar />
      </View>
      {!notifications.notifications.length && (
        <View style={notificationStyle.content}>
          <Column gap={25} alignItems="center">
            <Text style={notificationStyle.subHeading}>Notifications</Text>
            <Image
              style={notificationStyle.pendingIcon}
              resizeMode="contain"
              source={require('../../../assets/images/icons/notificationBellIcon.png')}
            />
            <Text style={notificationStyle.text}>
              Yet to receive notifications. {`\n`} Please check back later for
              any updates.
            </Text>
          </Column>
        </View>
      )}
      <FlatList
        data={notifications.notifications}
        ref={flatListRef}
        renderItem={({ item }) => (
          <SwipeableListItem
            style={notificationStyle.notifications}
            item={item}
            onDelete={onDeleteItem}
            markAsRead={markAsRead}
            htmlTextConvertPlainText={htmlTextConvertPlainText}
          />
        )}
        onEndReached={() => {
          handleEndReached();
        }}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
};
