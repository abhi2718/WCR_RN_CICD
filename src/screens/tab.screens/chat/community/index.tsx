import React from 'react';
import {View, Image,Text} from 'react-native';
import {CometChatConversationsWithMessages} from '../../../../cometChat/src';
import {useViewModal} from './useViewModal';
import SwitchButton from './components/switchButton';
import AllGroups from './components/allGroups';
import {Column, Logo, Row,ScreenWrapper} from '../../../../components/tools';
import {styles} from './styles';
//import { CometChatConversationsWithMessages } from '@cometchat/chat-uikit-react-native';
export default function CommunityChat() {
  const {state, setState,count} = useViewModal();
  return (
    <ScreenWrapper>
         <View style={styles.container}>
      <View style={styles.switchContainerStyle}>
        <Row
          alignItems="center"
          justifyContent="space-between"
          style={styles.rowStyle}>
          <Column>
          <Text>{count}</Text>
          <Image
            style={styles.bellStyle}
            source={require('../../../../assets/images/Bell.png')}
          />
          </Column>
          <Logo width={60} height={40} />
          <Image
            style={styles.searchBarStyle}
            source={require('../../../../assets/images/Magnifier.png')}
          />
        </Row>
        <SwitchButton stage={state} setStage={setState} />
      </View>
      {state === 0 ? <CometChatConversationsWithMessages
        isUserWindow={false}
      /> : <AllGroups />}
    </View>
    </ScreenWrapper>
  );
}
