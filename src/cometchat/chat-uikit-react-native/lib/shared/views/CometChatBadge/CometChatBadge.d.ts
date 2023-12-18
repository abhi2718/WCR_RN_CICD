import React from 'react';
import { BadgeStyle } from './BadgeStyle';
/**
 *
 * CometChatBadge is a component useful when returning the number of unread messages in a chat.
 * This component is used to return the unread message count with custom style.
 *
 * @version 1.0.0
 * @author CometChat
 *
 */
interface CometChatBadgeProps {
    count: number;
    style?: BadgeStyle;
}
export declare const CometChatBadge: {
    (props: CometChatBadgeProps): React.JSX.Element;
    defaultProps: {
        count: number;
        style: BadgeStyle;
    };
};
export {};
