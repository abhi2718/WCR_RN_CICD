import React from 'react';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { BaseStyle, BorderStyleInterface, FontStyleInterface } from '../shared/base';
import { ImageType } from '../shared';
import { CometChatMessageComposerActionInterface } from '../shared/helper/types';
import { MediaRecorderStyle } from '../shared/views/CometChatMediaRecorder';
export interface MessageComposerStyleInterface extends BaseStyle {
    attachIcontint?: string;
    sendIconTint?: string;
    inputBackground?: string;
    inputBorder?: BorderStyleInterface;
    dividerTint?: string;
    textFont?: FontStyleInterface;
    textColor?: string;
    placeholderTextColor?: string;
    placeholderTextFont?: FontStyleInterface;
    actionSheetSeparatorTint?: string;
    actionSheetTitleColor?: string;
    actionSheetTitleFont?: FontStyleInterface;
    actionSheetLayoutModeIconTint?: string;
    actionSheetCancelButtonIconTint?: string;
}
export interface CometChatMessageComposerInterface {
    /**
     *
     *
     * @type {(string | number)}
     * @description Message composer identifier
     */
    id?: string | number;
    /**
     *
     *
     * @type {CometChat.User}
     * @description CometChat SDK’s user object
     */
    user?: CometChat.User;
    /**
     *
     *
     * @type {CometChat.Group}
     * @description CometChat SDK’s group object
     */
    group?: CometChat.Group;
    /**
     *
     *
     * @type {boolean}
     * @description Turn off sound for outgoing messages
     */
    disableSoundForMessages?: boolean;
    /**
     *
     *
     * @type {*}
     * @description Custom audio sound to be played while sending messages
     */
    customSoundForMessage?: any;
    /**
     *
     *
     * @type {boolean}
     * @description Disable typing events
     */
    disableTypingEvents?: boolean;
    /**
     *
     *
     * @type {string}
     * @description CometChatMessageComposerInterface
     */
    text?: string;
    /**
     *
     *
     * @type {string}
     * @description Text shown in the composer when the input message is empty
     */
    placeHolderText?: string;
    /**
     *
     *
     * @type {React.FC}
     * @description Preview section at the top of the composer
     */
    HeaderView?: React.FC;
    /**
     *
     *
     * @type {React.FC}
     * @description Preview section at the bottom of the composer
     */
    FooterView?: React.FC;
    /**
     *
     *
     * @description onChange event triggered when the input changes
     */
    onChangeText?: (text: string) => void;
    /**
     *
     *
     * @type {number}
     * @description Threshold value when reached, input will not expand further, causing it to scroll
     */
    maxHeight?: number;
    /**
     *
     *
     * @type {ImageType}
     * @description Attachment Icon
     */
    attachmentIcon?: ImageType;
    /**
     *
     *
     * @type {*}
     * @description CometChatMessageComposerInterface
     */
    attachmentOptions?: ({ user, group, composerId, }: {
        user?: CometChat.User;
        group?: CometChat.Group;
        composerId: Map<any, any>;
    }) => CometChatMessageComposerActionInterface[];
    /**
     *
     *
     * @type {FunctionComponent}
     * @description function which return a JSX Element which replaces the default Secondary Button
     */
    SecondaryButtonView?: ({ user, group, composerId, }: {
        user?: CometChat.User;
        group?: CometChat.Group;
        composerId: string | number;
    }) => JSX.Element;
    /**
     *
     *
     * @type {FunctionComponent}
     * @description Function which return a JSX Element which replaces the default Auxiliary Button
     */
    AuxiliaryButtonView?: ({ user, group, composerId, }: {
        user?: CometChat.User;
        group?: CometChat.Group;
        composerId: string | number;
    }) => JSX.Element;
    /**
     *
     *
     * @type {('left' | 'right')}
     * @description Alignment for auxiliary buttons
     */
    auxiliaryButtonsAlignment?: 'left' | 'right';
    /**
     *
     *
     * @type {FunctionComponent}
     * @description Function which return a JSX Element which replaces the default Send Button
     */
    SendButtonView?: ({ user, group, composerId, }: {
        user?: CometChat.User;
        group?: CometChat.Group;
        composerId: string | number;
    }) => JSX.Element;
    /**
     *
     *
     * @type {(string | number)}
     * @description Message id required for threaded messages
     */
    parentMessageId?: string | number;
    /**
     *
     *
     * @type {boolean}
     * @description Hide the live reaction button
     */
    hideLiveReaction?: boolean;
    /**
     *
     *
     * @type {ImageType}
     * @description Live reaction Icon
     */
    liveReactionIcon?: ImageType;
    /**
     *
     *
     * @type {MessageComposerStyleInterface}
     * @description Message Composer Styles
     */
    messageComposerStyle?: MessageComposerStyleInterface;
    /**
     *
     *
     * @type {boolean}
     * @description Hide the record voice button
     */
    hideVoiceRecording?: boolean;
    /**
     *
     *
     * @type {string}
     * @description Image URL for the voice recording icon
     */
    voiceRecordingIconURL?: string;
    /**
     *
     *
     * @type {MediaRecorderStyle}
     * @description Voice Recording Styles
     */
    mediaRecorderStyle?: MediaRecorderStyle;
    /**
     *
     *
     * @type {ImageType}
     * @description Pause Icon Icon
     */
    pauseIconUrl?: ImageType;
    /**
     *
     *
     * @type {ImageType}
     * @description Play Icon Icon
     */
    playIconUrl?: ImageType;
    /**
     *
     *
     * @type {ImageType}
     * @description Record Icon Icon
     */
    recordIconUrl?: ImageType;
    /**
     *
     *
     * @type {ImageType}
     * @description Delete Icon Icon
     */
    deleteIconUrl?: ImageType;
    /**
     *
     *
     * @type {ImageType}
     * @description Stop Icon Icon
     */
    stopIconUrl?: ImageType;
    /**
     *
     *
     * @type {ImageType}
     * @description Submit Icon Icon
     */
    submitIconUrl?: ImageType;
    /**
     *
     * @type {Function}
     * @description callback(BaseMessage)→ void
     */
    onSendButtonPress?: (message: CometChat.BaseMessage) => void;
    /**
     *
     * @type {ErrorCallback}
     * @description callback(error)→ void
     */
    onError?: (error: any) => void;
}
export declare const CometChatMessageComposer: React.ForwardRefExoticComponent<CometChatMessageComposerInterface & React.RefAttributes<unknown>>;
