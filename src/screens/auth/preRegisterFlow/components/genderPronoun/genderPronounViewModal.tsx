import { useState } from 'react';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { ROUTES } from '../../../../../navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../../../store/reducers/user.reducer';
import {
  FlashMessageType,
  ShowFlashMessage,
} from '../../../../../components/flashBar';

export const useGenderPronounViewModal = (props: any) => {
  const loggInUserId = props.route?.params?.data || 'No data received';

  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state: any) => state.userState);
  const dispatch = useDispatch();

  const { navigation } = props;
  const updateGenderPronoun = user?.profile?.genderPronoun ?? '';
  const [genderPronoun, setGenderPrPronoun] = useState(updateGenderPronoun);
  const [checkboxState, setCheckboxState] = useState(true);

  const handleGenderPronounValue = (value: string) => {
    setGenderPrPronoun(value);
  };

  const handleCheckboxChange = () => {
    setCheckboxState(!checkboxState);
  };

  const navigateToSexualOrientationScreen = (id: string) => {
    navigation.navigate(ROUTES.SexualOrientation, { data: id });
  };

  const updateUserDetails = async (id: string, update: string) => {
    try {
      if (!update) {
        return ShowFlashMessage(
          'Warning',
          'Please select gender pronoun!',
          FlashMessageType.DANGER,
        );
      }
      setLoading(true);
      const genderPronounData = {
        profile: {
          genderPronoun: update,
          showGenderPronoun: checkboxState,
        },
      };
      const user = await updateUserDetailsRepository.updateUserDetails(id, {
        update: genderPronounData,
      });
      const data = {
        user: user,
      };
      dispatch(addUser(data));
      setLoading(false);

      navigateToSexualOrientationScreen(loggInUserId);
    } catch (err: any) {
      setLoading(false);
    }
  };

  return {
    loading,
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
