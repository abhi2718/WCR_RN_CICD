import { useEffect, useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import { ethnicity } from '../../../../../utils/constanst';
import { CheckBoxDataType } from '../../../../../types/components/checkbox.type';
import { transformArray } from '../../../../../utils/common.functions';

export const useEthnicityViewModal = (props: ScreenParams) => {
  const [selectedEthnicity, setSelectedEthnicity] = useState<string[]>([]);
  
  const [ethnicityList, setEthnicityList] = useState<CheckBoxDataType[]>(
    transformArray(ethnicity),
  );

  useEffect(() => {
    console.log('Ethnicity DATA :: ', selectedEthnicity);
    return () => {};
  }, [selectedEthnicity]);

  const handleSeletedList = (data: CheckBoxDataType[]) => {
    const stringData = data.map((item) => item.text);
    setSelectedEthnicity(stringData);
  };
  const handleListChange = (data: CheckBoxDataType[]) => {
    setEthnicityList(data);
    // console.log('handleListChange DATA :: ', data);
  };

  return { ethnicityList, handleSeletedList, handleListChange };
};
