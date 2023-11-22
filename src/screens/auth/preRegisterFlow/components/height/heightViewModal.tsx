import React from 'react';
import { ScreenParams } from "../../../../../types/services.types/firebase.service";
import { ROUTES } from '../../../../../navigation';

export const useheightViewModal = (props: ScreenParams) => {
  const loggInUserId = props.route?.params?.data || 'No data received';
  const {navigation} = props;
  const navigateToSexualOrientationScreen = (id: string) => {
    navigation.navigate(ROUTES.ProfilePic, { data: id });
  };
  return ({navigateToSexualOrientationScreen,loggInUserId});
};
