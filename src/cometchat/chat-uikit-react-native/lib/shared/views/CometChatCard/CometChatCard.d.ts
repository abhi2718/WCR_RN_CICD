import React from 'react';
import { ImageType } from '../../base';
import { CometChatCardStyleInterface } from './CometChatCardStyle';
import { AvatarStyleInterface } from '../CometChatAvatar';
export interface CometChatCardInterface {
    id?: string;
    avatarUrl?: ImageType;
    avatarName?: string;
    title?: string;
    SubtitleView?: () => JSX.Element;
    BottomView?: () => JSX.Element;
    style?: CometChatCardStyleInterface;
    avatarStyle?: AvatarStyleInterface;
}
export declare const CometChatCard: (props: CometChatCardInterface) => React.JSX.Element;
