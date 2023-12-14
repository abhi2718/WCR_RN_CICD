import { useRef, useState } from 'react';
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


  const updateUserDetailsRepository = new UpdateUserDetailsRepository();

  const { user } = useSelector((state: any) => state.userState);
  const dispatch = useDispatch();
  const token = useRef(user?.token ? user?.token : null).current;

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

  const navigateTolocationCreen = () => {
    navigation.navigate(ROUTES.Location);
  };

  const updateUserDetails = async () => {
    try {
      if (!sexualOrientation) {
        return ShowFlashMessage(
          'Warning',
          'Please select Sexual Orientation!',
          FlashMessageType.DANGER,
        );
      }

      if (user.profile.sexualPreference === sexualOrientation) {
        navigateTolocationCreen();
        return
      }
      setLoading(true);
      const genderData = {
        profile: {
          sexualPreference: sexualOrientation,
          showSexualPreference: checkboxState,
        },
      };
      const userData = await updateUserDetailsRepository.updateUserDetails(user._id, {
        update: genderData,
      });
      const data = token
        ? {
            user: {
              ...userData,
              token,
            },
          }
        : {
            user: userData,
          };
      dispatch(addUser(data));
      setLoading(false);

      navigateTolocationCreen();
    } catch (err: any) {
      setLoading(false);
    }
  };

  return {
    loading,
    sexualOrientation,
    setSexualOrientation,
    handleSexualOrientationValue,
    updateUserDetails,
    handleCheckboxChange,
    checkboxState,
    setCheckboxState,
  };
};
