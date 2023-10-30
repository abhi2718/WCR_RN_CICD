import { useState } from 'react';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { ROUTES } from '../../../../../navigation';

export const useSexualOrientationViewModal = (props: any) => {
  const loggInUserId = props.route?.params?.data || 'No data received';

  const updateUserDetailsRepository = new UpdateUserDetailsRepository();

  const { navigation } = props;
  const [sexualOrientation, setSexualOrientation] = useState('Male');
  const [checkboxState, setCheckboxState] = useState(true);

  const handleSexualOrientationValue = (value: string) => {
    setSexualOrientation(value);
  };

  const handleCheckboxChange = () => {
    setCheckboxState(!checkboxState);
  };

  //   const navigateToGenderPronounScreen = () => {
  //     navigation.navigate(ROUTES.SexualOrientation);
  //   };

  const updateUserDetails = async (id: string, update: string) => {
    try {
      const genderData = { profile: { sexualPreference: update,
        showSexualPreference:checkboxState } };
      const data = await updateUserDetailsRepository.updateUserDetails(id, {
        update: genderData,
      });
      // navigateToGenderPronoounScreen()
    } catch (err) {
      console.log(err);
    }
  };

  return {
    sexualOrientation,
    setSexualOrientation,
    loggInUserId,
    handleSexualOrientationValue,
    updateUserDetails,
    handleCheckboxChange,
    checkboxState, setCheckboxState
  };
};
