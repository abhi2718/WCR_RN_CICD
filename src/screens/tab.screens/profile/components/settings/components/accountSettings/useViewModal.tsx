import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserProfileRepository } from '../../../../../../../repository/userProfile.repo';
import { addUser } from '../../../../../../../store/reducers/user.reducer';

export const useViewModal = () => {
  const { user } = useSelector(({ userState }) => userState);
  const dispatch = useDispatch();
  const userProfileRepository = new UserProfileRepository();
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const [showModal, setShowModal] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(!user.isVisible);
  const onToggleSwitch = () => {
    setIsSwitchOn(oldValue => {
      if (!oldValue) {
        pauseUser(false)
      } else {
        pauseUser(true)
      }
      return !oldValue
    })
  };
  const pauseUser = async (status:boolean) => {
    const payload = {document:status}
    try {
      await userProfileRepository.pauseUser(payload);
      const data = {
        user: {
          ...user,
          isVisible:status
        },
      };
      console.log({isVisible:status})
      dispatch(addUser(data));
    } catch (error) {
    }
  }

  const deleteUser = async (status:boolean) => {
    try {
      await userProfileRepository.deleteUser();
    } catch (error) {
    }
  }
  return {
    user,
    goBack,
    onToggleSwitch,
    isSwitchOn,
    pauseUser,
    showModal,
    setShowModal,
    deleteUser
  };
};
