import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  SafeAreaView,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { Column, Row, Spacer } from '../../../../../../../components/tools';
import { styles } from './styles';
import { MemberProps } from '../../../../../../../types/screen.type/communityChat';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../../../../navigation';
import { ProfileModal } from '../../../../../../../components/profile.component';

export const Member = (props: MemberProps) => {
  const { member, toggleSetShowMembers } = props;
  const [showModal, setModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const toggleModal = () => {
    setModal((oldValue) => !oldValue);
  };
  const togglePrfileModal = (state?: boolean) =>
    setShowProfileModal((oldValue) => (state ? state : !oldValue));
  const navigation = useNavigation();
  const navigateToChatWindow = () => {
    toggleModal();
    toggleSetShowMembers();
    navigation.navigate(ROUTES.CommunityPrivateChat, {
      senderId: member.getUid(),
      name: member.getName(),
    });
  };
  return (
    <View>
      <Spacer position="bottom" size={20}>
        <Pressable onPress={toggleModal}>
          <Row justifyContent="space-between">
            <Row alignItems="center">
              <FastImage
                style={styles.imageStyle}
                source={{
                  uri: member.getAvatar(),
                }}
              />
              <Spacer position="left" size={10}>
                <Text style={styles.memberNameText}>{member.getName()}</Text>
              </Spacer>
            </Row>
            <Row alignItems="center">
              <Text style={styles.scopeMemberText}>{member.getScope()}</Text>
            </Row>
          </Row>
        </Pressable>
      </Spacer>
      <Modal visible={showModal}>
        <SafeAreaView>
          <Spacer position='left' size={16}>
          <Pressable onPress={toggleModal}>
            <Image
              source={require('../../../../../../../assets/images/icons/back-arrow.png')}
              style={styles.arrowStyle}
            />
          </Pressable>
         </Spacer>
          <Spacer position="bottom" size={10}>
            <Column alignItems="center">
              <FastImage
                style={styles.profileAvatar}
                source={{
                  uri: member.getAvatar(),
                }}
              />
              <Spacer position="top" size={10}>
                <Text style={styles.memberName}>{member.getName()}</Text>
              </Spacer>
              <Spacer position="top" size={20}>
                <Row justifyContent="space-between" gap={20}>
                  <Pressable
                    onPress={() => togglePrfileModal()}
                    style={styles.viewProfileBtn}
                  >
                    <Text style={styles.viewBtnText}>View Profile</Text>
                  </Pressable>
                  <Pressable
                    onPress={navigateToChatWindow}
                    style={styles.messageBtn}
                  >
                    <Text style={styles.msgBtnText}>Message</Text>
                  </Pressable>
                </Row>
              </Spacer>
              <ProfileModal
                showModal={showProfileModal}
                toggleModal={togglePrfileModal}
                userId={member.getUid()}
                showDisLike={true}
                showLike={true}
                showSave={true}
              />
            </Column>
          </Spacer>
        </SafeAreaView>
      </Modal>
    </View>
  );
};
