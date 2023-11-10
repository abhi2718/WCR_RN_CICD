import { useState } from 'react';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { ROUTES } from '../../../../../navigation';
import { addUser } from '../../../../../store/reducers/user.reducer';
import { useSelector, useDispatch } from 'react-redux';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import {
  FlashMessageType,
  ShowFlashMessage,
} from '../../../../../components/flashBar';

export const useSexualOrientationViewModal = (props: ScreenParams) => {
  const loggInUserId = props.route?.params?.data || 'No data received';

  const updateUserDetailsRepository = new UpdateUserDetailsRepository();

  const { user } = useSelector((state: any) => state.userState);
  const dispatch = useDispatch();

  const { navigation } = props;
  const updatedOrientation = user?.profile?.sexualPreference ?? '';
  const [sexualOrientation, setSexualOrientation] =
    useState(updatedOrientation);
  const [checkboxState, setCheckboxState] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSexualOrientationValue = (value: string) => {
    setSexualOrientation(value);
  };

  const handleCheckboxChange = () => {
    setCheckboxState(!checkboxState);
  };

  const navigateTolocationCreen = (id: string) => {
    navigation.navigate(ROUTES.Location, { data: id });
  };

  const updateUserDetails = async (id: string, update: string) => {
    try {
      if (!update) {
        return ShowFlashMessage(
          'Warning',
          'Please select Sexual Orientation!',
          FlashMessageType.DANGER,
        );
      }
      setLoading(true);
      const genderData = {
        profile: {
          sexualPreference: update,
          showSexualPreference: checkboxState,
        },
      };
      const user = await updateUserDetailsRepository.updateUserDetails(id, {
        update: genderData,
      });
      const data = {
        user: user,
      };
      dispatch(addUser(data));
      setLoading(false);

      navigateTolocationCreen(loggInUserId);
    } catch (err: any) {
      setLoading(false);
    }
  };

  return {
    loading,
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
