import React, { useEffect, useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { ROUTES } from '../../../../../navigation';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { addUser } from '../../../../../store/reducers/user.reducer';
import { cmValues, feetValues } from '../../../../../utils/constanst';
interface Measurement {
  feet: number;
  inch: number;
  heightInCm?: number;
}
export const useheightViewModal = (props: ScreenParams) => {
  const loggInUserId = props.route?.params?.data || 'No data received';
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();

  const { user } = useSelector((state: any) => state.userState);
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
      console.error(
        "Invalid measurement format. Please use the format like '4'1\"'",
      );
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

  const navigateToEthnicityScreen = (id: string) => {
    navigation.navigate(ROUTES.AddEthnicity, { data: id });
  };

  const updateUserDetails = async () => {
    try {
      setLoading(true);
      const heightData = {
        height: {
          feet: heightValue?.feet,
          inch: heightValue?.inch,
        },
      };
      const user = await updateUserDetailsRepository.updateUserDetails(
        loggInUserId,
        {
          update: heightData,
        },
      );
      const data = {
        user: user,
      };
      dispatch(addUser(data));
      setLoading(false);

      navigateToEthnicityScreen(loggInUserId);
    } catch (err: any) {
      setLoading(false);
    }
  };
  return {
    navigateToEthnicityScreen,
    loggInUserId,
    currentHeight,
    heightFormat,
    handleFormatChange,
    handleValueChange,
    updateUserDetails,
    loading,
    getSelectedHeight,
  };
};
