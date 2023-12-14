import React from 'react';
import { View, Text, Pressable, ScrollView, Image } from 'react-native';
import { Switch } from 'react-native-paper';
import { AlertScreen } from '../../../../../../../components/alert';
import { Row, Spacer } from '../../../../../../../components/tools';
import { styles } from './styles';
import { useViewModal } from './useViewModal';

export const AccountSettingScreen = () => {
  const {
    user,
    goBack,
    onToggleSwitch,
    pauseUser,
    isSwitchOn,
    showModal,
    setShowModal,
    deleteUser
  } = useViewModal();
  return (
    <View style={styles.container}>
      <Row justifyContent="space-between" alignItems="center">
        {user.isVisible && <Text>Pause my account</Text>}
        {!user.isVisible && <Text>Unpause my account</Text>}
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </Row>
      <Spacer position="top" size={10}>
        <Row justifyContent="space-between" alignItems="center">
          <Text>Delete my account</Text>
          <Pressable onPress={()=>setShowModal(true)}>
          <Text>Delete</Text>
          </Pressable>
        </Row>
      </Spacer>
      <AlertScreen
        showModal={showModal}
        setShowModal={setShowModal}
        title="Delete Account?"
        description="Are you sure you want to 
        delete your account ?"
        onPress={deleteUser}
      />
    </View>
  );
};
