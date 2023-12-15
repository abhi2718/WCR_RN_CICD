import React, { useRef, useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { ShowFlashMessage } from '../../../../../components/flashBar';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES } from '../../../../../navigation';
import { addUser } from '../../../../../store/reducers/user.reducer';

export const useHobbyViewModal = (props: ScreenParams) => {
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const { navigation } = props;
  const { user } = useSelector((state: any) => state.userState);
  const dispatch = useDispatch();
  const token = useRef(user?.token ? user?.token : null).current;
  let hobbies = user?.interests;
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>(
    hobbies ?? [],
  );

  const [loading, setLoading] = useState(false);

  const handleHobbies = (option: string) => {
    if (selectedHobbies.includes(option)) {
      setSelectedHobbies(selectedHobbies.filter((item) => item !== option));
    } else if (selectedHobbies.length < 5) {
      setSelectedHobbies([...selectedHobbies, option]);
    } else {
      ShowFlashMessage(
        'Exceeded Selection Limit',
        'You can select a maximum of 5 hobbies.',
        'danger',
      );
    }
  };

  const navigateToVerificationScreen = () => {
    navigation.navigate(ROUTES.VerificationStepOne);
  };

  const updateUserDetails = async () => {
    try {
      const selectedInterests = {
        interests: selectedHobbies,
      };
      console.log("selectedInterests ===>",selectedInterests)
      // if (user?.interests === selectedHobbies) {
      //  // navigateToVerificationScreen();
      //   navigation.navigate(ROUTES.Tab)
      //   return;
      // }
      setLoading(true);
      const userData = await updateUserDetailsRepository.updateUserDetails(
        user._id,
        {
          update: selectedInterests,
        },
      );
      const data = token
        ? {
            user: {
              ...userData,
              token,
            },
          }
        : {
            user: userData,
          };
      dispatch(addUser(data));
      setLoading(false);
      console.log("userData --->",userData.interests)
     // navigateToVerificationScreen();
      // navigation.navigate(ROUTES.Tab)
    } catch (err: any) {
      setLoading(false);
    }
  };

  return {
    selectedHobbies,
    handleHobbies,
    updateUserDetails,
    loading,
    navigateToVerificationScreen,
  };
};
