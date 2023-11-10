import React from 'react';
import {View, Image} from 'react-native';
import {CometChatConversationsWithMessages} from '../../../../cometChat/src';
import {useViewModal} from './useViewModal';
import SwitchButton from './components/switchButton';
import AllGroups from './components/allGroups';
import {Logo, Row} from '../../../../components/tools';
import {styles} from './styles';

export default function CommunityChat() {
  const {state, setState} = useViewModal();
  return (
    <View style={styles.container}>
      <View style={styles.switchContainerStyle}>
        <Row
          alignItems="center"
          justifyContent="space-between"
          style={styles.rowStyle}>
          <Image
            style={styles.bellStyle}
            source={require('../../../../assets/images/Bell.png')}
          />
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
  );
}
