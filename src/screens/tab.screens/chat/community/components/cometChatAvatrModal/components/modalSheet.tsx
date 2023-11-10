import React from 'react';
import {View, Modal, Text, SafeAreaView, Pressable, Image} from 'react-native';
import {CometChat} from '@cometchat/chat-sdk-react-native';
import { Column, Row, Spacer } from '../../../../../../../components/tools';
import { modalStyle } from '../styles';
import { CometChatMessages } from '../../../../../../../cometChat/src';
import { useViewMdal } from './useviewModal';
import { ProfileModalSheetProps } from '../../../../../../../types/screen.type/privateChat';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../../../../navigation';

export const ProfileModalSheet = (props: ProfileModalSheetProps) => {
  const { visible, toggleVisiblity, image, name, navigateToPrivateChat } =
    useViewMdal(props);
  return (
    <Modal visible={visible}>
      <SafeAreaView style={modalStyle.safeAreaViewStyle}>
        <View style={modalStyle.containerStyle}>
          <Pressable onPress={toggleVisiblity}>
            <Image
              resizeMode="contain"
              style={modalStyle.crossIcon}
              source={require('../../../../../../..//assets/images/icons/crossIcon.png')}
            />
          </Pressable>
          <Column alignItems="center">
            {image && (
              <Image
                resizeMode="cover"
                style={modalStyle.imageStyle}
                source={image}
              />
            )}

            {name && <Text style={modalStyle.userNameStyle}> {name} </Text>}
            <Row gap={30}>
              <Pressable onPress={navigateToPrivateChat}>
                <Text style={modalStyle.messageBtn}> Message </Text>
              </Pressable>
              <Pressable>
                <Text style={modalStyle.profileBtn}>Check Profile </Text>
              </Pressable>
            </Row>
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
