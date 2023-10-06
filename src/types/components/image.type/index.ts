import {GestureResponderEvent, ImageSourcePropType} from 'react-native';

export type imageProps = {
  width?: number;
  height?: number;
  source?: ImageSourcePropType | null | undefined;
  marginTop?: number;
  marginBottom?: number;
  style?: any;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};
