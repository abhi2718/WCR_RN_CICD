import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import {ChatAvatorModalProps} from '../../../../../../types/screen.type/communityChat';
import {useViewModal} from './useViewModal';
import {ProfileModalSheet} from './components/modalSheet';

const ChatAvatorModal = (props: ChatAvatorModalProps) => {
  const {visible, name, image, senderId, toggleVisiblity} = useViewModal(props);
  return (
    <View>
      <TouchableOpacity onPress={toggleVisiblity}>
        {props.children}
      </TouchableOpacity>
      {visible && (
        <ProfileModalSheet
          visible={visible}
          name={name}
          image={image}
          senderId={senderId}
          toggleVisiblity={toggleVisiblity}
        />
      )}
    </View>
  );
};

export default ChatAvatorModal;
