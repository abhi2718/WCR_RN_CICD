import { DataSourceDecorator } from '../../shared/framework';
// @ts-ignore
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { MetadataConstants, MessageCategoryConstants, } from '../../shared/constants/UIKitConstants';
import { ExtensionTypeConstants } from '../ExtensionConstants';
import { getExtentionData } from '../ExtensionModerator';
import { localize } from '../../shared/resources/CometChatLocalize';
import { CometChatMessageTemplate } from '../../shared/modals';
import { ChatConfigurator } from '../../shared/framework';
// @ts-ignore
import React from 'react';
// @ts-ignore
import { View } from 'react-native';
import { ICONS as ICONS2 } from './resources';
import { CometChatCreatePoll } from './Polls';
import { PollsBubble } from './PollsBubble';
export class PollsExtensionDecorator extends DataSourceDecorator {
    pollsConfiguration;
    loggedInUser;
    constructor(dataSource, pollsConfiguration) {
        super(dataSource);
        if (pollsConfiguration != undefined) {
            this.pollsConfiguration = pollsConfiguration;
        }
        CometChat.getLoggedinUser()
            .then((u) => {
            this.loggedInUser = u;
        })
            .catch((err) => console.log(err));
    }
    isDeletedMessage(message) {
        return message.getDeletedBy() != null;
    }
    getId() {
        return 'Polls';
    }
    getLastConversationMessage(conversation) {
        if (conversation['lastMessage'] == undefined) {
            return '';
        }
        if (conversation['lastMessage']['type'] == ExtensionTypeConstants.extensionPoll &&
            conversation['lastMessage']['category'] == MessageCategoryConstants.custom) {
            return localize('CUSTOM_MESSAGE_POLL');
        }
        else {
            return super.getLastConversationMessage(conversation);
        }
    }
    getAllMessageCategories() {
        var categoryList = super.getAllMessageCategories();
        if (!categoryList.includes(MessageCategoryConstants.custom)) {
            categoryList.push(MessageCategoryConstants.custom);
        }
        return categoryList;
    }
    getAllMessageTypes() {
        var messagesTypes = super.getAllMessageTypes();
        messagesTypes.push(ExtensionTypeConstants.extensionPoll);
        return messagesTypes;
    }
    getAttachmentOptions(user, group, composerId) {
        let attachmentOptions = super.getAttachmentOptions(user, group, composerId);
        if (composerId == undefined || composerId.get("parentMessageId") == undefined)
            attachmentOptions.push({
                id: 'polls',
                title: 'Polls',
                iconUrl: ICONS2.DOCUMENT,
                CustomView: (user, group, _id, pollsProps) => {
                    return (<CometChatCreatePoll user={user} group={group} {...pollsProps} {...this.pollsConfiguration}/>);
                },
            });
        return attachmentOptions;
    }
    getAllMessageTemplates(theme) {
        let templateList = super.getAllMessageTemplates(theme);
        templateList.push(new CometChatMessageTemplate({
            type: ExtensionTypeConstants.extensionPoll,
            category: MessageCategoryConstants.custom,
            ContentView: (message, _alignment) => {
                if (this.isDeletedMessage(message)) {
                    return ChatConfigurator.dataSource.getDeleteMessageBubble(message, theme);
                }
                else {
                    return this.getPollBubble(message, _alignment);
                }
            },
            options: (loggedInUser, messageObject, group) => ChatConfigurator.dataSource.getMessageOptions(loggedInUser, messageObject, group),
        }));
        return templateList;
    }
    getPollBubble(message, _alignment) {
        if (message && this.loggedInUser) {
            const metaData = getExtentionData(message, MetadataConstants.extensions?.polls);
            return (<PollsBubble pollQuestion={message['customData']?.['question']} options={message['customData']?.['options']} pollId={message['customData']?.['id']} loggedInUser={this.loggedInUser} 
            // choosePoll
            senderUid={message['sender']?.['uid']} metadata={metaData} {...(this.pollsConfiguration?.pollsBubbleStyle
                ? this.pollsConfiguration.pollsBubbleStyle
                : {})}/>);
        }
        return <View></View>;
    }
}
//# sourceMappingURL=PollsDecorator.js.map