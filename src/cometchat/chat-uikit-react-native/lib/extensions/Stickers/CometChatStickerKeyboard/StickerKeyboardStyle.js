import { BaseStyle, BorderStyle, FontStyle } from "../../../shared/base";
export class StickerKeyboardStyle extends BaseStyle {
    categoryBackground;
    emptyTextFont;
    emptyTextColor;
    errorTextFont;
    errorTextColor;
    loadingTextFont;
    loadingTextColor;
    constructor({ categoryBackground = "", emptyTextFont = new FontStyle({}), emptyTextColor = "", errorTextFont = new FontStyle({}), errorTextColor = "", loadingTextFont = new FontStyle({}), loadingTextColor = "", width = "100%", height = "auto", backgroundColor = "", border = new BorderStyle({}), borderRadius = 8, }) {
        super({
            width,
            height,
            backgroundColor,
            border,
            borderRadius,
        });
        this.categoryBackground = categoryBackground;
        this.emptyTextFont = new FontStyle(emptyTextFont ?? {});
        this.emptyTextColor = emptyTextColor;
        this.errorTextFont = new FontStyle(errorTextFont ?? {});
        this.errorTextColor = errorTextColor;
        this.loadingTextFont = new FontStyle(loadingTextFont ?? {});
        this.loadingTextColor = loadingTextColor;
    }
}
//# sourceMappingURL=StickerKeyboardStyle.js.map