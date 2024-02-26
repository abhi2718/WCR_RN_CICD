import { ScreenParams } from '../../../types/services.types/firebase.service';
import { ROUTES } from '../../../navigation';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUserDetailsRepository } from '../../../repository/pregisterFlow.repo';
import { useEffect, useRef, useState } from 'react';
import { addUser } from '../../../store/reducers/user.reducer';

export const useViewModal = (props: ScreenParams) => {
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const { navigation } = props;
  const { user } = useSelector((state: any) => state.userState);
  const dispatch = useDispatch();
  const token = useRef(user?.token ? user?.token : null).current;
  const [loading, setLoading] = useState(false);

  const navigateToHomeDeck = () => {
    navigation.navigate(ROUTES.Tab);
  };

  useEffect(() => {
    if (user?.welcomeHome) {
      navigateToHomeDeck();
    }
  }, []);

  const updateUserDetails = async () => {
    try {
      const update = {
        welcomeHome: true,
      };
      setLoading(true);
      const userData = await updateUserDetailsRepository.updateUserDetails(
        user._id,
        {
          update,
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
      navigateToHomeDeck();
    } catch (err: any) {
      setLoading(false);
    }
  };

  return {
    updateUserDetails,
    loading,
  };
};
