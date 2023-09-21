import {useEffect} from 'react';
import {SignInRepository} from '../../../repository/signin.repository';

export const useViewModal = () => {
  const signInRepository = new SignInRepository();
  const fetchData = async () => {
    try {
      const data = await signInRepository.getUsers();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    count: 0,
  };
};
