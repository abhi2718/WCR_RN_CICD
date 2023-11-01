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
import {Column, Row, Spacer} from '../../../../../../components/tools';
import {ChatAvatorModalProps} from '../../../../../../types/screen.type/communityChat';
import {styles} from './styles';
import {useViewModal} from './useViewModal';

const ChatAvatorModal = (props: ChatAvatorModalProps) => {
  const {visible, name, image, senderId, toggleVisiblity} = useViewModal(props);
  return (
    <View>
      <TouchableOpacity onPress={toggleVisiblity}>
        {props.children}
      </TouchableOpacity>
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
              <Pressable>
                <Text> Message </Text>
              </Pressable>
            </Column>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default ChatAvatorModal;
