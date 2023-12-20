import React from 'react';
import { CometChatTabAlignment } from '../shared/base/Types';
import { TabItem } from './TabItems';
import { CometChatTabsStyleInterface } from './CometChatTabsStyle';
export interface CometChatTabsInterface {
    tabAlignment?: CometChatTabAlignment;
    tabs: Array<TabItem>;
    keepAlive?: boolean;
    style?: CometChatTabsStyleInterface;
}
export declare const CometChatTabs: (props: CometChatTabsInterface) => React.JSX.Element;
