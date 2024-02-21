import React from 'react';
import {
  View,
  Modal,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { profileProps } from '../../types/components/profile.type';
import { FullLoader, Row, Spacer } from '../tools';
import { useViewModal } from './useViewModal';
import LinearGradient from 'react-native-linear-gradient';
import { cardStyles } from '../../screens/tab.screens/home/components/deck/components/card.component/cardStyle';
import {
  addInitials,
  calculateAge,
  showDisplayOrFirstName,
} from '../../utils/common.functions';
import { MatchScreen } from '../../screens/tab.screens/home/components/deck/components/matchScreen';
import { styles } from './style';
import { AlertScreen } from '../alert';
import { preferNotToSay } from '../../utils/constanst';

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
    isMatched,
    _startChat,
    showOnlyProfileView,
  } = useViewModal(props);
  const profileView = () => {
    return (
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
            <Pressable style={styles.shareIconView} onPress={handleShare}>
              <Image
                style={styles.shareIconTop}
                source={require('../../assets/images/icons/Share.png')}
              />
            </Pressable>
            {isMatched && (
              <Pressable
                style={styles.chatIconIconView}
                onPress={() =>
                  _startChat(
                    user?._id!,
                    showDisplayOrFirstName(user?.displayName!, user?.first!),
                  )
                }
              >
                <Image
                  style={styles.shareIconTop}
                  source={require('../../assets/images/icons/chatIcon.png')}
                />
              </Pressable>
            )}
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
                            {showDisplayOrFirstName(
                              user?.displayName,
                              user?.first,
                            )}{' '}
                            {user?.genderPronoun !== preferNotToSay &&
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
                            {user.designation.userDegree},
                            {addInitials(
                              user.designation.userDegree,
                              user.designation.primaryDegree,
                            )}{' '}
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
                          <Text style={styles.userInfoText}>
                            {user?.city},
                            {addInitials(user?.country, user?.state)}
                          </Text>
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
                          {user.gender && user.showGender && (
                            <Row
                              gap={10}
                              alignItems="center"
                              style={styles.chip}
                            >
                              <Image
                                style={styles.chipIcon}
                                source={require('../../assets/images/vitalIcons/Gender.png')}
                              />

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
                                <Image
                                  style={styles.chipIcon}
                                  source={require('../../assets/images/vitalIcons/love.png')}
                                />
                                <Text style={styles.chipText}>
                                  {user.sexualPreference}
                                </Text>
                              </Row>
                            )}
                          {user?.height && (
                            <Row
                              gap={10}
                              alignItems="center"
                              style={styles.chip}
                            >
                              <Image
                                style={styles.chipIcon}
                                source={require('../../assets/images/vitalIcons/height.png')}
                              />
                              <Text style={styles.chipText}>
                                {user.height.feet}' {user.height.inch} ft
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
                                  <Image
                                    style={cardStyles.chipIcon}
                                    source={require('../../assets/images/vitalIcons/ethincity.png')}
                                  />
                                  <Text style={styles.chipText}>
                                    {ethnicity}
                                  </Text>
                                </Row>
                              ),
                            )}

                          {user?.relationship?.length >= 0 &&
                            user?.relationship?.map((relationship, index) => (
                              <Row
                                key={index}
                                gap={10}
                                alignItems="center"
                                style={cardStyles.chip}
                              >
                                <Image
                                  style={cardStyles.chipIcon}
                                  source={require('../../assets/images/vitalIcons/relationship.png')}
                                />
                                <Text style={cardStyles.chipText}>
                                  {relationship}
                                </Text>
                              </Row>
                            ))}

                          {user.maritalStatus &&
                            user.maritalStatus !== preferNotToSay && (
                              <Row
                                gap={10}
                                alignItems="center"
                                style={styles.chip}
                              >
                                <Image
                                  style={styles.chipIcon}
                                  source={require('../../assets/images/vitalIcons/married.png')}
                                />
                                <Text style={styles.chipText}>
                                  {user.maritalStatus}
                                </Text>
                              </Row>
                            )}
                          {user.religion &&
                            user.religion !== preferNotToSay && (
                              <Row
                                gap={10}
                                alignItems="center"
                                style={styles.chip}
                              >
                                <Image
                                  style={styles.chipIcon}
                                  source={require('../../assets/images/vitalIcons/Religion.png')}
                                />
                                <Text style={styles.chipText}>
                                  {user.religion}
                                </Text>
                              </Row>
                            )}
                          {user.politics &&
                            user.politics !== preferNotToSay && (
                              <Row
                                gap={10}
                                alignItems="center"
                                style={styles.chip}
                              >
                                <Image
                                  style={cardStyles.chipIcon}
                                  source={require('../../assets/images/vitalIcons/politics.png')}
                                />
                                <Text style={styles.chipText}>
                                  {user.politics}
                                </Text>
                              </Row>
                            )}
                          {user.kids && user.kids !== preferNotToSay && (
                            <Row
                              gap={10}
                              alignItems="center"
                              style={styles.chip}
                            >
                              <Image
                                style={styles.chipIcon}
                                source={require('../../assets/images/vitalIcons/haveKid.png')}
                              />
                              <Text style={styles.chipText}>{user.kids}</Text>
                            </Row>
                          )}

                          {user?.familyPlan &&
                            user?.familyPlan !== preferNotToSay && (
                              <Row
                                gap={10}
                                alignItems="center"
                                style={cardStyles.chip}
                              >
                                <Image
                                  style={cardStyles.chipIcon}
                                  source={require('../../assets/images/vitalIcons/wantKids.png')}
                                />

                                <Text style={cardStyles.chipText}>
                                  {user?.familyPlan}
                                </Text>
                              </Row>
                            )}

                          {user.covidVaccineStatus &&
                            user.covidVaccineStatus !== preferNotToSay && (
                              <Row
                                gap={10}
                                alignItems="center"
                                style={styles.chip}
                              >
                                <Image
                                  style={styles.chipIcon}
                                  source={require('../../assets/images/vitalIcons/corona.png')}
                                />
                                <Text style={styles.chipText}>
                                  {user.covidVaccineStatus}
                                </Text>
                              </Row>
                            )}

                          {user?.diet && user?.diet !== preferNotToSay && (
                            <Row
                              gap={10}
                              alignItems="center"
                              style={cardStyles.chip}
                            >
                              <Image
                                style={cardStyles.chipIcon}
                                source={require('../../assets/images/vitalIcons/diet.png')}
                              />
                              <Text style={cardStyles.chipText}>
                                {user?.diet}
                              </Text>
                            </Row>
                          )}

                          {user.drinking &&
                            user.drinking !== preferNotToSay && (
                              <Row
                                gap={10}
                                alignItems="center"
                                style={styles.chip}
                              >
                                <Image
                                  style={styles.chipIcon}
                                  source={require('../../assets/images/vitalIcons/drinks.png')}
                                />
                                <Text style={styles.chipText}>
                                  {user.drinking}
                                </Text>
                              </Row>
                            )}

                          {user?.excercise &&
                            user?.excercise !== preferNotToSay && (
                              <Row
                                gap={10}
                                alignItems="center"
                                style={cardStyles.chip}
                              >
                                <Image
                                  style={cardStyles.chipIcon}
                                  source={require('../../assets/images/vitalIcons/workout.png')}
                                />
                                <Text style={cardStyles.chipText}>
                                  {user?.excercise}
                                </Text>
                              </Row>
                            )}

                          {user?.smoking &&
                            user?.smoking !== preferNotToSay && (
                              <Row
                                gap={10}
                                alignItems="center"
                                style={cardStyles.chip}
                              >
                                <Image
                                  style={cardStyles.chipIcon}
                                  source={require('../../assets/images/vitalIcons/smoking.png')}
                                />
                                <Text style={cardStyles.chipText}>
                                  {user?.smoking}
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
                            {index === 1 && (
                              <View style={[cardStyles.ph16]}>
                                {user?.interests?.length > 0 && (
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
                                      {user?.interests?.map((item, index) => (
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

                            {index === 0 && user?.bio?.length > 0 && (
                              <View key={index}>
                                <View style={styles.inBtwnText}>
                                  <Text style={styles.headingText}>About</Text>
                                  <Text style={styles.aboutText}>
                                    {user.bio}
                                  </Text>
                                </View>

                                {user?.photos?.length === 1 && (
                                  <View style={[cardStyles.ph16]}>
                                    {user?.interests?.length > 0 && (
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
                                          {user?.interests?.map(
                                            (item, index) => (
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
                                            ),
                                          )}
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
                        {showLike ? (
                          <Pressable onPress={handleLike}>
                            <Image
                              style={cardStyles.shareIcon}
                              source={require('../../assets/images/icons/like.png')}
                            />
                          </Pressable>
                        ) : (
                          <View>
                            <Image
                              style={cardStyles.shareIcon}
                              source={require('../../assets/images/icons/disabledLike.png')}
                            />
                          </View>
                        )}
                        {showSave ? (
                          <Pressable onPress={addFavourite}>
                            <Image
                              style={styles.shareIcon}
                              source={require('../../assets/images/icons/save.png')}
                            />
                          </Pressable>
                        ) : (
                          <View>
                            <Image
                              style={styles.shareIcon}
                              source={require('../../assets/images/icons/disabledFav.png')}
                            />
                          </View>
                        )}
                      </Row>
                      <Spacer position="top" size={20} />
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
    );
  };
  if (showOnlyProfileView) {
    return <>{profileView()}</>;
  }
  return <Modal visible={showModal}>{profileView()}</Modal>;
};
