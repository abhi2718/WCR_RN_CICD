export class DataSourceDecorator {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    getId() {
        throw new Error("Method not implemented.");
    }
    getTextMessageOptions(loggedInUser, messageObject, group) {
        return this.dataSource.getTextMessageOptions(loggedInUser, messageObject, group);
    }
    getAudioMessageOptions(loggedInUser, messageObject, group) {
        return this.dataSource.getAudioMessageOptions(loggedInUser, messageObject, group);
    }
    getVideoMessageOptions(loggedInUser, messageObject, group) {
        return this.dataSource.getVideoMessageOptions(loggedInUser, messageObject, group);
    }
    getImageMessageOptions(loggedInUser, messageObject, group) {
        return this.dataSource.getImageMessageOptions(loggedInUser, messageObject, group);
    }
    getFileMessageOptions(loggedInUser, messageObject, group) {
        return this.dataSource.getFileMessageOptions(loggedInUser, messageObject, group);
    }
    getMessageOptions(loggedInUser, messageObject, group) {
        return this.dataSource.getMessageOptions(loggedInUser, messageObject, group);
    }
    getCommonOptions(loggedInUser, messageObject, group) {
        return this.dataSource.getCommonOptions(loggedInUser, messageObject, group);
    }
    getBottomView(message, alignment) {
        return this.dataSource.getBottomView(message, alignment);
    }
    getDeleteMessageBubble(message, theme) {
        return this.dataSource.getDeleteMessageBubble(message, theme);
    }
    getVideoMessageBubble(videoUrl, thumbnailUrl, message, theme, videoBubbleStyle) {
        return this.dataSource.getVideoMessageBubble(videoUrl, thumbnailUrl, message, theme, videoBubbleStyle);
    }
    getTextMessageBubble(messageText, message, alignment, theme) {
        return this.dataSource.getTextMessageBubble(messageText, message, alignment, theme);
    }
    getImageMessageBubble(imageUrl, caption, style, message, theme) {
        return this.dataSource.getImageMessageBubble(imageUrl, caption, style, message, theme);
    }
    getAudioMessageBubble(audioUrl, title, style, message, theme) {
        return this.dataSource.getAudioMessageBubble(audioUrl, title, style, message, theme);
    }
    getFileMessageBubble(fileUrl, title, style, message, theme) {
        return this.dataSource.getFileMessageBubble(fileUrl, title, style, message, theme);
    }
    getGroupActionBubble(message, theme) {
        return this.dataSource.getGroupActionBubble(message, theme);
    }
    getTextMessageContentView(message, alignment, theme) {
        return this.dataSource.getTextMessageContentView(message, alignment, theme);
    }
    getAudioMessageContentView(message, alignment, theme) {
        return this.dataSource.getAudioMessageContentView(message, alignment, theme);
    }
    getVideoMessageContentView(message, alignment, theme) {
        return this.dataSource.getVideoMessageContentView(message, alignment, theme);
    }
    getImageMessageContentView(message, alignment, theme) {
        return this.dataSource.getImageMessageContentView(message, alignment, theme);
    }
    getFileMessageContentView(message, alignment, theme) {
        return this.dataSource.getFileMessageContentView(message, alignment, theme);
    }
    getTextMessageTemplate(theme) {
        return this.dataSource.getTextMessageTemplate(theme);
    }
    getAudioMessageTemplate(theme) {
        return this.dataSource.getAudioMessageTemplate(theme);
    }
    getVideoMessageTemplate(theme) {
        return this.dataSource.getVideoMessageTemplate(theme);
    }
    getImageMessageTemplate(theme) {
        return this.dataSource.getImageMessageTemplate(theme);
    }
    getFileMessageTemplate(theme) {
        return this.dataSource.getFileMessageTemplate(theme);
    }
    getAllMessageTemplates(theme) {
        return this.dataSource.getAllMessageTemplates(theme);
    }
    getMessageTemplate(messageType, MessageCategory, theme) {
        return this.dataSource.getMessageTemplate(messageType, MessageCategory, theme);
    }
    getGroupActionTemplate(theme) {
        return this.dataSource.getGroupActionTemplate(theme);
    }
    getAllMessageTypes() {
        return this.dataSource.getAllMessageTypes();
    }
    getAllMessageCategories() {
        return this.dataSource.getAllMessageCategories();
    }
    getAuxiliaryOptions(user, group, id) {
        return this.dataSource.getAuxiliaryOptions(user, group, id);
    }
    getMessageTypeToSubtitle(messageType) {
        return this.dataSource.getMessageTypeToSubtitle(messageType);
    }
    getAttachmentOptions(user, group, composerId) {
        return this.dataSource.getAttachmentOptions(user, group, composerId);
    }
    ;
    getAuxiliaryButtonOptions() {
        return this.dataSource.getAuxiliaryButtonOptions();
    }
    ;
    getLastConversationMessage(conversation) {
        return this.dataSource.getLastConversationMessage(conversation);
    }
    ;
    getAuxiliaryHeaderAppbarOptions(user, group, theme) {
        return this.dataSource.getAuxiliaryHeaderAppbarOptions(user, group, theme);
    }
}
//# sourceMappingURL=DataSourceDecorator.js.map