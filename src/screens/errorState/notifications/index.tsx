import React from 'react';
import { Image, Text, View } from 'react-native';
import { Column } from '../../../components/tools';
import { notificationStyles } from './notificationStyles';
import { PrimaryButton } from '../../../components/button';

const TurnOnNotification = () => {
  return (
    <View style={notificationStyles.mainContainer}>
      <View style={notificationStyles.content}>
        <Column gap={25} alignItems="center">
          <Text style={notificationStyles.subHeading}>
            Turn on notifications
          </Text>
          <Image
            style={notificationStyles.pendingIcon}
            resizeMode="contain"
            source={require('../../../assets/images/icons/msgIcon.png')}
          />
          <View>
            <Text style={notificationStyles.text}>
              Missing a match or a message {`\n`} can be a real turnoff.
            </Text>
          </View>
        </Column>
        <View>
          <PrimaryButton title="Notify me" />
        </View>
      </View>
    </View>
  );
};

export default TurnOnNotification;
