import { BaseStyle } from '../../base/BaseStyle';
import { FontStyle } from '../../base/FontStyle';
export class DateStyle extends BaseStyle {
    textColor;
    textFont;
    constructor({ textColor = 'black', border = { borderWidth: 0, borderColor: 'black', borderStyle: 'solid' }, backgroundColor = 'transparent', borderRadius = 0, textFont = new FontStyle({}), }) {
        super({
            border,
            borderRadius,
            backgroundColor,
        });
        this.textColor = textColor;
        this.textFont = textFont;
    }
}
//# sourceMappingURL=DateStyle.js.map