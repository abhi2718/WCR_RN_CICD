import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { StatusIndicatorStyle } from './StatusIndicatorStyle';
import { ImageType } from '../../base';
/**
 *
 * CometChatStatusIndicator is a component useful for indicating the status of user/group
 * This component displays the online/offline status of user/group
 *
 * @Version 1.0.0
 * @author CometChat
 *
 */
export interface CometChatStatusIndicatorInterface {
    backgroundImage?: ImageType;
    style?: StyleProp<ViewStyle>;
    backgroundColor?: string;
}
export declare const CometChatStatusIndicator: {
    (props: CometChatStatusIndicatorInterface): React.JSX.Element;
    defaultProps: {
        backgroundImage: string;
        style: StatusIndicatorStyle;
    };
};
