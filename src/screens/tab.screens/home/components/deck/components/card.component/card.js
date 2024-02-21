import React from 'react';
import { View, ScrollView, Text, Pressable, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Row, Spacer } from '../../../../../../../components/tools';
import { cardStyles } from './cardStyle';
import { Card } from '../swiper';
import { useViewModal } from './useViewModal';
import {
  calculateAge,
  showDisplayOrFirstName,
} from '../../../../../../../utils/common.functions';
import LinearGradient from 'react-native-linear-gradient';
import { AlertScreen } from '../../../../../../../components/alert';
import { addInitials } from '../../../../../../../utils/common.functions';
export default function CardCompoent({ item, height, cardRef }) {
  const heightStyle = { height, ...cardStyles.imageStyle };
  const {
    handleShare,
    profilePicture,
    first,
    genderPronoun,
    designation,
    institution,
    state,
    city,
    country,
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
                source={{ uri: profilePicture?.url }}
              >
                <LinearGradient
                  colors={['rgba(0, 0, 0, 0.00)', ' rgba(0, 0, 0, 0.9)']}
                  style={cardStyles.gradient}
                />
                <Row alignItems="center" gap={15} style={cardStyles.nameRow}>
                  <Text style={cardStyles.name}>
                    {showDisplayOrFirstName(item.displayName, first)}{' '}
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
              <Row alignItems="center" style={cardStyles.userInfoRow} gap={10}>
                <Image
                  style={cardStyles.userInfoIcon}
                  source={require('../../../../../../../assets/images/icons/degree.png')}
                />
                <Text style={cardStyles.userInfoText}>
                  {designation?.userDegree},{' '}
                  {addInitials(
                    designation?.userDegree,
                    designation?.primaryDegree,
                  )}
                </Text>
              </Row>

              <Row alignItems="center" style={cardStyles.userInfoRow} gap={10}>
                <Image
                  style={cardStyles.userInfoIcon}
                  source={require('../../../../../../../assets/images/icons/degTitle.png')}
                />
                <Text style={cardStyles.userInfoText}>
                  <Text style={cardStyles.designation}>
                    {designation?.title}
                  </Text>
                  {institution ? `, ${institution}` : ''}
                </Text>
              </Row>
              <Row alignItems="center" style={cardStyles.userInfoRow} gap={10}>
                <Image
                  style={cardStyles.userInfoIcon}
                  source={require('../../../../../../../assets/images/icons/location.png')}
                />
                <Text style={cardStyles.userInfoText}>
                  <Text style={cardStyles.designation}>{city},</Text>{' '}
                  {addInitials(country, state)}
                </Text>
              </Row>
            </View>
            <View style={[cardStyles.ph16]}>
              <Text style={cardStyles.headingText}>Vital Signs</Text>
              <Row
                style={cardStyles.vitalSignsChips}
                gap={6}
                alignItems="center"
              >
                {gender && item.showGender && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    <Image
                      style={cardStyles.chipIcon}
                      source={require('../../../../../../../assets/images/vitalIcons/Gender.png')}
                    />

                    <Text style={cardStyles.chipText}>{gender}</Text>
                  </Row>
                )}
                {item.showSexualPreference && item.sexualPreference && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    <Image
                      style={cardStyles.chipIcon}
                      source={require('../../../../../../../assets/images/vitalIcons/love.png')}
                    />

                    <Text style={cardStyles.chipText}>
                      {item.sexualPreference}
                    </Text>
                  </Row>
                )}

                {userHeight && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    <Image
                      style={cardStyles.chipIcon}
                      source={require('../../../../../../../assets/images/vitalIcons/height.png')}
                    />
                    <Text style={cardStyles.chipText}>
                      {userHeight.feet}' {userHeight.inch} ft
                    </Text>
                  </Row>
                )}

                {ethnicity?.length >= 0 &&
                  ethnicity?.map((ethnicity, index) => (
                    <Row
                      key={index}
                      gap={10}
                      alignItems="center"
                      style={cardStyles.chip}
                    >
                      <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/vitalIcons/ethincity.png')}
                      />
                      <Text style={cardStyles.chipText}>{ethnicity}</Text>
                    </Row>
                  ))}

                {item?.relationship?.length >= 0 &&
                  item?.relationship?.map((relationship, index) => (
                    <Row
                      key={index}
                      gap={10}
                      alignItems="center"
                      style={cardStyles.chip}
                    >
                      <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/vitalIcons/relationship.png')}
                      />
                      <Text style={cardStyles.chipText}>{relationship}</Text>
                    </Row>
                  ))}

                {maritalStatus && maritalStatus !== 'Prefer not to say' && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    <Image
                      style={cardStyles.chipIcon}
                      source={require('../../../../../../../assets/images/vitalIcons/married.png')}
                    />
                    <Text style={cardStyles.chipText}>{maritalStatus}</Text>
                  </Row>
                )}

                {item?.religion && item?.religion !== 'Prefer not to say' && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    <Image
                      style={cardStyles.chipIcon}
                      source={require('../../../../../../../assets/images/vitalIcons/Religion.png')}
                    />

                    <Text style={cardStyles.chipText}>{item?.religion}</Text>
                  </Row>
                )}
                {item?.politics && item?.politics !== 'Prefer not to say' && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    <Image
                      style={cardStyles.chipIcon}
                      source={require('../../../../../../../assets/images/vitalIcons/politics.png')}
                    />
                    <Text style={cardStyles.chipText}>{item.politics}</Text>
                  </Row>
                )}
                {item?.kids &&
                  item?.kids !== 'Prefer not to say' &&
                  (item?.kids === ' Prefer not to say' ? null : (
                    <Row gap={10} alignItems="center" style={cardStyles.chip}>
                      <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/vitalIcons/haveKid.png')}
                      />
                      <Text style={cardStyles.chipText}>{item?.kids}</Text>
                    </Row>
                  ))}

                {item?.familyPlan &&
                  item?.familyPlan !== 'Prefer not to say' && (
                    <Row gap={10} alignItems="center" style={cardStyles.chip}>
                      <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/vitalIcons/wantKids.png')}
                      />

                      <Text style={cardStyles.chipText}>
                        {item?.familyPlan}
                      </Text>
                    </Row>
                  )}

                {item?.covidVaccineStatus &&
                  item?.covidVaccineStatus !== 'Prefer not to say' && (
                    <Row gap={10} alignItems="center" style={cardStyles.chip}>
                      <Image
                        style={cardStyles.chipIcon}
                        source={require('../../../../../../../assets/images/vitalIcons/corona.png')}
                      />
                      <Text style={cardStyles.chipText}>
                        {item?.covidVaccineStatus}
                      </Text>
                    </Row>
                  )}

                {item?.diet && item?.diet !== 'Prefer not to say' && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    <Image
                      style={cardStyles.chipIcon}
                      source={require('../../../../../../../assets/images/vitalIcons/diet.png')}
                    />
                    <Text style={cardStyles.chipText}>{item?.diet}</Text>
                  </Row>
                )}

                {drinking && drinking !== 'Prefer not to say' && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    <Image
                      style={cardStyles.chipIcon}
                      source={require('../../../../../../../assets/images/vitalIcons/drinks.png')}
                    />
                    <Text style={cardStyles.chipText}>{drinking}</Text>
                  </Row>
                )}

                {item?.excercise && item?.excercise !== 'Prefer not to say' && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    <Image
                      style={cardStyles.chipIcon}
                      source={require('../../../../../../../assets/images/vitalIcons/workout.png')}
                    />
                    <Text style={cardStyles.chipText}>{item?.excercise}</Text>
                  </Row>
                )}

                {item?.smoking && item?.smoking !== 'Prefer not to say' && (
                  <Row gap={10} alignItems="center" style={cardStyles.chip}>
                    <Image
                      style={cardStyles.chipIcon}
                      source={require('../../../../../../../assets/images/vitalIcons/smoking.png')}
                    />
                    <Text style={cardStyles.chipText}>{item?.smoking}</Text>
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
                    <View style={[cardStyles.ph16]}>
                      {item?.interests?.length > 0 && (
                        <>
                          <Text style={cardStyles.aboutHeading}>
                            Interests & Hobbies
                          </Text>
                          <Spacer position="top" size={5} />
                          <Row
                            gap={10}
                            alignItems="center"
                            style={cardStyles.flexWrap}
                          >
                            {item?.interests?.map((item, index) => (
                              <View key={index} style={cardStyles.intrestView}>
                                <Text
                                  style={cardStyles.intrestText}
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
                      <View style={[cardStyles.ph16]}>
                        {bio && (
                          <View>
                            <Text style={cardStyles.aboutHeading}>About</Text>
                            <Spacer position="top" size={5} />
                            <Text style={cardStyles.aboutText}>{bio}</Text>
                            <Spacer position="bottom" size={12} />
                          </View>
                        )}
                      </View>
                      {item?.photos?.length === 1 && (
                        <View style={[cardStyles.ph16]}>
                          {item?.interests?.length > 0 && (
                            <>
                              <Text style={cardStyles.aboutHeading}>
                                Interests & Hobbies
                              </Text>
                              <Spacer position="top" size={5} />
                              <Row
                                gap={10}
                                alignItems="center"
                                style={cardStyles.flexWrap}
                              >
                                {item?.interests?.map((item, index) => (
                                  <View
                                    key={index}
                                    style={cardStyles.intrestView}
                                  >
                                    <Text
                                      style={cardStyles.intrestText}
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
              justifyContent="center"
              gap={40}
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
            <Spacer position="top" size={48} />
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
