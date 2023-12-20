import React from 'react';
import { OngoingCallStyleInterface } from './OngoingCallStyle';
import { CometChat } from "@cometchat/chat-sdk-react-native";
declare const CometChatCalls: any;
export interface CometChatOngoingCallInterface {
    sessionID: string;
    ongoingCallStyle?: OngoingCallStyleInterface;
    callSettingsBuilder: typeof CometChatCalls.CallSettingsBuilder;
    onError?: (e: CometChat.CometChatException) => void;
}
export declare const CometChatOngoingCall: (props: CometChatOngoingCallInterface) => React.JSX.Element;
export {};
