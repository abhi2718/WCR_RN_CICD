import React from "react";
import { CometChatCallButtons } from "./CometChatCallButtons";
export class CallingDetailsUtils {
    static getDefaultDetailsTemplates(message, loggedInUser, user, group) {
        return [
            this.getPrimaryDetailsTemplate(message, loggedInUser, user, group)
        ];
    }
    static getPrimaryDetailsTemplate(message, loggedInUser, user, group) {
        return {
            id: "callControls",
            hideItemSeparator: true,
            hideSectionSeparator: true,
            options: [
                {
                    id: "controls",
                    CustomView: () => <CometChatCallButtons group={group} user={user}/>
                }
            ]
        };
    }
    static getSecondaryDetailsTemplate(message, loggedInUser, user, group) {
        return {
            id: "callInfo",
            hideItemSeparator: true,
            hideSectionSeparator: true,
            options: []
        };
    }
}
//# sourceMappingURL=CallingDetailsUtils.js.map