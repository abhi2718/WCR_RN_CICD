import { localize } from "../resources/CometChatLocalize";
import { CometChat } from "@cometchat/chat-sdk-react-native";
export class CometChatConversationUtils {
    static getDefaultOptions() {
        let options = [];
        options.push({
            id: "1",
            title: localize("DELETE"),
            backgroundColor: "rgb(255, 59, 48)",
        });
        return options;
    }
    static getLastMessage(conversation) {
        let msg = conversation.getLastMessage();
        if (!msg) {
            return undefined;
        }
        switch (msg['category']) {
            case "message":
                break;
            case "custom":
                break;
            case "action":
                break;
            case "call":
                break;
            default:
                break;
        }
        return msg;
    }
    static getMessagePreview = (lastMessage) => {
        if (lastMessage != undefined) {
            if (lastMessage.getDeletedAt() !== undefined) {
                return localize("THIS_MESSAGE_DELETED");
            }
            let groupText = "", msgText = "";
            if (lastMessage.getCategory() == 'message') {
                switch (lastMessage.getType()) {
                    case "text":
                        msgText = lastMessage.getText();
                        break;
                    case 'image':
                        msgText = localize('MESSAGE_IMAGE');
                        break;
                    case 'audio':
                        msgText = localize('MESSAGE_AUDIO');
                        break;
                    case 'video':
                        msgText = localize('VIDEOS');
                        break;
                    case 'file':
                        msgText = localize('MESSAGE_FILE');
                        break;
                }
            }
            else if (lastMessage.getCategory() == CometChat.CATEGORY_CUSTOM) {
                msgText = lastMessage.getType();
            }
            else if (lastMessage.getCategory() == CometChat.CATEGORY_ACTION) {
                msgText = lastMessage.getMessage();
            }
            else {
                msgText = lastMessage['metaData']?.pushNotification;
            }
            return (msgText);
        }
        else {
            return "";
        }
    };
}
//# sourceMappingURL=conversationUtils.js.map