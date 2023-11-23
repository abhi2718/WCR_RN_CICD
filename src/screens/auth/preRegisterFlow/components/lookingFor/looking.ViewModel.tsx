import { useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import {
  makeFalseDefaultValue,
  transformArray,
} from '../../../../../utils/common.functions';
import { useDispatch, useSelector } from 'react-redux';
import { CheckBoxDataType } from '../../../../../types/components/checkbox.type';
import { preferNotToSay, relationship } from '../../../../../utils/constanst';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { ROUTES } from '../../../../../navigation';
import { addUser } from '../../../../../store/reducers/user.reducer';

export const useRelationshipViewModal = (props: ScreenParams) => {
  const loggInUserId = props.route?.params?.data || 'No data received';
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const { navigation } = props;
  const { user } = useSelector((state: any) => state.userState);
  const [relationshipList, setRelationshipList] = useState<CheckBoxDataType[]>(
    transformArray(user?.relationship, relationship),
  );

  const [selectedRelationship, setSelectedRelationship] = useState<string[]>(
    [],
  );
  const [loading, setLoading] = useState(false);
  const [preferNotToSayflag, setpreferNotToSayflag] = useState<string>('');

  const dispatch = useDispatch();

  const handleSeletedList = (
    ethnicityValue: string,
    data: CheckBoxDataType[],
  ) => {
    const stringData = data.map((item) => item.text);
    if (stringData?.includes(preferNotToSay)) {
      setRelationshipList(makeFalseDefaultValue(relationship));
      setSelectedRelationship([preferNotToSay]);
      setpreferNotToSayflag(preferNotToSay);
      return;
    }
    setpreferNotToSayflag(ethnicityValue);
    setSelectedRelationship(stringData);
  };
  const handleListChange = (data: CheckBoxDataType[]) => {
    setRelationshipList(data);
    
  };

  const navigateToMaritalStatusScreen = (id: string) => {
    navigation.navigate(ROUTES.MaritalStatus, { data: id });
  };

  const updateUserDetails = async () => {
    try {
      setLoading(true);
      const selectedEthnicityData = {
        relationship: selectedRelationship,
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
       dispatch(addUser(data));
      setLoading(false);

      navigateToMaritalStatusScreen(loggInUserId);
    } catch (err: any) {
      setLoading(false);
    }
  };

  return {
    relationshipList,
    loggInUserId,
    preferNotToSayflag,
    handleSeletedList,
    handleListChange,
    loading,
    navigateToMaritalStatusScreen,
    updateUserDetails,
    
  };
};
