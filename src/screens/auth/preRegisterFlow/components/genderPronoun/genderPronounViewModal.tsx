import { useRef, useState } from 'react';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { ROUTES } from '../../../../../navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../../../store/reducers/user.reducer';
import {
  FlashMessageType,
  ShowFlashMessage,
} from '../../../../../components/flashBar';

export const useGenderPronounViewModal = (props: any) => {
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state: any) => state.userState);
  const token = useRef(user?.token ? user?.token : null).current;
  const dispatch = useDispatch();

  const { navigation } = props;
  const updateGenderPronoun = user?.profile?.genderPronoun ?? '';
  const [genderPronoun, setGenderPrPronoun] = useState(updateGenderPronoun);
  const [checkboxState, setCheckboxState] = useState(false);

  const handleGenderPronounValue = (value: string) => {
    setGenderPrPronoun(value);
  };

  const handleCheckboxChange = () => {
    setCheckboxState(!checkboxState);
  };

  const navigateToSexualOrientationScreen = () => {
    navigation.navigate(ROUTES.SexualOrientation);
  };

  const updateUserDetails = async () => {
    try {
      if (!genderPronoun) {
        return ShowFlashMessage(
          'Warning',
          'Please select gender pronoun!',
          FlashMessageType.DANGER,
        );
      }

      if (user.profile.genderPronoun === genderPronoun) {
        navigateToSexualOrientationScreen();
        return;
      }
      setLoading(true);
      const genderPronounData = {
        profile: {
          genderPronoun: genderPronoun,
          showGenderPronoun: checkboxState,
        },
        steps: 2,
      };
      const userData = await updateUserDetailsRepository.updateUserDetails(
        user._id,
        {
          update: genderPronounData,
        },
      );
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

      navigateToSexualOrientationScreen();
    } catch (err: any) {
      setLoading(false);
    }
  };

  return {
    loading,
    genderPronoun,
    setGenderPrPronoun,
    handleGenderPronounValue,
    updateUserDetails,
    checkboxState,
    setCheckboxState,
    handleCheckboxChange,
  };
};
