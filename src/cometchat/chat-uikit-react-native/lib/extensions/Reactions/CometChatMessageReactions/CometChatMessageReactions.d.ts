import React from 'react';
import { FontStyleInterface } from '../../../shared/base';
import { CometChat } from '@cometchat/chat-sdk-react-native';
export interface MessageReactionsInterface {
    messageObject?: CometChat.BaseMessage;
    loggedInUser?: CometChat.User;
    updateReaction?: (messageObject: any, emoji: any) => void;
    style?: {
        iconTint?: string;
        textFont?: FontStyleInterface;
    };
    onReactionClick?: (emoji: any, messageObject: any) => void;
}
declare const CometChatMessageReactions: {
    (props: MessageReactionsInterface): React.JSX.Element;
    defaultProps: {
        messageObject: any;
        loggedInUser: any;
        style: {};
    };
};
export { CometChatMessageReactions };
