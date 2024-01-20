import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShowFlashMessage } from '../../../../../components/flashBar';
import { ROUTES } from '../../../../../navigation';
import { UserProfileRepository } from '../../../../../repository/userProfile.repo';
import { handleInputChangeType } from '../../../../../types/screen.type/profile.type';
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
  sexualOrientationArray,
  smoking,
  userDegree,
  covidVaccineStatus,
  preferNotToSay,
} from '../../../../../utils/constanst';

export const useViewModal = () => {
  const { user } = useSelector(({ userState }) => userState);
  const userProfileRepository = useMemo(() => new UserProfileRepository(), []);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const goBack = () => navigation.goBack();
  const isPrefrenceCreated = useRef(false);
  const [answer, setAnswer] = useState({
    degreeCategory: 'No Preference',
    degreeType: 'No Preference',
    gender: 'Everyone',
    ethnicity: 'No Preference',
    maritalStatus: 'No Preference',
    relationshipLevel: 'No Preference',
    religion: 'No Preference',
    politics: 'No Preference',
    exercise: 'No Preference',
    diet: 'No Preference',
    drinking: 'No Preference',
    smoking: 'No Preference',
    kids: 'No Preference',
    familyPlan: 'No Preference',
    pets: 'No Preference',
    sexualPreference: 'No Preference',
    covidVaccineStatus: 'No Preference',
  });
  const handleInputChange = (option: handleInputChangeType) => {
    setAnswer((oldState) => {
      return { ...oldState, [option.type]: option.value };
    });
  };
  const generateListWithNoPreference = (list: string[]) => {
    const isContainPreferNotToSay = list.find(
      (item) => item === preferNotToSay,
    );
    if (isContainPreferNotToSay) {
      return [
        ...list.filter((item) => item !== preferNotToSay),
        'No Preference',
      ];
    }
    return list
  }
  const generateList = (list: any[], type: string) => {
    return generateListWithNoPreference(list)?.map((item: any, index) => ({
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
  const [_primaryDegree, setPrimaryDegree] = useState(
    generateList([], 'degreeType'),
  );
  const genderList = generateList(genderArray, 'gender');
  
  const ethnicityList = generateList(
    ethnicity,
    'ethnicity',
  );
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
  const covidVaccineStatusList = generateList(
    covidVaccineStatus,
    'covidVaccineStatus',
  );
  const [distanceRange, setDistanceRange] = useState<any[]>(['No Max']);
  const [ageRange, setAgeRange] = useState([18, 100]);
  const [heightRange, setHeightRange] = useState([3, 7]);
  const optionsList = [
    {},
    {
      title: 'Gender of interest',
      option: genderList,
      initValue: 'gender',
    },
    {}, // distance prefrence
    {}, // age prefrence
    {}, // height prefrence
    {},
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
    {},
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
    // {
    //   title: 'Sexual Orientation',
    //   option: sexualOrientationArrayList,
    //   initValue: 'sexualPreference',
    // },
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
    {
      title: 'Covid Vaccine Status',
      option: covidVaccineStatusList,
      initValue: 'covidVaccineStatus',
    },
  ];
  const getPrefrences = async () => {
    try {
      setLoading(true);
      const { data } = await userProfileRepository.getPreference(user._id);
      if (data) {
        isPrefrenceCreated.current = true;
        setAnswer((oldState) => {
          let newState = oldState;
          for (let key in data) {
            const value = data[key];
            const typeOfValue = typeof value;
            if (typeOfValue === 'string') {
              newState = {
                ...newState,
                [key]: value,
              };
            }
            if (key === 'excercise') {
              newState = {
                ...newState,
                exercise: value,
              };
            }
            if (key === 'healthcareProfessionals') {
              if (value.primaryDegree) {
                newState = {
                  ...newState,
                  degreeType: value.primaryDegree,
                };
              }
              if (value.userDegree) {
                newState = {
                  ...newState,
                  degreeCategory: value.userDegree,
                };
              }
            }
            if (Array.isArray(value) && value.length) {
              if (key === 'relationship' && value[0]) {
                newState = {
                  ...newState,
                  relationshipLevel: value[0],
                };
              } else if (value[0]) {
                newState = {
                  ...newState,
                  [key]: value[0],
                };
              }
            }
          }
          return newState;
        });
        if (data?.distance) {
          const isNumber = Number(data?.distance);
          if (isNumber) {
            setDistanceRange([isNumber]);
          } else {
            setDistanceRange([data?.distance]);
          }
        }
        if (data?.age) {
          setAgeRange([data.age.min, data.age.max]);
        }
        if (data?.height) {
          const maxAge = Number(
            `${data?.height?.maxFeet}.${data?.height?.maxInch}`,
          );
          const minAge = Number(
            `${data?.height?.minFeet}.${data?.height?.minInch}`,
          );
          setHeightRange([minAge, maxAge]);
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const createPrefrences = async () => {
    try {
      setSubmitLoading(true);
      const preferences: any = {
        gender: answer.gender,
        //  sexualPreference: answer.sexualPreference,
        healthcareProfessionals: {
          userDegree: answer.degreeCategory,
          primaryDegree: answer.degreeType,
        },
        ethnicity: [answer.ethnicity],
        religion: answer.religion,
        politics: answer.politics,
        drinking: answer.drinking,
        smoking: answer.smoking,
        kids: answer.kids,
        familyPlan: answer.familyPlan,
        pets: answer.pets,
        diet: answer.diet,
        excercise: answer.exercise,
        relationship: [answer.relationshipLevel],
        maritalStatus: answer.maritalStatus,
        distance: distanceRange[0] > 600 ? 'No Max' : distanceRange[0],
        covidVaccineStatus: answer.covidVaccineStatus,
      };
      let updates: any = {
        height: {
          minFeet: Number(`${heightRange[0]}`.split('.')[0]),
          minInch: `${heightRange[0]}`.includes('.')
            ? Number(`${heightRange[0]}`.split('.')[1])
            : 0,
          maxFeet: Number(`${heightRange[1]}`.split('.')[0]),
          maxInch: `${heightRange[1]}`.includes('.')
            ? Number(`${heightRange[1]}`.split('.')[1])
            : 0,
        },
        age: {
          min: ageRange[0],
          max: ageRange[1],
        },
      };
      for (let key in preferences) {
        const value = preferences[key];
        const typeOfKey = typeof value;
        if (key === 'healthcareProfessionals') {
          if (
            !preferences.healthcareProfessionals.userDegree.includes('No Preference')
          ) {
            updates = {
              ...updates,
              healthcareProfessionals: {
                userDegree: preferences.healthcareProfessionals.userDegree,
              },
            };
          }
          if (
            !preferences.healthcareProfessionals.primaryDegree.includes(
              'No Preference',
            )
          ) {
            updates = {
              ...updates,
              healthcareProfessionals: {
                primaryDegree:
                  preferences.healthcareProfessionals.primaryDegree,
              },
            };
          }
          if (
            !preferences.healthcareProfessionals.userDegree.includes(
              'No Preference',
            ) &&
            !preferences.healthcareProfessionals.primaryDegree.includes(
              'No Preference',
            )
          ) {
            updates = {
              ...updates,
              healthcareProfessionals: {
                userDegree: preferences.healthcareProfessionals.userDegree,
                primaryDegree:
                  preferences.healthcareProfessionals.primaryDegree,
              },
            };
          }
        }
        if (typeOfKey === 'string' && !value?.includes('No Preference')) {
          updates = {
            ...updates,
            [key]: value,
          };
        } else if (typeOfKey === 'number') {
          updates = {
            ...updates,
            [key]: value,
          };
        } else if (Array.isArray(value) && !value.includes('No Preference')) {
          updates = {
            ...updates,
            [key]: value,
          };
        }
      }
      let payload = { update: updates };
      if (isPrefrenceCreated.current) {
        await userProfileRepository.updatePreference(payload);
      } else {
        await userProfileRepository.createPreference(payload);
        isPrefrenceCreated.current = true;
      }
      setSubmitLoading(false);
      navigation.navigate(ROUTES.DeckTab, {
        loadProfile: true,
      });
    } catch (error) {
      console.log(error);
      setSubmitLoading(false);
    }
  };
  const handleDistanceSliderChange = (values: any) => {
    if (values[0] > 510) {
      setDistanceRange(['No Max']);
      return;
    }
    setDistanceRange(values);
  };
  const handleAgeSliderChange = (values: React.SetStateAction<number[]>) => {
    setAgeRange(values);
  };
  const handleHeightSliderChange = (values: any) => {
    const roundedArray = values.map(
      (number: number) => Math.round(number * 10) / 10,
    );
    setHeightRange(roundedArray);
  };
  useEffect(() => {
    getPrefrences();
  }, []);
  useEffect(() => {
    if (!answer.degreeCategory.includes('No Preference')) {
      setPrimaryDegree(
        generateList(primaryDegree[answer.degreeCategory], 'degreeType'),
      );
    }
  }, [answer.degreeCategory]);
  return {
    goBack,
    answer,
    handleInputChange,
    optionsList,
    createPrefrences,
    loading,
    distanceRange,
    handleDistanceSliderChange,
    ageRange,
    handleAgeSliderChange,
    handleHeightSliderChange,
    heightRange,
    submitLoading,
  };
};
