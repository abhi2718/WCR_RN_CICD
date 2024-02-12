import React from 'react';
import { Image, Text, View } from 'react-native';
import { pausedProfileStyle } from './pausedProfileStyle';
import { PrimaryButton } from '../../../../../../../components/button';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../../../../navigation';

export const PausedProfile = () => {
  const { navigate } = useNavigation();
  const goToProfileSetting = ()=> navigate(ROUTES.AccountSetting)
  return (
    <View style={pausedProfileStyle.content}>
      <Text style={pausedProfileStyle.subHeading}>Profile paused</Text>
      <Image
        style={pausedProfileStyle.pendingIcon}
        resizeMode="contain"
        source={require('../../../../../../../assets/images/icons/runnOutofProfileIcon.png')}
      />
      <Text style={pausedProfileStyle.text}>
        You’ve paused your profile from being shown to new people.
      </Text>
      <View style={pausedProfileStyle.primaryButton}>
        <PrimaryButton onPress={goToProfileSetting} title="Unpause profile" />
      </View>
    </View>
  );
};
