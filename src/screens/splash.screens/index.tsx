import React from "react";
import { View,Text } from 'react-native';
import { useViewModal } from "./useViewModal";

export const SplashScreen = () => {
    const {} = useViewModal();
    return (
        <View>
            <Text>Splash Screen</Text>
        </View>
    )
}