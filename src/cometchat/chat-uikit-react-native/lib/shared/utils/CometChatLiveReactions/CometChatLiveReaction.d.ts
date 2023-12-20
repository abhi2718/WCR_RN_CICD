import React from "react";
import { LiveReactionStylesInterface } from "./LiveReactionstyles";
import { ImageType } from "../../base";
export interface LiveReactionsInterface {
    reaction?: ImageType;
    style?: LiveReactionStylesInterface;
}
/**
 *
 * CometChatLiveReaction component allows user to show animated images as a reaction in real-time.
 * @version 1.0.0
 * @author CometChatTeam
 *
 */
export declare const CometChatLiveReactions: (props: LiveReactionsInterface) => React.JSX.Element;
