import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ROUTES } from '../../../../../navigation';
import {
    diet,
    drinking,
    ethnicity,
    exercise,
    familyPlan,
    genderArray,
    kids,
    maritalStatus,
    pets,
    politics,
    primaryDegree,
    relationship,
    religion,
    smoking,
    userDegree,
} from '../../../../../utils/constanst';
export interface handleInputChange {
    key: number;
    label: string;
    type: string;
    value: string;
}

export const useViewModal = () => {
    const { user } = useSelector(({ userState }) => userState);
    const navigation = useNavigation();
    const goBack = () => navigation.goBack();
    const [answer, setAnswer] = useState({
        degreeCategory: 'Select Degree category',
        degreeType: 'Select Degree type',
        gender: 'Select gender',
        ethnicity: 'Select ethnicity',
        maritalStatus: 'Select Marital Status',
        relationshipLevel: 'Select Relationship Level',
        religion: 'Select Religion',
        politics: 'Select Politics',
        exercise: 'Select Exercise',
        diet: 'Select Diet',
        drinking: 'Select Drinking',
        smoking: 'Select Smoking',
        kids: 'Select Kids',
        familyPlan: 'Select Family Plan',
        pets:'Select Pets'
    });
    const handleInputChange = (option: handleInputChange) => {
        setAnswer((oldState) => {
            return { ...oldState, [option.type]: option.value };
        });
    };
    const generateList = (list: any[], type: string) => {
        return list?.map((item: any, index) => ({
            value: item,
            label: item,
            key: index,
            type,
        }));
    };
    const _userDegree = userDegree.map((item, index) => ({
        ...item,
        key: index,
        type: 'degreeCategory',
    }));
    const _primaryDegree = generateList(
        Object.values(primaryDegree).flat(),
        'degreeType',
    );
    const genderList = generateList(genderArray, 'gender');
    const ethnicityList = generateList(ethnicity, 'ethnicity');
    const maritalStatusList = generateList(maritalStatus, 'maritalStatus');
    const relationshipLevelList = generateList(relationship, 'relationshipLevel');
    const religionList = generateList(religion, 'religion');
    const politicsList = generateList(politics, 'politics');
    const exerciseList = generateList(exercise, 'exercise');
    const dietList = generateList(diet, 'diet');
    const drinkingList = generateList(drinking, 'drinking');
    const smokingList = generateList(smoking, 'smoking');
    const kidsList = generateList(kids, 'kids');
    const familyPlanList = generateList(familyPlan, 'familyPlan');
    const petsList = generateList(pets, 'pets');
    const optionsList = [
        {
            title: 'Degree category',
            option: _userDegree,
            initValue: 'degreeCategory',
        },
        {
            title: 'Degree Type',
            option: _primaryDegree,
            initValue: 'degreeType',
        },
        {
            title: 'Gender',
            option: genderList,
            initValue: 'gender',
        },
        {
            title: 'Ethnicity',
            option: ethnicityList,
            initValue: 'ethnicity',
        },
        {
            title: 'Marital status',
            option: maritalStatusList,
            initValue: 'maritalStatus',
        },
        {
            title: 'Relationship level',
            option: relationshipLevelList,
            initValue: 'relationshipLevel',
        },
        {
            title: 'Religion',
            option: religionList,
            initValue: 'religion',
        },
        {
            title: 'Politics',
            option: politicsList,
            initValue: 'politics',
        },
        {
            title: 'Exercise',
            option: exerciseList,
            initValue: 'exercise',
        },
        {
            title: 'Diet',
            option: dietList,
            initValue: 'diet',
        },
        {
            title: 'Drinking',
            option: drinkingList,
            initValue: 'drinking',
        },
        {
            title: 'Smoking',
            option: smokingList,
            initValue: 'smoking',
        },
        {
            title: 'Kids',
            option: kidsList,
            initValue: 'kids',
        },
        {
            title: 'Family plan',
            option: familyPlanList,
            initValue: 'familyPlan',
        },
        {
            title: 'Pets',
            option: petsList,
            initValue: 'pets',
        },
    ];

    useEffect(() => {
        console.log(answer);
    }, [answer]);
    return {
        user,
        goBack,
        _userDegree,
        answer,
        handleInputChange,
        optionsList,
    };
};
