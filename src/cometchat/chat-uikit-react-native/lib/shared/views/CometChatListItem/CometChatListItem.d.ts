import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ListItemStyle } from './ListItemStyle';
import { ImageType } from '../../base';
import { AvatarStyleInterface } from '../CometChatAvatar/AvatarStyle';
import { CometChatOptions } from '../../modals';
/**
 *
 * This component used to display list Item.
 */
export interface CometChatListItemInterface {
    id: string | number;
    avatarURL?: ImageType;
    avatarName?: string;
    avatarStyle?: AvatarStyleInterface;
    statusIndicatorColor?: string;
    statusIndicatorIcon?: ImageType;
    statusIndicatorStyle?: StyleProp<ViewStyle>;
    title?: string;
    SubtitleView?: React.FC;
    options?: () => CometChatOptions[];
    TailView?: React.FC;
    hideSeparator?: boolean;
    listItemStyle?: ListItemStyle;
    onPress?: Function;
    onLongPress?: Function;
    headViewContainerStyle?: StyleProp<ViewStyle>;
    tailViewContainerStyle?: StyleProp<ViewStyle>;
    bodyViewContainerStyle?: StyleProp<ViewStyle>;
}
export declare const CometChatListItem: {
    (props: CometChatListItemInterface): React.JSX.Element;
    defaultProps: {
        listItemStyle: ListItemStyle;
        hideSeparator: boolean;
    };
};
