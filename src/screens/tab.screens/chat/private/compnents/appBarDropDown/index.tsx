import { View, StyleSheet } from 'react-native';
import React from 'react';
import { AppBarMenu } from '../../../../../../components/AppBarMenu';
import { AlertScreen } from '../../../../../../components/alert';
import { useViewModal } from './useViewModal';
import { AppBarDropDownProps } from '../../../../../../types/screen.type/home.type';
export const AppBarDropDown = (props: AppBarDropDownProps) => {
  const {
    ismatched,
    unmatch,
    showModal,
    showUnmatchModal,
    handleUserBlock,
    memuList,
    user,
    setShowModal,
    setUnmatchModal,
  } = useViewModal(props);
  return (
    <View style={[styles.container, styles.position]}>
      <AppBarMenu memuList={memuList} />
      <AlertScreen
        showModal={showModal}
        setShowModal={setShowModal}
        title="Block"
        description={`Are you sure you want to 
        block ${user.getName()} ?`}
        onPress={handleUserBlock}
      />
      <AlertScreen
        showModal={showUnmatchModal}
        setShowModal={setUnmatchModal}
        title="Unmatch"
        description={`Are you sure you want to 
        unmatch ${user.getName()} ?`}
        onPress={() => unmatch()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  position: {
    position: 'absolute',
    top: 20,
    right: 0,
  },
});
