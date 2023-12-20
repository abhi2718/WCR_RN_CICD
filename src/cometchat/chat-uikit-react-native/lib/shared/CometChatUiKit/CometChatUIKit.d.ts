import { CometChat } from "@cometchat/chat-sdk-react-native";
import { UIKitSettings } from "./UIKitSettings";
import { ExtensionsDataSource } from "../framework";
import { CometChatSoundManager } from "../utils";
import { CometChatLocalize } from "../resources";
export declare class CometChatUIKit {
    static uiKitSettings: UIKitSettings;
    static init(uiKitSettings: UIKitSettings): Promise<boolean>;
    static defaultExtensions: ExtensionsDataSource[];
    private static enableExtensions;
    static getLoggedInUser(): Promise<CometChat.User>;
    static login({ uid, authToken }: {
        uid?: string;
        authToken?: string;
    }): Promise<CometChat.User>;
    static logout(): Promise<Object>;
    static createUser(user: CometChat.User): Promise<CometChat.User>;
    static updateUser(user: CometChat.User): Promise<CometChat.User>;
    static checkAuthSettings(onError: (e: CometChat.CometChatException) => void): boolean;
    static sendCustomMessage(message: CometChat.CustomMessage, onSuccess?: (msg: CometChat.CustomMessage | CometChat.BaseMessage) => void, onError?: (msg: CometChat.CometChatException) => void): void;
    static sendMediaMessage(message: CometChat.MediaMessage, onSuccess?: (msg: CometChat.MediaMessage | CometChat.BaseMessage) => void, onError?: (msg: CometChat.CometChatException) => void): void;
    static sendTextMessage(message: CometChat.TextMessage, onSuccess?: (msg: CometChat.TextMessage | CometChat.BaseMessage) => void, onError?: (msg: CometChat.CometChatException) => void): void;
    static getDataSource(): import("../framework").DataSource;
    static SoundManager: typeof CometChatSoundManager;
    static Localize: typeof CometChatLocalize;
}
