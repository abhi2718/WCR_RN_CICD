import React from 'react';
import {
  View,
  Modal,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { profileProps } from '../../types/components/profile.type';
import { Column, FullLoader, Row, Spacer, dimensions } from '../tools';
import { useViewModal } from './useViewModal';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../infrastructure/theme';
import { colors } from '../../infrastructure/theme/colors';
import {
  fontSizes,
  fontWeights,
  fonts,
} from '../../infrastructure/theme/fonts';
import { sizes } from '../../infrastructure/theme/sizes';
import { cardStyles } from '../../screens/tab.screens/home/components/deck/components/card.component/cardStyle';
import { calculateAge } from '../../utils/common.functions';

export const ProfileModal = (props: profileProps) => {
  const {
    showModal,
    toggleModal,
    loading,
    user,
    handleShare,
    handleBlockUser,
    addFavourite,
    handleLike,
    handleDisLike,
    showLike,
    showDisLike,
    showSave,
    showBlock,
  } = useViewModal(props);
  console.log(user);
  return (
    <Modal visible={showModal}>
      <SafeAreaView style={{ flex: 1 }}>
        {loading ? (
          <View style={{ flex: 1 }}>
            <FullLoader />
          </View>
        ) : (
          <View>
            <Spacer position="top" size={10} />
            <Row style={styles.backHeaderPadding}>
              <Pressable onPress={() => toggleModal()}>
                <Image
                  style={styles.backArrowSize}
                  source={require('../../assets/images/icons/back-arrow.png')}
                />
              </Pressable>
            </Row>
            <View style={styles.sectionWhite}>
              <View>
                {user && (
                  <ScrollView bounces={false}>
                    <View>
                      <Row style={styles.relative}>
                        <FastImage
                          style={styles.profileImage}
                          source={{ uri: user.profilePicture.url }}
                        >
                          <LinearGradient
                            colors={[
                              'rgba(0, 0, 0, 0.00)',
                              ' rgba(0, 0, 0, 0.9)',
                            ]}
                            style={styles.gradient}
                          />
                          <Text style={styles.userNameText}>
                            {user.displayName ?? user.first}{' '}
                            {user?.genderPronoun !== 'Prefer not to say' &&
                              `(${user?.genderPronoun})`}
                            , {calculateAge(user?.dob)}
                          </Text>
                        </FastImage>
                      </Row>
                      <View style={styles.userInfo}>
                        <Row alignItems="center">
                          <Image
                            style={styles.imageIcon}
                            source={require('../../assets/images/icons/degree.png')}
                          />
                          <Text style={styles.aboutText}>
                            {user.designation.userDegree}
                          </Text>
                        </Row>
                        <Row alignItems="center">
                          <Image
                            style={styles.imageIcon}
                            source={require('../../assets/images/icons/degTitle.png')}
                          />
                          <Text style={styles.aboutText}>
                            {user.designation.title}
                          </Text>
                        </Row>
                        <Row alignItems="center">
                          <Image
                            style={styles.imageIcon}
                            source={require('../../assets/images/icons/location.png')}
                          />
                          <Text style={styles.aboutText}>{user.state}</Text>
                        </Row>
                      </View>
                      {/* <View style={styles.userInfo}>
                        <Text style={styles.vitalSigns}>Vital Signs</Text>
                      </View> */}

                      <View style={styles.vitalSigns}>
                        {(user?.gender?.length > 0 ||
                          user?.drinking?.length > 0 ||
                          user?.ethnicity?.length > 0 ||
                          user?.maritalStatus) && (
                          <Text style={styles.headingText}>Vital Signs</Text>
                        )}
                        <Row
                          style={styles.vitalSignsChips}
                          gap={15}
                          alignItems="center"
                        >
                          {user.gender && (
                            <Row
                              gap={10}
                              alignItems="center"
                              style={styles.chip}
                            >
                              {user.gender === 'Female' && (
                                <Image
                                  style={styles.chipIcon}
                                  source={require('../../assets/images/icons/femailAvatar.png')}
                                />
                              )}
                              {user.gender === 'Male' && (
                                <Image
                                  style={styles.chipIcon}
                                  source={require('../../assets/images/icons/maleAvatar.png')}
                                />
                              )}
                              {user.gender === 'Transman' && (
                                <Image
                                  style={styles.chipIcon}
                                  source={require('../../assets/images/icons/transmanAvatar.png')}
                                />
                              )}
                              {user.gender === 'Transwomen' && (
                                <Image
                                  style={styles.chipIcon}
                                  source={require('../../assets/images/icons/transwomenAvator.png')}
                                />
                              )}
                              <Text style={styles.chipText}>
                                {' '}
                                {user?.gender}
                              </Text>
                            </Row>
                          )}

                          {user.showSexualPreference &&
                            user.sexualPreference && (
                              <Row
                                gap={10}
                                alignItems="center"
                                style={styles.chip}
                              >
                                {user.sexualPreference === 'Straight' && (
                                  <Image
                                    style={styles.chipIcon}
                                    source={require('../../assets/images/icons/straight.png')}
                                  />
                                )}
                                {user.sexualPreference === 'Lesbian' && (
                                  <Image
                                    style={styles.chipIcon}
                                    source={require('../../assets/images/icons/lesbian.png')}
                                  />
                                )}
                                {user.sexualPreference === 'Gay' && (
                                  <Image
                                    style={styles.chipIcon}
                                    source={require('../../assets/images/icons/gay.png')}
                                  />
                                )}
                                <Text style={styles.chipText}>
                                  {user.sexualPreference}
                                </Text>
                              </Row>
                            )}

                          {user.userHeight && (
                            <Row
                              gap={10}
                              alignItems="center"
                              style={styles.chip}
                            >
                              <Image
                                style={styles.chipIcon}
                                source={require('../../assets/images/icons/heightScale.png')}
                              />
                              <Text style={styles.chipText}>
                                {user.userHeight.feet}"{user.userHeight.inch}'
                              </Text>
                            </Row>
                          )}

                          {user.ethnicity.length >= 0 &&
                            user.ethnicity.map((ethnicity: String) => (
                              <Row
                                gap={10}
                                alignItems="center"
                                style={styles.chip}
                              >
                                {/* <Image
                        style={styles.chipIcon}
                        source={require('../../assets/images/icons/USAFlag.png')}
                      /> */}
                                <Text style={styles.chipText}>{ethnicity}</Text>
                              </Row>
                            ))}

                          {user.maritalStatus && (
                            <Row
                              gap={10}
                              alignItems="center"
                              style={styles.chip}
                            >
                              <Image
                                style={styles.chipIcon}
                                source={require('../../assets/images/icons/heartVitialSign.png')}
                              />
                              <Text style={styles.chipText}>
                                {user.maritalStatus}
                              </Text>
                            </Row>
                          )}

                          {user.religion && (
                            <Row
                              gap={10}
                              alignItems="center"
                              style={styles.chip}
                            >
                              {user.religion === 'Christian' && (
                                <Image
                                  style={styles.chipIcon}
                                  source={require('../../assets/images/icons/Christian.png')}
                                />
                              )}
                              {user.religion === 'Muslim' && (
                                <Image
                                  style={styles.chipIcon}
                                  source={require('../../assets/images/icons/Muslim.png')}
                                />
                              )}
                              {user.religion === 'Hindu' && (
                                <Image
                                  style={styles.chipIcon}
                                  source={require('../../assets/images/icons/hindu.png')}
                                />
                              )}
                              <Text style={styles.chipText}>
                                {user.religion}
                              </Text>
                            </Row>
                          )}
                          {user.politics && (
                            <Row
                              gap={10}
                              alignItems="center"
                              style={styles.chip}
                            >
                              <Text style={styles.chipText}>
                                {user.politics}
                              </Text>
                            </Row>
                          )}
                          {user.kids &&
                            (user.kids === ' Prefer not to say' ? null : (
                              <Row
                                gap={10}
                                alignItems="center"
                                style={styles.chip}
                              >
                                <Image
                                  style={styles.chipIcon}
                                  source={require('../../assets/images/icons/kids.png')}
                                />
                                <Text style={styles.chipText}>{user.kids}</Text>
                              </Row>
                            ))}

                          {user.covidVaccineStatus && (
                            <Row
                              gap={10}
                              alignItems="center"
                              style={styles.chip}
                            >
                              <Image
                                style={styles.chipIcon}
                                source={require('../../assets/images/icons/vaccinated.png')}
                              />
                              <Text style={styles.chipText}>
                                {user.covidVaccineStatus}
                              </Text>
                            </Row>
                          )}

                          {user.drinking && (
                            <Row
                              gap={10}
                              alignItems="center"
                              style={styles.chip}
                            >
                              <Image
                                style={styles.chipIcon}
                                source={require('../../assets/images/icons/drinks.png')}
                              />
                              <Text style={styles.chipText}>
                                {user.drinking}
                              </Text>
                            </Row>
                          )}
                        </Row>
                      </View>

                      {/* End Vital */}
                    </View>
                    <View style={styles.marginY}>
                      {user?.photos.map(({ url, _id }, index) => {
                        return (
                          <View key={_id} style={styles.marginBottom}>
                            <FastImage
                              source={{ uri: url }}
                              style={styles.pictures}
                              resizeMode={FastImage.resizeMode.cover}
                            >
                              <LinearGradient
                                colors={[
                                  'rgba(0, 0, 0, 0.00)',
                                  ' rgba(0, 0, 0, 0.9)',
                                ]}
                                style={styles.gradient}
                              />
                            </FastImage>
                            {index === 0 && user?.bio?.length > 0 && (
                              <View style={styles.inBtwnText}>
                                <Text style={styles.headingText}>About</Text>
                                <Text style={styles.aboutText}>{user.bio}</Text>
                              </View>
                            )}
                          </View>
                        );
                      })}
                    </View>
                    <View style={styles.shareWrapper}>
                      <Row justifyContent="space-between">
                        {showDisLike && (
                          <Pressable onPress={handleDisLike}>
                            <Image
                              style={styles.shareIcon}
                              source={require('../../assets/images/icons/disLike.png')}
                            />
                          </Pressable>
                        )}
                        {showLike && (
                          <Pressable onPress={handleLike}>
                            <Image
                              style={cardStyles.shareIcon}
                              source={require('../../assets/images/icons/like.png')}
                            />
                          </Pressable>
                        )}
                        {showSave && (
                          <Pressable onPress={addFavourite}>
                            <Image
                              style={styles.shareIcon}
                              source={require('../../assets/images/icons/save.png')}
                            />
                          </Pressable>
                        )}
                      </Row>
                      <Pressable onPress={handleShare}>
                        <Text style={styles.blockReportText}>
                          Share with a Friend
                        </Text>
                      </Pressable>
                      {showBlock && (
                        <Pressable onPress={handleBlockUser}>
                          <Text style={styles.blockReportText}>
                            Block/Report
                          </Text>
                        </Pressable>
                      )}
                    </View>
                    <Spacer position="bottom" size={60} />
                  </ScrollView>
                )}
              </View>
            </View>
          </View>
        )}
      </SafeAreaView>
    </Modal>
  );
};

export const styles = StyleSheet.create({
  profileImage: {
    width: '100%',
    height: 600,
  },
  relative: {
    position: 'relative',
  },
  userNameText: {
    position: 'absolute',
    bottom: theme.units?.sizes[20],
    left: theme.units.sizes[16],
    fontSize: theme.fontSizes.h6,
    color: theme.colors.ui.white,
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fontFamily.body,
  },
  gradient: {
    height: '100%',
    width: '100%',
  },
  aboutText: {
    color: theme.colors.ui.text,
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.fontSizes.text,
    paddingLeft: 6,
  },
  userInfo: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  gallery: {
    fontSize: 22,
    fontWeight: theme.fontWeights.semiBold,
  },
  pictures: {
    width: dimensions.width,
    height: dimensions.height - 150,
  },
  backHeaderPadding: {
    paddingTop: theme.units.sizes[0],
    paddingBottom: theme.units.sizes[10],
    paddingLeft: theme.units.sizes[10],
  },
  backArrowSize: {
    width: theme.units.sizes[21],
    height: theme.units.sizes[21],
  },
  sectionWhite: {
    backgroundColor: theme.colors.ui.white,
  },
  marginY: {
    marginVertical: 16,
  },
  marginBottom: {
    marginBottom: 16,
  },
  imageView: {
    padding: theme.units.sizes[10],
    flexBasis: '50%',
  },
  imageIcon: {
    width: theme.units.sizes[19],
    height: theme.units.sizes[19],
    resizeMode: 'contain',
  },
  userGallery: {
    paddingTop: 5,
    paddingBottom: 24,
  },

  vitalSigns: {
    paddingHorizontal: 16,
  },
  vitalSignsChips: {
    marginVertical: sizes[2],
    flexWrap: 'wrap',
  },
  chip: {
    backgroundColor: colors.ui.deckChipBgColor,
    paddingVertical: sizes[1],
    paddingHorizontal: sizes[2],
    borderRadius: sizes[4],
  },
  chipIcon: {
    height: sizes[5],
    width: sizes[5],
    overflow: 'visible',
    resizeMode: 'contain',
  },
  chipText: {
    color: colors.ui.text,
    fontSize: fontSizes.button,
  },
  headingText: {
    marginTop: sizes[2],
    color: colors.ui.text,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.text,
    fontFamily: fonts.body,
  },
  inBtwnText: {
    marginVertical: sizes[1],
    paddingHorizontal: 16,
  },
  shareWrapper: {
    minHeight: 180,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  shareIcon: {
    height: sizes[12],
    width: sizes[12],
    overflow: 'visible',
    resizeMode: 'contain',
  },
  blockReportText: {
    textAlign: 'center',
    marginVertical: sizes[2],
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.title,
  },
});
