import { BaseStyle, BorderStyle, FontStyle } from "../shared";
import { localize } from "../shared";
import { passwordGroupIcon, privateGroupIcon } from "./resources";
/**
 * @class GroupsStyle
 * @description GroupsStyle class is used for defining the GroupsStyle template.
 */
export class GroupsStyle extends BaseStyle {
    titleFont;
    titleColor;
    backIconTint;
    createGroupIconTint;
    searchBorder;
    searchBorderRadius;
    searchBackgroundColor;
    searchTextFont;
    searchTextColor;
    searchIconTint;
    searchPlaceHolderTextColor;
    separatorColor;
    loadingIconTint;
    emptyTextColor;
    emptyTextFont;
    errorTextColor;
    errorTextFont;
    subtitleTextColor;
    subtitleTextFont;
    privateGroupIconBackground;
    passwordGroupIconBackground;
    constructor(props) {
        const { width = "100%", height = "100%", border = new BorderStyle({ borderWidth: 0 }), borderRadius = 0, backgroundColor = "white", titleFont = new FontStyle({ fontSize: 17 }), titleColor = '#141414', backIconTint = "black", searchBorder = new BorderStyle({}), searchBorderRadius = 50, searchBackgroundColor = "rgba(20, 20, 20, 0.04)", searchTextFont = new FontStyle({ fontSize: 17 }), searchTextColor = "rgba(20,20,20,0.58)", searchIconTint = "rgba(20,20,20,0.4)", searchPlaceHolderTextColor = "rgba(20,20,20,0.58)", separatorColor = "rgba(20, 20, 20, 0.1)", loadingIconTint = "rgba(20,20,20, 0.7)", emptyTextColor = localize("NO_GROUPS_FOUND"), emptyTextFont = new FontStyle({ fontSize: 20 }), errorTextColor = "rgb(255, 59, 48)", errorTextFont = new FontStyle({ fontSize: 20 }), subtitleTextColor = "rgba(20, 20, 20, 0.58)", subtitleTextFont = new FontStyle({ fontSize: 16 }), privateGroupIconBackground = privateGroupIcon, passwordGroupIconBackground = passwordGroupIcon, } = props;
        super({
            width,
            height,
            backgroundColor,
            border,
            borderRadius
        });
        this.titleFont = titleFont;
        this.titleColor = titleColor;
        this.backIconTint = backIconTint;
        this.searchBorder = searchBorder;
        this.searchBorderRadius = searchBorderRadius;
        this.searchBackgroundColor = searchBackgroundColor;
        this.searchTextFont = searchTextFont;
        this.searchTextColor = searchTextColor;
        this.searchIconTint = searchIconTint;
        this.searchPlaceHolderTextColor = searchPlaceHolderTextColor;
        this.separatorColor = separatorColor;
        this.loadingIconTint = loadingIconTint;
        this.emptyTextColor = emptyTextColor;
        this.emptyTextFont = emptyTextFont;
        this.errorTextColor = errorTextColor;
        this.errorTextFont = errorTextFont;
        this.subtitleTextColor = subtitleTextColor;
        this.subtitleTextFont = subtitleTextFont;
        this.privateGroupIconBackground = privateGroupIconBackground;
        this.passwordGroupIconBackground = passwordGroupIconBackground;
    }
}
//# sourceMappingURL=GroupsStyle.js.map