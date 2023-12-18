import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, Image } from "react-native";
import { ButtonStyle } from './CometChatButtonStyle';
import { CometChatContext } from '../../CometChatContext';
import { Style } from "./style";
export const CometChatButton = (props) => {
    const { iconUrl, onPress, style, text } = props;
    const { theme } = useContext(CometChatContext);
    const { backgroundColor, border, borderRadius, height, width, iconBackgroundColor, iconBorder, iconCornerRadius, iconTint, textColor, textFont, } = new ButtonStyle({
        backgroundColor: theme.palette.getBackgroundColor(),
        ...style
    });
    return (<TouchableOpacity onPress={onPress} style={{ alignItems: "center", backgroundColor, borderRadius }}>
            <View style={[Style.container, { backgroundColor: iconBackgroundColor, borderRadius: iconCornerRadius, ...border }]}>
                <Image source={iconUrl} resizeMode="contain" style={{
            height,
            width,
            backgroundColor: iconBackgroundColor,
            borderRadius: iconCornerRadius,
            tintColor: iconTint,
            ...iconBorder,
        }}/>
            </View>
            {text && <Text style={{
                color: textColor,
                ...textFont
            }}>{text}</Text>}
        </TouchableOpacity>);
};
//# sourceMappingURL=CometChatButton.js.map