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
import { MatchScreen } from '../../screens/tab.screens/home/components/deck/components/matchScreen';
import { styles } from './style';
import { AlertScreen } from '../alert';

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
    isMatch,
    startChat,
    handleHideOfIsMatchScreen,
    showBlockModal,
    setShowBlockModal,
    handleReport,
  } = useViewModal(props);
  return (
    <Modal visible={showModal}>
      <SafeAreaView style={styles.containerWrapperStyle}>
        {loading ? (
          <View style={styles.containerWrapperStyle}>
            <FullLoader />
          </View>
        ) : isMatch?.status ? (
          <MatchScreen
            isMatch={isMatch}
            startChat={startChat}
            handleHideOfIsMatchScreen={handleHideOfIsMatchScreen}
          />
        ) : (
          <View>
            <Spacer position="top" size={10} />
            <Row style={styles.backHeaderPadding}>
              <Pressable onPress={() => toggleModal()}>
                <View style={styles.backButtonStyle}>
                  <Image
                    style={styles.backArrowSize}
                    source={require('../../assets/images/icons/back-arrow.png')}
                  />
                </View>
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
                          <Text style={styles.userInfoText}>
                            {user.designation.userDegree}
                          </Text>
                        </Row>
                        <Row alignItems="center">
                          <Image
                            style={styles.imageIcon}
                            source={require('../../assets/images/icons/degTitle.png')}
                          />
                          <Text style={styles.userInfoText}>
                            {user.designation.title}
                          </Text>
                        </Row>
                        <Row alignItems="center">
                          <Image
                            style={styles.imageIcon}
                            source={require('../../assets/images/icons/location.png')}
                          />
                          <Text style={styles.userInfoText}>{user.state}</Text>
                        </Row>
                      </View>
                      <View style={styles.vitalSigns}>
                        {(user?.gender?.length > 0 ||
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
                            user.ethnicity.map(
                              (ethnicity: String, key: number) => (
                                <Row
                                  gap={10}
                                  key={key}
                                  alignItems="center"
                                  style={styles.chip}
                                >
                                  <Text style={styles.chipText}>
                                    {ethnicity}
                                  </Text>
                                </Row>
                              ),
                            )}
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
                      <Row justifyContent="center" gap={32}>
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
                      {/* <Pressable onPress={handleShare}>
                        <Text style={styles.blockReportText}>
                          Share with a Friend
                        </Text>
                      </Pressable> */}

                      {/* --------- */}
                      <Spacer position="top" size={50} />
                      <View style={cardStyles.blockReportView}>
                        <Pressable onPress={() => setShowBlockModal(true)}>
                          <Text style={[cardStyles.blockReportText]}>
                            Block
                          </Text>
                        </Pressable>
                        <View style={cardStyles.hrLine} />
                        <Pressable onPress={handleReport}>
                          <Text
                            style={[
                              cardStyles.blockReportText,
                              cardStyles.reportText,
                            ]}
                          >
                            Report
                          </Text>
                        </Pressable>
                      </View>
                      <Spacer position="top" size={48} />
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
        <AlertScreen
          showModal={showBlockModal}
          setShowModal={setShowBlockModal}
          title="Block"
          description="Do you want to block this person?"
          onPress={handleBlockUser}
        />
      </SafeAreaView>
    </Modal>
  );
};
