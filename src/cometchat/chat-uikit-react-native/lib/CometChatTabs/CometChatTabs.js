import React, { useState, useEffect } from 'react';
import { FlatList, Image, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import { CometChatContext } from '../shared';
import { TabItemStyle } from "./TabItemStyle";
const { width: screenWidth } = Dimensions.get("window");
export const CometChatTabs = (props) => {
    const { style, keepAlive = false, tabAlignment = "bottom", } = props;
    const { activeTabBackgroundColor, activeTabBorder, activeTabTitleTextColor, backgroundColor, borderRadius, tabTitleTextColor, tabTitleTextFont, } = style;
    const { theme } = React.useContext(CometChatContext);
    const [views, setViews] = useState([]);
    const [tabs, setTabs] = useState(props.tabs);
    const loadActiveTab = () => {
        props.tabs.forEach((tabItem) => {
            tabItem.isActive ? setViews([{ view: tabItem.childView, id: tabItem.id, isActive: true }]) : null;
        });
    };
    useEffect(() => {
        setTabs(props.tabs);
        loadActiveTab();
    }, [props.tabs]);
    useEffect(() => {
        loadActiveTab();
    }, []);
    const getStyleFor = (tab) => {
        const { activeBackgroundColor, activeIconTint, activeTitleTextColor, activeTitleTextFont, iconTint, titleTextColor, titleTextFont, backgroundColor, border, borderRadius, height = 36, width } = new TabItemStyle({
            height: 36,
            titleTextColor: tabTitleTextColor || theme?.palette.getAccent(),
            titleTextFont: tabTitleTextFont || theme?.typography.body,
            activeIconTint: theme?.palette.getPrimary(),
            activeTitleTextColor: activeTabTitleTextColor || theme?.palette.getPrimary(),
            activeBackgroundColor: activeTabBackgroundColor || theme?.palette.getSecondary(),
            iconTint: theme?.palette.getAccent600(),
            activeTitleTextFont: theme?.typography.body,
            borderRadius: style.borderRadius,
            ...tab.style
        });
        return {
            height,
            width: tabs.length <= 4 ? screenWidth / tabs.length : width,
            border: tab.isActive ? activeTabBorder : undefined,
            borderRadius: borderRadius,
            backgroundColor: tab.isActive ? activeBackgroundColor : backgroundColor,
            tintColor: tab.isActive ? activeIconTint : iconTint,
            color: tab.isActive ? activeTitleTextColor : titleTextColor,
            titleFont: tab.isActive ? activeTitleTextFont : titleTextFont,
            ...border
        };
    };
    const tabItemPressed = (item) => {
        let newTabState = tabs.map((tabItem) => {
            return {
                ...tabItem,
                isActive: tabItem.id == item.id ? true : false
            };
        });
        if (keepAlive) {
            let alreadyLoaded = views.findIndex((view) => view.id == item.id);
            let newViews = [];
            if (alreadyLoaded >= 0) {
                newViews = views.map((vw, index) => {
                    vw.isActive = index == alreadyLoaded;
                    return vw;
                });
            }
            else {
                newViews = views.map(vw => {
                    vw.isActive = false;
                    return vw;
                });
                newViews.push({
                    view: item.childView,
                    id: item.id,
                    isActive: true
                });
            }
            setViews(newViews);
        }
        else {
            setViews([{
                    id: item.id,
                    isActive: true,
                    view: item.childView
                }]);
        }
        setTabs(newTabState);
    };
    const TabItemView = ({ index, item }) => {
        let style = getStyleFor(item);
        return (<TouchableOpacity style={[style, { justifyContent: "center", alignItems: "center" }]} onPress={() => tabItemPressed(item)}>
                {item.icon && <Image source={item.icon} style={{ tintColor: style.tintColor }}/>}
                {item.title && <Text style={{ color: style.color, ...style.titleFont }}>{item.title}</Text>}
            </TouchableOpacity>);
    };
    const TabsList = () => {
        return <FlatList style={{ backgroundColor: backgroundColor, borderRadius: borderRadius }} data={tabs} horizontal={true} keyExtractor={(tabItem) => tabItem.id.toString()} renderItem={(tabItem) => TabItemView(tabItem)}/>;
    };
    return (<View style={{ flex: 1 }}>
            <View style={{ display: tabAlignment == 'bottom' ? "none" : "flex" }}>
                {tabAlignment == "top" && <TabsList />}
            </View>
            <View style={{ flex: 1 }}>
                {views.map(vw => {
            return vw.isActive ? <View key={vw.id} style={{ flex: 1 }}>
                            {vw.view()}
                        </View> : null;
        })}
            </View>
            <View style={{ display: tabAlignment == 'bottom' ? "none" : "flex" }}>
                {tabAlignment == "bottom" && <TabsList />}
            </View>
        </View>);
};
//# sourceMappingURL=CometChatTabs.js.map