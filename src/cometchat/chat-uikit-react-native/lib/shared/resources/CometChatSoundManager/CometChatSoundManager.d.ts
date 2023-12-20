export class CometChatSoundManager {
    static SoundOutput: Readonly<{
        incomingCall: any;
        incomingMessage: any;
        incomingMessageFromOther: any;
        outgoingCall: any;
        outgoingMessage: any;
    }>;
    static audio: any;
    static onPlay: (resource: any, loop: any, isRequire: any) => Promise<void>;
    static play(sound: any, customSound: any, isRequire?: boolean): Promise<boolean>;
    static pause(): void;
}
