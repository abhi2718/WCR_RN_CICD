import { useState } from 'react';

export const useOrientationViewModal = () => {
  const [checkboxState, setCheckboxState] = useState(false);
  const handleCheckboxChange = () => {
    setCheckboxState(!checkboxState);
  };

  return {
    handleCheckboxChange,
    checkboxState,
    setCheckboxState,
  };
};
