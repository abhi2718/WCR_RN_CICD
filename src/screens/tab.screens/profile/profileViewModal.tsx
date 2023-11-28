import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";
import { ROUTES } from "../../../navigation";


export const useViewModal = () => {
    const { user } = useSelector(({ userState }) => userState);
    const navigation = useNavigation();
    const goToPreview = ()=> navigation.navigate(ROUTES.Preview)
    return {
        user,
        goToPreview
    }
}