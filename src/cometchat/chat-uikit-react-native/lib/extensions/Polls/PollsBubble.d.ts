import React from 'react';
import { FontStyle } from '../../shared/base';
import { CometChat } from '@cometchat/chat-sdk-react-native';
export interface PollsBubbleStyleInterface {
    questionTextStyle: FontStyle;
    questionTextColor: string;
    voteCountTextStyle: FontStyle;
    voteCountTextColor: string;
    pollOptionsTextStyle: FontStyle;
    pollOptionsTextColor: string;
    radioButtonColor: string;
    pollOptionsBackgroundColor: string;
    selectedOptionColor: string;
    unSelectedOptionColor: string;
}
export interface PollsBubbleInterface {
    /**
     *
     *
     * @type {string}
     * @description poll question
     */
    pollQuestion?: string;
    /**
     *
     *
     * @type {({ id: string | number; value: string }[])}
     * @description options
     */
    options?: {
        id: string | number;
        value: string;
    }[];
    /**
     *
     *
     * @type {string}
     * @description poll id
     */
    pollId?: string;
    /**
     *
     *
     * @type {CometChat.User}
     * @description logged in user
     */
    loggedInUser?: CometChat.User;
    /**
     *
     *
     * @description callback function which return id when user votes
     */
    choosePoll?: (id: string) => void;
    /**
     *
     *
     * @type {string}
     * @description uid of poll creator
     */
    senderUid?: string;
    /**
     *
     *
     * @type {object}
     * @description metadata attached to the poll message
     */
    metadata?: object;
    /**
     *
     *
     * @type {PollsBubbleStyleInterface}
     * @description PollsBubbleInterface
     */
    pollsBubbleStyle?: PollsBubbleStyleInterface;
}
export declare const PollsBubble: {
    (props: PollsBubbleInterface): React.JSX.Element;
    defaultProps: {
        options: {};
        loggedInUser: {};
        pollsBubbleStyle: {};
    };
};
