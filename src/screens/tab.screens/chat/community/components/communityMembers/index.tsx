import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Modal,
  Pressable,
  SafeAreaView,
  Image,
} from 'react-native';
import { Column, Row, Spacer } from '../../../../../../components/tools';
import { Member } from './components';
import { styles } from './styles';
import { useViewMdal } from './useViewModal';
import { CommunityMembersProps } from '../../../../../../types/screen.type/communityChat';
import ChatAvatorModal from '../cometChatAvatrModal';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../../../navigation';

export const CommunityMembers = (props: CommunityMembersProps) => {
  const { members, showMembers, toggleSetShowMembers } = useViewMdal(props);
  return (
    <View style={styles.container}>
      {!showMembers && (
        <Pressable onPress={toggleSetShowMembers}>
          <Row justifyContent="space-between">
            <Row alignItems="center" gap={4}>
              <Image
                source={require('../../../../../../assets/images/icons/membersIcon.png')}
                style={styles.iconSize}
              />
              <Text style={styles.memberText}>Members</Text>
            </Row>
            <Row alignItems="center" gap={4}>
              <Text style={styles.memberTextView}>View</Text>
              <Image
                source={require('../../../../../../assets/images/icons/buttonRightArrow.png')}
                style={styles.iconArrow}
              />
            </Row>
          </Row>
        </Pressable>
      )}
      {showMembers && (
        <Modal visible={showMembers}>
          <SafeAreaView>
            <View style={[styles.headerContainer, styles.box]}>
              <Row justifyContent="space-between" alignItems="center">
                <Row>
                  <Text style={styles.groupHeading}>Group Members</Text>
                </Row>
                <Pressable onPress={toggleSetShowMembers}>
                  <Row>
                    <Image
                      source={require('../../../../../../assets/images/icons/crossIcon.png')}
                      style={styles.iconCross}
                    />
                  </Row>
                </Pressable>
              </Row>
            </View>
            <ScrollView style={styles.memberContainer}>
              <Spacer position="top" size={20}>
                <Row justifyContent="space-between">
                  <Text style={styles.nameHeading}>Name</Text>
                  <Text style={styles.nameHeading}>Scope</Text>
                </Row>
              </Spacer>
              {members.map((member, index) => (
                <Member
                  toggleSetShowMembers={toggleSetShowMembers}
                  key={index}
                  member={member}
                />
              ))}
            </ScrollView>
          </SafeAreaView>
        </Modal>
      )}
    </View>
  );
};
