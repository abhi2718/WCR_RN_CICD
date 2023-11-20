import react, { useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { ROUTES } from '../../../../../navigation';
import { useSelector } from 'react-redux';

export const useMaritalStatusViewModal = (props: ScreenParams) => {
  const loggInUserId = props.route?.params?.data || 'No data received';
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const { navigation } = props;
  const { user } = useSelector((state: any) => state.userState);

  const maritalStatus =user.maritalStatus;
  const politics =user.politics;
  const religion =user.religion;
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState<
    string | null
  >(maritalStatus??null);
  const [selectedReligion, setSelectedReligion] = useState<string | null>(religion ?? null);
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

  const navigateToRelationshipScreen = (id: string) => {
    navigation.navigate(ROUTES.Kids, { data: id });
  };

  const updateUserDetails = async () => {
    try {
      setLoading(true);
      const selectedEthnicityData = {
        maritalStatus: selectedMaritalStatus,
        politics: selectedPoliticalView,
        religion: selectedReligion,
      };
      const user = await updateUserDetailsRepository.updateUserDetails(
        loggInUserId,
        {
          update: selectedEthnicityData,
        },
      );
      const data = {
        user: user,
      };
      // dispatch(addUser(data));
      setLoading(false);

      navigateToRelationshipScreen(loggInUserId);
    } catch (err: any) {
      setLoading(false);
    }
  };

  return {
    selectedMaritalStatus,
    selectedReligion,
    selectedPoliticalView,
    handleMaritalStatusSelect,
    handleReligionSelect,
    handlePoliticalViewSelect,
    updateUserDetails,
    loading
  };
};
