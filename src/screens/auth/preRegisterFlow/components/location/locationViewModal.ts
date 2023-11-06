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

export const useLocationViewModal = (props: ScreenParams) => {
  const loggInUserId = props.route?.params?.data || 'No data received';

  const updateUserDetailsRepository = new UpdateUserDetailsRepository();

  const [stateOption, setStatesOption] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  const [locationForm, setLocationForm] = useState<addressTypes>({
    country: 'USA',
    state: '',
    city: '',
    zipcode: '',
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
    await updateUserDetails(loggInUserId);
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

  // const navigateToGenderPronounScreen = (id: string) => {
  //   navigation.navigate(ROUTES.GenderPronoun, { data: id });
  // };

  const updateUserDetails = async (id: string) => {
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

      const validateZipcodeData = await validateZipcode();

      if (
        validateZipcodeData?.user != null &&
        validateZipcodeData?.user['address.zipcode']['message'] ===
          'Zip code is not valid'
      ) {
        return ShowFlashMessage(
          'warning',
          'Zip code is not valid',
          FlashMessageType.DANGER,
        );
      }

     
      const data = await updateUserDetailsRepository.updateUserDetails(id, {
        update: addressData,
      });
      
      // navigateToGenderPronounScreen(loggInUserId);
    } catch (err: any) {
      console.log(err.toString(), err);
    }
  };

  return {
    handleCountry,
    stateOption,
    setStatesOption,

    locationForm,
    updateUserDetails,

    zipPlaceHolder,
    setPlaceholder,
    isFocus,
    loggInUserId,
    setIsFocus,
    validationErrors,
    getStatesOptions,
    handleSubmit,
    handleInputChange,
  };
};
