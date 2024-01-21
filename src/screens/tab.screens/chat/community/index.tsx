import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { useViewModal } from './useViewModal';
import SwitchButton from './components/switchButton';
import AllGroups from './components/allGroups';
import { styles } from './styles';
import { HeaderDeck } from '../../../../components/header';
import { CometChatConversationsWithMessages } from '../../../../cometchat/src';
export default function CommunityChat() {
  const { state, setState, count } = useViewModal();
  const [showToggleSearchInput, settoggleSearchInput] = useState(false);
  const toggleSearchInput = () => {
    settoggleSearchInput((preValue) => !preValue);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.paddingH8}>
        <HeaderDeck
          isSearchIcon={false}
          isPrefrence={false}
          count={count}
          toggleSearchInput={toggleSearchInput}
        />
        <SwitchButton stage={state} setStage={setState} />
      </View>
      {state === 0 ? (
        <CometChatConversationsWithMessages isUserWindow={false} />
      ) : (
        <AllGroups
          toggleSearchInput={toggleSearchInput}
        />
      )}
    </SafeAreaView>
  );
}
