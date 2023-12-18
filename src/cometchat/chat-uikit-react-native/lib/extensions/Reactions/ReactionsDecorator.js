import { DataSourceDecorator } from '../../shared/framework';
// @ts-ignore
import { CometChat } from '@cometchat/chat-sdk-react-native';
// @ts-ignore
import React from 'react';
import { MessageOptionConstants, MessageStatusConstants, } from '../../shared/constants/UIKitConstants';
import { CometChatMessageReactions } from './CometChatMessageReactions';
import { localize } from '../../shared/resources/CometChatLocalize';
import { CometChatEmojiKeyboard } from '../../shared/views/CometChatEmojiKeyboard';
import { ExtensionConstants, ExtensionURLs } from '../ExtensionConstants';
import { CometChatUIEvents, MessageEvents } from '../../shared/events';
import { CometChatUIEventHandler } from '../../shared/events/CometChatUIEventHandler/CometChatUIEventHandler';
import { ICONS } from './resources';
export class ReactionsExtensionDecorator extends DataSourceDecorator {
    messageObject;
    loggedInUser;
    imageModerationConfiguration;
    // loggedInUser: CometChat.User;
    constructor(dataSource, imageModerationConfiguration) {
        super(dataSource);
        CometChat.getLoggedinUser()
            .then((u) => {
            this.loggedInUser = u;
        })
            .catch((err) => console.log(err));
        if (imageModerationConfiguration != undefined) {
            this.imageModerationConfiguration = imageModerationConfiguration;
        }
    }
    getId() {
        return 'Reactions';
    }
    getBottomView(messageObject, alignment) {
        return (<CometChatMessageReactions loggedInUser={this.loggedInUser} messageObject={messageObject} onReactionClick={this.reactToMessages} {...this.imageModerationConfiguration}/>);
    }
    getReactions() {
        return {
            id: MessageOptionConstants.reactToMessage,
            title: localize('ADD_REACTION'),
            icon: ICONS.ADDREACTION,
            CustomView: (messageObject) => (<CometChatEmojiKeyboard onClick={(item) => {
                    CometChatUIEventHandler.emitUIEvent(CometChatUIEvents.ccToggleBottomSheet, {
                        isBottomSheetVisible: false,
                    });
                    this.reactToMessages(item, messageObject);
                }}/>),
        };
    }
    getCommonOptions(loggedInUser, messageObject, group) {
        let optionsList = super.getCommonOptions(loggedInUser, messageObject, group);
        optionsList.push(this.getReactions());
        return optionsList;
    }
    /**
     *
     * @param {*} message
     * @param {*} emoji
     * Calls extension reaction to Messages
     */
    reactToMessages = (emoji, messageObj) => {
        const userObject = {};
        if (this.loggedInUser?.avatar?.length) {
            userObject['avatar'] = this.loggedInUser.avatar;
        }
        if (this.loggedInUser?.name?.length) {
            userObject['name'] = this.loggedInUser.name;
        }
        let metaData = messageObj.getMetadata();
        if (!metaData) {
            metaData = {};
        }
        if (metaData && !metaData['@injected']) {
            metaData = {
                ...metaData,
                '@injected': { extensions: { reactions: {} } },
            };
        }
        if (metaData &&
            metaData['@injected'] &&
            metaData['@injected']['extensions']['reactions']) {
            let tempMetaData = {};
            let reactionData = metaData['@injected']['extensions']['reactions'];
            if (reactionData) {
                if (reactionData[emoji]) {
                    reactionData[emoji] = {
                        ...reactionData[emoji],
                        [this.loggedInUser?.uid]: userObject,
                    };
                }
                else {
                    reactionData[emoji] = { [this.loggedInUser?.uid]: userObject };
                }
            }
            tempMetaData = {
                ...metaData['@injected']['extensions']['reactions'],
                ...reactionData,
            };
            metaData['@injected']['extensions']['reactions'] = tempMetaData;
        }
        messageObj.setMetadata(metaData);
        CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageEdited, {
            message: messageObj,
            status: MessageStatusConstants.success,
        });
        CometChat.callExtension(ExtensionConstants.reactions, 'POST', ExtensionURLs.reaction, {
            msgId: messageObj.id,
            emoji: emoji,
        }).catch((error) => {
            console.log('error', error);
        });
    };
}
//# sourceMappingURL=ReactionsDecorator.js.map