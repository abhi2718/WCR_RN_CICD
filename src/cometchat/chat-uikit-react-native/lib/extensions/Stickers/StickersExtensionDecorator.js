import React, { useEffect, useRef, useState } from "react";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { CometChatMessageTemplate } from "../../shared/modals";
import { localize } from "../../shared/resources";
import { CometChatBottomSheet } from "../../shared/views";
import { ChatConfigurator, DataSourceDecorator } from "../../shared/framework";
import { MessageCategoryConstants } from "../../shared/constants/UIKitConstants";
import { ExtensionTypeConstants } from "../ExtensionConstants";
import { Image, TouchableOpacity } from "react-native";
import { CometChatStickerBubble } from "./StickersBubble";
import { StickerIcon } from "./resources";
import { CometChatStickerKeyboard } from "./CometChatStickerKeyboard";
import { CometChatUIKit } from "../../shared/CometChatUiKit/CometChatUIKit";
export class StickersExtensionDecorator extends DataSourceDecorator {
    configuration;
    constructor(props) {
        super(props.dataSource);
        this.configuration = props.configration;
    }
    isDeletedMessage(message) {
        return message.getDeletedBy() != null;
    }
    getAllMessageTemplates(theme) {
        let templates = super.getAllMessageTemplates(theme);
        templates.push(new CometChatMessageTemplate({
            type: ExtensionTypeConstants.sticker,
            category: MessageCategoryConstants.custom,
            ContentView: (message, _alignment) => {
                if (this.isDeletedMessage(message)) {
                    return ChatConfigurator.dataSource.getDeleteMessageBubble(message, theme);
                }
                else {
                    return this.getStickerBubble(message, _alignment);
                }
            },
            options: (loggedInuser, message, group) => {
                return ChatConfigurator.dataSource.getMessageOptions(loggedInuser, message, group);
            }
        }));
        return templates;
    }
    getStickerBubble(message, alignment) {
        let url = message?.['data']?.['customData']?.['stickerUrl'];
        return <CometChatStickerBubble url={url} name="" style={{
                backgroundColor: alignment == "left" ? "red" : "blue",
                ...this.configuration?.style
            }}/>;
    }
    getAuxiliaryOptions(user, group, id) {
        const [showKeyboard, setShowKeyboard] = useState(false);
        const loggedInUser = useRef(null);
        useEffect(() => {
            CometChat.getLoggedinUser().then(u => loggedInUser.current = u);
        }, []);
        const sendCustomMessage = (sticker) => {
            let receiverId = user?.getUid() || group?.getGuid();
            let receiverType = user ? CometChat.RECEIVER_TYPE.USER : group ? CometChat.RECEIVER_TYPE.GROUP : undefined;
            let customType = ExtensionTypeConstants.sticker;
            let customData = sticker;
            let parentId = id?.get('parentMessageId') || undefined;
            let customMessage = new CometChat.CustomMessage(receiverId, receiverType, customType, customData);
            customMessage.setCategory(CometChat.CATEGORY_CUSTOM);
            customMessage.setParentMessageId(parentId);
            customMessage.setMuid(new Date().getTime().toString());
            customMessage.setSender(loggedInUser.current);
            customMessage.setReceiver(user || group);
            CometChatUIKit.sendCustomMessage(customMessage, null, null);
        };
        return <TouchableOpacity onPress={() => {
                setShowKeyboard(true);
            }} style={{ justifyContent: "center" }}>
      <Image source={StickerIcon} style={{ height: 24, width: 24 }}/>
      {<CometChatBottomSheet isOpen={showKeyboard} onClose={() => setShowKeyboard(false)}>
          <CometChatStickerKeyboard onPress={(sticker) => {
                    sendCustomMessage(sticker);
                    setShowKeyboard(false);
                }}/>
        </CometChatBottomSheet>}
    </TouchableOpacity>;
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
        messagesTypes.push(ExtensionTypeConstants.sticker);
        return messagesTypes;
    }
    getId() {
        return "stickerExtention";
    }
    getLastConversationMessage(conversation) {
        const message = conversation['lastMessage'];
        if (message != null &&
            message.type == ExtensionTypeConstants.sticker &&
            message.category == MessageCategoryConstants.custom) {
            return localize("CUSTOM_MESSAGE_STICKER");
        }
        else {
            return super.getLastConversationMessage(conversation);
        }
    }
}
//# sourceMappingURL=StickersExtensionDecorator.js.map