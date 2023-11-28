import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";


export const useViewModal = () => {
    const { user } = useSelector(({ userState }) => userState);
    const navigation = useNavigation();
    const goBack = ()=> navigation.goBack();
    return {
        user,
        goBack
    }
}