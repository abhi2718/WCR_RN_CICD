import { useState } from 'react';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { ROUTES } from '../../../../../navigation';

export const useGenderPronounViewModal = (props: any) => {
  const loggInUserId = props.route?.params?.data || 'No data received';

  const updateUserDetailsRepository = new UpdateUserDetailsRepository();

  const { navigation } = props;
  const [genderPronoun, setGenderPrPronoun] = useState('Male');
  const [checkboxState, setCheckboxState] = useState(true);

  const handleGenderPronounValue = (value: string) => {
    setGenderPrPronoun(value);
  };

  const handleCheckboxChange = () => {
    setCheckboxState(!checkboxState);
  };

  const navigateToSexualOrientationScreen = (id:string) => {
    navigation.navigate(ROUTES.SexualOrientation,{data:id});
  };

  const updateUserDetails = async (id: string, update: string) => {
    try {
      const genderPronounData = {
        profile: {
          genderPronoun: update,
          showGenderPronoun:checkboxState
        },
      };
      const data = await updateUserDetailsRepository.updateUserDetails(id, {
        update: genderPronounData,
      });
     navigateToSexualOrientationScreen(loggInUserId)
    } catch (err) {
      console.log(err);
    }
  };

  return {
    genderPronoun,
    setGenderPrPronoun,
    loggInUserId,
    handleGenderPronounValue,
    updateUserDetails,
    checkboxState,
    setCheckboxState,
    handleCheckboxChange,
  };
};
