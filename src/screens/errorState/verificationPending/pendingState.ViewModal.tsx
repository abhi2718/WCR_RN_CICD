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
  const [loading, setLoading] = useState(false);
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
    const rorObject =
      user?.verification?.ROR.length > 0
        ? user?.verification?.ROR[user.verification.ROR.length - 1]
        : null;
    const reason = rorObject != null ? rorObject.reason : '';
    setDeclineReason(reason);
  };

  const updateUserDetails = async () => {
    try {
      const update = {
        verificationId: {
          submitted: false,
        },
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
      navigateToGender();
    } catch (err: any) {
      setLoading(false);
    }
  };

  const navigateToGender = () => {
    navigation.navigate(ROUTES.About);
  };
  return { state, isFormSubmitted, updateUserDetails, declineReason, loading };
};
