import React from 'react';
import { ImageType } from '../../base';
import { ButtonStyleInterface } from './CometChatButtonStyle';
export interface CometChatButtonInterface {
    text?: string;
    iconUrl?: ImageType;
    style?: ButtonStyleInterface;
    onPress?: () => void;
}
export declare const CometChatButton: (props: CometChatButtonInterface) => React.JSX.Element;
