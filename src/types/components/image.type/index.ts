import {GestureResponderEvent} from 'react-native';

export type imageProps = {
  width?: number;
  height?: number;
  source?: string;
  marginTop?: number;
  marginBottom?: number;
  style?: any;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};
