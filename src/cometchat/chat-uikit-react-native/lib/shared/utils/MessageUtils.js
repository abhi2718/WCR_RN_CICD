import React from "react";
import { MessageTypeConstants } from "../constants/UIKitConstants";
import { CometChatMessageBubble } from "../views/CometChatMessageBubble";
import { ChatConfigurator } from "../framework";
const MessageContentView = (props) => {
    const { message, alignment, theme } = props;
    switch (message.getType()) {
        case MessageTypeConstants.audio:
            ChatConfigurator.dataSource.getAudioMessageContentView(message, alignment, theme);
            break;
        case MessageTypeConstants.video:
            ChatConfigurator.dataSource.getVideoMessageContentView(message, alignment, theme);
            break;
        case MessageTypeConstants.file:
            ChatConfigurator.dataSource.getFileMessageContentView(message, alignment, theme);
            break;
        case MessageTypeConstants.text:
            ChatConfigurator.dataSource.getTextMessageContentView(message, alignment, theme);
            break;
        case MessageTypeConstants.image:
            ChatConfigurator.dataSource.getImageMessageContentView(message, alignment, theme);
            break;
    }
};
export const MessageUtils = {
    getMessageView: (params) => {
        const { message, template, alignment, theme, } = params;
        return <CometChatMessageBubble id={`${message.getId()}`} alignment={alignment} ContentView={template?.ContentView?.bind(this, message, alignment) || MessageContentView.bind(this, message, alignment, theme)} style={{ backgroundColor: theme?.palette?.getPrimary() }}/>;
    }
};
//# sourceMappingURL=MessageUtils.js.map