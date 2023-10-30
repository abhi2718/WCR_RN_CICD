import { useState } from 'react';
import { UpdateUserDetailsRepository } from '../../../repository/pregisterFlow.repo';
import { ROUTES } from '../../../navigation';

export const useGenderViewModal = (props: any) => {
  const loggInUserId = props.route?.params?.data || 'No data received';

  const updateUserDetailsRepository = new UpdateUserDetailsRepository();

  const { navigation } = props;
  const [gender, setGender] = useState('Male');
  const [checkboxState, setCheckboxState] = useState(true);

  const handleGenderValue = (value: string) => {
    setGender(value);
  };

  const handleCheckboxChange = () => {
    setCheckboxState(!checkboxState);
  };

  const navigateToGenderPronounScreen = (id:string) => {
    navigation.navigate(ROUTES.GenderPronoun,{data:id});
  };

  const updateUserDetails = async (id: string, update: string) => {
    try {
      const genderData = {
        profile: {
          gender: update,
          showGender:checkboxState
        },
      };
      const data = await updateUserDetailsRepository.updateUserDetails(id, {
        update: genderData,
      });
    //  console.log('after saved the gender', data);
      navigateToGenderPronounScreen(loggInUserId)
    } catch (err) {
      console.log(err);
    }
  };

  return {
    gender,
    setGender,
    loggInUserId,
    handleGenderValue,
    updateUserDetails,
    handleCheckboxChange,
    checkboxState, setCheckboxState
  };
};
