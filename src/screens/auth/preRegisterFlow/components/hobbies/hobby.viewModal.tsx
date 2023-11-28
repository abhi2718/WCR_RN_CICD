import React, { useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { ShowFlashMessage } from '../../../../../components/flashBar';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES } from '../../../../../navigation';
import { addUser } from '../../../../../store/reducers/user.reducer';

export const useHobbyViewModal = (props:ScreenParams) => {
    const loggInUserId = props.route?.params?.data || 'No data received';
    const updateUserDetailsRepository = new UpdateUserDetailsRepository();
    const { navigation } = props;
    const { user } = useSelector((state: any) => state.userState);
    const dispatch = useDispatch();
    let hobbies = user?.interests
    const [selectedHobbies, setSelectedHobbies] = useState<string[]>(hobbies ?? []);

    const [loading, setLoading] = useState(false);
   
    const handleHobbies = (option: string) => {
      if (selectedHobbies.includes(option)) {
        setSelectedHobbies(selectedHobbies.filter((item) => item !== option));
      } else if (selectedHobbies.length < 5) {
        setSelectedHobbies([...selectedHobbies, option]);
      } else {
        ShowFlashMessage(
          'Exceeded Selection Limit',
          'You can select a maximum of 5 hobbies.',
          'danger',
        );
      }
    };

    const navigateToKidsScreen = (id: string) => {
        navigation.navigate(ROUTES.Hobbies, { data: id });
      };

    const updateUserDetails = async () => {
        try {
          const selectedInterests = {
            interests: selectedHobbies,
           
          };

          if(selectedHobbies.length===0){
            navigateToKidsScreen(loggInUserId);
            return 
          }
          setLoading(true);
          const user = await updateUserDetailsRepository.updateUserDetails(
            loggInUserId,
            {
              update: selectedInterests,
            },
          );
          const data = {
            user: user,
          };
           dispatch(addUser(data));
          setLoading(false);
    
          navigateToKidsScreen(loggInUserId);
        } catch (err: any) {
          setLoading(false);
        }
      };

    return({
        selectedHobbies,handleHobbies,updateUserDetails,loading,loggInUserId,navigateToKidsScreen
    })
}



