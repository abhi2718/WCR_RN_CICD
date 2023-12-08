import {  useRef, useState } from 'react';
import { UpdateUserDetailsRepository } from '../../../repository/pregisterFlow.repo';
import { ROUTES } from '../../../navigation';
import { ScreenParams } from '../../../types/services.types/firebase.service';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../store/reducers/user.reducer';
import {
  FlashMessageType,
  ShowFlashMessage,
} from '../../../components/flashBar';

export const useGenderViewModal = (props: ScreenParams) => {
  const loggInUserId = props.route?.params?.data || 'No data received';
  const [loading, setLoading] = useState(false);
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
    const { user } = useSelector((state: any) => state.userState);
    const dispatch = useDispatch();
  const { navigation } = props;
  const updatedGender = user?.profile?.gender ?? 'Male';
  const token = useRef(user?.token ? user?.token : null).current;
  const [gender, setGender] = useState(updatedGender);
  const [checkboxState, setCheckboxState] = useState(true);

  const handleGenderValue = (value: string) => {
    setGender(value);
  };



  const handleCheckboxChange = () => {
    setCheckboxState(!checkboxState);
  };

  const navigateToGenderPronounScreen = (id: string) => {
    
    navigation.navigate(ROUTES.VerificationStepOne, { data: id });
    
  };

  const updateUserDetails = async () => {
    try {

      const genderData = {
        profile: {
          gender: gender,
          showGender: checkboxState,
        },
      };
     
      if (!gender) {
        return ShowFlashMessage(
          'Warning',
          'Please select gender!',
          FlashMessageType.DANGER,
        );
      }
      setLoading(true);

     
      const userData = await updateUserDetailsRepository.updateUserDetails(user._id ,{
        update: genderData,
      });
      const data = token ? {
        user: {
          ...userData,
          token
        },
      }  :{
        user: userData,
      };
      dispatch(addUser(data));
      setLoading(false);
      
      navigateToGenderPronounScreen(user._id);
    } catch (err: any) {
      setLoading(false);
    }
  };

  return {
    loading,
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
