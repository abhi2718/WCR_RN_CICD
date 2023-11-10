import React, { useState } from 'react';
import { View, Text, Modal, Pressable, SafeAreaView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Column, Row, Spacer } from '../../../../../../../components/tools';
import { styles } from './styles';
import { MemberProps } from '../../../../../../../types/screen.type/communityChat';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../../../../navigation';

export const Member = (props: MemberProps) => {
  const { member,toggleSetShowMembers } = props;
  const [showModal, setModal] = useState(false);
  const toggleModal = () => {
    setModal((oldValue) => !oldValue);
  };
  const navigation = useNavigation();
  const navigateToChatWindow = () => {
    toggleModal();
    toggleSetShowMembers();
    navigation.navigate(ROUTES.CommunityPrivateChat, {
      senderId: member.getUid(),
      name: member.getName()
    }); 
  }
  return (
    <View>
      <Spacer position="bottom" size={10}>
        <Pressable onPress={toggleModal}>
          <Row alignItems="center">
            <FastImage
              style={styles.imageStyle}
              source={{
                uri: member.getAvatar(),
              }}
            />
            <Spacer position="left" size={10}>
              <Text>{member.getName()}</Text>
            </Spacer>
          </Row>
        </Pressable>
      </Spacer>
      <Modal visible={showModal}>
        <SafeAreaView>
          <Pressable onPress={toggleModal}>
            <Text>x</Text>
          </Pressable>
          <Spacer position="bottom" size={10}>
            <Column alignItems="center">
              <FastImage
                style={styles.imageStyle}
                source={{
                  uri: member.getAvatar(),
                }}
              />
              <Spacer position="left" size={10}>
                <Text>{member.getName()}</Text>
              </Spacer>
              <Spacer position="top" size={80}>
                <Text>View Profile</Text>
              </Spacer>
              <Pressable onPress={navigateToChatWindow}>
              <Spacer position="top" size={10}>
                <Text>Message</Text>
              </Spacer>
              </Pressable>
            </Column>
          </Spacer>
        </SafeAreaView>
      </Modal>
    </View>
  );
};
