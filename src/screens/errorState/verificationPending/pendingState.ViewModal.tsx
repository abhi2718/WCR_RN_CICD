import { useState } from 'react';
import { ScreenParams } from '../../../types/services.types/firebase.service';
import { useSelector } from 'react-redux';
import { ROUTES } from '../../../navigation';

export const usePandingStateViewModal = (props: ScreenParams) => {
  const {navigation} = props; 
  const { user } = useSelector((state: any) => state.userState);
  const state = user?.verification?.status
  const isFormSubmitted = user?.verificationId?.submitted

  const navigateToGender = () => {
    navigation.navigate(ROUTES.Gender);
  };
  if(user?.verification?.status==='Verified'){
    navigation.navigate(ROUTES.Tab);
  }
  return {state,isFormSubmitted,navigateToGender};
};
