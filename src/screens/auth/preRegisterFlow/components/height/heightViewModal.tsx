import  { useRef, useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { ROUTES } from '../../../../../navigation';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { addUser } from '../../../../../store/reducers/user.reducer';
import { cmValues, feetValues } from '../../../../../utils/constanst';
import { Measurement } from '../../../../../types/commonFunction.type';

export const useheightViewModal = (props: ScreenParams) => {
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const { user } = useSelector((state: any) => state.userState);
  const token = useRef(user?.token ? user?.token : null).current;
  const savedHeight: Measurement = user.height;
  const dispatch = useDispatch();
  const [heightFormat, setheightFormat] = useState('feet');
  const [heightValue, setheightValue] = useState<Measurement>(
    savedHeight ?? null,
  );
  const [loading, setLoading] = useState(false);
  const { navigation } = props;
  const getSelectedHeight = (): string => {
    if (heightValue?.feet || heightValue?.inch) {
      return heightFormat === 'feet'
        ? `${heightValue?.feet}'${heightValue?.inch}"`
        : `${Math.floor(savedHeight?.heightInCm!)}`;
    }
    return heightFormat === 'feet' ? feetValues[5] : cmValues[5];
  };

  const [currentHeight, setCurrentHeight] = useState(getSelectedHeight());

  const handleFormatChange = (value: string) => {
    setheightFormat(value);
  };
  const handleValueChange = (value: string) => {
    setCurrentHeight(value);
    if (heightFormat === 'feet') {
      const height = parseMeasurement(value);
      setheightValue(height!);
    } else {
      const height = convertCmToFeetAndInches(Number(value));
      setheightValue(height!);
    }
  };

  function parseMeasurement(measurementString: string): Measurement | null {
    const regex = /^(\d+)\'(\d+)\"$/;
    const match = measurementString.match(regex);

    if (match) {
      const feet = parseInt(match[1], 10);
      const inch = Math.floor(parseInt(match[2], 10));

      return { feet, inch };
    } else {
      return null;
    }
  }

  function convertCmToFeetAndInches(cm: number): Measurement {
    // 1 inch is approximately 2.54 cm
    const inches = cm / 2.54;
    // 1 foot is 12 inches
    const feet = Math.floor(inches / 12); 
    const remainingInches = Math.floor(inches % 12);
    return {
      feet: feet,
      inch: remainingInches,
    };
  }

  const navigateToEthnicityScreen = () => {
    navigation.navigate(ROUTES.AddEthnicity);
  };

  const updateUserDetails = async () => {
    try {
      const heightData = {
        height: {
          feet: heightValue?.feet,
          inch: heightValue?.inch,
        },
        steps:7
      };
      if (user?.height?.feet===heightValue?.feet && user?.height?.inch===heightValue?.inch) {
        navigateToEthnicityScreen();
        return;
      }
      setLoading(true);
      const userData = await updateUserDetailsRepository.updateUserDetails(
        user._id,
        {
          update: heightData,
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
      navigateToEthnicityScreen();
    } catch (err: any) {
      setLoading(false);
    }
  };
  return {
    navigateToEthnicityScreen,
    currentHeight,
    heightFormat,
    handleFormatChange,
    handleValueChange,
    updateUserDetails,
    loading,
    getSelectedHeight,
  };
};
