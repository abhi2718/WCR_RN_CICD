import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { Column } from '../../../components/tools';
import { ErrorScreenHeader } from '../../../components/header';
import { PrimaryButton } from '../../../components/button';
import { pendingStyle } from './pendingStyle';
import { usePandingStateViewModal } from './pendingState.ViewModal';
import { ScreenParams } from '../../../types/services.types/firebase.service';
import VerificationDeclined from '../verificationDeclined';

const VerificationPending = (props: ScreenParams) => {
  const { state, isFormSubmitted, navigateToGender, declineReason } =
    usePandingStateViewModal(props);
  return (
    <SafeAreaView style={pendingStyle.mainContainer}>
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
              <PrimaryButton
                title="Review Profile"
                onPress={navigateToGender}
              />
            </View>
          </Column>
        </View>
      )}
      {state === 'Rejected' && (
        <VerificationDeclined
          declineReason={declineReason}
          navigateToGender={navigateToGender}
        />
      )}
    </SafeAreaView>
  );
};

export default VerificationPending;
