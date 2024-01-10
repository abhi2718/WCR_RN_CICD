import { View, StyleSheet, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { AppBarMenu } from '../../../../../../components/AppBarMenu';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../../../navigation';
import { CometChat } from '../../../../../../cometchat/sdk/CometChat';
import { AlertScreen } from '../../../../../../components/alert';

export const AppBarDropDown = (props) => {
  const { user } = props;
  const navigation = useNavigation();
  const memuList = [
    {
      title: 'Unmatch',
      onSelect: () => {},
    },
    {
      title: 'Media',
      onSelect: () => {
        navigation.navigate(ROUTES.PrivateChatMediaScreen, { uid: user.uid });
      },
    },
    {
      title: 'Report',
      onSelect: () => {
        navigation.navigate(ROUTES.Report, {
          userId: user.uid,
          name: user.name,
        });
      },
    },
    {
      title: 'Block',
      onSelect: async () => {
        setShowModal(true);
      },
    },
  ];
  const handleUserBlock = async () => {
    try {
      const blockList = await CometChat.blockUsers([user.uid]);
    } catch (error) {}
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <AppBarMenu memuList={memuList} />
      <AlertScreen
        showModal={showModal}
        setShowModal={setShowModal}
        title="Block"
        description={`Are you sure you want to 
        block ${user.name} ?`}
        onPress={handleUserBlock}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
