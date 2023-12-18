import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { dimensions, Row, ScreenWrapper, Spacer } from '../../../../../components/tools';
import { useViewModal } from './previewViewModal';
import { styles } from './styles';

export const PreviewScreen = () => {
  const { user, goBack } = useViewModal();
  const heightStyle = { height: 600, width: 300 };
  return (
    <ScreenWrapper>
        <View style={styles.container}>
      <Row>
        <Pressable onPress={goBack}>
          <Text>X</Text>
        </Pressable>
        <Text>Preview</Text>
      </Row>
      <View style={{ backgroundColor: '#fff' }}>
        <View>
          {user && (
            <ScrollView bounces={false}>
              <View>
              <FastImage
              source={{
                uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
              }}
              style={{
                width: dimensions.width-32,
                height: dimensions.height,
                borderRadius: 40,
              }}
            />
                {/* <FastImage
                  style={{ ...heightStyle, borderRadius: 0 }}
                  source={{ uri: user.profilePicture.url }}
                /> */}
                <Text>
                  {user.profile.displayName ?? user.profile.name.first} 
                </Text>
                {
                  user?.genderPronoun &&    <Text>{user?.genderPronoun}</Text>
                }
             
                <Row>
                  <Text>{user.designation.userDegree}</Text>
                </Row>
                <Row>
                  <Text>{user.designation.title}</Text>
                </Row>
                <Row>
                  <Text>{user.designation.title}</Text>
                </Row>
                <Row>
                  <Text>{user.state}</Text>
                </Row>
                <View>
                  <Text>Vital Signs</Text>
                </View>
              </View>
              {user?.photos.map(({ url, _id }) => {
                return (
                  <FastImage
                    key={_id}
                    style={{ ...heightStyle, borderRadius: 0 }}
                    source={{ uri: url }}
                  />
                );
              })}
              
              <Spacer position="bottom" size={60} />
            </ScrollView>
          )}
        </View>
      </View>
    </View>
    </ScreenWrapper>
  
  );
};
