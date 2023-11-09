import React from 'react';
import {View, Modal, Text, SafeAreaView, Pressable, Image} from 'react-native';
import {CometChat} from '@cometchat/chat-sdk-react-native';
import { Column, Row, Spacer } from '../../../../../../../components/tools';
import {styles} from '../styles';
import {CometChatMessages} from '../../../../../../../cometChat/src';
import {useViewMdal} from './useviewModal';
import {ProfileModalSheetProps} from '../../../../../../../types/screen.type/privateChat';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../../../../../navigation';

export const ProfileModalSheet = (props: ProfileModalSheetProps) => {
  const {
    visible,
    toggleVisiblity,
    image,
    name,
    navigateToPrivateChat
  } = useViewMdal(props);
  return (
    <Modal visible={visible}>
      <SafeAreaView style={styles.safeAreaViewStyle}>
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
            <Pressable
              onPress={navigateToPrivateChat}>
              <Text> Message </Text>
            </Pressable>
          </Column>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export const PrivateChatWindowWrapper = ({ route }) => {
  const {senderId, name} = route.params;
  const navigation = useNavigation();
  let user = new CometChat.User(senderId, name);
  return (
    <View style={{flex: 1}}>
      <CometChatMessages
        handleBackBtn={() => {
          navigation.navigate(ROUTES.PrivateChatTab);
        }}
        user={user}
      />
    </View>
  );
};
