import {GestureResponderEvent} from 'react-native';
export type ButtonProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  isLoading?: Boolean;
  style?: any;
  btnColor?: any;
};
