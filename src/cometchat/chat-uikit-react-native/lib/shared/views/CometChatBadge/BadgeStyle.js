import { BaseStyle } from '../../base/BaseStyle';
export class BadgeStyle extends BaseStyle {
    textColor;
    textFont;
    constructor({ width = 24, height = 24, border = {
        borderWidth: 1,
        borderColor: 'transparent',
        borderStyle: 'solid',
    }, borderRadius = 12, backgroundColor = 'rgba(51, 153, 255, 1)', textColor = 'white', textFont = {
        fontFamily: undefined,
        fontWeight: '700',
        fontSize: 11,
    }, }) {
        super({
            height,
            width,
            border,
            borderRadius,
            backgroundColor,
        });
        this.textColor = textColor;
        this.textFont = textFont;
    }
}
//# sourceMappingURL=BadgeStyle.js.map