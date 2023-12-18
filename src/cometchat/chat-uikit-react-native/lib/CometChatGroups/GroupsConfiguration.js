import { GroupsStyle } from './GroupsStyle';
import { backIcon, searchIcon, passwordGroupIcon, privateGroupIcon, } from './resources';
import { localize } from '../shared';
/**
 * @class GroupConfiguration
 * @description GroupConfiguration class is used for defining the GroupConfiguration template.
 */
export class GroupsConfiguration {
    SubtitleView;
    ListItemView;
    AppBarOption;
    options;
    hideSeparator;
    searchPlaceholderText;
    backButton;
    showBackButton;
    selectionMode;
    onSelection;
    searchBoxIcon;
    hideSearch;
    title;
    EmptyStateView;
    ErrorStateView;
    LoadingStateView;
    groupsRequestBuilder;
    searchKeyword;
    privateGroupIcon;
    passwordGroupIcon;
    hideError;
    onItemPress;
    onItemLongPress;
    onError;
    onBack;
    groupsStyle;
    listItemStyle;
    avatarStyle;
    statusIndicatorStyle;
    searchRequestBuilder;
    constructor(props) {
        this.SubtitleView = props?.SubtitleView || undefined;
        this.ListItemView = props?.ListItemView || undefined;
        this.AppBarOption = props?.AppBarOption || undefined;
        this.hideSeparator = props?.hideSeparator || false;
        this.groupsStyle = props?.groupsStyle || new GroupsStyle({});
        this.searchPlaceholderText =
            props?.searchPlaceholderText || localize('SEARCH');
        this.backButton = props?.backButton || backIcon;
        this.showBackButton = props?.showBackButton || false;
        this.selectionMode = props?.selectionMode || 'none';
        this.onSelection = props?.onSelection || undefined;
        this.searchBoxIcon = props?.searchBoxIcon || searchIcon;
        this.hideSearch = props?.hideSearch || false;
        this.title = props?.title || localize('GROUPS');
        this.EmptyStateView = props?.EmptyStateView || undefined;
        this.ErrorStateView = props?.ErrorStateView || undefined;
        this.LoadingStateView = props?.LoadingStateView || undefined;
        this.groupsRequestBuilder = props?.groupsRequestBuilder || undefined;
        this.searchKeyword = props?.searchKeyword || '';
        this.privateGroupIcon = props?.privateGroupIcon || privateGroupIcon;
        this.passwordGroupIcon = props?.passwordGroupIcon || passwordGroupIcon;
        this.hideError = props?.hideError || false;
        this.onItemPress = props?.onItemPress || undefined;
        this.onItemLongPress = props?.onItemLongPress || undefined;
        this.onError = props?.onError || undefined;
        this.onBack = props?.onBack || undefined;
        this.listItemStyle = props.listItemStyle;
        this.avatarStyle = props.avatarStyle;
        this.statusIndicatorStyle = props.statusIndicatorStyle;
        this.searchRequestBuilder = props.searchRequestBuilder;
    }
}
//# sourceMappingURL=GroupsConfiguration.js.map