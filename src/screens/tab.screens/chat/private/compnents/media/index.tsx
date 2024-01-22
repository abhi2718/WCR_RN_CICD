import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import React, { useCallback } from 'react';
import { MediaTab } from '../../../community/components/mediaMessages';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dimensions, Row } from '../../../../../../components/tools';

export const PrivteChatMediaScreen = (props: NavigationObject) => {
  const { route,navigation } = props;
  const goBack = useCallback(()=>navigation.goBack(),[])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Row justifyContent='center' alignItems='center'>
        <Pressable onPress={goBack}>
        <View style={styles.backIconWrapperStyle}>
          <Image
            style={styles.backIcon}
            source={require('../../../../../../assets/images/icons/back-arrow.png')}
          />
        </View>
          </Pressable>
          <Row style={styles.textContainerStyle} justifyContent='center'>
            <Text style={styles.mediaText}>Media</Text>
          </Row>
        </Row>
        <MediaTab
          uid={route.params.uid}
          isPrivateChatScreen={true}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mediaText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize:20
  },
  textContainerStyle: {
    width: dimensions.width - 40,
    paddingRight:40
  },
  backIconWrapperStyle: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems:"center"
  },
  backIcon: {
    width: 20,
    height:20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
