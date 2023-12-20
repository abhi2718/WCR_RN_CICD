import { CometChatOptions } from "../modals/CometChatOptions";
import { CometChat } from "@cometchat/chat-sdk-react-native";
export declare class CometChatConversationUtils {
    static getDefaultOptions(): CometChatOptions[];
    static getLastMessage(conversation: CometChat.Conversation): CometChat.BaseMessage;
    static getMessagePreview: (lastMessage: CometChat.BaseMessage) => string;
}
