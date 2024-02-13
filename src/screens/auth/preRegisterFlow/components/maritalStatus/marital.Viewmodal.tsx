import { useRef, useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { ROUTES } from '../../../../../navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../../../store/reducers/user.reducer';

export const useMaritalStatusViewModal = (props: ScreenParams) => {
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const { navigation } = props;
  const { user } = useSelector((state: any) => state.userState);
  const token = useRef(user?.token ? user?.token : null).current;
  const dispatch = useDispatch();
  const maritalStatus = user.maritalStatus;
  const politics = user.politics;
  const religion = user.religion;
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState<
    string | null
  >(maritalStatus ?? null);
  const [selectedReligion, setSelectedReligion] = useState<string | null>(
    religion ?? null,
  );
  const [selectedPoliticalView, setSelectedPoliticalView] = useState<
    string | null
  >(politics ?? null);
  const [loading, setLoading] = useState(false);
  const handleMaritalStatusSelect = (option: string) => {
    setSelectedMaritalStatus(option === selectedMaritalStatus ? null : option);
  };
  const handleReligionSelect = (option: string) => {
    setSelectedReligion(option === selectedReligion ? null : option);
  };
  const handlePoliticalViewSelect = (option: string) => {
    setSelectedPoliticalView(option === selectedPoliticalView ? null : option);
  };
  const navigateToKidsScreen = () => {
    navigation.navigate(ROUTES.Kids);
  };
  const updateUserDetails = async () => {
    try {
      const selectedData = {
        maritalStatus: selectedMaritalStatus,
        politics: selectedPoliticalView,
        religion: selectedReligion,
        steps: 10,
      };
      if (
        user?.maritalStatus === selectedMaritalStatus &&
        user.politics === selectedPoliticalView &&
        user?.religion === selectedReligion
      ) {
        navigateToKidsScreen();
        return;
      }
      setLoading(true);
      const userData = await updateUserDetailsRepository.updateUserDetails(
        user._id,
        {
          update: selectedData,
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
      navigateToKidsScreen();
    } catch (err: any) {
      setLoading(false);
    }
  };

  return {
    selectedMaritalStatus,
    selectedReligion,
    navigateToKidsScreen,
    selectedPoliticalView,
    handleMaritalStatusSelect,
    handleReligionSelect,
    handlePoliticalViewSelect,
    updateUserDetails,
    loading,
  };
};
