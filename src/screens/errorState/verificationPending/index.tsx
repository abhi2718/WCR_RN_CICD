import React from 'react';
import { Image, Text, View } from 'react-native';
import { Column, Logo, Row, ScreenContainer } from '../../../components/tools';
import { ErrorScreenHeader, HeaderDeck } from '../../../components/header';
import { pendingStyle } from './pendingStyle';
import { PrimaryButton } from '../../../components/button';

const VerificationPending = () => {
  return (
    <View style={pendingStyle.mainContainer}>
      <ErrorScreenHeader />
      <View style={pendingStyle.content}>
        <Column gap={25} alignItems="center">
          <Text style={pendingStyle.subHeading}>
            Account yet to be Verified
          </Text>
          <Image
            style={pendingStyle.pendingIcon}
            resizeMode="contain"
            source={require('../../../assets/images/icons/pendingIcon.png')}
          />
          <View>
            <Text style={pendingStyle.text}>
              Your Profile has been created successfully.
            </Text>
            <Text style={pendingStyle.text}>
              We will notify you when your ID is verified.
            </Text>
          </View>
        </Column>
        <Column gap={25} alignItems="center">
          <Text style={pendingStyle.text}>
            Once your ID is verified, you can immediately use this exclusive
            app. In the meantime, build your profile to hit the ground running
            as soon as we verify it.
          </Text>
          <View style={pendingStyle.primaryButton}>
            <PrimaryButton title="Review Profile" />
          </View>
        </Column>
      </View>
    </View>
  );
};

export default VerificationPending;
