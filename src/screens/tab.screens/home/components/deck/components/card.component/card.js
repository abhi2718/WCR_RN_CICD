import React, { useEffect } from 'react';
import { View, ScrollView, Text, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Row, Spacer } from '../../../../../../../components/tools';
import { styles } from './cardStyle';
import { Card } from '../swiper';
import { useViewModal } from './useViewModal';
import {calculateAge} from "../../../../../../../utils/common.functions"
export default function CardCompoent({ item, height, cardRef}) {
  const heightStyle = { height, ...styles.imageStyle };
  const {
    handleShare,
    profilePicture,
    first,
    genderPronoun,
    designation,
    state,
    _handleLike,
    _handleDisLike,
    addFavourite,
    handleBlockUser,
    dob
  } = useViewModal(item, cardRef);

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <Card style={heightStyle}>
        <View style={heightStyle}>
          <ScrollView bounces={false} style={heightStyle}>
            <View>
              <FastImage
                style={{ ...heightStyle, borderRadius: 0 }}
                source={{ uri: profilePicture.url }}
              />
              <Text>
                {first} ({genderPronoun}) {calculateAge(dob)}
              </Text>
              <Row>
                <Text>{designation.userDegree}</Text>
              </Row>
              <Row>
                <Text>{designation.title}</Text>
              </Row>
              <Row>
                <Text>{designation.title}</Text>
              </Row>
              <Row>
                <Text>{state}</Text>
              </Row>
              <View>
                <Text>Vital Signs</Text>
              </View>
            </View>
            {item.photos.map(({ url, _id },index) => {
              return (
                <FastImage
                  key={_id}
                  style={{ ...heightStyle, borderRadius: 0 }}
                  source={{ uri: url }}
                />
              );
            })}
            <Pressable onPress={handleShare}>
              <Text>Share</Text>
            </Pressable>
            <Row justifyContent="space-between">
              <Pressable onPress={_handleLike}>
                <Text>Like</Text>
              </Pressable>
              <Pressable onPress={addFavourite}>
                <Text>Save</Text>
              </Pressable>
              <Pressable onPress={_handleDisLike}>
                <Text>DisLike</Text>
              </Pressable>
            </Row>
            <Row>
              <Pressable onPress={handleBlockUser}>
                <Text>Block/Report</Text>
              </Pressable>
            </Row>
            <Spacer position="bottom" size={60} />
          </ScrollView>
        </View>
      </Card>
    </View>
  );
}
