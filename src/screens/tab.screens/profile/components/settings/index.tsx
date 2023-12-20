import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  Modal,
  SafeAreaView,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { dimensions, Row, Spacer } from '../../../../../components/tools';
import { styles } from './styles';
import { useViewModal } from './useViewModal';

export const SettingScreen = () => {
  const { lists, handleToggleModal, showModal, link, handleShare } = useViewModal();
  return (
    <View style={styles.container}>
      {lists.map((item) => (
        <Pressable key={item.id} onPress={item.onPress}>
          <Spacer position="bottom" size={20}>
            <Row alignItems="center" justifyContent="space-between">
              <Row alignItems="center">
                <Image style={styles.iconStyle} source={item.imagePath} />
                <Spacer position="left" size={20}>
                  <Text>{item.title}</Text>
                </Spacer>
              </Row>
              <Image
                source={require('../../../../../assets/images/settings/Next.png')}
              />
            </Row>
          </Spacer>
        </Pressable>
      ))}
      <Modal visible={showModal}>
        <SafeAreaView>
          <View style={{ height: dimensions.height, width: dimensions.width }}>
            <Row>
              <Pressable onPress={handleToggleModal}>
                <Text>X</Text>
              </Pressable>
            </Row>
            <WebView
              source={{ uri: link }}
              style={{
                height: dimensions.height - 100,
                width: dimensions.width,
              }}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};
