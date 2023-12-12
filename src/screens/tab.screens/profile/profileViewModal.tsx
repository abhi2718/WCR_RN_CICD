import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";
import { ROUTES } from "../../../navigation";


export const useViewModal = () => {
    const { user } = useSelector(({ userState }) => userState);
    const navigation = useNavigation();
    const goToPreview = () => navigation.navigate(ROUTES.Preview);
    const goToSetting = () => navigation.navigate(ROUTES.SettingScreen);
    const goToPreferences = () => navigation.navigate(ROUTES.Preferences);
    const goToEditProfile = () => navigation.navigate(ROUTES.EditProfile);
    return {
        user,
        goToPreview,
        goToSetting,
        goToPreferences,
        goToEditProfile
    }
}