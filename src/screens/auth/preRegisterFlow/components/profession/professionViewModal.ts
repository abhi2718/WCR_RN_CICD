import { ROUTES } from './../../../../../navigation/index';
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ScreenParams,
  professionTypes,
} from '../../../../../types/services.types/firebase.service';
import { primaryDegree } from '../../../../../utils/constanst';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { addUser } from '../../../../../store/reducers/user.reducer';
type userDegreeOption = { label: string; value: string };
export const useProfessionModal = (props: ScreenParams) => {
  const [isFocus, setIsFocus] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector(({ userState }) => userState);
  const token = useRef(user?.token ? user?.token : null).current;
  const { navigation } = props;
  const dispatch = useDispatch();
  const [professionForm, setProfessionForm] = useState<professionTypes>({
    userDegree: user?.designation?.userDegree
      ? user?.designation?.userDegree
      : '',
    primaryDegree: user?.designation?.primaryDegree
      ? user?.designation?.primaryDegree
      : 'Select Degree Type',
    institution: user?.institution ? user?.institution : '',
    title: user?.designation?.title ? user?.designation?.title : '',
  });

  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const [validationErrors, setValidationErrors] = useState<
    Partial<professionTypes>
  >({});
  const generateList = (arr: string[]) =>
    arr.map((item) => ({
      label: item,
      value: item,
    }));

  const [primaryDegreeOption, setPrimaryDegreeOption] = useState<
    userDegreeOption[]
  >(
    professionForm?.userDegree?.length
      ? generateList(primaryDegree[professionForm.userDegree])
      : [],
  );
  const changePrimaryDegreeOption = (userDegree: string) => {
    setPrimaryDegreeOption(generateList(primaryDegree[userDegree]));
  };
  const handleInputChange = (name: keyof professionTypes, value: string) => {
    setProfessionForm((oldState) => {
      if (name === 'userDegree') {
        return {
          ...oldState,
          userDegree: value,
          primaryDegree: 'Select Degree Type',
        };
      }
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
    if (professionForm?.primaryDegree === 'Select Degree Type') {
      errors.primaryDegree = 'Please Select A Degree type';
    }
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
        steps: 5,
      };
      if (
        user?.designation?.userDegree === professionForm.userDegree &&
        user?.designation?.primaryDegree === professionForm.primaryDegree &&
        user?.designation?.title === professionForm.title &&
        user?.institution === professionForm.institution
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

  return {
    loading,
    isFocus,
    setIsFocus,
    validationErrors,
    professionForm,
    primaryDegreeOption,
    handleSubmit,
    handleInputChange,
    changePrimaryDegreeOption,
  };
};
