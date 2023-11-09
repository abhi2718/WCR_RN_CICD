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

  const { user } = useSelector(({ userState }) => userState);
  const dispatch = useDispatch();

  const [professionForm, setProfessionForm] = useState<professionTypes>({
    userDegree: user?.designation?.userDegree
      ? user?.designation?.userDegree
      : '',
    primaryDegree: '',
    institution: '',
    title: '',
  });

  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  useEffect(() => {
    me();
  }, []);

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

  const me = async () => {
    const user = await updateUserDetailsRepository.me(
      '653a9ad26b7a2255d03bf4fd',
    );
    const data = {
      user: user,
    };
    dispatch(addUser(data));
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
      const data = await updateUserDetailsRepository.updateUserDetails(
        '653a9ad26b7a2255d03bf4fd',
        {
          update: professionData,
        },
      );
    } catch (err: any) {
      console.log(err.toString(), err);
    }
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
