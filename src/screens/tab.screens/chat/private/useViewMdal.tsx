import { useState } from 'react';

export const useViewModal = () => {
  const [state, setState] = useState(0);
  return {
    state,
    setState
  };
};