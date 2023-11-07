import {CometChat} from '@cometchat/chat-sdk-react-native';
import { useState } from 'react';
export const useViewMdal = (props) => {
    const {visible, toggleVisiblity, image, name, senderId} = props;
    let user = new CometChat.User(senderId, name);
    const [showChatWindow, setShowChatWindow] = useState(false);
    const toggleShowChatWindow = () => {
        setShowChatWindow(oldValue => !oldValue)
    }
    return {
        visible,
        toggleVisiblity,
        image,
        name,
        senderId,
        user,
        toggleShowChatWindow,
        showChatWindow,
    }
}