import React, { useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import { HeaderBar } from '../../../components/header';
import { Column, FullLoader, Spacer } from '../../../components/tools';
import { theme } from '../../../infrastructure/theme';
import { SwipeableListItem } from './components/tiles';
import { notificationStyle } from './notificationStyle';
import { useViewModal } from './useViewModal';
import { fonts } from '../../../infrastructure/theme/fonts';

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
      {notifications.notifications.length === 0 && (
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
      {notifications.notifications.length > 0 && (
        <FlatList
          data={notifications.notifications}
          renderItem={({ item, index }) => {
            if (index === notifications.notifications.length - 1) {
              return (
                <Spacer position="bottom" size={100}>
                  <View>
                    <Spacer position="top" size={40}>
                      <Text style={styles.notificationEndText}>
                        👋 That’s it for now!{' '}
                      </Text>
                    </Spacer>
                  </View>
                </Spacer>
              );
            }
            return (
              <SwipeableListItem
                item={item}
                onDelete={onDeleteItem}
                markAsRead={markAsRead}
                htmlTextConvertPlainText={htmlTextConvertPlainText}
              />
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  notificationEndText: {
    textAlign: 'center',
    fontSize: theme.fontSizes.h6,
    fontWeight: theme.fontWeights.semiBold,
    color: theme.colors.ui.text,
    fontFamily: fonts.body,
  },
});
