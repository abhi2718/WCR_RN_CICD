import React from 'react';
import { Image, Text, View } from 'react-native';
import { runOutOffProfileStyle } from './runOutOffProfileStyle';
import { PrimaryButton } from '../../../../../../../components/button';
import { colors } from '../../../../../../../infrastructure/theme/colors';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../../../../navigation';

export const RunOutOffProfile = () => {
  const { navigate } = useNavigation();
  const goToPrefrence = () => navigate(ROUTES.Preferences);
  const goToCommunityChat = () => navigate(ROUTES.CommunityChatTab);
  return (
    <View style={runOutOffProfileStyle.content}>
      <Text style={runOutOffProfileStyle.subHeading}>Discover</Text>
      <Image
        style={runOutOffProfileStyle.pendingIcon}
        resizeMode="contain"
        source={require('../../../../../../../assets/images/icons/runnOutofProfileIcon.png')}
      />
      <Text style={runOutOffProfileStyle.text}>
        Cupid’s been working hard today, handpicking your high-quality matches
        (up to 5/day), based on your preferences and nearby users.
      </Text>
      <View style={runOutOffProfileStyle.primaryButton}>
        <PrimaryButton onPress={goToPrefrence} title="Change Preference" />
        <PrimaryButton
          color={colors.ui.primary}
          style={runOutOffProfileStyle.secondaryButton}
          btnColor={colors.bg.secondary}
          title="Community"
          onPress={goToCommunityChat}
        />
      </View>
    </View>
  );
};
