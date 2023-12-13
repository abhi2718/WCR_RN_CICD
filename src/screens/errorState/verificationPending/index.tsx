import React from 'react';
import { Image, Text, View } from 'react-native';
import { Column, Logo, Row, ScreenContainer } from '../../../components/tools';
import { ErrorScreenHeader, HeaderDeck } from '../../../components/header';
import { PrimaryButton } from '../../../components/button';
import { pendingStyle } from './pendingStyle';
import { usePandingStateViewModal } from './pendingState.ViewModal';
import { ScreenParams } from '../../../types/services.types/firebase.service';

const VerificationPending = (props: ScreenParams) => {
  const { state ,isFormSubmitted,navigateToGender} = usePandingStateViewModal(props);
  return (
    <View style={pendingStyle.mainContainer}>
      <ErrorScreenHeader />
      {state === 'Pending' && isFormSubmitted && (
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
              <PrimaryButton title="Review Profile"
              onPress={navigateToGender}
              />
            </View>
          </Column>
        </View>
      )}

      {/* // declined state */}
      {state === 'Rejected' && (
        <View style={pendingStyle.contentDeclined}>
          <Column gap={25} alignItems="center">
            <Text style={pendingStyle.subHeading}>
              Your account has been declined.
            </Text>
            <Image
              style={pendingStyle.pendingIconDeclined}
              resizeMode="contain"
              source={require('../../../assets/images/icons/declinedVerification.png')}
            />
            <View>
              <Text style={pendingStyle.textDeclined}>
                Your profile has been created successfully but we are unable to
                verify your account.
              </Text>
            </View>
          </Column>
          <View style={pendingStyle.redBox}>
            <Text style={pendingStyle.redBoxSubText}>
              See the following reason:
            </Text>
            <Text style={pendingStyle.redBoxText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eget volutpat arcu.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur eget volutpat arcu.{' '}
            </Text>
          </View>
          <Column gap={25} alignItems="center">
            <Text style={pendingStyle.textDeclined}>
              You're so close to using this exclusive dating app, so let's
              update your current status. Please resubmit the necessary info to
              complete your account verification.
            </Text>
            <View style={pendingStyle.primaryButton}>
              <PrimaryButton title="Update profile" />
            </View>
          </Column>
        </View>
      )}
    </View>
  );
};

export default VerificationPending;
