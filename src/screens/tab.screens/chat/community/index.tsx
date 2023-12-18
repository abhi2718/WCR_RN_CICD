import React, { useState } from 'react';
import { View, Image, Text, SafeAreaView } from 'react-native';
import { useViewModal } from './useViewModal';
import SwitchButton from './components/switchButton';
import AllGroups from './components/allGroups';
import {
  Column,
  Logo,
  Row,
  ScreenWrapper,
  dimensions,
} from '../../../../components/tools';
import { styles } from './styles';
import { HeaderDeck } from '../../../../components/header';
//import { CometChatConversationsWithMessages } from '../../../../cometchat/chat-uikit-react-native/src';
export default function CommunityChat() {
  const { state, setState, count } = useViewModal();

  const [showToggleSearchInput, settoggleSearchInput] = useState(false);

  const toggleSearchInput = () => {
    settoggleSearchInput((preValue) => !preValue);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.paddingH16}>
      <HeaderDeck
          isSearchIcon={state !== 0}
          isPrefrence={false}
          count={count}
          toggleSearchInput={toggleSearchInput}
        />
        <SwitchButton stage={state} setStage={setState} />
      </View>
      {/* {state === 0 ? (
        <CometChatConversationsWithMessages isUserWindow={false} />
      ) : (
        <AllGroups
          toggleSearchInput={toggleSearchInput}
          showToggleSearchInput={showToggleSearchInput}
        />
      )} */}
    </SafeAreaView>
  );
}
