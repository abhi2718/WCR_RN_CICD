import React from 'react';
import { View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {
  dimensions,
  FullLoader,
  Spacer,
} from '../../../../../../components/tools';
const type = ['image', 'video', 'audio', 'file'];
import { useViewModal } from './useViewModal';
import { MediaMessageProps } from '../../../../../../types/screen.type/communityChat';
import VedioPlayer from './components/video-player';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { styles } from './styles';
import { theme } from '../../../../../../infrastructure/theme';

const Tab = createMaterialTopTabNavigator();

export const MediaTab = (props: MediaMessageProps) => {
  let parentProps = props;
  const GetImageMessage = () => {
    return (
      <View>
        <ImageMessage {...parentProps} type="image" />
      </View>
    );
  };
  const GetVideoMessage = () => {
    return (
      <View>
        <ViedoMessage {...parentProps} type="image" />
      </View>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: theme.colors.ui.primary },
        tabBarStyle: { backgroundColor: theme.colors.bg.secondary },
      }}
    >
      <Tab.Screen name="Image" component={GetImageMessage} />
      <Tab.Screen name="Video" component={GetVideoMessage} />
    </Tab.Navigator>
  );
};
const ViedoMessage = (props: MediaMessageProps) => {
  const { loading, videos, isPrivateChatScreen } = useViewModal(props);
  return (
    <View
      style={
        isPrivateChatScreen
          ? {
              ...styles.container,
              height: dimensions.height,
            }
          : styles.container
      }
    >
      {loading ? (
        <FullLoader />
      ) : (
        <>
            <ScrollView style={styles.scrollViewStyle}>
              {
                videos.map((url: string, index: number) => (
                  <Spacer key={index} position="bottom" size={10}>
                <View style={styles.innerWrapper}>
                  <View style={styles.innerWrapper}>
                    <VedioPlayer url={url} />
                  </View>
                </View>
              </Spacer>))
              }
          </ScrollView>
        </>
      )}
    </View>
  );
};
const ImageMessage = (props: MediaMessageProps) => {
  const { loading, images, isPrivateChatScreen } = useViewModal(props);
  return (
    <View
      style={
        isPrivateChatScreen
          ? {
              ...styles.container,
              height: dimensions.height,
            }
          : styles.container
      }
    >
      {loading ? (
        <FullLoader />
      ) : (
        <>
          <Spacer position="top" size={4} />
          <FlatList
            data={images}
            columnWrapperStyle={styles.galleryWrapper}
            renderItem={({ item, index }) => {
              if (index === images.length - 1) {
                return <View style={styles.wrapper}></View>;
              }
              return (
                <FastImage
                  style={styles.galleryImage}
                  source={{ uri: item }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              );
            }}
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      )}
    </View>
  );
};
