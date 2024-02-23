import React from 'react';
import { render } from '@testing-library/react-native';
import { useHobbyViewModal } from '../../screens/auth/preRegisterFlow/components/hobbies/hobby.viewModal';
import { styles } from '../../screens/auth/preRegisterFlow/components/hobbies/styles';
import Hobbies from '../../screens/auth/preRegisterFlow/components/hobbies';


describe('Hobby stylesheet', () => {
    it('should match snapshot', () => {
      expect(styles).toMatchSnapshot();
    });
});