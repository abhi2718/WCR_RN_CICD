import { ROUTES } from './../../../../../navigation/index';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ScreenParams,
  professionTypes,
} from '../../../../../types/services.types/firebase.service';
import { primaryDegree } from '../../../../../utils/constanst';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { addUser } from '../../../../../store/reducers/user.reducer';

export const useProfessionModal = (props: ScreenParams) => {
  const [isFocus, setIsFocus] = useState(false);
  const [primaryDegreeOption, setPrimaryDegreeOption] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector(({ userState }) => userState);
  const token = useRef(user?.token ? user?.token : null).current;
  const { navigation } = props;
  const dispatch = useDispatch();
  const savedUserDegree = user?.designation?.userDegree;
  const savedPrimaryDegree = user?.designation?.primaryDegree;
  const title = user?.designation?.title;
  const institution = user?.institution;
  const [professionForm, setProfessionForm] = useState<professionTypes>({
    userDegree: savedUserDegree ? savedUserDegree : '',
    primaryDegree: user?.designation?.primaryDegree ? user?.designation?.primaryDegree : 'shaz',
    institution: institution ? institution : '',
    title: title ? title : '',
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
    setProfessionForm((oldState) => {
      return { ...oldState, [name]: value };
    });
  };

  const navigateToPictureUploadingScreenScreen = () => {
    navigation.navigate(ROUTES.ProfilePic);
  };

  const handleSubmit = async () => {
    const errors: Partial<professionTypes> = {};

    if (!professionForm?.userDegree) {
      errors.userDegree = 'Please Select A Degree Category';
    }
    if (!professionForm?.primaryDegree?.trim()?.length) {
      errors.primaryDegree = 'Please Select A Degree type';
    }
    if (!professionForm?.title?.trim()?.length) {
      errors.title = 'Please Enter Your Job Title';
    }

    console.log('professionForm-->',professionForm)

    if (Object.keys(errors).length) {
      return setValidationErrors(errors);
    } else {
      setValidationErrors({});
    }
    updateUserDetails();
  };

  const updateUserDetails = async () => {
    try {
      const professionData = {
        designation: {
          userDegree: professionForm.userDegree,
          primaryDegree: professionForm.primaryDegree,
          title: professionForm.title,
        },
        institution: professionForm.institution,
      };

      if (
        savedUserDegree === professionForm.userDegree &&
        savedPrimaryDegree === professionForm.primaryDegree &&
        title === professionForm.title &&
        institution === professionForm.institution
      ) {
        navigateToPictureUploadingScreenScreen();
        return;
      }
      setLoading(true);
      const userData = await updateUserDetailsRepository.updateUserDetails(
        user._id,
        {
          update: professionData,
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
      navigateToPictureUploadingScreenScreen();
    } catch (error) {}
  };

  const getPrimaryDegree = () => {
    const primaryDegreeOptions = primaryDegree[professionForm.userDegree];
    handleInputChange('primaryDegree',user?.designation?.primaryDegree ? user?.designation?.primaryDegree : '');
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
