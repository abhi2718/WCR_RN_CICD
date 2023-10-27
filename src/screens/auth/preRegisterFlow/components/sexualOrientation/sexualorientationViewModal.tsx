import {useState} from 'react';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { ROUTES } from '../../../../../navigation';


export const useSexualOrientationViewModal = (props: any) => {
  const loggInUserId = props.route?.params?.data || 'No data received';

  const updateUserDetailsRepository = new UpdateUserDetailsRepository();

  const {navigation} = props;
  const [sexualOrientation, setSexualOrientation] = useState('Male');

  const handleSexualOrientationValue = (value: string) => {
    setSexualOrientation(value);
  };

//   const navigateToGenderPronounScreen = () => {
//     navigation.navigate(ROUTES.SexualOrientation);
//   };

  const updateUserDetails = (id: string, update: string) => {
    try {
      const genderData = {'profile.gender': update};
      const data = updateUserDetailsRepository.updateUserDetails(id, {
        update: genderData,
      });
      console.log('after saved the gender', data);
      // navigateToGenderPronoounScreen()
    } catch (err) {
      console.log(err);
    }
  };

  return {
    sexualOrientation, setSexualOrientation,
    loggInUserId,
    handleSexualOrientationValue,
    updateUserDetails,
  };
};
