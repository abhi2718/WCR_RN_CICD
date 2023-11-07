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
import {Column, Row, Spacer} from '../../../../../../components/tools';
import {ChatAvatorModalProps} from '../../../../../../types/screen.type/communityChat';
import {styles} from './styles';
import {useViewModal} from './useViewModal';
import {ProfileModalSheet} from './components/modalSheet';

const ChatAvatorModal = (props: ChatAvatorModalProps) => {
  const {visible, name, image, senderId, toggleVisiblity} = useViewModal(props);
  return (
    <View>
      <TouchableOpacity onPress={toggleVisiblity}>
        {props.children}
      </TouchableOpacity>
      {
        visible &&  <ProfileModalSheet
        visible={visible}
        name={name}
        image={image}
        senderId={senderId}
        toggleVisiblity={toggleVisiblity}
      />
     }
    </View>
  );
};

export default ChatAvatorModal;
