import React from 'react';
import { Text, View } from 'react-native';
import { PrimaryButton } from '../../../components/button';
import { ScreenParams } from '../../../types/services.types/firebase.service';
import { useViewModal } from './viewModal';
import { Column, ScreenContainer } from '../../../components/tools';

export const WelcomeHomeScreen = (props: ScreenParams) => {
  const { updateUserDetails, loading } = useViewModal(props);
  return (
    <ScreenContainer>
      <View>
        <Column>
          <View>
            <Text>Welcome to the White Coat Romance</Text>
          </View>
          <PrimaryButton
            title="Lets Go"
            onPress={updateUserDetails}
            isLoading={loading}
          ></PrimaryButton>
        </Column>
      </View>
    </ScreenContainer>
  );
};
