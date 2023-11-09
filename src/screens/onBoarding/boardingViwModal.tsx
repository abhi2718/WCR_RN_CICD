import { useState } from 'react';
import { ScreenParams } from '../../types/services.types/firebase.service';
import { ROUTES } from '../../navigation';

export const useonBoardingViewModal = (props: ScreenParams) => {
  const { navigation } = props;
  const [currentView, setCurrentView] = useState(1);

  const navigateToSignInScreen = () => {
    navigation.navigate(ROUTES.SignIn);
  };

  const switchView = () => {
    setCurrentView((prevView) => (prevView % 3) + 1);

    if (currentView === 3) {
      navigateToSignInScreen();
    }
  };
  return { currentView, setCurrentView, switchView };
};
