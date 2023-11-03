import { useEffect, useRef, useState } from 'react';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { ROUTES } from '../../../../../navigation';
import SelectDropdown from 'react-native-select-dropdown';
import { statesOption } from '../../../../../utils/constanst';

export const useLocationViewModal = (props: ScreenParams) => {
  const loggInUserId = props.route?.params?.data || 'No data received';

  const updateUserDetailsRepository = new UpdateUserDetailsRepository();

  const [selectedCountry, setCountry] = useState('USA');
  const [selectedCity, setCity] = useState('');
  const [stateOption, setStatesOption] = useState([]);
  const dropdownRef = useRef<SelectDropdown>(null);
  const [isFocus, setIsFocus] = useState(false);

  const [selectedState, setState] = useState<string | null>(null);
  const [zipPlaceHolder, setPlaceholder] = useState('Ex: 55555');
  const [selectedZipcode, setSelectedZipcode] = useState('');

  useEffect(() => {
    setStatesOption(statesOption[selectedCountry]);
    getStatesOptions();
  }, []);

  const handleCountry = (selectedItem: string) => {
    setCountry(selectedItem);
    setStatesOption(statesOption[selectedItem]);
    dropdownRef?.current?.reset();
    setCity('');
    setSelectedZipcode('');
    handleZipPlaceHolder(selectedItem);
  };

  const handleZipPlaceHolder = (country: string) => {
    if (country === 'USA') {
      setPlaceholder('Ex: 55555');
    } else {
      setPlaceholder('Ex: M4G3B2');
    }
  };

  const getStatesOptions = () => {
    const states = statesOption[selectedCountry];
    if (states === null || states.length === 0) {
      return [];
    }
    const updatedStates = states.map((state: string) => {
      return { label: state, value: state };
    });
    return updatedStates;
  };

  const handleCity = (city: string) => {
    setCity(city);
  };
  const handleZipcode = (zipcode: string) => {
    setSelectedZipcode(zipcode);
  };

  // const navigateToGenderPronounScreen = (id: string) => {
  //   navigation.navigate(ROUTES.GenderPronoun, { data: id });
  // };

  const updateUserDetails = async (id:string)  => {
    try {
      const addressData = {
        address: {
          country: selectedCountry,
          state: selectedState,
          city: selectedCity,
          zipcode: selectedZipcode,
          location:{}
        },
      };
      console.log("addressData::",addressData);
      const data = await updateUserDetailsRepository.updateUserDetails('653a9ad26b7a2255d03bf4fd', {
        update: addressData,
      });
      console.log('after saved the address', data);
      // navigateToGenderPronounScreen(loggInUserId);
    } catch (err: any) {
      console.log(err.toString(), err);
    }
  };

  return {
    selectedCountry,
    setCountry,
    handleCountry,
    stateOption,
    setStatesOption,
    selectedState,
    setState,
    dropdownRef,
    selectedCity,
    setCity,
    updateUserDetails,
    handleCity,
    selectedZipcode,
    setSelectedZipcode,
    zipPlaceHolder,
    setPlaceholder,
    isFocus,
    loggInUserId,
    setIsFocus,
    handleZipcode,
    getStatesOptions,
  };
};
