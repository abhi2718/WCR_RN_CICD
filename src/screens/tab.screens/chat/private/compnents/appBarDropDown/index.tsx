import { View, StyleSheet, Text, Image } from 'react-native';
import React from 'react';
import { AppBarMenu } from '../../../../../../components/AppBarMenu';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../../../navigation';

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
          name:user.name
        });
      },
    },
    {
      title: 'Block',
      onSelect: () => {},
    },
  ];
  return (
    <View style={styles.container}>
      <AppBarMenu memuList={memuList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
