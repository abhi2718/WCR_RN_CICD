import { Platform } from "react-native";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { CometChatUIKitHelper } from "./CometChatUIKitHelper";
import { messageStatus } from "../utils/CometChatMessageHelper";
import { CallingExtension } from "../../calls/CallingExtension";
import { CallingPackage } from "../../calls/CallingPackage";
import { StickersExtension } from "../../extensions/Stickers";
import { CollaborativeWhiteboardExtension } from "../../extensions/CollaborativeWhiteboard/CollaborativeWhiteboardExtension";
import { LinkPreviewExtention } from "../../extensions/LinkPreview";
import { ReactionsExtension } from "../../extensions/Reactions";
import { CollaborativeDocumentExtension } from "../../extensions/CollaborativeDocument/CollaborativeDocumentExtension";
import { PollsExtension } from "../../extensions/Polls/PollsExtension";
import { SmartRepliesExtension } from "../../extensions/SmartReplies";
import { ChatConfigurator } from "../framework";
import { ImageModerationExtension } from "../../extensions/ImageModeration";
import { MessageTranslationExtension } from "../../extensions/MessageTranslation";
import { TextModerationExtension } from "../../extensions/TextModeration";
import { ThumbnailGenerationExtension } from "../../extensions/ThumbnailGeneration";
import { CometChatSoundManager } from "../utils";
import { CometChatLocalize } from "../resources";
export class CometChatUIKit {
    static uiKitSettings;
    static init(uiKitSettings) {
        //perform sdk init taking values from uiKitSettings
        CometChatUIKit.uiKitSettings = {
            ...uiKitSettings
        };
        var appSetting = new CometChat.AppSettingsBuilder()
            .subscribePresenceForAllUsers()
            .autoEstablishSocketConnection(uiKitSettings.autoEstablishSocketConnection)
            .setRegion(uiKitSettings.region);
        appSetting.subscriptionType = uiKitSettings.subscriptionType;
        return CometChat.init(uiKitSettings.appId, appSetting.build()).then(() => {
            CometChat.setSource("uikit-v4", Platform.OS, "react-native");
        }, error => {
            // console.log("Initialization failed with error:", error);
        });
    }
    static defaultExtensions = [
        new StickersExtension(),
        new SmartRepliesExtension(),
        new CollaborativeWhiteboardExtension(),
        new CollaborativeDocumentExtension(),
        new MessageTranslationExtension(),
        new TextModerationExtension(),
        new ThumbnailGenerationExtension(),
        new LinkPreviewExtention(),
        new PollsExtension(),
        new ReactionsExtension(),
        new ImageModerationExtension()
    ];
    static enableExtensions() {
        ChatConfigurator.init(); //re-initialize data source
        if (!CometChatUIKit.uiKitSettings.disableCalling) {
            if (CallingPackage.isCallingPackageInstalled)
                new CallingExtension().enable();
        }
        let extensionList = this.defaultExtensions;
        if (extensionList?.length > 0) {
            extensionList.forEach((extension) => {
                extension?.enable();
            });
        }
    }
    static async getLoggedInUser() {
        if (CometChatUIKit.checkAuthSettings(Promise.reject))
            null;
        let user = await CometChat.getLoggedinUser().catch((e) => Promise.reject(e));
        if (user == null) {
            Promise.reject(new CometChat.CometChatException({ code: "NOT_FOUND", message: "Login user not found" }));
        }
        else {
            this.enableExtensions();
        }
        return user;
    }
    static async login({ uid, authToken }) {
        if (CometChatUIKit.checkAuthSettings(Promise.reject))
            null;
        if (uid) {
            let user = await CometChat.login(uid, CometChatUIKit.uiKitSettings?.authKey).catch(e => Promise.reject(e));
            this.enableExtensions();
            return user;
        }
        if (authToken) {
            let user = await CometChat.login(authToken).catch(e => Promise.reject(e));
            this.enableExtensions();
            return user;
        }
        return Promise.reject(new CometChat.CometChatException({ code: "INVALID_LOGIN_ATTEMPT", message: "Provide uid or authToken" }));
    }
    static logout() {
        if (this.checkAuthSettings(Promise.reject)) { }
        return CometChat.logout();
    }
    static createUser(user) {
        if (this.checkAuthSettings(Promise.reject)) { }
        return CometChat.createUser(user, this.uiKitSettings.authKey);
    }
    static updateUser(user) {
        if (this.checkAuthSettings(Promise.reject)) { }
        return CometChat.updateUser(user, this.uiKitSettings.authKey);
    }
    //Error handling to give better logs
    static checkAuthSettings(onError) {
        if (this.uiKitSettings == null) {
            if (onError != null) {
                onError(new CometChat.CometChatException({
                    code: "ERR", name: "Authentication null",
                    message: "Populate authSettings before initializing"
                }));
            }
            return false;
        }
        if (!this.uiKitSettings?.appId) {
            if (onError != null) {
                onError(new CometChat.CometChatException({
                    code: "appIdErr", name: "APP ID null",
                    message: "Populate appId in authSettings before initializing"
                }));
            }
            return false;
        }
        return true;
    }
    //---------- Helper methods to send messages ----------
    ///[sendCustomMessage] used to send a custom message
    static sendCustomMessage(message, onSuccess, onError) {
        CometChatUIKitHelper.onMessageSent(message, messageStatus.inprogress);
        CometChat.sendCustomMessage(message)
            .then(customMessage => {
            CometChatUIKitHelper.onMessageSent(customMessage, messageStatus.success);
            onSuccess && onSuccess(customMessage);
        })
            .catch(err => {
            CometChatUIKitHelper.onMessageSent(message, messageStatus.error);
            onError && onError(err);
        });
    }
    ///[sendMediaMessage] used to send a media message
    static sendMediaMessage(message, onSuccess, onError) {
        let hasAttachment;
        try {
            hasAttachment = message.getAttachment();
        }
        catch (error) {
            console.log("no attachment found");
        }
        if (hasAttachment == undefined) {
            let file = message['files'][0];
            if (file == undefined) {
                onError && onError(new CometChat.CometChatException({
                    code: "Invalid Media message object",
                    message: "file object not found."
                }));
            }
            let attachmentObject = new CometChat.Attachment(file);
            attachmentObject.setName(file['name']);
            attachmentObject.setExtension((file['name'].lastIndexOf('.') + 1).toString());
            attachmentObject.setMimeType(file['type']);
            attachmentObject.setSize(0);
            attachmentObject.setUrl(file['uri']);
            message.setAttachment(attachmentObject);
        }
        CometChatUIKitHelper.onMessageSent(message, messageStatus.inprogress);
        CometChat.sendMediaMessage(message)
            .then(mediaMessage => {
            CometChatUIKitHelper.onMessageSent(mediaMessage, messageStatus.success);
            onSuccess && onSuccess(mediaMessage);
        })
            .catch(err => {
            CometChatUIKitHelper.onMessageSent(message, messageStatus.error);
            onError && onError(err);
        });
    }
    ///[sendTextMessage] used to send a text message
    static sendTextMessage(message, onSuccess, onError) {
        CometChatUIKitHelper.onMessageSent(message, messageStatus.inprogress);
        CometChat.sendMessage(message)
            .then(textMessage => {
            CometChatUIKitHelper.onMessageSent(textMessage, messageStatus.success);
            onSuccess && onSuccess(textMessage);
        })
            .catch(err => {
            CometChatUIKitHelper.onMessageSent(message, messageStatus.error);
            onError && onError(err);
        });
    }
    static getDataSource() {
        return ChatConfigurator.getDataSource();
    }
    static SoundManager = CometChatSoundManager;
    static Localize = CometChatLocalize;
}
//# sourceMappingURL=CometChatUIKit.js.map