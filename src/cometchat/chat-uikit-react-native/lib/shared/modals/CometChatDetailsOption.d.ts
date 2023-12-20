/// <reference types="react" />
import { TextStyle } from 'react-native';
import { ImageType } from '../base';
export interface CometChatDetailsOption {
    id?: string | number;
    title?: string;
    icon?: ImageType;
    titleStyle?: TextStyle;
    backgroundColor?: string;
    iconTint?: string;
    CustomView?: () => JSX.Element;
    Tail?: () => JSX.Element;
    height?: number;
    onClick?: ({ user, group }: {
        user?: any;
        group?: any;
    }) => void;
}
