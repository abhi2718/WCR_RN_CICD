import { useRef, useState } from 'react';
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
  const token = useRef(user?.token ? user?.token : null).current;
  const handleSeletedList = (
    ethnicityValue: string,
    data: CheckBoxDataType[],
  ) => {
    const stringData = data.map((item) => item.text);
    if (stringData?.includes(preferNotToSay) && stringData.length === 2) {
      setRelationshipList((oldState) => {
        const temp = oldState.map((item) => {
          if (item.text === preferNotToSay) {
            return {
              ...item,
              isChecked: false,
            };
          }
          return item;
        });
        return temp;
      });
      setSelectedRelationship([preferNotToSay]);
    }
    setpreferNotToSayflag(ethnicityValue);
    setSelectedRelationship(stringData);
  };
  const handleListChange = (data: CheckBoxDataType[]) => {
    setRelationshipList(data);
  };

  const navigateToMaritalStatusScreen = () => {
    navigation.navigate(ROUTES.MaritalStatus);
  };

  const updateUserDetails = async () => {
    try {
      const selectedEthnicityData = {
        relationship: selectedRelationship,
        steps:9
      };
      if (selectedRelationship.length === 0) {
        navigateToMaritalStatusScreen();
        return;
      }
      setLoading(true);
      const userData = await updateUserDetailsRepository.updateUserDetails(
        user._id,
        {
          update: selectedEthnicityData,
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
    relationshipList,
    preferNotToSayflag,
    handleSeletedList,
    handleListChange,
    loading,
    navigateToMaritalStatusScreen,
    updateUserDetails,
  };
};
