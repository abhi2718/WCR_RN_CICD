import React from 'react';
import { Image, Text, View } from 'react-native';
import { Column } from '../../../components/tools';
import { declinedStyle } from './declinedStyle';
import { PrimaryButton } from '../../../components/button';
import { VerificationDeclinedProps } from '../../../types/screen.type/errorState.type';

const VerificationDeclined = (props:VerificationDeclinedProps) => {
  const {declineReason,navigateToGender} = props;
  return (
    <View style={declinedStyle.mainContainer}>
      <View style={declinedStyle.content}>
        <Column gap={25} alignItems="center">
          <Text style={declinedStyle.subHeading}>
            Your account has been declined.
          </Text>
          <Image
            style={declinedStyle.pendingIcon}
            resizeMode="contain"
            source={require('../../../assets/images/icons/declinedVerification.png')}
          />
          <View>
            <Text style={declinedStyle.text}>
              Your profile has been created successfully but we are unable to
              verify your account.
            </Text>
          </View>
        </Column>
        <View style={declinedStyle.redBox}>
          <Text style={declinedStyle.redBoxSubText}>
            See the following reason:
          </Text>
          <Text style={declinedStyle.redBoxText}>
          {declineReason}
          </Text>
        </View>
        <Column gap={25} alignItems="center">
          <Text style={declinedStyle.text}>
            You're so close to using this exclusive dating app, so let's update
            your current status. Please resubmit the necessary info to complete
            your account verification.
          </Text>
          <View style={declinedStyle.primaryButton}>
            <PrimaryButton
              title="Update profile"
              onPress={navigateToGender}
            />
          </View>
        </Column>
      </View>
    </View>
  );
};

export default VerificationDeclined;
