import { useState } from 'react';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { ROUTES } from '../../../../../navigation';

export const useGenderPronounViewModal = (props: any) => {
  const loggInUserId = props.route?.params?.data || 'No data received';

  const updateUserDetailsRepository = new UpdateUserDetailsRepository();

  const { navigation } = props;
  const [genderPronoun, setGenderPrPronoun] = useState('Male');

  const handleGenderPronounValue = (value: string) => {
    setGenderPrPronoun(value);
  };

  const navigateToSexualOrientationScreen = () => {
    navigation.navigate(ROUTES.SexualOrientation);
  };

  const updateUserDetails = async (id: string, update: string) => {
    try {
      const genderData = {
        profile: {
          gender: 'Male',
        },
      };
      const data = await updateUserDetailsRepository.updateUserDetails(id, {
        update: genderData,
      });
      console.log('after saved the gender', data);
      // navigateToGenderPronoounScreen()
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
  };
};
