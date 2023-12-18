import { CometChat } from "@cometchat/chat-sdk-react-native";
import { CometChatDetailsTemplate } from "../shared";
export declare class CallingDetailsUtils {
    static getDefaultDetailsTemplates(message: CometChat.BaseMessage, loggedInUser: CometChat.User, user?: CometChat.User, group?: CometChat.Group): Array<CometChatDetailsTemplate>;
    static getPrimaryDetailsTemplate(message: CometChat.BaseMessage, loggedInUser: CometChat.User, user?: CometChat.User, group?: CometChat.Group): CometChatDetailsTemplate;
    static getSecondaryDetailsTemplate(message: CometChat.BaseMessage, loggedInUser: CometChat.User, user?: CometChat.User, group?: CometChat.Group): CometChatDetailsTemplate;
}
