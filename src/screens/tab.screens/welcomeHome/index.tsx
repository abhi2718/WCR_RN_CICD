import React from 'react';
import { Image, Text, View } from 'react-native';
import { PrimaryButton } from '../../../components/button';
import { ScreenParams } from '../../../types/services.types/firebase.service';
import { useViewModal } from './viewModal';
import { Column, Row, ScreenContainer } from '../../../components/tools';
import { styles } from './welcomeHomeStyle';

export const WelcomeHomeScreen = (props: ScreenParams) => {
  const { updateUserDetails, loading } = useViewModal(props);
  return (
    <ScreenContainer>
      <View>
        <Column
          justifyContent="space-around"
          alignItems="center"
          style={{ height: '100%' }}
        >
          <Column alignItems="center" gap={5}>
            <Text style={styles.welcomeHead}>Welcome to</Text>
            <Image
              source={require('../../../assets/images/welcomeHead.png')}
              resizeMode="contain"
              style={styles.welcomeHeadImg}
            />
            <Column alignItems="center">
              <Text style={styles.welcomeText}>
                We're thrilled you joined our exclusive community
              </Text>
              <Text style={styles.welcomeText}>
                of verified healthcare professionals & students!
              </Text>
            </Column>
          </Column>
          <Image
            source={require('../../../assets/images/welcomeImg.png')}
            resizeMode="contain"
            style={styles.welcomeImg}
          />
          <Text style={styles.infohead}>Here's how our app works:</Text>

          <Row gap={10} alignItems="flex-start" style={{ width: '95%' }}>
            <Image
              source={require('../../../assets/images/icons/checkIcon.png')}
              resizeMode="contain"
              style={styles.checkIcon}
            />
            <Column>
              <Text style={styles.listHead}>Quality Matches</Text>
              <Text style={styles.listText}>
                Enjoy up to 5 handpicked profiles delivered daily at 6pm PST /
                9pm EST. Quality over quantity is our mantra, so hang tight for
                your ideal match!
              </Text>
            </Column>
          </Row>
          <Row gap={10} alignItems="flex-start" style={{ width: '95%' }}>
            <Image
              source={require('../../../assets/images/icons/checkIcon.png')}
              resizeMode="contain"
              style={styles.checkIcon}
            />
            <Column>
              <Text style={styles.listHead}>Engage freely</Text>
              <Text style={styles.listText}>
                No waiting for matches! Join our interest groups for lively
                interactions and optional private messaging.
              </Text>
            </Column>
          </Row>
          <Row gap={10} alignItems="flex-start" style={{ width: '95%' }}>
            <Image
              source={require('../../../assets/images/icons/checkIcon.png')}
              resizeMode="contain"
              style={styles.checkIcon}
            />
            <Column>
              <Text style={styles.listHead}>
                Wide Preferences, More Matches
              </Text>
              <Text style={styles.listText}>
                Expand your preferences to broaden your chances of finding
                meaningful connections.
              </Text>
            </Column>
          </Row>
          <Text style={styles.finaltext}>
            Get ready to find your perfect match and make new friends!
          </Text>
          <PrimaryButton
            title="Let's Go"
            onPress={updateUserDetails}
            isLoading={loading}
          ></PrimaryButton>
        </Column>
      </View>
    </ScreenContainer>
  );
};
