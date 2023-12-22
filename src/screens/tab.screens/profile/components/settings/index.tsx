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
import { HeaderBar } from '../../../../../components/header';

export const SettingScreen = () => {
  const { lists, handleToggleModal, showModal, link, handleShare } =
    useViewModal();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderBar isLogo={false} isText={true} text="Settings" />
        <Spacer position="top" size={15} />
        {lists.map((item) => (
          <Pressable key={item.id} onPress={item.onPress}>
            <Spacer position="bottom" size={20}>
              <Row alignItems="center" justifyContent="space-between">
                <Row alignItems="center">
                  <Image
                    resizeMode="contain"
                    style={styles.iconStyle}
                    source={item.imagePath}
                  />
                  <Spacer position="left" size={15}>
                    <Text style={styles.text}>{item.title}</Text>
                  </Spacer>
                </Row>
                <Image
                  style={styles.arrowStyle}
                  resizeMode="contain"
                  source={require('../../../../../assets/images/settings/Next.png')}
                />
              </Row>
            </Spacer>
          </Pressable>
        ))}
      </View>
      <Modal visible={showModal}>
        <SafeAreaView>
          <View style={{ height: dimensions.height, width: dimensions.width }}>
            <Row>
              <Spacer position="left" size={15}>
                <Pressable onPress={handleToggleModal}>
                  <Image
                    style={styles.arrowStyle}
                    resizeMode="contain"
                    source={require('../../../../../assets/images/icons/crossIcon.png')}
                  />
                </Pressable>
              </Spacer>
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
    </SafeAreaView>
  );
};
