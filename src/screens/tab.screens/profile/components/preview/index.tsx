import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Row, ScreenWrapper, Spacer } from '../../../../../components/tools';
import { useViewModal } from './previewViewModal';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { HeaderBar } from '../../../../../components/header';
import {
  separateWords,
  addInitials,
  showDisplayOrFirstName,
} from '../../../../../utils/common.functions';
import { preferNotToSay } from '../../../../../utils/constanst';

export const PreviewScreen = () => {
  const { user } = useViewModal();
  return (
    <ScreenWrapper>
      <View>
        <View style={styles.ph16}>
          <HeaderBar
            isLogo={false}
            isText={true}
            isLoading={false}
            text="Preview"
          />
        </View>
        <View>
          {user && (
            <>
              <ScrollView
                style={styles.mainContainer}
                showsVerticalScrollIndicator={false}
                bounces={false}
              >
                <View>
                  <FastImage
                    source={{
                      uri: user.profilePicture?.url,
                    }}
                    style={styles.profilePic}
                  >
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0.00)', ' rgba(0, 0, 0, 0.9)']}
                      style={styles.gradient}
                    />
                    <Row alignItems="center" gap={15} style={styles.nameRow}>
                      <Text style={styles.name}>
                        {showDisplayOrFirstName(
                          user?.profile?.displayName,
                          user?.profile?.name?.first,
                        )}
                        {user.profile.genderPronoun !== 'Prefer not to say' &&
                          ` (${user.profile.genderPronoun})`}
                        , {user.age}
                      </Text>
                      <Image
                        style={styles.badge}
                        source={require('../../../../../assets/images/icons/badge.png')}
                      />
                    </Row>
                  </FastImage>
                </View>
                <View style={styles.userInfo}>
                  <Row alignItems="center" style={styles.userInfoRow} gap={15}>
                    <Image
                      style={styles.userInfoIcon}
                      source={require('../../../../../assets/images/icons/degree.png')}
                    />
                    <Text style={styles.userInfoText}>
                      {user.designation?.userDegree},{' '}
                      {addInitials(
                        user.designation?.userDegree,
                        user.designation?.primaryDegree,
                      )}{' '}
                    </Text>
                  </Row>
                  <Row alignItems="center" style={styles.userInfoRow} gap={15}>
                    <Image
                      style={styles.userInfoIcon}
                      source={require('../../../../../assets/images/icons/degTitle.png')}
                    />
                    <Text style={styles.userInfoText}>
                      {user.designation?.title}, {user.institution}
                    </Text>
                  </Row>
                  <Row alignItems="center" style={styles.userInfoRow} gap={15}>
                    <Image
                      style={styles.userInfoIcon}
                      source={require('../../../../../assets/images/icons/location.png')}
                    />
                    <Text style={styles.userInfoText}>
                      {user.address?.city},{' '}
                      {addInitials(user.address.country, user.address?.state)}
                    </Text>
                  </Row>
                </View>
                <Spacer position="top" size={16} />
                <View style={styles.vitalSigns}>
                  {(user?.profile?.gender?.length > 0 ||
                    user?.drinking?.length > 0 ||
                    user?.ethnicity?.length > 0 ||
                    user?.maritalStatus) && (
                    <Text style={styles.headingText}>Vital Signs</Text>
                  )}
                  <Row
                    style={styles.vitalSignsChips}
                    gap={6}
                    alignItems="center"
                  >
                    {user.profile.gender && (
                      <Row gap={0} alignItems="center" style={styles.chip}>
                        <Image
                          style={styles.chipIcon}
                          source={require('../../../../../assets/images/vitalIcons/Gender.png')}
                        />
                        <Text style={styles.chipText}>
                          {user?.profile?.gender}
                        </Text>
                      </Row>
                    )}
                    {user.showSexualPreference && user.sexualPreference && (
                      <Row gap={10} alignItems="center" style={styles.chip}>
                        <Image
                          style={styles.chipIcon}
                          source={require('../../../../../assets/images/vitalIcons/love.png')}
                        />

                        <Text style={styles.chipText}>
                          {user.sexualPreference}
                        </Text>
                      </Row>
                    )}
                    {user.userHeight && (
                      <Row gap={10} alignItems="center" style={styles.chip}>
                        <Image
                          style={styles.chipIcon}
                          source={require('../../../../../assets/images/vitalIcons/height.png')}
                        />
                        <Text style={styles.chipText}>
                          {user.userHeight.feet}"{user.userHeight.inch}'
                        </Text>
                      </Row>
                    )}

                    {user.ethnicity &&
                      user.ethnicity.length > 0 &&
                      user.ethnicity.map((ethnicity: string, index: number) => {
                        if (ethnicity !== preferNotToSay) {
                          return (
                            <Row
                              key={index}
                              gap={10}
                              alignItems="center"
                              style={styles.chip}
                            >
                              <Image
                                style={styles.chipIcon}
                                source={require('../../../../../assets/images/vitalIcons/ethincity.png')}
                              />
                              <Text style={styles.chipText}>{ethnicity}</Text>
                            </Row>
                          );
                        }
                        return null;
                      })}

                    {user.relationship &&
                      user.relationship.length > 0 &&
                      user.relationship.map(
                        (relationship: string, index: number) => {
                          if (relationship !== preferNotToSay) {
                            return (
                              <Row
                                key={index}
                                gap={10}
                                alignItems="center"
                                style={styles.chip}
                              >
                                <Image
                                  style={styles.chipIcon}
                                  source={require('../../../../../assets/images/vitalIcons/relationship.png')}
                                />
                                <Text style={styles.chipText}>
                                  {relationship}
                                </Text>
                              </Row>
                            );
                          }
                          return null;
                        },
                      )}

                    {user.maritalStatus &&
                      user.maritalStatus !== preferNotToSay && (
                        <Row gap={10} alignItems="center" style={styles.chip}>
                          <Image
                            style={styles.chipIcon}
                            source={require('../../../../../assets/images/vitalIcons/married.png')}
                          />
                          <Text style={styles.chipText}>
                            {user.maritalStatus}
                          </Text>
                        </Row>
                      )}
                    {user.kids && user.kids !== preferNotToSay && (
                      <Row gap={10} alignItems="center" style={styles.chip}>
                        <Image
                          style={styles.chipIcon}
                          source={require('../../../../../assets/images/vitalIcons/haveKid.png')}
                        />
                        <Text style={styles.chipText}>{user.kids}</Text>
                      </Row>
                    )}

                    {user.familyPlan && user.familyPlan !== preferNotToSay && (
                      <Row gap={10} alignItems="center" style={styles.chip}>
                        <Image
                          style={styles.chipIcon}
                          source={require('../../../../../assets/images/vitalIcons/wantKids.png')}
                        />
                        <Text style={styles.chipText}>{user.familyPlan}</Text>
                      </Row>
                    )}
                    {user.religion && user.religion !== preferNotToSay && (
                      <Row gap={10} alignItems="center" style={styles.chip}>
                        <Image
                          style={styles.chipIcon}
                          source={require('../../../../../assets/images/vitalIcons/Religion.png')}
                        />

                        <Text style={styles.chipText}>{user.religion}</Text>
                      </Row>
                    )}
                    {user.politics && user.politics !== preferNotToSay && (
                      <Row gap={10} alignItems="center" style={styles.chip}>
                        <Image
                          style={styles.chipIcon}
                          source={require('../../../../../assets/images/vitalIcons/politics.png')}
                        />
                        <Text style={styles.chipText}>{user.politics}</Text>
                      </Row>
                    )}
                    {user.covidVaccineStatus &&
                      user.covidVaccineStatus !== preferNotToSay && (
                        <Row gap={10} alignItems="center" style={styles.chip}>
                          <Image
                            style={styles.chipIcon}
                            source={require('../../../../../assets/images/vitalIcons/corona.png')}
                          />
                          <Text style={styles.chipText}>
                            {user.covidVaccineStatus}
                          </Text>
                        </Row>
                      )}
                    {user.diet && user.diet !== preferNotToSay && (
                      <Row gap={10} alignItems="center" style={styles.chip}>
                        <Image
                          style={styles.chipIcon}
                          source={require('../../../../../assets/images/vitalIcons/diet.png')}
                        />
                        <Text style={styles.chipText}>{user.diet}</Text>
                      </Row>
                    )}
                    {user.drinking && user.drinking !== preferNotToSay && (
                      <Row gap={10} alignItems="center" style={styles.chip}>
                        <Image
                          style={styles.chipIcon}
                          source={require('../../../../../assets/images/vitalIcons/drinks.png')}
                        />
                        <Text style={styles.chipText}>{user.drinking}</Text>
                      </Row>
                    )}
                    {user.excercise && user.excercise !== preferNotToSay && (
                      <Row gap={10} alignItems="center" style={styles.chip}>
                        <Image
                          style={styles.chipIcon}
                          source={require('../../../../../assets/images/vitalIcons/workout.png')}
                        />
                        <Text style={styles.chipText}>{user.excercise}</Text>
                      </Row>
                    )}
                    {user.smoking && user.smoking !== preferNotToSay && (
                      <Row gap={10} alignItems="center" style={styles.chip}>
                        <Image
                          style={styles.chipIcon}
                          source={require('../../../../../assets/images/vitalIcons/smoking.png')}
                        />
                        <Text style={styles.chipText}>{user.smoking}</Text>
                      </Row>
                    )}

                    {user.pets && user.pets !== preferNotToSay && (
                      <Row gap={10} alignItems="center" style={styles.chip}>
                        <Image
                          style={styles.chipIcon}
                          source={require('../../../../../assets/images/vitalIcons/pets.png')}
                        />
                        <Text style={styles.chipText}>{user.pets}</Text>
                      </Row>
                    )}
                  </Row>
                </View>
                {user?.photos?.map(({ url, _id }, index) => {
                  return (
                    <View key={index}>
                      <FastImage
                        key={_id}
                        style={styles.pictures}
                        source={{ uri: url }}
                      />
                      {index === 0 && user?.bio?.length > 0 && (
                        <View style={styles.inBtwnText}>
                          <Text style={styles.aboutHeading}>About</Text>
                          <Text style={styles.aboutText}>{user.bio}</Text>
                        </View>
                      )}
                    </View>
                  );
                })}
                {user?.interests?.length > 0 && (
                  <View style={styles.inBtwnText}>
                    <Spacer position="top" size={10} />
                    <Text style={styles.aboutHeading}>Interests & Hobbies</Text>
                    <Row style={{ flexWrap: 'wrap' }}>
                      {user?.interests?.map((hobby: string, index: number) => {
                        if (user?.interests?.length - 1 === index) {
                          return (
                            <Row
                              key={index}
                              alignItems="center"
                              gap={10}
                              style={{ flexWrap: 'wrap' }}
                            >
                              <Text style={styles.hobbiesChip}>{hobby}</Text>
                            </Row>
                          );
                        }
                        return (
                          <Row
                            key={index}
                            alignItems="center"
                            gap={10}
                            style={{ flexWrap: 'wrap' }}
                          >
                            <Text style={styles.hobbiesChip}>{hobby}</Text>
                          </Row>
                        );
                      })}
                    </Row>
                    <Spacer position="top" size={10} />
                  </View>
                )}
              </ScrollView>
            </>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};
