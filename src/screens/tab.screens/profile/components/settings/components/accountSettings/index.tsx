import React from 'react';
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { Switch } from 'react-native-paper';
import { AlertScreen } from '../../../../../../../components/alert';
import { Row, Spacer } from '../../../../../../../components/tools';
import { styles } from './styles';
import { useViewModal } from './useViewModal';
import { HeaderBar } from '../../../../../../../components/header';
import { colors } from '../../../../../../../infrastructure/theme/colors';

export const AccountSettingScreen = () => {
  const {
    user,
    onToggleSwitch,
    isSwitchOn,
    showModal,
    setShowModal,
    deleteUser,
    loading,
    voidFunc,
  } = useViewModal();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderBar isLogo={false} isText={true} text="Account settings" />
        <Spacer position="top" size={20}>
          <Row
            style={styles.row}
            justifyContent="space-between"
            alignItems="center"
          >
            {user.isVisible && (
              <Text style={styles.text}>Pause my account</Text>
            )}
            {!user.isVisible && (
              <Text style={styles.text}>Unpause my account</Text>
            )}
            <Switch
              trackColor={{ true: colors.ui.primary, false: 'grey' }}
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
            />
          </Row>
        </Spacer>
        <Spacer position="top" size={30}>
          <Row
            style={styles.row}
            justifyContent="space-between"
            alignItems="center"
          >
            <Text style={styles.text}>Delete my account</Text>
            <Pressable onPress={loading ? voidFunc : () => setShowModal(true)}>
              <Text style={styles.deletBtn}>Delete</Text>
              {loading && <ActivityIndicator color="red" />}
            </Pressable>
          </Row>
        </Spacer>
        <AlertScreen
          showModal={showModal}
          setShowModal={setShowModal}
          title="Delete Account?"
          description="Are you sure you want to delete your account ?"
          onPress={deleteUser}
        />
      </View>
    </SafeAreaView>
  );
};
