import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ROUTES } from "../../../navigation";
import { useLogOutViewModal } from "../../../utils/logOut";


export const useViewModal = () => {
    const {logOut} = useLogOutViewModal()
    const { user } = useSelector(({ userState }) => userState);
    const navigation = useNavigation();
    const [showLogOutModal, setLogOutModal] = useState(false);
    const goToPreview = () => navigation.navigate(ROUTES.Preview);
    const goToSetting = () => navigation.navigate(ROUTES.SettingScreen);
    const goToPreferences = () => navigation.navigate(ROUTES.Preferences);
    const goToEditProfile = () => navigation.navigate(ROUTES.EditProfile);
    return {
        user,
        goToPreview,
        goToSetting,
        goToPreferences,
        logOut,
        goToEditProfile,
        showLogOutModal, setLogOutModal
    }
}