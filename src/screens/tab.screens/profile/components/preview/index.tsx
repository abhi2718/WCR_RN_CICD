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
              source={require('../../../../../assets/images/icons/back-arrow.png')}
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
                        {user.profile.displayName ?? user.profile.name.first}
                        (He/Him), 27
                      </Text>
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
                      {user.designation?.userDegree}
                    </Text>
                  </Row>
                  <Row style={styles.userInfoRow} gap={15}>
                    <Image
                      style={styles.userInfoIcon}
                      source={require('../../../../../assets/images/icons/degTitle.png')}
                    />
                    <Text style={styles.userInfoText}>
                      {user.designation?.title}
                    </Text>
                  </Row>
                  <Row style={styles.userInfoRow} gap={15}>
                    <Image
                      style={styles.userInfoIcon}
                      source={require('../../../../../assets/images/icons/location.png')}
                    />
                    <Text style={styles.userInfoText}>
                      {user.address?.state}
                    </Text>
                  </Row>
                </View>
                <View style={styles.vitalSigns}>
                  {(user?.profile?.gender?.length > 0 ||
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
                    {user?.profile?.gender?.length > 0 && (
                      <Row gap={10} alignItems="center" style={styles.chip}>
                        {user?.profile?.gender === 'Female' && (
                          <Image
                            style={styles.chipIcon}
                            source={require('../../../../../assets/images/icons/femailAvatar.png')}
                          />
                        )}
                        {user?.profile?.gender === 'Male' && (
                          <Image
                            style={styles.chipIcon}
                            source={require('../../../../../assets/images/icons/maleAvatar.png')}
                          />
                        )}
                        <Text style={styles.chipText}>
                          {user?.profile?.gender}
                        </Text>
                      </Row>
                    )}
                    {user?.drinking?.length > 0 && (
                      <Row gap={10} alignItems="center" style={styles.chip}>
                        <Image
                          style={styles.chipIcon}
                          source={require('../../../../../assets/images/icons/drinks.png')}
                        />
                        <Text style={styles.chipText}>Drinking</Text>
                      </Row>
                    )}
                    {user?.ethnicity?.length > 0 && (
                      <Row gap={10} alignItems="center" style={styles.chip}>
                        <Text style={styles.chipText}>Ethnicity</Text>
                      </Row>
                    )}
                    {user?.height && (
                      <Row gap={10} alignItems="center" style={styles.chip}>
                        <Image
                          style={styles.chipIcon}
                          source={require('../../../../../assets/images/icons/heightScale.png')}
                        />
                        <Text style={styles.chipText}>
                          {user?.height?.feet}'{user?.height?.inch}
                        </Text>
                      </Row>
                    )}
                    {user?.maritalStatus && (
                      <Row gap={10} alignItems="center" style={styles.chip}>
                        <Text style={styles.chipText}>
                          {user.maritalStatus}
                        </Text>
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
                          <Text style={styles.headingText}>About</Text>
                          <Text style={styles.aboutText}>{user.bio}</Text>
                        </View>
                      )}
                    </View>
                  );
                })}
                {user?.interests?.length > 0 && (
                  <View style={styles.inBtwnText}>
                    <Text style={styles.headingText}>Interests/Hobbies</Text>
                    <Row style={{ flexWrap: 'wrap' }}>
                      {user?.interests?.map((hobby: string, index: number) => {
                        if (user?.interests?.length - 1 === index) {
                          return (
                            <Text key={index} style={styles.aboutText}>
                              {hobby}
                            </Text>
                          );
                        }
                        return (
                          <Text key={index} style={styles.aboutText}>
                            {hobby},
                          </Text>
                        );
                      })}
                    </Row>
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
