import { useState } from 'react';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { ROUTES } from '../../../../../navigation';
import { addUser } from '../../../../../store/reducers/user.reducer';
import { useSelector, useDispatch } from 'react-redux';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';

export const useSexualOrientationViewModal = (props: ScreenParams) => {
  const loggInUserId = props.route?.params?.data || 'No data received';

  const updateUserDetailsRepository = new UpdateUserDetailsRepository();

  const { user } = useSelector((state: any) => state.userState);
  const dispatch = useDispatch();

  const { navigation } = props;
  const [sexualOrientation, setSexualOrientation] = useState('Male');
  const [checkboxState, setCheckboxState] = useState(true);

  const handleSexualOrientationValue = (value: string) => {
    setSexualOrientation(value);
  };

  const handleCheckboxChange = () => {
    setCheckboxState(!checkboxState);
  };

  const navigateTolocationCreen = (id: string) => {
    navigation.navigate(ROUTES.Location,{ data: id });
  };

  const updateUserDetails = async (id: string, update: string) => {
    try {
      const genderData = {
        profile: {
          sexualPreference: update,
          showSexualPreference: checkboxState,
        },
      };
      const user = await updateUserDetailsRepository.updateUserDetails(id, {
        update: genderData,
      });
      const data ={
        user:user
      }
      dispatch(addUser(data));
      navigateTolocationCreen(loggInUserId);
    } catch (err: any) {
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
    checkboxState,
    setCheckboxState,
  };
};
