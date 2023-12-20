import { AvatarStyleInterface } from "../../shared";
import { ButtonStyleInterface } from "../../shared/views/CometChatButton";
import { OutgoingCallStyleInterface } from "./OutgoingCallStyle";
export interface OutgoingCallInterface {
    outgoingCallStyle?: OutgoingCallStyleInterface;
    buttonStyle?: ButtonStyleInterface;
    avatarStyle?: AvatarStyleInterface;
    disableSoundForCall?: boolean;
    customSoundForCall?: string;
}
export declare class OutgoingCall implements OutgoingCallInterface {
    outgoingCallStyle?: OutgoingCallStyleInterface;
    buttonStyle?: ButtonStyleInterface;
    avatarStyle?: AvatarStyleInterface;
    disableSoundForCall?: boolean;
    customSoundForCall?: string;
    constructor({ avatarStyle, buttonStyle, customSoundForCall, disableSoundForCall, outgoingCallStyle, }: OutgoingCallInterface);
}
