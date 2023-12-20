import React from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  dimensions,
  Row,
  ScreenWrapper,
  Spacer,
} from '../../../../../components/tools';
import { useViewModal } from './previewViewModal';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';

export const PreviewScreen = () => {
  const { user, goBack } = useViewModal();
  const heightStyle = { height: 700, width: 300 };

  console.log('User:', user);
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Row
          style={styles.header}
          justifyContent="space-between"
          alignItems="center"
        >
          <Pressable onPress={goBack}>
            <Image
              style={styles.closeIcon}
              resizeMode="contain"
              source={require('../../../../../assets/images/icons/crossIcon.png')}
            />
          </Pressable>
          <Text style={styles.headerText}>Preview</Text>
          <View style={styles.closeIcon} />
        </Row>
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
                      uri: user.profilePicture.url,
                    }}
                    style={styles.profilePic}
                  >
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0.00)', ' rgba(0, 0, 0, 0.9)']}
                      style={styles.gradient}
                    />
                    <Row alignItems="center" gap={15} style={styles.nameRow}>
                      <Text style={styles.name}>{user.profile.displayName ?? user.profile.name.first} (He/Him), 27</Text>
                      <Image
                        style={styles.badge}
                        source={require('../../../../../assets/images/icons/badge.png')}
                      />
                    </Row>
                  </FastImage>
                </View>

                <View style={styles.userInfo}>
                  <Row style={styles.userInfoRow} gap={15}>
                    <Image
                      style={styles.userInfoIcon}
                      source={require('../../../../../assets/images/icons/degree.png')}
                    />
                    <Text style={styles.userInfoText}>
                      {user.designation.userDegree}
                    </Text>
                  </Row>

                  <Row style={styles.userInfoRow} gap={15}>
                    <Image
                      style={styles.userInfoIcon}
                      source={require('../../../../../assets/images/icons/degTitle.png')}
                    />
                    <Text style={styles.userInfoText}>
                      {user.designation.title}
                    </Text>
                  </Row>

                  <Row style={styles.userInfoRow} gap={15}>
                    <Image
                      style={styles.userInfoIcon}
                      source={require('../../../../../assets/images/icons/location.png')}
                    />
                    <Text style={styles.userInfoText}>
                      {user.address.state}
                    </Text>
                  </Row>
                </View>

                <View style={styles.vitalSigns}>
                  <Text style={styles.headingText}>Vital Signs</Text>
                  <Row
                    style={styles.vitalSignsChips}
                    gap={15}
                    alignItems="center"
                  >
                    <Row gap={10} alignItems="center" style={styles.chip}>
                      {user.profile.gender === 'Female' && (
                        <Image
                          style={styles.chipIcon}
                          source={require('../../../../../assets/images/icons/femailAvatar.png')}
                        />
                      )}
                      {user.profile.gender === 'Male' && (
                        <Image
                          style={styles.chipIcon}
                          source={require('../../../../../assets/images/icons/maleAvatar.png')}
                        />
                      )}
                      <Text style={styles.chipText}>{user.profile.gender}</Text>
                    </Row>
                    <Row gap={10} alignItems="center" style={styles.chip}>
                      <Image
                        style={styles.chipIcon}
                        source={require('../../../../../assets/images/icons/drinks.png')}
                      />
                      <Text style={styles.chipText}>Drinking</Text>
                    </Row>

                    <Row gap={10} alignItems="center" style={styles.chip}>
                      <Text style={styles.chipText}>Ethnicity</Text>
                    </Row>
                    <Row gap={10} alignItems="center" style={styles.chip}>
                      <Image
                        style={styles.chipIcon}
                        source={require('../../../../../assets/images/icons/heightScale.png')}
                      />
                      <Text style={styles.chipText}>userHeight</Text>
                    </Row>
                    <Row gap={10} alignItems="center" style={styles.chip}>
                      <Text style={styles.chipText}>{user.maritalStatus}</Text>
                    </Row>
                  </Row>
                </View>

                {user?.photos.map(({ url, _id }, index) => {
                  return (
                    <View key={index}>
                      <FastImage
                        key={_id}
                        style={styles.pictures}
                        source={{ uri: url }}
                      />
                      {index === 0 && (
                        <View style={styles.inBtwnText}>
                          <Text style={styles.headingText}>About</Text>
                          <Text style={styles.aboutText}>{user.bio}</Text>
                        </View>
                      )}
                    </View>
                  );
                })}
                <View style={styles.inBtwnText}>
                  <Text style={styles.headingText}>Interests/Hobbies</Text>
                  <Text style={styles.aboutText}>
                    hiking, yoga, cooking, live music, trying new restaurants,
                    skydiving some day
                  </Text>
                </View>
              </ScrollView>
            </>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};
