import styled from 'styled-components/native'; // Import from styled-components/native
import {InputProps} from '../../types/components/input.type';
import {TextInput} from 'react-native-paper';

const ChildContainer = styled(TextInput)<InputProps>`
  margin-top: ${({marginTop = 10}) => `${marginTop}px`};
`;

export const FlatInput: React.FC<InputProps> = (props) => {
  return (
    <ChildContainer
      underlineColor="#49454F"
      activeUnderlineColor="#000"
      backgroundColor="#fff"
      {...props}
    />
  );
};
