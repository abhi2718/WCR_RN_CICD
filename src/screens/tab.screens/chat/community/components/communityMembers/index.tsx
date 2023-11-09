import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Modal,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {Row} from '../../../../../../components/tools';
import {Member} from './components';
import {styles} from './styles';
import {useViewMdal} from './useViewModal';
import { CommunityMembersProps } from '../../../../../../types/screen.type/communityChat';

export const CommunityMembers = (props:CommunityMembersProps) => {
  const {members, showMembers, toggleSetShowMembers} = useViewMdal(props);
  return (
    <View style={styles.container}>
      {!showMembers && (
        <Pressable onPress={toggleSetShowMembers}>
          <Row>
            <Text>Members</Text>
          </Row>
        </Pressable>
      )}
      {showMembers && (
        <Modal visible={showMembers}>
          <SafeAreaView>
            <Pressable onPress={toggleSetShowMembers}>
              <Row>
                <Text>x</Text>
              </Row>
            </Pressable>
            <ScrollView>
              {members.map((member, index) => (
                <Member key={index} member={member} />
              ))}
            </ScrollView>
          </SafeAreaView>
        </Modal>
      )}
    </View>
  );
};
