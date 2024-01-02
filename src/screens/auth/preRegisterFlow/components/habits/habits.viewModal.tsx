import React, { useRef, useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../../../store/reducers/user.reducer';
import { ROUTES } from '../../../../../navigation';

export const useHabitViewModal = (props: ScreenParams) => {
    const updateUserDetailsRepository = new UpdateUserDetailsRepository();
    const { user } = useSelector((state: any) => state.userState);
    const token = useRef(user?.token ? user?.token : null).current;
    const dispatch = useDispatch();
    const {navigation} = props;
    const drinking =user.drinking;
    const smoking =user.smoking;
    const excercise =user.excercise;
    const pets =user.pets;
    const [selectedDrinkingHabits, setSelectedDrinkingHabits] = useState<
      string | null
    >(drinking ?? null);
    const [selectedSmokingHabits, setSelectedSmokingHabits] = useState<
      string | null
    >(smoking ?? null);
    const [selectedExercise, setSelectedExercise] = useState<string | null>(excercise ?? null);
  
    const [selectedPets, setSelectedPets] = useState<string | null>(pets ?? null);
    const [loading, setLoading] = useState(false);
  
   
  
    const handleDrinking = (option: string) => {
      setSelectedDrinkingHabits(
        option === selectedDrinkingHabits ? null : option,
      );
    };
  
    const handleSmokingHabits = (option: string) => {
      setSelectedSmokingHabits(option === selectedSmokingHabits ? null : option);
    };
  
    const handleeExercise = (option: string) => {
      setSelectedExercise(option === selectedExercise ? null : option);
    };
  
    const handlePets = (option: string) => {
      setSelectedPets(option === selectedPets ? null : option);
    };

    const navigateToAboutScreen = () => {
        navigation.navigate(ROUTES.About);
      };
    
    const updateUserDetails = async () => {
        try {
          const selectedData = {
            drinking: selectedDrinkingHabits,
            smoking: selectedSmokingHabits,
            excercise: selectedExercise,
            pets: selectedPets,
            steps:12
          };

          if(user?.drinking === selectedDrinkingHabits && user?.smoking === selectedSmokingHabits && user?.excercise === selectedExercise && user?.pets === selectedPets){
            navigateToAboutScreen();
            return 
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
    
          navigateToAboutScreen();
        } catch (err: any) {
          setLoading(false);
        }
      };
    
    return({
        handleDrinking,selectedSmokingHabits, setSelectedSmokingHabits,selectedDrinkingHabits, setSelectedDrinkingHabits,selectedExercise, setSelectedExercise,selectedPets, setSelectedPets,handleeExercise,handleSmokingHabits,handlePets,updateUserDetails,loading,navigateToAboutScreen
    })
}