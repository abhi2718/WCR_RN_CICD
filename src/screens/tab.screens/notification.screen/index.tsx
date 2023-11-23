import React, { useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity, Animated } from 'react-native';
import { HeaderBar } from '../../../components/header';
import { FullLoader } from '../../../components/tools';
import { SwipeableListItem } from './components/tiles';
import { styles } from './styles';
import { useViewModal } from './useViewModal';

export const NotificationScreen = () => {
  const {
    onDeleteItem,
    notifications,
    notificationLoading,
    markAsRead,
    handleEndReached,
    flatListRef,
    htmlTextConvertPlainText
  } = useViewModal();
  if (notificationLoading) {
    return (
      <View>
        <HeaderBar />
        <FullLoader />
      </View>
    );
  }
  return (
    <View>
      <HeaderBar />
      {
        !notifications.notifications.length && (<View>
          <Text>No new notifications!</Text>
            <Text>Stay tuned for updates and check your settings in the meantime.</Text>
        </View>) 
      }
      <FlatList
        data={notifications.notifications}
        ref={flatListRef}
        renderItem={({ item }) => (
          <SwipeableListItem
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
    </View>
  );
};
