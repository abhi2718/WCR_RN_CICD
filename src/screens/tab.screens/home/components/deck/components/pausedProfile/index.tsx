import React from 'react';
import { Image, Text, View } from 'react-native';
import { pausedProfileStyle } from './pausedProfileStyle';
import { PrimaryButton } from '../../../../../../../components/button';
import { colors } from '../../../../../../../infrastructure/theme/colors';

export const PausedProfile = () => {
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
        <PrimaryButton title="Unpause profile" />
      </View>
    </View>
  );
};
