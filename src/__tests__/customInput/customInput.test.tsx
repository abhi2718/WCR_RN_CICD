import React from 'react';
import { render,renderHook } from '@testing-library/react-native';
import { CustomInput } from '../../components/customInput';
import { useViewModal } from '../../components/customInput/useViewModal';
import { styles } from '../../components/customInput/index.style';

describe('Custom Input', () => {
    test('should render a custom input', () => {
        const tree = render(<CustomInput />);
        expect(tree.toJSON()).toMatchSnapshot()
    });
});
// 54 + 49 = 103
describe('Custom Input viewModal', () => {
    it('should match snapshot', () => {
    //   const { result } = renderHook(() => useViewModal());
    //     expect(result.current).toMatchSnapshot();
    const hookResult = useViewModal().toString();
        expect(hookResult).toMatchSnapshot();
    });
});

describe('Custom Input stylesheet', () => {
    it('should match snapshot', () => {
      expect(styles).toMatchSnapshot();
    });
});