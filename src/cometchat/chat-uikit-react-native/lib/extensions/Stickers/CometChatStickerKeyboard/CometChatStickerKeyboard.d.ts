import React from "react";
import { CometChatTheme } from "../../../shared/resources/CometChatTheme";
import { CometChat } from "@cometchat/chat-sdk-react-native";
export interface CometChatStickerKeyboardInterface {
    loadingText?: string;
    theme?: CometChatTheme;
    onPress?: (item: CometChat.CustomMessage) => void;
    emptyText?: string;
    errorText?: string;
}
/**
 *
 * CometChatStickerKeyboard is a component that fetches stickers from Stickers extension
 * and displays it.
 *
 * @version 1.0.0
 * @author CometChatTeam
 * @copyright © 2022 CometChat Inc.
 *
 */
export declare const CometChatStickerKeyboard: {
    (props: CometChatStickerKeyboardInterface): React.JSX.Element;
    defaultProps: {
        emptyText: any;
        errorText: any;
        loadingText: any;
        style: {
            width: string;
            height: number;
            borderRadius: number;
        };
    };
};
