import { useEffect, useRef, useState } from 'react';
import { ScreenParams } from '../../../types/services.types/firebase.service';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES } from '../../../navigation';
import { UpdateUserDetailsRepository } from '../../../repository/pregisterFlow.repo';
import { addUser } from '../../../store/reducers/user.reducer';
import { useNavigateToScreen } from '../../../utils/common.functions';

export const usePandingStateViewModal = (props: ScreenParams) => {
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const { navigation } = props;
  const { user } = useSelector(({ userState }) => userState);
  const token = useRef(user?.token ? user?.token : null).current;
  const dispatch = useDispatch();
  const state = user?.verification?.status;
  const [declineReason, setDeclineReason] = useState('');
  const isFormSubmitted = user?.verificationId?.submitted;
  const { resetState } = useNavigateToScreen();
  useEffect(() => {
    const me = async () => {
      try {
        const userdata = await updateUserDetailsRepository.me(user._id);
        const data = token
          ? {
              user: {
                ...userdata.user,
                token,
              },
            }
          : {
              user: userdata.user,
            };
        dispatch(addUser(data));
        if (userdata.user.verification.status === 'Verified') {
          resetState(ROUTES.Tab);
        }
      } catch (err) {}
    };
    me();
  }, []);

  useEffect(() => {
    getRor();
  }, []);

  const getRor = () => {
    if (user.verification.status !== 'Rejected') {
      return;
    }
    const reason = user.verification.ROR[user.verification.ROR.length - 1]
      .reason
      ? user.verification.ROR[user.verification.ROR.length - 1].reason
      : Object.values(
          user.verification.ROR[user.verification.ROR.length - 1],
        ).join('');
    setDeclineReason(reason);
  };
  const navigateToGender = () => {
    navigation.navigate(ROUTES.Gender);
  };
  return { state, isFormSubmitted, navigateToGender, declineReason };
};
