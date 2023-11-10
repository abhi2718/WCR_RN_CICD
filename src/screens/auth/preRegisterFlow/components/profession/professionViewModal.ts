import { ROUTES } from './../../../../../navigation/index';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ScreenParams,
  professionTypes,
} from '../../../../../types/services.types/firebase.service';
import { primaryDegree } from '../../../../../utils/constanst';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { addUser } from '../../../../../store/reducers/user.reducer';

export const useProfessionModal = (props: ScreenParams) => {
  const loggInUserId = props.route?.params?.data || 'No data received';
  const [isFocus, setIsFocus] = useState(false);
  const [primaryDegreeOption, setPrimaryDegreeOption] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector(({ userState }) => userState);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [professionForm, setProfessionForm] = useState<professionTypes>({
    userDegree: user?.designation?.userDegree
      ? user?.designation?.userDegree
      : '',
    primaryDegree: user?.designation?.primaryDegree
      ? user?.designation?.primaryDegree
      : '',
    institution: user?.designation?.institution
      ? user?.designation?.institution
      : '',
    title: user?.designation?.title ? user?.designation?.title : '',
  });
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const [validationErrors, setValidationErrors] = useState<
    Partial<professionTypes>
  >({});

  useEffect(() => {
    if (professionForm.userDegree.length) {
      getPrimaryDegree();
    }
  }, [professionForm?.userDegree]);

  const handleInputChange = (name: keyof professionTypes, value: string) => {
    setProfessionForm({ ...professionForm, [name]: value });
  };

  const handleSubmit = async () => {
    const errors: Partial<professionTypes> = {};

    if (!professionForm?.userDegree) {
      errors.userDegree = 'Please Select A Degree Category';
    }
    if (!professionForm.primaryDegree.trim().length) {
      errors.primaryDegree = 'Please Select A Degree type';
    }
    if (!professionForm?.title?.trim()?.length) {
      errors.title = 'Please Enter Your Job Title';
    }

    if (Object.keys(errors).length) {
      return setValidationErrors(errors);
    } else {
      setValidationErrors({});
    }
    updateUserDetails(loggInUserId);
  };

  const updateUserDetails = async (id: string) => {
    try {
      const professionData = {
        designation: {
          userDegree: professionForm.userDegree,
          primaryDegree: professionForm.primaryDegree,
          title: professionForm.title,
        },
        institution: professionForm.institution,
      };
      setLoading(true);
      const user = await updateUserDetailsRepository.updateUserDetails(id, {
        update: professionData,
      });
      const data = {
        user: user,
      };
      dispatch(addUser(data));
      setLoading(false);
      navigation.navigate(ROUTES.Tab);
    } catch (error) {}
  };


  const getPrimaryDegree = () => {
    const primaryDegreeOptions = primaryDegree[professionForm.userDegree];
    if (!primaryDegreeOptions || primaryDegreeOptions?.length === 0) {
      setPrimaryDegreeOption([]);
      return;
    }
    const updatedPrimaryDegree = primaryDegreeOptions?.map((state: string) => {
      return { label: state, value: state };
    });
    setPrimaryDegreeOption(updatedPrimaryDegree);
    return;
  };
  return {
    loading,
    isFocus,
    setIsFocus,
    validationErrors,
    professionForm,
    primaryDegreeOption,
    handleSubmit,
    handleInputChange,
    getPrimaryDegree,
  };
};
