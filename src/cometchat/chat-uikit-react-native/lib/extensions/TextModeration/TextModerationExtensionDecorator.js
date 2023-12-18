import { DataSourceDecorator } from "../../shared/framework";
import { ExtensionConstants } from "../ExtensionConstants";
import { getExtentionData } from "../ExtensionModerator";
import { MessageTypeConstants, MessageCategoryConstants } from "../../shared/constants/UIKitConstants";
export class TextModerationExtensionDecorator extends DataSourceDecorator {
    textModerationConfiguration;
    constructor(dataSource, textModerationConfiguration) {
        super(dataSource);
        if (textModerationConfiguration != undefined) {
            this.textModerationConfiguration = textModerationConfiguration;
        }
    }
    getTextMessageBubble(messageText, message, alignment, theme) {
        var text = this.checkModeration(message);
        return super.getTextMessageBubble(text, message, alignment, theme);
    }
    checkModeration(messageObject) {
        var messageText = messageObject['text'];
        const maskedData = getExtentionData(messageObject, ExtensionConstants.dataMasking);
        if (maskedData &&
            maskedData.hasOwnProperty("data") &&
            maskedData.data.hasOwnProperty(ExtensionConstants.sensitiveData) &&
            maskedData.data.hasOwnProperty(ExtensionConstants.messageMasked) &&
            maskedData.data.sensitive_data === "yes") {
            messageText = maskedData.data.message_masked;
        }
        //profanity extensions data
        const profaneData = getExtentionData(messageObject, ExtensionConstants.profanityFilter);
        if (profaneData &&
            profaneData.hasOwnProperty(ExtensionConstants.profanity) &&
            profaneData.hasOwnProperty(ExtensionConstants.messageClean) &&
            profaneData.profanity === "yes") {
            messageText = profaneData.message_clean;
        }
        return messageText;
    }
    getId() {
        return ("textModeration");
    }
    getLastConversationMessage(conversation) {
        if (conversation['lastMessage'] == undefined) {
            return "";
        }
        if (conversation['lastMessage'].type == MessageTypeConstants.text &&
            conversation['lastMessage'].category == MessageCategoryConstants.message) {
            let text = this.checkModeration(conversation['lastMessage']);
            return text;
        }
        else {
            return super.getLastConversationMessage(conversation);
        }
    }
    ;
}
//# sourceMappingURL=TextModerationExtensionDecorator.js.map