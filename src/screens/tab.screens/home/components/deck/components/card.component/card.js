import React, { useEffect } from 'react';
import { View, ScrollView, Text, Pressable, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Row, Spacer } from '../../../../../../../components/tools';
import { cardStyles } from './cardStyle';
import { Card } from '../swiper';
import { useViewModal } from './useViewModal';
import { calculateAge } from '../../../../../../../utils/common.functions';
import LinearGradient from 'react-native-linear-gradient';
export default function CardCompoent({ item, height, cardRef }) {
  const heightStyle = { height, ...cardStyles.imageStyle };
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
    dob,
    gender,
    drinking,
    ethnicity,
    userHeight,
    maritalStatus,
  } = useViewModal(item, cardRef);
  return (
    <View style={cardStyles.deckContainer}>
      <Pressable style={cardStyles.shareIconContainer} onPress={handleShare}>
        <Image
          style={cardStyles.shareIcon}
          source={require('../../../../../../../assets/images/icons/Share.png')}
        />
      </Pressable>
      <Card style={heightStyle}>
        <View style={heightStyle}>
          <ScrollView bounces={false} style={heightStyle}>
            <View>
              <FastImage
                style={{ ...heightStyle, borderRadius: 0 }}
                source={{ uri: profilePicture.url }}
              >
                <LinearGradient
                  colors={['rgba(0, 0, 0, 0.00)', ' rgba(0, 0, 0, 0.9)']}
                  style={cardStyles.gradient}
                />
                <Row alignItems="center" gap={15} style={cardStyles.nameRow}>
                  <Text style={cardStyles.name}>
                    {first} ({genderPronoun}), {calculateAge(dob)}
                  </Text>
                  <Image
                    style={cardStyles.badge}
                    source={require('../../../../../../../assets/images/icons/badge.png')}
                  />
                </Row>
              </FastImage>
            </View>
            <View style={cardStyles.userInfo}>
              <Row style={cardStyles.userInfoRow} gap={15}>
                <Image
                  style={cardStyles.userInfoIcon}
                  source={require('../../../../../../../assets/images/icons/degree.png')}
                />
                <Text style={cardStyles.userInfoText}>
                  {designation.userDegree}
                </Text>
              </Row>

              <Row style={cardStyles.userInfoRow} gap={15}>
                <Image
                  style={cardStyles.userInfoIcon}
                  source={require('../../../../../../../assets/images/icons/degTitle.png')}
                />
                <Text style={cardStyles.userInfoText}>{designation.title}</Text>
              </Row>

              <Row style={cardStyles.userInfoRow} gap={15}>
                <Image
                  style={cardStyles.userInfoIcon}
                  source={require('../../../../../../../assets/images/icons/location.png')}
                />
                <Text style={cardStyles.userInfoText}>{state}</Text>
              </Row>
            </View>
            <View style={cardStyles.vitalSigns}>
              <Text style={cardStyles.headingText}>Vital Signs</Text>
              <Row
                style={cardStyles.vitalSignsChips}
                gap={15}
                alignItems="center"
              >
                {gender && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    <Image
                      style={cardStyles.chipIcon}
                      source={require('../../../../../../../assets/images/icons/femailAvatar.png')}
                    />
                    <Text style={cardStyles.chipText}>{gender}</Text>
                  </Row>
                )}
                {drinking && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    <Image
                      style={cardStyles.chipIcon}
                      source={require('../../../../../../../assets/images/icons/drinks.png')}
                    />
                    <Text style={cardStyles.chipText}>{drinking}</Text>
                  </Row>
                )}

                {ethnicity.lenght > 0 && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    {/* <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/icons/femailAvatar.png')}
                      /> */}
                    <Text style={cardStyles.chipText}>{ethnicity}</Text>
                  </Row>
                )}
                {userHeight && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    <Image
                      style={cardStyles.chipIcon}
                      source={require('../../../../../../../assets/images/icons/heightScale.png')}
                    />
                    <Text style={cardStyles.chipText}>
                      {userHeight.feet}"{userHeight.inch}'
                    </Text>
                  </Row>
                )}
                {maritalStatus && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    {/* <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/icons/femailAvatar.png')}
                      /> */}
                    <Text style={cardStyles.chipText}>{maritalStatus}</Text>
                  </Row>
                )}
              </Row>
            </View>

            {item.photos.map(({ url, _id }, index) => {
              return (
                <View key={index}>
                  <FastImage
                    key={_id}
                    style={{
                      ...heightStyle,
                      borderRadius: 0,
                      marginVertical: 10,
                    }}
                    source={{ uri: url }}
                  />
                  {index === 0 && (
                    <View style={cardStyles.inBtwnText}>
                      <Text style={cardStyles.headingText}>About</Text>
                      <Text style={cardStyles.aboutText}>
                        Lorem ipsum dolor sit amet consectetur. Enim inte sed
                        blandit nulla pellentesque. Lacus aliquet nisi pell
                        entesque ornare ac.
                      </Text>
                    </View>
                  )}
                </View>
              );
            })}
            <View style={cardStyles.inBtwnText}>
              <Text style={cardStyles.headingText}>Interests/Hobbies</Text>
              <Text style={cardStyles.aboutText}>
                hiking, yoga, cooking, live music, trying new restaurants,
                skydiving some day
              </Text>
            </View>

            <Row style={cardStyles.footerIconRow} justifyContent="space-around">
              <Pressable onPress={_handleDisLike}>
                <Image
                  style={cardStyles.footerIcon}
                  source={require('../../../../../../../assets/images/icons/disLike.png')}
                />
              </Pressable>
              <Pressable onPress={addFavourite}>
                <Image
                  style={cardStyles.footerIcon}
                  source={require('../../../../../../../assets/images/icons/save.png')}
                />
              </Pressable>
              <Pressable onPress={_handleLike}>
                <Image
                  style={cardStyles.footerIcon}
                  source={require('../../../../../../../assets/images/icons/like.png')}
                />
              </Pressable>
            </Row>

            <Pressable onPress={handleShare}>
              <Text style={cardStyles.blockReportText}>
                Share with a Friend
              </Text>
            </Pressable>

            <Pressable onPress={handleBlockUser}>
              <Text style={cardStyles.blockReportText}>Block/Report</Text>
            </Pressable>
          </ScrollView>
        </View>
      </Card>
    </View>
  );
}
