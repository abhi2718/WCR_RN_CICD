import {GestureResponderEvent} from 'react-native';
export type ButtonProps = {
  title: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  isLoading?: Boolean;
  style?: any;
  btnColor?: String;
};
