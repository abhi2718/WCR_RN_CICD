import { useEffect, useState } from 'react';
import { UpdateUserDetailsRepository } from '../../../repository/pregisterFlow.repo';
import { ROUTES } from '../../../navigation';
import { ScreenParams } from '../../../types/services.types/firebase.service';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../store/reducers/user.reducer';

export const useGenderViewModal = (props: ScreenParams) => {
  const loggInUserId = props.route?.params?.data || 'No data received';

  const updateUserDetailsRepository = new UpdateUserDetailsRepository();

  const { user } = useSelector((state: any) => state.userState);
  const dispatch = useDispatch();

  const { navigation } = props;
  const [gender, setGender] = useState('Male');
  const [checkboxState, setCheckboxState] = useState(true);

  const handleGenderValue = (value: string) => {
    setGender(value);
  };

  const handleCheckboxChange = () => {
    setCheckboxState(!checkboxState);
  };

  const navigateToGenderPronounScreen = (id: string) => {
    navigation.navigate(ROUTES.GenderPronoun, { data: id });
  };

  const updateUserDetails = async (id: string, update: string) => {
    try {
      const genderData = {
        profile: {
          gender: update,
          showGender: checkboxState,
        },
      };
      
      const user = await updateUserDetailsRepository.updateUserDetails(id, {
        update: genderData,
      });
      const data ={
        user:user
      }
      dispatch(addUser(data));
      navigateToGenderPronounScreen(loggInUserId);
    } catch (err: any) {
      console.log(err.toString());
    }
  };

  return {
    gender,
    setGender,
    loggInUserId,
    handleGenderValue,
    updateUserDetails,
    handleCheckboxChange,
    checkboxState,
    setCheckboxState,
  };
};
