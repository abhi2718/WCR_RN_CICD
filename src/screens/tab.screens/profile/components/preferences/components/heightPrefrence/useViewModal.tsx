import { useCallback, useState } from 'react';
import { heightPrefrenceProps } from '../../../../../../../types/screen.type/profile.type';
import {
  convertCmToFeetAndInches,
  formatNumberWithSingleQuote,
  parseMeasurement,
} from '../../../../../../../utils/common.functions';

export const useViewModal = (props:heightPrefrenceProps) => {
  const { visible, handleHeightModal, heightRange, setHeightRange } = props;
  const [currentHeight, setCurrentHeight] = useState({
    min: formatNumberWithSingleQuote(heightRange[0]),
    max: formatNumberWithSingleQuote(heightRange[1]),
  });
  const [heightFormat, setheightFormat] = useState('feet');
  const handleValueChange = useCallback(
    (value: string, key: string) => {
      setHeightRange((oldState: number[]) => {
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
  return {
    visible,
    _handleHeightModal,
    handleValueChange,
    currentHeight,
    heightFormat,
    handleFormatChange,
  };
};
