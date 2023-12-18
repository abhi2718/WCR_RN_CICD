import { BaseStyle } from "../shared";
export class ConversationsStyle extends BaseStyle {
    titleFont;
    titleColor;
    backIconTint;
    onlineStatusColor;
    separatorColor;
    loadingIconTint;
    emptyTextColor;
    emptyTextFont;
    errorTextColor;
    errorTextFont;
    lastMessageTextColor;
    lastMessageTextFont;
    typingIndictorTextColor;
    typingIndictorTextFont;
    threadIndicatorTextFont;
    threadIndicatorTextColor;
    constructor(props) {
        const { width, height, backgroundColor, border, borderRadius, titleFont, titleColor, backIconTint, onlineStatusColor, separatorColor, loadingIconTint, emptyTextColor, emptyTextFont, errorTextColor, errorTextFont, lastMessageTextColor, lastMessageTextFont, typingIndictorTextColor, typingIndictorTextFont, threadIndicatorTextFont, threadIndicatorTextColor, } = props;
        super({
            width,
            height,
            backgroundColor,
            border,
            borderRadius,
        });
        this.titleFont = titleFont;
        this.titleColor = titleColor;
        this.backIconTint = backIconTint;
        this.onlineStatusColor = onlineStatusColor;
        this.separatorColor = separatorColor;
        this.loadingIconTint = loadingIconTint;
        this.emptyTextColor = emptyTextColor;
        this.emptyTextFont = emptyTextFont;
        this.errorTextColor = errorTextColor;
        this.errorTextFont = errorTextFont;
        this.lastMessageTextColor = lastMessageTextColor;
        this.lastMessageTextFont = lastMessageTextFont;
        this.typingIndictorTextColor = typingIndictorTextColor;
        this.typingIndictorTextFont = typingIndictorTextFont;
        this.threadIndicatorTextFont = threadIndicatorTextFont;
        this.threadIndicatorTextColor = threadIndicatorTextColor;
    }
}
//# sourceMappingURL=ConversationsStyle.js.map