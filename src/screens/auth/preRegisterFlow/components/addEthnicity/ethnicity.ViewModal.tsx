import { useRef, useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { ethnicity} from '../../../../../utils/constanst';
import { MultipleCheckBoxListDataType } from '../../../../../types/components/checkbox.type';
import { transformArray } from '../../../../../utils/common.functions';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { ROUTES } from '../../../../../navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../../../store/reducers/user.reducer';

export const useEthnicityViewModal = (props: ScreenParams) => {
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const { navigation } = props;
  const { user } = useSelector((state: any) => state.userState);
  const token = useRef(user?.token ? user?.token : null).current;
  const dispatch = useDispatch();
  const [selectedEthnicity, setSelectedEthnicity] = useState<string[]>(
    user?.ethnicity?.length ? user?.ethnicity : [],
  );
  const [loading, setLoading] = useState(false);
  const [ethnicityList] = useState<MultipleCheckBoxListDataType[]>(
    transformArray(user?.ethnicity, ethnicity),
  );
  const handleListChange = (data: MultipleCheckBoxListDataType[]) => {
    setSelectedEthnicity(data.map(({ text }) => text));
  };
  const navigateToRelationshipScreen = () => {
    navigation.navigate(ROUTES.LookingFor);
  };
  const updateUserDetails = async () => {
    try {
      const selectedEthnicityData = {
        ethnicity: selectedEthnicity,
        steps: 8,
      };
      if (selectedEthnicity.length === 0) {
        navigateToRelationshipScreen();
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

      navigateToRelationshipScreen();
    } catch (err: any) {
      setLoading(false);
    }
  };
  return {
    loading,
    ethnicityList,
    updateUserDetails,
    navigateToRelationshipScreen,
    handleListChange,
  };
};
