import { useCallback, useEffect, useState } from 'react';
import { heightPrefrenceProps } from '../../../../../../../types/screen.type/profile.type';
import {
  convertCmToFeetAndInches,
  formatNumberWithSingleQuote,
  parseMeasurement,
} from '../../../../../../../utils/common.functions';
import {
  cmValues,
  feetValues,
  mincmValues,
} from '../../../../../../../utils/constanst';

export const useViewModal = (props: heightPrefrenceProps) => {
  const { visible, handleHeightModal, heightRange, setHeightRange } = props;
  const [currentHeight, setCurrentHeight] = useState<{
    min: string | number;
    max: string | number;
  }>({
    min: feetValues[0],
    max: feetValues[feetValues?.length - 1],
  });
  const [heightFormat, setheightFormat] = useState('feet');
  const handleValueChange = useCallback(
    (value: string, key: string) => {
      setHeightRange((oldState: any[]) => {
        let height;
        if (heightFormat === 'feet') {
          height = parseMeasurement(value);
        } else {
          height = convertCmToFeetAndInches(Number(value));
        }
        height = `${height?.feet}.${height?.inch}`;
        return key === 'min' ? [height, oldState[1]] : [oldState[0], height];
      });
    },
    [heightFormat],
  );
  const handleFormatChange = useCallback((value: string, key: string) => {
    setheightFormat(value);
  }, []);
  const _handleHeightModal = useCallback(() => {
    handleHeightModal();
    setheightFormat('feet');
  }, []);
  useEffect(() => {
    if (heightFormat === 'cm') {
      setCurrentHeight({
        min: mincmValues[0],
        max: cmValues[cmValues?.length - 1],
      })
      }
  },[heightFormat])
  // useEffect(() => {
  //   let updates =
  //     (heightRange[0] === 4 && heightRange[1] === 8)
  //       ? {
  //           min: feetValues[0],
  //           max: feetValues[feetValues?.length - 1],
  //         }
  //       : {
  //           min: formatNumberWithSingleQuote(heightRange[0]),
  //           max: formatNumberWithSingleQuote(heightRange[1]),
  //         };
  //   setCurrentHeight(updates);
  // }, [heightRange]);
  return {
    visible,
    _handleHeightModal,
    handleValueChange,
    currentHeight,
    heightFormat,
    handleFormatChange,
  };
};
