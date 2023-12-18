import React from 'react';
import { CometChatOptions } from '../../modals';
export interface CometChatSwipeRowInterface {
    id?: string | number;
    options?: () => CometChatOptions[];
    listItemStyle?: any;
}
export declare const CometChatSwipeRow: React.FC<CometChatSwipeRowInterface>;
