import React, { useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES } from '../../../../../navigation';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { addUser } from '../../../../../store/reducers/user.reducer';

export const useKidsViewmodal = (props:ScreenParams) => {
    const loggInUserId = props.route?.params?.data || 'No data received';
    const updateUserDetailsRepository = new UpdateUserDetailsRepository();
    const {navigation} = props;
    const { user } = useSelector((state: any) => state.userState);
    const dispatch = useDispatch();
    const kids =user?.kids;
    const familyPlan =user?.familyPlan;
    const diet =user?.diet;
    const covidVaccineStatus =user?.covidVaccineStatus;
  const [selectedKids, setSelectedKids] = useState<string | null>(kids ?? null);
  const [selectedFamilyPlans, setSelectedFamilyPlans] = useState<string | null>(
    familyPlan ?? null,
  );
  const [selectedCovidVaccineStatus, setSelectedCovidVaccineStatus] = useState<
    string | null
  >(covidVaccineStatus ?? null);

  const [selectedDietarypreference, setSelectedDietarypreference] = useState<
    string | null
  >(diet ?? null);

  const [loading, setLoading] = useState(false);

  const handleKidsSelect = (option: string) => {
    setSelectedKids(option === selectedKids ? null : option);
  };

  const handleFamilyPlansSelect = (option: string) => {
    setSelectedFamilyPlans(option === selectedFamilyPlans ? null : option);
  };

  const handleCovidVaccineStatusSelect = (option: string) => {
    setSelectedCovidVaccineStatus(
      option === selectedCovidVaccineStatus ? null : option,
    );
  };

  const handleDietarypreferenceSelect = (option: string) => {
    setSelectedDietarypreference(
      option === selectedDietarypreference ? null : option,
    );
  };

  const navigateTohabitsScreen = (id: string) => {
    navigation.navigate(ROUTES.Habits, { data: id });
  };

  const updateUserDetails = async () => {
    try {
      const selectedData = {
        kids: selectedKids,
        familyPlan: selectedFamilyPlans,
        covidVaccineStatus: selectedCovidVaccineStatus,
        diet: selectedDietarypreference
      };

      if(!selectedKids && !selectedFamilyPlans && !selectedCovidVaccineStatus && !selectedDietarypreference){
        navigateTohabitsScreen(loggInUserId);
        return 
      }
      setLoading(true);
      const user = await updateUserDetailsRepository.updateUserDetails(
        loggInUserId,
        {
          update: selectedData,
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


  return({
    handleKidsSelect,handleFamilyPlansSelect,handleCovidVaccineStatusSelect,handleDietarypreferenceSelect,selectedKids,selectedCovidVaccineStatus,selectedDietarypreference,selectedFamilyPlans,loading,updateUserDetails,navigateTohabitsScreen,loggInUserId
  })

}


