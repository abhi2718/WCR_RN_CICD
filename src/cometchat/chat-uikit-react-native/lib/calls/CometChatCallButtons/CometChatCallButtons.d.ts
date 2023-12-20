import React from 'react';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { CallButtonStyleInterface } from './CallButtonStyle';
import { ImageType } from '../../shared/base';
export interface CometChatCallButtonsInterface {
    /**
     * CometChat.User object
     */
    user?: CometChat.User;
    /**
     * CometChat.Group object
     */
    group?: CometChat.Group;
    /**
     * Image icon for voice calls
     */
    voiceCallIconImage?: ImageType;
    /**
     * text tobe shown below voice icon
     */
    voiceCallIconText?: string;
    /**
     * video icon for Video calls
     */
    videoCallIconImage?: ImageType;
    /**
     * text tobe shown below video call icon.
     */
    videoCallIconText?: string;
    /**
     * action tobe performed when voice icon get clicked.
     */
    onVoiceCallPress?: (params: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => void;
    /**
     * action tobe performed when video icon get clicked.
     */
    onVideoCallPress?: (params: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => void;
    /**
     * should voice call icon be shown
     */
    hideVoiceCall?: boolean;
    /**
     * should video call icon be shown
     */
    hideVideoCall?: boolean;
    /**
     * style object for call buttons
     */
    callButtonStyle?: CallButtonStyleInterface;
    /**
     * callback if any error occured.
     */
    onError?: (e: CometChat.CometChatException) => void;
}
export declare const CometChatCallButtons: (props: CometChatCallButtonsInterface) => React.JSX.Element;
