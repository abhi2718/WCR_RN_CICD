import React, { useContext } from "react";
import { Image } from "react-native";
import { StickerStyle } from "./StickerStyle";
import { CometChatContext } from "../../shared/CometChatContext";
export const CometChatStickerBubble = (props) => {
    const { url, style } = props;
    const { theme } = useContext(CometChatContext);
    const { backgroundColor, border, borderRadius, height, width } = new StickerStyle({
        height: 200,
        width: 200,
        backgroundColor: theme.palette.getBackgroundColor(),
        ...style
    });
    return (<Image resizeMode={"cover"} source={{ uri: url }} style={{
            height, width,
            borderRadius,
            borderWidth: border.borderWidth,
            borderColor: border.borderColor
        }}/>);
};
//# sourceMappingURL=StickersBubble.js.map