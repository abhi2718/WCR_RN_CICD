import { ImageStyle, StyleProp } from 'react-native';
import React from 'react';
import { FontStyleInterface, ImageType } from '../../shared/base';
import { CometChat } from '@cometchat/chat-sdk-react-native';
export interface ImageModerationFilterInterface {
    message?: CometChat.BaseMessage;
    ChildView: any;
    warningText?: string;
    style?: {
        warningTextStyle?: FontStyleInterface;
        warningImageStyle?: StyleProp<ImageStyle>;
        warningImageTint?: string;
        filterColor?: string;
    };
    warningImage?: ImageType;
}
export declare const ImageModerationFilter: (props: ImageModerationFilterInterface) => React.JSX.Element;
