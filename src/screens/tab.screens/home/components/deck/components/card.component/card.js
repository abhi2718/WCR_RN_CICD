import React, { useEffect } from 'react';
import { View, ScrollView, Text, Pressable, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Row, Spacer } from '../../../../../../../components/tools';
import { cardStyles } from './cardStyle';
import { Card } from '../swiper';
import { useViewModal } from './useViewModal';
import { calculateAge } from '../../../../../../../utils/common.functions';
import LinearGradient from 'react-native-linear-gradient';
import { AlertScreen } from '../../../../../../../components/alert';
import { colors } from '../../../../../../../infrastructure/theme/colors';
import { sizes } from '../../../../../../../infrastructure/theme/sizes';
import { fontSizes } from '../../../../../../../infrastructure/theme/fonts';
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
    bio,
    showModal,
    setShowModal,
    handleReport,
  } = useViewModal(item, cardRef);

  return (
    <View style={[cardStyles.deckContainer, cardStyles.shadows]}>
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
                    {first}{' '}
                    {genderPronoun !== 'Prefer not to say' &&
                      `(${genderPronoun})`}
                    , {calculateAge(dob)}
                  </Text>
                  <Image
                    style={cardStyles.badge}
                    source={require('../../../../../../../assets/images/icons/badge.png')}
                  />
                </Row>
              </FastImage>
            </View>
            <View style={[cardStyles.userInfo, cardStyles.ph16]}>
              <Row alignItems="center" style={cardStyles.userInfoRow} gap={15}>
                <Image
                  style={cardStyles.userInfoIcon}
                  source={require('../../../../../../../assets/images/icons/degree.png')}
                />
                <Text style={cardStyles.userInfoText}>
                  {designation.userDegree}
                </Text>
              </Row>
              <Row alignItems="center" style={cardStyles.userInfoRow} gap={15}>
                <Image
                  style={cardStyles.userInfoIcon}
                  source={require('../../../../../../../assets/images/icons/degTitle.png')}
                />
                <Text style={cardStyles.userInfoText}>{designation.title}</Text>
              </Row>
              <Row alignItems="center" style={cardStyles.userInfoRow} gap={15}>
                <Image
                  style={cardStyles.userInfoIcon}
                  source={require('../../../../../../../assets/images/icons/location.png')}
                />
                <Text style={cardStyles.userInfoText}>{state}</Text>
              </Row>
            </View>
            <View style={[cardStyles.vitalSigns, cardStyles.ph16]}>
              <Text style={cardStyles.headingText}>Vital Signs</Text>
              <Spacer position="top" size={5} />
              <Row
                style={cardStyles.vitalSignsChips}
                gap={12}
                alignItems="center"
              >
                {gender && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    {gender === 'Female' && (
                      <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/icons/femailAvatar.png')}
                      />
                    )}
                    {gender === 'Male' && (
                      <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/icons/maleAvatar.png')}
                      />
                    )}
                    {gender === 'Transman' && (
                      <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/icons/transmanAvatar.png')}
                      />
                    )}
                    {gender === 'Transwomen' && (
                      <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/icons/transwomenAvator.png')}
                      />
                    )}
                    <Text style={cardStyles.chipText}>{gender}</Text>
                  </Row>
                )}
                {item.showSexualPreference && item.sexualPreference && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    {item.sexualPreference === 'Straight' && (
                      <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/icons/straight.png')}
                      />
                    )}
                    {item.sexualPreference === 'Lesbian' && (
                      <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/icons/lesbian.png')}
                      />
                    )}
                    {item.sexualPreference === 'Gay' && (
                      <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/icons/gay.png')}
                      />
                    )}
                    <Text style={cardStyles.chipText}>
                      {item.sexualPreference}
                    </Text>
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

                {ethnicity.length >= 0 &&
                  ethnicity.map((ethnicity, index) => (
                    <Row
                      key={index}
                      gap={10}
                      alignItems="center"
                      style={cardStyles.chip}
                    >
                      <Text style={cardStyles.chipText}>{ethnicity}</Text>
                    </Row>
                  ))}

                {maritalStatus && maritalStatus !== 'Prefer not to say' && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    <Image
                      style={cardStyles.chipIcon}
                      source={require('../../../../../../../assets/images/icons/heartVitialSign.png')}
                    />
                    <Text style={cardStyles.chipText}>{maritalStatus}</Text>
                  </Row>
                )}

                {item.religion && item.religion !== 'Prefer not to say' && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    {item.religion === 'Christian' && (
                      <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/icons/Christian.png')}
                      />
                    )}
                    {item.religion === 'Muslim' && (
                      <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/icons/Muslim.png')}
                      />
                    )}
                    {item.religion === 'Hindu' && (
                      <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/icons/hindu.png')}
                      />
                    )}
                    <Text style={cardStyles.chipText}>{item.religion}</Text>
                  </Row>
                )}
                {item.politics && item.politics !== 'Prefer not to say' && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    <Text style={cardStyles.chipText}>{item.politics}</Text>
                  </Row>
                )}
                {item.kids &&
                  item.kids !== 'Prefer not to say' &&
                  (item.kids === ' Prefer not to say' ? null : (
                    <Row gap={10} alignItems="center" style={cardStyles.chip}>
                      <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/icons/kids.png')}
                      />
                      <Text style={cardStyles.chipText}>{item.kids}</Text>
                    </Row>
                  ))}

                {item.covidVaccineStatus &&
                  item.covidVaccineStatus !== 'Prefer not to say' && (
                    <Row gap={10} alignItems="center" style={cardStyles.chip}>
                      <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/icons/vaccinated.png')}
                      />
                      <Text style={cardStyles.chipText}>
                        {item.covidVaccineStatus}
                      </Text>
                    </Row>
                  )}

                {drinking && drinking !== 'Prefer not to say' && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    <Image
                      style={cardStyles.chipIcon}
                      source={require('../../../../../../../assets/images/icons/drinks.png')}
                    />
                    <Text style={cardStyles.chipText}>{drinking}</Text>
                  </Row>
                )}
              </Row>
            </View>
            {item?.photos?.map(({ url, _id }, index) => {
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
                  {index === 1 && (
                    <View style={[cardStyles.inBtwnText, cardStyles.ph16]}>
                      {item?.interests?.length > 0 && (
                        <>
                          <Spacer position="top" size={5} />
                          <Text style={cardStyles.headingText}>
                            Interests/Hobbies
                          </Text>
                          <Spacer position="top" size={15} />
                          <Row
                            gap={10}
                            alignItems="center"
                            style={{
                              flexWrap: 'wrap',
                            }}
                          >
                            {item?.interests?.map((item, index) => (
                              <View
                                style={{
                                  backgroundColor: colors.ui.deckChipBgColor,
                                  paddingHorizontal: sizes[2],
                                  borderRadius: sizes[4],
                                  height: 35,
                                  justifyContent: 'center',
                                }}
                              >
                                <Text
                                  style={{
                                    color: colors.ui.text,
                                    fontSize: fontSizes.button,
                                    alignContent: 'center',
                                    textTransform: 'capitalize',
                                  }}
                                  key={index}
                                >
                                  {item}
                                </Text>
                              </View>
                            ))}
                          </Row>
                        </>
                      )}
                    </View>
                  )}
                  {index === 0 && (
                    <View key={index}>
                      <View style={[cardStyles.inBtwnText, cardStyles.ph16]}>
                        {bio && (
                          <View>
                            <Text style={cardStyles.headingText}>About</Text>
                            <Text style={cardStyles.aboutText}>{bio}</Text>
                          </View>
                        )}
                      </View>
                      {item?.photos?.length === 1 && (
                        <View style={[cardStyles.inBtwnText, cardStyles.ph16]}>
                          {item?.interests?.length > 0 && (
                            <>
                              <Spacer position="top" size={5} />
                              <Text style={cardStyles.headingText}>
                                Interests/Hobbies
                              </Text>
                              <Spacer position="top" size={15} />
                              <Row
                                gap={10}
                                alignItems="center"
                                style={{
                                  flexWrap: 'wrap',
                                }}
                              >
                                {item?.interests?.map((item, index) => (
                                  <View
                                    style={{
                                      backgroundColor:
                                        colors.ui.deckChipBgColor,
                                      paddingHorizontal: sizes[2],
                                      borderRadius: sizes[4],
                                      height: 35,
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <Text
                                      style={{
                                        color: colors.ui.text,
                                        fontSize: fontSizes.button,
                                        alignContent: 'center',
                                        textTransform: 'capitalize',
                                      }}
                                      key={index}
                                    >
                                      {item}
                                    </Text>
                                  </View>
                                ))}
                              </Row>
                            </>
                          )}
                        </View>
                      )}
                    </View>
                  )}
                </View>
              );
            })}

            <Row
              style={[cardStyles.footerIconRow, cardStyles.ph16]}
              justifyContent="space-around"
            >
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
            <Spacer position="top" size={10} />
            <View style={cardStyles.blockReportView}>
              <Pressable onPress={() => setShowModal(true)}>
                <Text
                  style={[cardStyles.blockReportText, cardStyles.blockText]}
                >
                  Block
                </Text>
              </Pressable>
              <View style={cardStyles.hrLine} />
              <Pressable onPress={handleReport}>
                <Text
                  style={[cardStyles.blockReportText, cardStyles.reportText]}
                >
                  Report
                </Text>
              </Pressable>
            </View>
            <Spacer position="top" size={40} />
          </ScrollView>
        </View>
      </Card>
      <AlertScreen
        showModal={showModal}
        setShowModal={setShowModal}
        title="Block"
        description="Do you want to block this person?"
        onPress={handleBlockUser}
      />
    </View>
  );
}
