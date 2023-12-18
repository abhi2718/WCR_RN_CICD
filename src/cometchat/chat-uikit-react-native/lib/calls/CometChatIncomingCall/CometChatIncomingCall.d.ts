import React from 'react';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { AvatarStyleInterface } from '../../shared';
import { IncomingCallStyleInterface } from './IncomingCallStyle';
import { OngoingCallStyleInterface } from '../CometChatOngoingCall';
export interface CometChatIncomingCallInterface {
    call: CometChat.Call | CometChat.CustomMessage;
    title?: string;
    SubtitleView?: (call: CometChat.Call | CometChat.CustomMessage) => JSX.Element;
    disableSoundForCalls?: boolean;
    customSoundForCalls?: string;
    onAccept?: (message: CometChat.BaseMessage) => void;
    onDecline: (message: CometChat.BaseMessage) => void;
    onError?: (e: CometChat.CometChatException) => void;
    acceptButtonText?: string;
    declineButtonText?: string;
    avatarStyle?: AvatarStyleInterface;
    incomingCallStyle?: IncomingCallStyleInterface;
    ongoingCallScreenStyle?: OngoingCallStyleInterface;
}
export declare const CometChatIncomingCall: (props: CometChatIncomingCallInterface) => React.JSX.Element;
