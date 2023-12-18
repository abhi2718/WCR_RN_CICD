import React from 'react';
import { AvatarStyle, AvatarStyleInterface } from './AvatarStyle';
import { ImageType } from '../../base';
/**
 * CometChatAvatar is a component useful for displaying image of user/group
 * This component displays the image or text of user/group
 *
 * @Version 1.0.0
 * @author CometChat
 *
 */
interface CometChatAvatarProps {
    image?: ImageType;
    name: string;
    style?: AvatarStyleInterface;
}
export declare const CometChatAvatar: {
    (props: CometChatAvatarProps): React.JSX.Element;
    defaultProps: {
        image: string;
        name: string;
        style: AvatarStyle;
    };
};
export {};
