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
import { styles } from './styles';
import { Column, Row } from '../../../../components/tools';
import { unixToDate } from '../../../../utils/common.functions';

interface SwipeableListItemProps {
  item: NotificationType;
  onDelete: (key: string) => void;
  markAsRead: (id: string) => Promise<void>;
}

export const SwipeableListItem: React.FC<SwipeableListItemProps> = ({
  item,
  onDelete,
  markAsRead
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
          style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}
        >
          <Animated.Text
            style={{
              color: 'white',
              paddingHorizontal: 10,
              transform: [{ translateX: trans }],
            }}
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
      <TouchableOpacity onPress={()=>markAsRead(item._id)}>
        <View style={styles.container}>
          <Row>
            <FastImage
              style={styles.profileImageStyle}
              source={{ uri: item.profile }}
            />
            <Column justifyContent="space-between">
              <View style={{backgroundColor:item.isRead?"#fff":"red"}}>
              <RenderHtml
                contentWidth={200}
                source={{ html: `${item.message}` }}
              />
              </View>
              <Text>{unixToDate(item.createdAt)}</Text>
            </Column>
          </Row>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};
