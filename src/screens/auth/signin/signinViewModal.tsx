import {useEffect, useState} from 'react';
import {SignInRepository} from '../../../repository/signin.repository';

export const useViewModal = () => {
  const signInRepository = new SignInRepository();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await signInRepository.getUsers(2);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const updateCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    fetchData();
  },[]);
  return {
    count,
    updateCount,
    loading,
  };
};
