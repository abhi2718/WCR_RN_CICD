import { useEffect, useRef, useState } from 'react';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import {
  addressTypes,
  ScreenParams,
} from '../../../../../types/services.types/firebase.service';
import { statesOption } from '../../../../../utils/constanst';
import {
  FlashMessageType,
  ShowFlashMessage,
} from '../../../../../components/flashBar';
import { ROUTES } from '../../../../../navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../../../store/reducers/user.reducer';

export const useLocationViewModal = (props: ScreenParams) => {
  const { navigation } = props;

  const updateUserDetailsRepository = new UpdateUserDetailsRepository();

  const { user } = useSelector((state: any) => state.userState);
  const token = useRef(user?.token ? user?.token : null).current;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [stateOption, setStatesOption] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  const Country = user.address.country;
  const City = user.address.city;
  const Zipcode = user.address.zipcode;
  const State = user.address.state;
  const [locationForm, setLocationForm] = useState<addressTypes>({
    country: Country ? Country : 'USA',
    state: State ? State : '',
    city: City ? City : '',
    zipcode: Zipcode ? Zipcode : '',
  });

  const [validationErrors, setValidationErrors] = useState<
    Partial<addressTypes>
  >({});

  const handleInputChange = (name: keyof addressTypes, value: string) => {
    setLocationForm((oldLocationData) => {
      if (name === 'country' && oldLocationData?.country != value) {
        return { ...locationForm, [name]: value, city: '', zipcode: '' };
      } else {
        return { ...locationForm, [name]: value };
      }
    });
  };

  const [zipPlaceHolder, setPlaceholder] = useState('Ex: 55555');

  useEffect(() => {
    getStatesOptions();
    handleZipPlaceHolder(user.address.country)
  }, []);
  useEffect(() => {
    setStatesOption(statesOption[locationForm.country]);
  }, [locationForm.country]);

  const handleCountry = (selectedItem: string) => {
    handleInputChange('country', selectedItem);
    getStatesOptions();
    handleZipPlaceHolder(selectedItem);
  };

  const handleSubmit = async () => {
    const errors: Partial<addressTypes> = {};

    if (!locationForm?.country) {
      errors.country = 'Please enter country';
    }
    if (!locationForm.state?.trim()?.length) {
      errors.state = 'Please enter state';
    }
    if (!locationForm.city?.trim()?.length) {
      errors.city = 'Please enter city';
    }
    if (!locationForm.zipcode?.trim()?.length) {
      errors.zipcode = 'Please enter zipcode';
    }

    if (Object.keys(errors).length) {
      return setValidationErrors(errors);
    } else {
      setValidationErrors({});
    }
    await updateUserDetails();
  };

  const handleZipPlaceHolder = (country: string) => {
    if (country === 'USA') {
      setPlaceholder('Ex: 55555');
    } else {
      setPlaceholder('Ex: M4G3B2');
    }
  };

  const validateZipcode = async () => {
    const USER = {
      address: {
        zipcode: locationForm.zipcode,
        location: {
          type: '',
          coordinates: [],
        },
      },
    };

    return await updateUserDetailsRepository.validateZipcode({ user: USER });
  };

  const getStatesOptions = () => {      
    const states = statesOption[locationForm.country];
    if (states === null || states?.length === 0) {
      return [];
    }
    const updatedStates = states?.map((state: string) => {
      return { label: state, value: state };
    });
    return updatedStates;
  };

  const navigateToProfessionScreen = () => {
    navigation.navigate(ROUTES.Profession);
  };

  const updateUserDetails = async () => {
    try {
      const addressData = {
        address: {
          country: locationForm.country,
          state: locationForm.state,
          city: locationForm.city,
          zipcode: locationForm.zipcode,
          location: {},
        },
      };

      if(Country === locationForm.country && State === locationForm.state && City === locationForm.city && Zipcode === locationForm.zipcode) {
        navigateToProfessionScreen();
        return
      }
      setLoading(true);
      const validateZipcodeData = await validateZipcode();

      if (
        validateZipcodeData?.user != null &&
        validateZipcodeData?.user['address.zipcode']['message'] ===
          'Zip code is not valid'
      ) {
        setLoading(false);

        return ShowFlashMessage(
          'Warning',
          'Zip code is not valid',
          FlashMessageType.DANGER,
        );
      }

      const userData = await updateUserDetailsRepository.updateUserDetails(
        user._id,
        {
          update: addressData,
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

      navigateToProfessionScreen();
    } catch (err: any) {
      setLoading(false);
    }
  };

  return {
    loading,
    handleCountry,
    stateOption,
    setStatesOption,
    locationForm,
    updateUserDetails,
    zipPlaceHolder,
    setPlaceholder,
    isFocus,
    setIsFocus,
    validationErrors,
    getStatesOptions,
    handleSubmit,
    handleInputChange,
  };
};
