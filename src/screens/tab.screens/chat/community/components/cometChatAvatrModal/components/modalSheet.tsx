import React from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Text,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';
import {CometChat} from '@cometchat/chat-sdk-react-native';
import {Column, Row, Spacer} from '../../../../../../../components/tools';
import {ChatAvatorModalProps} from '../../../../../../../types/screen.type/communityChat';
import {styles} from '../styles';
import {CometChatUsersWithMessages} from '@cometchat/chat-uikit-react-native/src/CometChatUsersWithMessages';
import {CometChatMessages} from '../../../../../../../cometChat/src';
import {useViewMdal} from './useviewModal';

export const ProfileModalSheet = (props) => {
  const {
    visible,
    toggleVisiblity,
    image,
    name,
    senderId,
    user,
    toggleShowChatWindow,
    showChatWindow,
  } = useViewMdal(props);
  return (
    <Modal visible={visible}>
      <SafeAreaView style={styles.safeAreaViewStyle}>
        {!showChatWindow && (
          <>
            <View style={styles.containerStyle}>
              <Spacer position="left" size={16}>
                <Pressable onPress={toggleVisiblity}>
                  <Text>x</Text>
                </Pressable>
              </Spacer>
              <Row justifyContent="center">
                <View>
                  {image && <Image style={styles.imageStyle} source={image} />}
                  {name && <Text style={styles.userNameStyle}> {name} </Text>}
                </View>
              </Row>
              <Column alignItems="center">
                <Spacer position="bottom" size={16}>
                  <Pressable>
                    <Text> View Profile </Text>
                  </Pressable>
                </Spacer>
                <Pressable onPress={toggleShowChatWindow}>
                  <Text> Message </Text>
                </Pressable>
              </Column>
            </View>
          </>
        )}
        {showChatWindow && user && (
          <CometChatMessages handleBackBtn={toggleVisiblity} user={user} />
        )}
      </SafeAreaView>
    </Modal>
  );
};
