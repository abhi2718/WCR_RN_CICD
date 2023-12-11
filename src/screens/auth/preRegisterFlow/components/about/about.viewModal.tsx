import React, { useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../../../store/reducers/user.reducer';
import { ROUTES } from '../../../../../navigation';

export const useAboutViewModal = (props: ScreenParams) => {
  const loggInUserId = props.route?.params?.data || 'No data received';
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const { navigation } = props;
  const { user } = useSelector((state: any) => state.userState);
  const dispatch = useDispatch();
  const maxLength = 1000;
  let bio = user?.bio;
  const [aboutText, setAboutText] = useState<string>(bio ?? '');
  const [loading, setLoading] = useState(false);

  const handleText = (text: string) => {
    setAboutText(text);
  };

  const navigateTohabitsScreen = (id: string) => {
    navigation.navigate(ROUTES.Hobbies, { data: id });
  };

  const updateUserDetails = async () => {
    try {
      const bioData = {
        bio: aboutText,
      };

      if (!aboutText) {
        navigateTohabitsScreen(loggInUserId);
        return;
      }
      setLoading(true);
      const user = await updateUserDetailsRepository.updateUserDetails(
        loggInUserId,
        {
          update: bioData,
        },
      );
      const data = {
        user: user,
      };
      dispatch(addUser(data));
      setLoading(false);

      navigateTohabitsScreen(loggInUserId);
    } catch (err: any) {
      setLoading(false);
    }
  };

  return {
    aboutText,
    handleText,
    loading,
    updateUserDetails,
    maxLength,
    loggInUserId,
    navigateTohabitsScreen,
  };
};
