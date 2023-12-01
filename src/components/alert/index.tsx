import React from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AlertScreenType } from '../../types/components/alert.type';
import { Column, dimensions, Row, Spacer } from '../tools';

export const AlertScreen = (props:AlertScreenType) => {
  const { showModal, setShowModal, title, description, onPress } = props;
  const handleCancel = () => {
    setShowModal(false);
  };
  const handlePress = () => {
    setShowModal(false);
    onPress();
  };
  return (
    <Modal transparent={true} visible={showModal}>
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={{ height: 200 - 32, justifyContent: 'space-between' }}>
            <View>
              <Row justifyContent="center">
                <Text>{title}</Text>
              </Row>
              <Spacer position="top" size={16}>
                <Row justifyContent="center">
                  <Text>{description}</Text>
                </Row>
              </Spacer>
            </View>
            <Row justifyContent="space-between">
              <Pressable onPress={handleCancel}>
                <Text>Cancel</Text>
              </Pressable>
              <Pressable onPress={handlePress}>
                <Text>Yes</Text>
              </Pressable>
            </Row>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  mainContainer: {
    padding: 16,
    height: 200,
    width: dimensions.width - 80,
    borderRadius: 16,
    backgroundColor: '#fff',
  },
});
