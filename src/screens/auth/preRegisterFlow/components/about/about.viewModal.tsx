import React, { useRef, useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../../../store/reducers/user.reducer';
import { ROUTES } from '../../../../../navigation';

export const useAboutViewModal = (props: ScreenParams) => {
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const { navigation } = props;
  const { user } = useSelector((state: any) => state.userState);
  const dispatch = useDispatch();
  const token = useRef(user?.token ? user?.token : null).current;
  const maxLength = 500;
  let bio = user?.bio;
  const [aboutText, setAboutText] = useState<string>(bio ?? '');
  const [letterCount, setLetterCount] = useState(
    user?.bio?.length ? user?.bio?.length : 0,
  );
  const [loading, setLoading] = useState(false);

  const handleText = (text: string) => {
    setLetterCount(() => {
      return text.replace(/\s/g, '').length;
    });
    setAboutText(text);
  };

  const navigateTohabitsScreen = () => {
    navigation.navigate(ROUTES.Hobbies);
  };

  

  const updateUserDetails = async () => {
    try {
      const bioData = {
        bio: aboutText,
        steps:13
      };

      if(user?.bio === aboutText){
        navigateTohabitsScreen();
        return 
      }
      setLoading(true);
      const userData = await updateUserDetailsRepository.updateUserDetails(
        user._id,
        {
          update: bioData,
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

      navigateTohabitsScreen();
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
    letterCount,
    navigateTohabitsScreen
  };
};
