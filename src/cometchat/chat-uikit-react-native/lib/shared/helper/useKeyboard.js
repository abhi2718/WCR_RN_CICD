import { useEffect, useState } from 'react';
import { Keyboard, LayoutAnimation, Platform, } from 'react-native';
export const useKeyboard = () => {
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    useEffect(() => {
        function onKeyboardDidShow(e) {
            if (Platform.OS === 'ios')
                LayoutAnimation.linear();
            setKeyboardHeight(e.endCoordinates.height);
        }
        function onKeyboardDidHide() {
            if (Platform.OS === 'ios')
                LayoutAnimation.linear();
            setKeyboardHeight(0);
        }
        const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
        const hideSubscription = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
    return keyboardHeight;
};
//# sourceMappingURL=useKeyboard.js.map