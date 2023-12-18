import { DataSourceDecorator } from "../../shared/framework";
// @ts-ignore
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { MetadataConstants, MessageCategoryConstants, ReceiverTypeConstants } from "../../shared/constants/UIKitConstants";
import { ExtensionConstants, ExtensionTypeConstants } from "../ExtensionConstants";
import { getExtentionData } from "../ExtensionModerator";
import { localize } from "../../shared/resources/CometChatLocalize";
import { CometChatMessageTemplate } from "../../shared/modals";
import { ChatConfigurator } from "../../shared/framework";
import { CometChatCollaborativeBubble } from "../CollaborativeBubble/CometChatCollaborativeBubble";
import { CometChatUIEvents, MessageEvents } from '../../shared/events';
// @ts-ignore
import React from 'react';
// @ts-ignore
import { View, Text } from 'react-native';
import { DOCUMENTICON, DOCUMENTICON2X } from "./resources";
import { CometChatUIEventHandler } from "../../shared/events/CometChatUIEventHandler/CometChatUIEventHandler";
export class CollaborativeDocumentExtensionDecorator extends DataSourceDecorator {
    documentConfiguration;
    documentUrl = "v1/create";
    constructor(dataSource, docConfiguration) {
        super(dataSource);
        if (docConfiguration != undefined) {
            this.documentConfiguration = docConfiguration;
        }
    }
    isDeletedMessage(message) {
        return message.getDeletedBy() != null;
    }
    getId() {
        return ("CollaborativeDocument");
    }
    getLastConversationMessage(conversation) {
        if (conversation.getLastMessage() == undefined) {
            return "";
        }
        if (conversation.getLastMessage().getType() == ExtensionTypeConstants.document &&
            conversation.getLastMessage().getCategory() == MessageCategoryConstants.custom) {
            return localize('CUSTOM_MESSAGE_DOCUMENT');
        }
        else {
            return super.getLastConversationMessage(conversation);
        }
    }
    ;
    getAllMessageCategories() {
        var categoryList = super.getAllMessageCategories();
        if (!categoryList.includes(MessageCategoryConstants.custom)) {
            categoryList.push(MessageCategoryConstants.custom);
        }
        return categoryList;
    }
    getAllMessageTypes() {
        var messagesTypes = super.getAllMessageTypes();
        messagesTypes.push(ExtensionTypeConstants.document);
        return messagesTypes;
    }
    getAttachmentOptions(user, group, composerId) {
        let attachmentOptions = super.getAttachmentOptions(user, group, composerId);
        if (composerId == undefined || composerId.get("parentMessageId") == undefined)
            attachmentOptions.push({
                id: "document",
                title: localize("COLLABORATIVE_DOCUMENT"),
                iconUrl: DOCUMENTICON,
                onPress: (user, group) => {
                    this.shareCollaborativedocument(user, group);
                },
            });
        return attachmentOptions;
    }
    shareCollaborativedocument(user, group) {
        CometChatUIEventHandler.emitUIEvent(CometChatUIEvents.ccToggleBottomSheet, {
            isBottomSheetVisible: false,
        });
        let receiverId;
        let receiverType;
        if (user != undefined) {
            receiverId = user.getUid();
            receiverType = ReceiverTypeConstants.user;
        }
        else if (group != undefined) {
            receiverId = group.getGuid();
            receiverType = ReceiverTypeConstants.group;
        }
        else {
        }
        CometChat.callExtension(ExtensionConstants.document, ExtensionConstants.post, this.documentUrl, {
            receiver: receiverId,
            receiverType: receiverType,
        }).then(response => {
            console.log("extension sent ", response);
        }).catch((error) => {
            console.log("error", error);
            CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageError, error);
        });
    }
    getAllMessageTemplates(theme) {
        let templateList = super.getAllMessageTemplates(theme);
        templateList.push(new CometChatMessageTemplate({
            type: ExtensionTypeConstants.document,
            category: MessageCategoryConstants.custom,
            ContentView: (message, _alignment) => {
                if (this.isDeletedMessage(message)) {
                    return ChatConfigurator.dataSource.getDeleteMessageBubble(message, theme);
                }
                else {
                    return this.getCollaborativeBubble(message, _alignment);
                }
            },
            options: (loggedInUser, messageObject, group) => ChatConfigurator.dataSource.getMessageOptions(loggedInUser, messageObject, group),
        }));
        return templateList;
    }
    getCollaborativeBubble(message, _alignment) {
        if (message) {
            const documentData = getExtentionData(message, MetadataConstants.extensions?.document);
            if (documentData &&
                documentData.document_url &&
                documentData.document_url.trim().length) {
                let url = documentData.document_url;
                return <CometChatCollaborativeBubble title={localize("COLLABORATIVE_DOCUMENT")} subTitle={localize("OPEN_DOCUMENT_TO_DRAW")} buttonText={localize("OPEN_DOCUMENT")} icon={DOCUMENTICON2X} url={url} style={this.documentConfiguration && this.documentConfiguration.collaborativeBubbleStyle}/>;
            }
        }
        return (<View>
        <Text>{"no match"}</Text>
            </View>);
    }
}
//# sourceMappingURL=CollaborativeDocumentExtensionDecorator.js.map