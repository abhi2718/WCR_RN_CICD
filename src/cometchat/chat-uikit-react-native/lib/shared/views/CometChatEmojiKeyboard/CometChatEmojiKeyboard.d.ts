import React from 'react';
import PropTypes from 'prop-types';
/**
 *
 * CometChatEmojiKeyboard is a component that fetch emoji from emjis file and displays emoji
 * in the CometChatListItem component.
 *
 *
 * @version 1.0.0
 * @author CometChatTeam
 * @copyright © 2022 CometChat Inc.
 *
 */
declare const CometChatEmojiKeyboard: {
    (props: any): React.JSX.Element;
    defaultProps: {
        hideSearch: boolean;
        onClick: () => void;
        style: {
            width: string;
            height: number;
            border: {};
            backgroundColor: string;
            borderRadius: number;
            sectionHeaderFont: string;
            sectionHeaderColor: string;
            categoryIconTint: string;
            selectedCategoryIconTint: string;
            categoryBackground: string;
        };
    };
    propTypes: {
        hideSearch: PropTypes.Requireable<boolean>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        style: PropTypes.Requireable<object>;
    };
};
export { CometChatEmojiKeyboard };
