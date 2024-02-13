import { useRef, useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { transformArray } from '../../../../../utils/common.functions';
import { useDispatch, useSelector } from 'react-redux';
import {relationship } from '../../../../../utils/constanst';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { ROUTES } from '../../../../../navigation';
import { addUser } from '../../../../../store/reducers/user.reducer';
import { MultipleCheckBoxListDataType } from '../../../../../types/components/checkbox.type';

export const useRelationshipViewModal = (props: ScreenParams) => {
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const { navigation } = props;
  const { user } = useSelector((state: any) => state.userState);
  const [relationshipList] = useState<MultipleCheckBoxListDataType[]>(
    transformArray(user?.relationship, relationship),
  );
  const [selectedRelationship, setSelectedRelationship] = useState<string[]>(
    user?.relationship?.length?user?.relationship:[],
  );
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const token = useRef(user?.token ? user?.token : null).current;
  const handleListChange = (data: MultipleCheckBoxListDataType[]) => {
    setSelectedRelationship(data.map(relationship => relationship.text));
  };
  const navigateToMaritalStatusScreen = () => {
    navigation.navigate(ROUTES.MaritalStatus);
  };
  const updateUserDetails = async () => {
    try {
      const update = {
        relationship: selectedRelationship,
        steps: 9,
      };
      if (selectedRelationship.length === 0) {
        navigateToMaritalStatusScreen();
        return;
      }
      setLoading(true);
      const userData = await updateUserDetailsRepository.updateUserDetails(
        user._id,
        {
          update,
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

      navigateToMaritalStatusScreen();
    } catch (err: any) {
      setLoading(false);
    }
  };

  return {
    loading,
    updateUserDetails,
    relationshipList,
    navigateToMaritalStatusScreen,
    handleListChange
  };
};
