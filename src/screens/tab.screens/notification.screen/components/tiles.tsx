import React, { useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  useWindowDimensions,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import RenderHtml from 'react-native-render-html';
import { NotificationType } from '../../../../types/screen.type/notification.type';
import { notificationStyles } from './notificationStyles';
import { Column, Row } from '../../../../components/tools';
import { unixToDate } from '../../../../utils/common.functions';
import { colors } from '../../../../infrastructure/theme/colors';

interface SwipeableListItemProps {
  item: NotificationType;
  onDelete: (key: string) => void;
  markAsRead: (id: string) => Promise<void>;
  htmlTextConvertPlainText: (data: string) => string;
}

export const SwipeableListItem: React.FC<SwipeableListItemProps> = ({
  item,
  onDelete,
  markAsRead,
  htmlTextConvertPlainText,
}) => {
  const swipeableRef = useRef<Swipeable>(null);
  const closeSwipeable = () => {};
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation,
    dragX: Animated.AnimatedInterpolation,
  ) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
    });
    return (
      <TouchableOpacity onPress={() => onDelete(item.key)}>
        <View
          style={{
            flex: 10,
            backgroundColor: colors.ui.primary,
            justifyContent: 'center',
          }}
        >
          <Animated.Text
            style={[
              {
                transform: [{ translateX: trans }],
              },
              notificationStyles.deletBtn,
            ]}
          >
            Delete
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Swipeable
      ref={swipeableRef}
      friction={2}
      rightThreshold={40}
      renderRightActions={renderRightActions}
      onSwipeableWillOpen={closeSwipeable}
    >
      <TouchableOpacity onPress={() => markAsRead(item._id)}>
        <View style={notificationStyles.container}>
          <Row gap={16}>
            <FastImage
              style={notificationStyles.profileImageStyle}
              source={{ uri: item.profile }}
            />
            <Column style={{ flex: 1 }} gap={10} justifyContent="space-between">
              <Text style={notificationStyles.notifyiMsg}>
                {htmlTextConvertPlainText(item.message)}
              </Text>
              <Text style={notificationStyles.createdAt}>
                {unixToDate(item.createdAt)}
              </Text>
            </Column>
          </Row>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};