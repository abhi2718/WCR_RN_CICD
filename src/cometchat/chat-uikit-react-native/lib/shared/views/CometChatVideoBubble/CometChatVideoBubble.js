import React, { useContext, useEffect, useState } from "react";
import { View, Image, ImageBackground, NativeModules, Platform, NativeEventEmitter } from "react-native";
import { CometChatContext } from "../../CometChatContext";
import { VideoBubbleStyle } from "./VideoBubbleStyle";
import { defaultPlayIcon } from "./resources";
import { Style } from "./style";
const { VideoManager, FileManager } = NativeModules;
const eventEmitter = new NativeEventEmitter(FileManager);
let statusListener;
export const CometChatVideoBubble = (props) => {
    const { videoUrl, thumbnailUrl, placeholderImage, style, playIcon, onPress, } = props;
    const { theme } = useContext(CometChatContext);
    const [isOpening, setOpening] = useState(false);
    const _style = new VideoBubbleStyle({
        backgroundColor: theme?.palette.getBackgroundColor(),
        playIconTint: theme?.palette.getSecondary(),
        ...style
    });
    const { height, width, backgroundColor, border, borderRadius, playIconTint, playIconBackgroundColor } = _style;
    const getFileName = (url) => {
        return (url.substring(url.lastIndexOf("/") + 1, url.length)).replace(" ", "_");
    };
    const playVideo = () => {
        if (isOpening) {
            return;
        }
        if (onPress) {
            onPress(videoUrl);
            return;
        }
        Platform.OS == 'ios' ?
            FileManager.openFile(videoUrl, getFileName(videoUrl), (s) => { }) :
            VideoManager.openVideo(videoUrl, (s) => { });
    };
    useEffect(() => {
        statusListener = eventEmitter.addListener("status", (data) => {
            if (data['url'] == videoUrl && data['state'] == "downloading") {
                setOpening(true);
            }
            if (data['url'] == videoUrl && data['state'] == "opening") {
                setOpening(false);
            }
        });
        return () => {
            statusListener.remove();
        };
    }, []);
    return (<ImageBackground source={thumbnailUrl || placeholderImage} resizeMode={"contain"} style={{ backgroundColor, ...border, borderRadius, height, width }}>
            <View onTouchEnd={playVideo} style={[Style.playIconPosition, { backgroundColor: playIconBackgroundColor, borderRadius }]}>
                <Image source={playIcon || defaultPlayIcon} style={{ tintColor: playIconTint }}/>
            </View>
        </ImageBackground>);
};
//# sourceMappingURL=CometChatVideoBubble.js.map