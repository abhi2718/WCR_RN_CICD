import React from "react";
//@ts-ignore
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { CometChatMessageTypes, GroupMemberScope, MessageCategoryConstants, MessageOptionConstants, MessageTypeConstants } from "../constants/UIKitConstants";
import { CometChatMessageTemplate } from "../modals/CometChatMessageTemplate";
import { localize } from "../resources/CometChatLocalize";
import { CometChatTextBubble } from "../views/CometChatTextBubble";
import { CometChatVideoBubble } from "../views/CometChatVideoBubble";
import { CometChatImageBubble } from "../views/CometChatImageBubble";
import { CometChatAudioBubble } from "../views/CometChatAudioBubble";
import { CometChatFileBubble } from "../views/CometChatFileBubble";
import { ChatConfigurator } from "./ChatConfigurator";
import { ICONS } from "./resources";
import { CometChatConversationUtils } from "../utils/conversationUtils";
function isAudioMessage(message) {
    return message.getCategory() == CometChat.CATEGORY_MESSAGE &&
        message.getType() == CometChat.MESSAGE_TYPE.AUDIO;
}
function isVideoMessage(message) {
    return message.getCategory() == CometChat.CATEGORY_MESSAGE &&
        message.getType() == CometChat.MESSAGE_TYPE.VIDEO;
}
function isFileMessage(message) {
    return message.getCategory() == CometChat.CATEGORY_MESSAGE &&
        message.getType() == CometChat.MESSAGE_TYPE.FILE;
}
function isActionMessage(message) {
    return message.getCategory() == CometChat.CATEGORY_ACTION;
}
function isTextMessage(message) {
    return message.getCategory() == CometChat.CATEGORY_MESSAGE &&
        message.getType() == CometChat.MESSAGE_TYPE.TEXT;
}
function isImageMessage(message) {
    return message.getCategory() == CometChat.CATEGORY_MESSAGE &&
        message.getType() == CometChat.MESSAGE_TYPE.IMAGE;
}
function isDeletedMessage(message) {
    return message.getDeletedBy() != null;
}
export class MessageDataSource {
    getEditOption() {
        return {
            id: MessageOptionConstants.editMessage,
            title: localize("EDIT_MESSAGE"),
            icon: ICONS.EDIT
        };
    }
    getDeleteOption() {
        return {
            id: MessageOptionConstants.deleteMessage,
            title: localize("DELETE"),
            icon: ICONS.DELETE
        };
    }
    getReplyOption() {
        return {
            id: MessageOptionConstants.replyMessage,
            title: localize("REPLY"),
            icon: ICONS.REPLY
        };
    }
    getReplyInThreadOption() {
        return {
            id: MessageOptionConstants.replyInThread,
            title: localize("REPLY"),
            icon: ICONS.THREAD
        };
    }
    getShareOption() {
        return {
            id: MessageOptionConstants.shareMessage,
            title: localize("SHARE"),
            icon: ICONS.SHARE
        };
    }
    getCopyOption() {
        return {
            id: MessageOptionConstants.copyMessage,
            title: localize("COPY_MESSAGE"),
            icon: ICONS.COPY
        };
    }
    // getForwardOption(): CometChatMessageOption {
    //     return {
    //         id: MessageOptionConstants.forwardMessage,
    //         title: localize("FORWARD"),
    //         icon: ICONS.FORWARD
    //     }
    // }
    getInformationOption() {
        return {
            id: MessageOptionConstants.messageInformation,
            title: localize("INFORMATION"),
            icon: ICONS.INFO
        };
    }
    getPrivateMessageOption() {
        return {
            id: MessageOptionConstants.sendMessagePrivately,
            title: localize('SEND_MESSAGE_IN_PRIVATE'),
            icon: ICONS.PRIVATE_MESSAGE
        };
    }
    isSentByMe(loggedInUser, message) {
        return loggedInUser.getUid() == message.getSender().getUid();
    }
    getTextMessageOptions(loggedInUser, messageObject, group) {
        let msgOptions = [];
        msgOptions.push(this.getCopyOption());
        let _isSentByMe = this.isSentByMe(loggedInUser, messageObject);
        let canEdit = false;
        if (group) {
            canEdit = group['scope'] != GroupMemberScope.participant; //need clarification on why only moderator can edit and not participant or admin.
        }
        if (_isSentByMe || canEdit)
            msgOptions.push(this.getEditOption());
        let optionsList = ChatConfigurator.dataSource.getCommonOptions(loggedInUser, messageObject, group);
        if (isDeletedMessage(messageObject))
            return optionsList;
        return [...msgOptions, ...optionsList];
    }
    getAudioMessageOptions(loggedInUser, messageObject, group) {
        let optionsList = [];
        if (!isDeletedMessage(messageObject))
            optionsList.push(...ChatConfigurator.dataSource.getCommonOptions(loggedInUser, messageObject, group));
        return optionsList;
    }
    getVideoMessageOptions(loggedInUser, messageObject, group) {
        let optionsList = [];
        if (!isDeletedMessage(messageObject))
            optionsList.push(...ChatConfigurator.dataSource.getCommonOptions(loggedInUser, messageObject, group));
        return optionsList;
    }
    getImageMessageOptions(loggedInUser, messageObject, group) {
        let optionsList = [];
        if (!isDeletedMessage(messageObject))
            optionsList.push(...ChatConfigurator.dataSource.getCommonOptions(loggedInUser, messageObject, group));
        return optionsList;
    }
    getFileMessageOptions(loggedInUser, messageObject, group) {
        let optionsList = [];
        if (!isDeletedMessage(messageObject))
            optionsList.push(...ChatConfigurator.dataSource.getCommonOptions(loggedInUser, messageObject, group));
        return optionsList;
    }
    getMessageOptions(loggedInUser, messageObject, group) {
        let optionsList = [...ChatConfigurator.dataSource.getCommonOptions(loggedInUser, messageObject, group)];
        if (isDeletedMessage(messageObject))
            return optionsList;
        if (messageObject.getCategory() == MessageCategoryConstants.message) {
            let type = messageObject.getType();
            switch (type) {
                case MessageTypeConstants.audio:
                    optionsList.push(...ChatConfigurator.dataSource.getAudioMessageOptions(loggedInUser, messageObject, group));
                    break;
                case MessageTypeConstants.video:
                    optionsList.push(...ChatConfigurator.dataSource.getVideoMessageOptions(loggedInUser, messageObject, group));
                    break;
                case MessageTypeConstants.image:
                    optionsList.push(...ChatConfigurator.dataSource.getImageMessageOptions(loggedInUser, messageObject, group));
                    break;
                case MessageTypeConstants.text:
                    optionsList.push(...ChatConfigurator.dataSource.getTextMessageOptions(loggedInUser, messageObject, group));
                    break;
                case MessageTypeConstants.file:
                    optionsList.push(...ChatConfigurator.dataSource.getFileMessageOptions(loggedInUser, messageObject, group));
                    break;
            }
        }
        return optionsList;
    }
    getCommonOptions(loggedInUser, messageObject, group) {
        let optionsList = [];
        let _isSentByMe = this.isSentByMe(loggedInUser, messageObject);
        let canDelete = false;
        if (group?.getScope() != undefined && group?.getScope() != GroupMemberScope.participant) {
            canDelete = true;
        }
        if (!messageObject.getParentMessageId()) {
            optionsList.push(this.getReplyInThreadOption());
        }
        if (isTextMessage(messageObject) || isImageMessage(messageObject) || isFileMessage(messageObject) || isVideoMessage(messageObject) || isAudioMessage(messageObject)) {
            optionsList.push(this.getShareOption());
        }
        if (_isSentByMe && !isDeletedMessage(messageObject)) {
            optionsList.push(this.getInformationOption());
            // if (!isDeletedMessage(messageObject)) {
            //     optionsList.push(this.getForwardOption())
            // }
        }
        if (Boolean(group) && !_isSentByMe) {
            optionsList.push(this.getPrivateMessageOption());
        }
        if (_isSentByMe && !isDeletedMessage(messageObject)) {
            if (!group || (group && canDelete)) {
                optionsList.push(this.getDeleteOption());
            }
        }
        return optionsList;
    }
    getGroupActionBubble(message, theme) {
        if (isActionMessage(message)) {
            return <CometChatTextBubble text={`${message.getMessage()}`} textContainerStyle={{ marginStart: 4, marginEnd: 4 }} style={{
                    backgroundColor: theme?.palette?.getAccent50(),
                    textFont: {
                        fontSize: theme?.typography?.subtitle2?.fontSize,
                        fontWeight: theme?.typography?.subtitle2?.fontWeight,
                    },
                    textColor: theme?.palette?.getAccent600()
                }}/>;
        }
        return null;
    }
    getBottomView(message, alignment) {
        return null;
    }
    getDeleteMessageBubble(message, theme) {
        return <CometChatTextBubble textContainerStyle={{ marginStart: 4, marginEnd: 4 }} text={localize("MESSAGE_IS_DELETED")} style={{
                backgroundColor: "transparent",
                textFont: {
                    fontSize: theme?.typography?.subtitle2?.fontSize,
                    fontWeight: theme?.typography?.subtitle2?.fontWeight,
                },
                textColor: theme?.palette?.getAccent600()
            }}/>;
    }
    getVideoMessageBubble(videoUrl, thumbnailUrl, message, theme, videoBubbleStyle) {
        if (isVideoMessage(message)) {
            return <CometChatVideoBubble videoUrl={videoUrl} thumbnailUrl={{ uri: thumbnailUrl }} style={{ height: 200, width: 200, borderRadius: 8, ...videoBubbleStyle }}/>;
        }
        return null;
    }
    getTextMessageBubble(messageText, message, alignment, theme) {
        return <CometChatTextBubble text={messageText} style={{
                backgroundColor: "transparent",
                textFont: theme?.typography.body,
                textColor: alignment == "right" ? theme?.palette.getSecondary() : theme?.palette?.getAccent(),
                borderRadius: 8
            }}/>;
    }
    getImageMessageBubble(imageUrl, caption, style, message, theme) {
        if (isImageMessage(message)) {
            return <CometChatImageBubble imageUrl={{ uri: imageUrl }} style={{ height: 200, width: 200, borderRadius: 8, ...style }}/>;
        }
        return null;
    }
    getAudioMessageBubble(audioUrl, title, style, message, theme) {
        if (isAudioMessage(message)) {
            return <CometChatAudioBubble audioUrl={audioUrl} title={title} style={{ width: 200, borderRadius: 8, ...style }}/>;
        }
        return null;
    }
    getFileMessageBubble(fileUrl, title, style, message, theme) {
        if (isFileMessage(message)) {
            return <CometChatFileBubble fileUrl={fileUrl} title={title} style={{ width: 200, ...style }}/>;
        }
        return null;
    }
    getTextMessageContentView(message, alignment, theme) {
        return ChatConfigurator.dataSource.getTextMessageBubble(message.getText(), message, alignment, theme);
    }
    getAudioMessageContentView(message, alignment, theme) {
        let attachment = message.getAttachment();
        return ChatConfigurator.dataSource.getAudioMessageBubble(attachment.getUrl(), attachment.getName(), {
            iconTint: alignment == "right" ? theme?.palette?.getSecondary() : theme?.palette?.getPrimary(),
            backgroundColor: alignment == "left" ? theme?.palette?.getAccent50() : theme?.palette?.getPrimary(),
            titleColor: alignment == "right" ? theme?.palette.getSecondary() : theme?.palette.getAccent(),
            titleFont: theme?.typography.body,
            subtitleColor: alignment == "right" ? theme?.palette.getSecondary() : theme?.palette.getAccent(),
            subtitleFont: theme?.typography.subtitle1,
        }, message, theme);
    }
    getVideoMessageContentView(message, alignment, theme) {
        let attachment = message.getAttachment();
        return ChatConfigurator.dataSource.getVideoMessageBubble(attachment.getUrl(), undefined, message, theme, {
            backgroundColor: alignment == "left" ? theme?.palette.getAccent50() : theme?.palette.getPrimary(),
            playIconBackgroundColor: theme?.palette?.getAccent50(),
            playIconTint: alignment == "left" ? theme?.palette.getPrimary() : theme?.palette.getSecondary(),
        });
    }
    getImageMessageContentView(message, alignment, theme) {
        let attachment = message.getAttachment();
        let url = attachment.getUrl();
        if (url == undefined)
            url = message['data']['url'];
        return ChatConfigurator.dataSource.getImageMessageBubble(url, attachment.getName(), {
            backgroundColor: alignment == "left" ? theme?.palette.getAccent50() : theme?.palette.getPrimary()
        }, message, theme);
    }
    getFileMessageContentView(message, alignment, theme) {
        let attachment = message.getAttachment();
        return ChatConfigurator.dataSource.getFileMessageBubble(attachment.getUrl(), attachment.getName(), {
            iconTint: alignment == "right" ? theme?.palette.getSecondary() : theme?.palette?.getPrimary(),
            backgroundColor: alignment == "left" ? theme?.palette.getAccent50() : theme?.palette.getPrimary(),
            titleColor: alignment == "right" ? theme?.palette.getSecondary() : theme?.palette.getAccent(),
            titleFont: theme?.typography.body,
            subtitleColor: alignment == "right" ? theme?.palette.getSecondary() : theme?.palette.getAccent(),
            subtitleFont: theme?.typography.subtitle1,
        }, message, theme);
    }
    getTextMessageTemplate(theme) {
        return new CometChatMessageTemplate({
            type: MessageTypeConstants.text,
            category: MessageCategoryConstants.message,
            ContentView: (message, _alignment) => {
                if (isDeletedMessage(message)) {
                    return ChatConfigurator.dataSource.getDeleteMessageBubble(message, theme);
                }
                else {
                    return ChatConfigurator.dataSource.getTextMessageContentView(message, _alignment, theme);
                }
            },
            options: (loggedInuser, message, group) => ChatConfigurator.dataSource.getTextMessageOptions(loggedInuser, message, group),
        });
    }
    getAudioMessageTemplate(theme) {
        return new CometChatMessageTemplate({
            type: MessageTypeConstants.audio,
            category: MessageCategoryConstants.message,
            ContentView: (message, alignment) => {
                if (isDeletedMessage(message)) {
                    return ChatConfigurator.dataSource.getDeleteMessageBubble(message, theme);
                }
                else
                    return ChatConfigurator.dataSource.getAudioMessageContentView(message, alignment, theme);
            },
            options: (loggedInuser, message, group) => ChatConfigurator.dataSource.getAudioMessageOptions(loggedInuser, message, group),
        });
    }
    getVideoMessageTemplate(theme) {
        return new CometChatMessageTemplate({
            type: MessageTypeConstants.video,
            category: MessageCategoryConstants.message,
            ContentView: (message, alignment) => {
                if (isDeletedMessage(message)) {
                    return ChatConfigurator.dataSource.getDeleteMessageBubble(message, theme);
                }
                else
                    return ChatConfigurator.dataSource.getVideoMessageContentView(message, alignment, theme);
            },
            options: (loggedInuser, message, group) => ChatConfigurator.dataSource.getVideoMessageOptions(loggedInuser, message, group),
        });
    }
    getImageMessageTemplate(theme) {
        return new CometChatMessageTemplate({
            type: MessageTypeConstants.image,
            category: MessageCategoryConstants.message,
            ContentView: (message, alignment) => {
                if (isDeletedMessage(message)) {
                    return ChatConfigurator.dataSource.getDeleteMessageBubble(message, theme);
                }
                else
                    return ChatConfigurator.dataSource.getImageMessageContentView(message, alignment, theme);
            },
            options: (loggedInuser, message, group) => ChatConfigurator.dataSource.getImageMessageOptions(loggedInuser, message, group),
        });
    }
    getFileMessageTemplate(theme) {
        return new CometChatMessageTemplate({
            type: MessageTypeConstants.file,
            category: MessageCategoryConstants.message,
            ContentView: (message, alignment) => {
                if (isDeletedMessage(message)) {
                    return ChatConfigurator.dataSource.getDeleteMessageBubble(message, theme);
                }
                else
                    return ChatConfigurator.dataSource.getFileMessageContentView(message, alignment, theme);
            },
            options: (loggedInuser, message, group) => ChatConfigurator.dataSource.getFileMessageOptions(loggedInuser, message, group),
        });
    }
    getGroupActionTemplate(theme) {
        return new CometChatMessageTemplate({
            type: MessageTypeConstants.groupMember,
            category: MessageCategoryConstants.action,
            ContentView: (message, alignment) => {
                return ChatConfigurator.dataSource.getGroupActionBubble(message, theme);
            }
        });
    }
    getAllMessageTemplates(theme) {
        return [
            ChatConfigurator.dataSource.getTextMessageTemplate(theme),
            ChatConfigurator.dataSource.getAudioMessageTemplate(theme),
            ChatConfigurator.dataSource.getVideoMessageTemplate(theme),
            ChatConfigurator.dataSource.getFileMessageTemplate(theme),
            ChatConfigurator.dataSource.getImageMessageTemplate(theme),
            ChatConfigurator.dataSource.getGroupActionTemplate(theme)
        ];
    }
    getMessageTemplate(messageType, MessageCategory, theme) {
        // let _theme: CometChatTheme = useContext("theme")         ???
        let template;
        //in case of call message return undefined
        if (MessageCategory == MessageCategoryConstants.call)
            return template;
        switch (messageType) {
            case MessageTypeConstants.text:
                template = ChatConfigurator.dataSource.getTextMessageTemplate(theme);
                break;
            case MessageTypeConstants.audio:
                template = ChatConfigurator.dataSource.getAudioMessageTemplate(theme);
                break;
            case MessageTypeConstants.video:
                template = ChatConfigurator.dataSource.getVideoMessageTemplate(theme);
                break;
            case MessageTypeConstants.groupActions:
            case MessageTypeConstants.groupMember:
                template = ChatConfigurator.dataSource.getGroupActionTemplate(theme);
                break;
            case MessageTypeConstants.file:
                template = ChatConfigurator.dataSource.getFileMessageTemplate(theme);
                break;
        }
        return template;
    }
    getAllMessageTypes() {
        return [
            CometChatMessageTypes.text,
            CometChatMessageTypes.image,
            CometChatMessageTypes.audio,
            CometChatMessageTypes.video,
            CometChatMessageTypes.file,
            MessageTypeConstants.groupActions,
            MessageTypeConstants.groupMember
        ];
    }
    getAllMessageCategories() {
        return [MessageCategoryConstants.message, MessageCategoryConstants.action];
    }
    getAuxiliaryOptions(user, group, id) {
        return null;
    }
    getAuxiliaryHeaderAppbarOptions(user, group) {
        return null;
    }
    getId() {
        return "messageUtils";
    }
    getMessageTypeToSubtitle(messageType) {
        let subtitle = messageType;
        switch (messageType) {
            case MessageTypeConstants.text:
                subtitle = localize("TEXT");
                break;
            case MessageTypeConstants.image:
                subtitle = localize("MESSAGE_IMAGE");
                break;
            case MessageTypeConstants.video:
                subtitle = localize("MESSAGE_VIDEO");
                break;
            case MessageTypeConstants.file:
                subtitle = localize("MESSAGE_FILE");
                break;
            case MessageTypeConstants.audio:
                subtitle = localize("MESSAGE_AUDIO");
                break;
            default:
                subtitle = messageType;
                break;
        }
        return subtitle;
    }
    usersActionList = () => [
        {
            id: MessageTypeConstants.takePhoto,
            title: localize('TAKE_PHOTO'),
            iconUrl: ICONS.IMAGE,
            onClick: null,
        },
        {
            id: MessageTypeConstants.image,
            title: localize('ATTACH_IMAGE'),
            iconUrl: ICONS.IMAGE,
            onClick: null,
        },
        {
            id: MessageTypeConstants.audio,
            title: localize('ATTACH_AUDIO'),
            iconUrl: ICONS.AUDIO,
            onClick: null,
        },
        {
            id: MessageTypeConstants.video,
            title: localize('ATTACH_VIDEO'),
            iconUrl: ICONS.VIDEO,
            onClick: null,
        },
        {
            id: MessageTypeConstants.file,
            title: localize('ATTACH_FILE'),
            iconUrl: ICONS.FILE,
            onClick: null,
        },
    ];
    groupActionList = () => [
        {
            id: MessageTypeConstants.takePhoto,
            title: localize('TAKE_PHOTO'),
            iconUrl: ICONS.IMAGE,
            onClick: null,
        },
        {
            id: MessageTypeConstants.image,
            title: localize('ATTACH_IMAGE'),
            iconUrl: ICONS.IMAGE,
            onClick: null,
        },
        {
            id: MessageTypeConstants.audio,
            title: localize('ATTACH_AUDIO'),
            iconUrl: ICONS.AUDIO,
            onClick: null,
        },
        {
            id: MessageTypeConstants.video,
            title: localize('ATTACH_VIDEO'),
            iconUrl: ICONS.VIDEO,
            onClick: null,
        },
        {
            id: MessageTypeConstants.file,
            title: localize('ATTACH_FILE'),
            iconUrl: ICONS.FILE,
            onClick: null,
        },
    ];
    getAttachmentOptions(user, group, composerId) {
        if (user) {
            return this.usersActionList();
        }
        else if (group) {
            return this.groupActionList();
        }
        else {
            return this.usersActionList();
        }
    }
    getAuxiliaryButtonOptions() {
        return null;
    }
    getLastConversationMessage(conversation) {
        return CometChatConversationUtils.getMessagePreview(conversation.getLastMessage());
    }
    ;
}
//# sourceMappingURL=MessageDataSource.js.map