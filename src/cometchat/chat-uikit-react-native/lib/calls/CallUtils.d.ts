import { CometChat } from '@cometchat/chat-sdk-react-native';
export declare class CallUtils {
    private static isInitiator;
    static getCallStatus(message: CometChat.BaseMessage, loggedInUser: CometChat.User): string;
}
