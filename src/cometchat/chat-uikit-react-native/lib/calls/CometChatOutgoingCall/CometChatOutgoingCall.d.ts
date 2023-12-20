import React from 'react';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { AvatarStyleInterface } from '../../shared/views';
import { ImageType } from '../../shared/base';
import { ButtonStyleInterface } from '../../shared/views/CometChatButton';
import { OutgoingCallStyleInterface } from './OutgoingCallStyle';
export interface CometChatOutgoingCallInterface {
    /**
     * CometChat.Call object
     */
    call?: CometChat.Call | CometChat.CustomMessage;
    /**
     * text tobe displayed below cancel/reject button
     */
    declineButtonText?: string;
    /**
     * cancel/reject button icon
     */
    declineButtonIcon?: ImageType;
    /**
     * action tobe performed on click of cancel/reject button
     * it provides CometChat.Call object as argument.
     */
    onDeclineButtonPressed?: (call: CometChat.Call) => void;
    /**
     * style object of OutgoingCallStyleInterface
     */
    outgoingCallStyle?: OutgoingCallStyleInterface;
    /**
     * object of ButtonStyleInterface
     */
    buttonStyle?: ButtonStyleInterface;
    /**
     * object of AvatarStyleInterface
     */
    avatarStyle?: AvatarStyleInterface;
    /**
     * toggle sound for call
     */
    disableSoundForCalls?: boolean;
    /**
     * custom sound for call
     */
    customSoundForCalls?: string;
}
export declare const CometChatOutgoingCall: (props: CometChatOutgoingCallInterface) => React.JSX.Element;
