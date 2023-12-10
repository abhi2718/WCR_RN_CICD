import { useEffect, useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { ethnicity, preferNotToSay } from '../../../../../utils/constanst';
import { CheckBoxDataType } from '../../../../../types/components/checkbox.type';
import {
  makeFalseDefaultValue,
  transformArray,
} from '../../../../../utils/common.functions';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { ROUTES } from '../../../../../navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../../../store/reducers/user.reducer';

export const useEthnicityViewModal = (props: ScreenParams) => {
  const loggInUserId = props.route?.params?.data || 'No data received';
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();

  const { navigation } = props;
  const { user } = useSelector((state: any) => state.userState);
  const dispatch = useDispatch();

  const [selectedEthnicity, setSelectedEthnicity] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [ethnicityflag, setEthnicityflag] = useState<string>('');
  const [ethnicityList, setEthnicityList] = useState<CheckBoxDataType[]>(
    transformArray(user?.ethnicity, ethnicity),
  );


  useEffect(() => {
    return () => {};
  }, [selectedEthnicity]);

  const handleSeletedList = (
    ethnicityValue: string,
    data: CheckBoxDataType[],
  ) => {
    const stringData = data.map((item) => item.text);
    if (stringData?.includes(preferNotToSay) && stringData.length ===2) {
      setEthnicityList((oldState) => {
        const temp = oldState.map((item) => {
          if (item.text === preferNotToSay) {
            return {
              ...item,
              isChecked: false,
            }
          }
          return item;
        });
        return temp;
      });
    }
    setEthnicityflag(ethnicityValue);
  };
  const handleListChange = (data: CheckBoxDataType[]) => {
    setEthnicityList(data);
  };

  const navigateToRelationshipScreen = (id: string) => {
    navigation.navigate(ROUTES.LookingFor, { data: id });
  };

  const updateUserDetails = async () => {
    try {
      
      const selectedEthnicityData = {
        ethnicity: selectedEthnicity,
      };
     
      if(selectedEthnicity.length === 0){
        navigateToRelationshipScreen(loggInUserId);
        return 
      }
      setLoading(true);
      const user = await updateUserDetailsRepository.updateUserDetails(
        loggInUserId,
        {
          update: selectedEthnicityData,
        },
      );
      const data = {
        user: user,
      };
       dispatch(addUser(data));
      setLoading(false);

      navigateToRelationshipScreen(loggInUserId);
    } catch (err: any) {
      setLoading(false);
    }
  };

  return {
    loading,
    ethnicityList,
    handleSeletedList,
    handleListChange,
    updateUserDetails,
    ethnicityflag,
    loggInUserId,
    navigateToRelationshipScreen,
  
  };
};
