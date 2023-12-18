/// <reference path="../../../../imageresolver.d.ts" />
/**
 *
 * CometChatMessagePreview
 *
 * @version 1.0.0
 * @author CometChatTeam
 * @copyright © 2022 CometChat Inc.
 *
 */
export function CometChatMessagePreview(props: any): React.JSX.Element;
export namespace CometChatMessagePreview {
    namespace defaultProps {
        export let messagePreviewTitle: string;
        export let messagePreviewSubtitle: string;
        export { closeIcon as closeIconURL };
        export let onCloseClick: any;
        export namespace style {
            let widht: string;
            let height: string;
            namespace border {
                let borderWidth: number;
                let borderStyle: string;
                let borderColor: string;
            }
            let backgroundColor: string;
            let borderRadius: number;
            let messagePreviewTitleFont: {};
            let messagePreviewTitleColor: string;
            let messagePreviewSubtitleColor: string;
            let messagePreviewSubtitleFont: {};
            let closeIconTint: string;
        }
    }
    namespace propTypes {
        let messagePreviewTitle_1: PropTypes.Requireable<string>;
        export { messagePreviewTitle_1 as messagePreviewTitle };
        let messagePreviewSubtitle_1: PropTypes.Requireable<string>;
        export { messagePreviewSubtitle_1 as messagePreviewSubtitle };
        export let closeIconURL: PropTypes.Requireable<any>;
        let onCloseClick_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onCloseClick_1 as onCloseClick };
        let style_1: PropTypes.Requireable<object>;
        export { style_1 as style };
    }
}
import React from "react";
import closeIcon from "./resources/close.png";
import PropTypes from "prop-types";
