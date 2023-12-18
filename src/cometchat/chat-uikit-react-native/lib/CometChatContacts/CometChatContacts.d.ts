import React from 'react';
import { UsersConfigurationInterface } from '../CometChatUsers';
import { GroupsConfigurationInterface } from '../CometChatGroups';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { ImageType } from '../shared/helper/types';
import { ContactsStyleInterface } from './ContactsStyle';
export interface CometChatContactsInterface {
    /**
     * title for component
     */
    title?: string;
    /**
     * users tab title
     */
    userTabTitle?: string;
    /**
     * groups tab title
     */
    groupTabTitle?: string;
    /**
     * users configuration
     */
    usersConfiguration?: UsersConfigurationInterface;
    /**
     * group configuration
     */
    groupsConfiguration?: GroupsConfigurationInterface;
    /**
     * function will be called when submit icon is pressed.
     */
    onSubmitIconClick?: (props: {
        users: Array<CometChat.User>;
        groups: Array<CometChat.Group>;
    }) => void;
    /**
     * icon for back image
     */
    backIcon?: ImageType;
    /**
     * function will be called when item is pressed.
     */
    onItemPress?: (param: {
        user?: CometChat.User;
        group?: CometChat.Group;
    }) => void;
    /**
     * style for the component
     */
    contactsStyle?: ContactsStyleInterface;
    /**
     * function will be called when pressed on back icon
     */
    onClose?: () => void;
    /**
     * selection mode can be 'single' | 'multiple'
     */
    selectionMode?: 'single' | 'multiple';
    /**
     * desides which tab should be shown
     */
    tabVisibility?: 'user' | 'groups' | 'usersAndGroup';
    /**
     * image for submit
     */
    submitIcon?: ImageType;
    /**
     * maximum limit for item selection
     */
    selectionLimit?: number;
    /**
     * toggle submit
     */
    hideSubmit?: boolean;
}
export declare const CometChatContacts: (props: CometChatContactsInterface) => React.JSX.Element;
