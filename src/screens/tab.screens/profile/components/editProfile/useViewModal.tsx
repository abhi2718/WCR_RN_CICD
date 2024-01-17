import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FlashMessageType,
  ShowFlashMessage,
} from '../../../../../components/flashBar';
import { CloudinaryRepository } from '../../../../../repository/cloudinary.repo';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { addUser } from '../../../../../store/reducers/user.reducer';
import { handleInputChangeType } from '../../../../../types/screen.type/profile.type';
import {
  diet,
  drinking,
  ethnicity,
  exercise,
  familyPlan,
  genderArray,
  genderPronounArray,
  kids,
  maritalStatus,
  pets,
  politics,
  primaryDegree,
  relationship,
  religion,
  sexualOrientationArray,
  smoking,
  statesOption,
  userDegree,
  covidVaccineStatus,
  hobbies,
} from '../../../../../utils/constanst';
import { ImageDataType } from '../../../../auth/preRegisterFlow/components/AddProfilePic/addProfilePic.ViewModal';

export const useViewModal = () => {
  const dispatch = useDispatch();
  const updateUserDetailsRepository = useMemo(
    () => new UpdateUserDetailsRepository(),
    [],
  );
  const cloudinaryRepository = useMemo(() => new CloudinaryRepository(), []);
  const [submitLoading, setSubmitLoading] = useState(false);
  const { user } = useSelector(({ userState }) => userState);
  const [answer, setAnswer] = useState({
    degreeCategory: 'Select',
    degreeType: 'Select',
    gender: 'Select',
    sexualPreference: user?.profile?.sexualPreference
      ? user?.profile?.sexualPreference
      : 'Select',
    ethnicity: 'Select',
    maritalStatus: 'Select',
    relationshipLevel: 'Select',
    religion: 'Select',
    politics: 'Select',
    excercise: 'Select',
    diet: 'Select',
    drinking: 'Select',
    smoking: 'Select',
    kids: 'Select',
    familyPlan: 'Select',
    pets: 'Select',
    covidVaccineStatus: 'Select',
    interests: 'Select',
    genderPronoun: user?.profile?.genderPronoun
      ? user?.profile?.genderPronoun
      : 'Select',
  });
  const handleInputChange = (option: handleInputChangeType) => {
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
  const [userProfile, setUserProfile] = useState({
    aboutMe: user?.bio ? user.bio : '',
    displayName: user?.profile?.displayName ? user?.profile?.displayName : '',
    phone: user?.profile?.phone ? user?.profile?.phone : '',
    dob: user?.profile?.dob ? user?.profile?.dob : '',
    intrestHobby: user?.interests ? user?.interests?.join(', ') : '',
    gender: user?.profile?.gender ? user?.profile?.gender : '',
    jobTitle: user?.designation?.title ? user?.designation?.title : '',
    institution: user?.institution ? user?.institution : '',
    state: user?.address?.state ? user?.address?.state : 'Select',
    city: user?.address?.city ? user?.address?.city : '',
    zipcode: user?.address?.state ? user?.address?.zipcode : '',
    showSexualOrientation: user?.profile?.showSexualPreference
      ? user?.profile?.showSexualPreference
      : false,
    showGender: user?.profile.showGender ? user?.profile.showGender : false,
  });
  const [_primaryDegree, setPrimaryDegree] = useState(
    generateList([], 'degreeType'),
  );
  const [hobbiesList, setHobbies] = useState<string[]>(
    user?.interests ? user?.interests : [],
  );
  const statesList = generateList(
    user?.address?.country === 'USA' ? statesOption.USA : statesOption.Canada,
    'state',
  );
  const ethnicityList = generateList(ethnicity, 'ethnicity');
  const hobbyList = generateList(hobbies, 'interests');
  const maritalStatusList = generateList(maritalStatus, 'maritalStatus');
  const relationshipLevelList = generateList(relationship, 'relationshipLevel');
  const religionList = generateList(religion, 'religion');
  const politicsList = generateList(politics, 'politics');
  const excerciseList = generateList(exercise, 'excercise');
  const dietList = generateList(diet, 'diet');
  const drinkingList = generateList(drinking, 'drinking');
  const smokingList = generateList(smoking, 'smoking');
  const covidList = generateList(covidVaccineStatus, 'covidVaccineStatus');
  const kidsList = generateList(kids, 'kids');
  const familyPlanList = generateList(familyPlan, 'familyPlan');
  const petsList = generateList(pets, 'pets');
  const genderPronounList = generateList(genderPronounArray, 'genderPronoun');
  const sexualOrientationArrayList = generateList(
    sexualOrientationArray,
    'sexualPreference',
  );
  const [distanceRange, setDistanceRange] = useState([0]);
  const [ageRange, setAgeRange] = useState([20, 60]);
  const [heightRange, setHeightRange] = useState([5]);
  const [ethnicityModalVisible, setEthnicityModalVisible] = useState(false);
  const [selectedEthnicityItems, setEthnicitySelectedItems] = useState<
    string[]
  >(user?.ethnicity ? user.ethnicity : []);
  const [relationshipLevelModalVisible, setRelationShipLevelModalVisible] =
    useState(false);
  const [selectedrelationshipLevelItems, setRelationshipLevelSelectedItems] =
    useState<string[]>(user?.relationship ? user?.relationship : []);
  const [openAgePickerModal, setOpenAgePickerModal] = useState(false);
  const [openHobbyModal, setOpenHobbyModal] = useState(false);
  const openModal = (type: string) => {
    if (type === 'ethnicity') {
      setEthnicityModalVisible(true);
    }
    if (type === 'relationshipLevel') {
      setRelationShipLevelModalVisible(true);
    }
    if (type === 'dob') {
      setOpenAgePickerModal(true);
    }
    if (type === 'hobby') {
      setOpenHobbyModal(true);
    }
  };
  const closeModal = (type: string) => {
    if (type === 'ethnicity') {
      setEthnicityModalVisible(false);
    }
    if (type === 'relationshipLevel') {
      setRelationShipLevelModalVisible(false);
    }
    if (type === 'dob') {
      setOpenAgePickerModal(false);
    }
    if (type === 'hobby') {
      setOpenHobbyModal(false);
    }
  };
  const handleItemSelected = (selected: string[], type: string) => {
    if (type === 'ethnicity') {
      if (selected.find((item) => item === 'Prefer not to say')) {
        return setEthnicitySelectedItems(['Prefer not to say']);
      }
      setEthnicitySelectedItems(selected);
    }
    if (type === 'relationshipLevel') {
      if (selected.find((item) => item === 'Prefer not to say')) {
        return setRelationshipLevelSelectedItems(['Prefer not to say']);
      }
      setRelationshipLevelSelectedItems(selected);
    }
    if (type === 'hobby') {
      setHobbies(selected);
    }
  };
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
    {},
    {},
    {
    },
    // {
    //   title: 'Gender',
    //   option: genderList,
    //   initValue: 'gender',
    // },
    {
      title: 'Ethnicity',
      option: ethnicityList,
      initValue: 'ethnicity',
    },
    {
      title: 'Hobby',
      option: hobbyList,
      initValue: 'interests',
    },
    {
      title: 'Marital status',
      option: maritalStatusList,
      initValue: 'maritalStatus',
    },
    {
      title: 'Gender Pronoun',
      option: genderPronounList,
      initValue: 'genderPronoun',
    },
    {
      title: 'Sexual Orientation',
      option: sexualOrientationArrayList,
      initValue: 'sexualPreference',
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
      option: excerciseList,
      initValue: 'excercise',
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
      title: 'Covid',
      option: covidList,
      initValue: 'covidVaccineStatus',
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
  const [letterCount, setLetterCount] = useState(0);

  useEffect(() => {
    const lettersOnly = userProfile.aboutMe.replace(/[^a-zA-Z]/g, '');
    const reversedCount = 125 - lettersOnly.length;
    setLetterCount(reversedCount < 0 ? 0 : reversedCount);
  }, [userProfile.aboutMe]);

  const handleDistanceSliderChange = (
    values: React.SetStateAction<number[]>,
  ) => {
    setDistanceRange(values);
  };
  const handleAgeSliderChange = (values: React.SetStateAction<number[]>) => {
    setAgeRange(values);
  };
  const handleHeightSliderChange = (values: React.SetStateAction<number[]>) => {
    setHeightRange(values);
  };
  const [allPics, setAllPics] = useState<any>({});
  const uploadImageToCloudinary = async (
    imageData: ImageDataType,
  ): Promise<string | undefined> => {
    const verificationFolder = 'verificationProof';
    try {
      const responseData = await cloudinaryRepository.signature(
        verificationFolder,
      );

      if (responseData?.data) {
        const response = await await cloudinaryRepository.uploadImage({
          folder: verificationFolder,
          imageData: imageData,
          timestamp: responseData?.data?.timestamp,
          signature: responseData?.data?.data,
        });
        if (response?.error) {
          throw response.error;
        }
        return response?.secure_url;
      } else {
        return undefined;
      }
    } catch (error) {

    } finally {

    }
  };
  const uploadImage = async () => {
    const { bottomUris, profilePicUri, sidePicUri } = allPics;
    const totalSize = sidePicUri?.length! + bottomUris?.length!;
    if (!profilePicUri) {
      ShowFlashMessage(
        'Warning',
        'Please add your profile picture!',
        FlashMessageType.DANGER,
      );
      return 0;
    }
    if (totalSize < 1) {
      ShowFlashMessage(
        'Warning',
        'Please atleast add two pictures!',
        FlashMessageType.DANGER,
      );
      return 0;
    }
    try {
      const profileCloudURL =
        user?.profilePicture?.url === profilePicUri?.path
          ? user?.profilePicture?.url
          : await uploadImageToCloudinary(profilePicUri);
      const profileImage = {
        url: profileCloudURL,
        caption: 'User Profile',
      };
      const photos: object[] = [];
      const allPhotos = [...sidePicUri!, ...bottomUris!];
      for (let i = 0; i < allPhotos.length; i++) {
        const isOldUrl = user?.photos?.find(
          ({ url }) => url === allPhotos[i]?.path,
        );
        const cloudURL = isOldUrl
          ? isOldUrl.url
          : await uploadImageToCloudinary(allPhotos[i]);
        if (!cloudURL) {
          ShowFlashMessage(
            'Warning',
            'Something went wrong, please try again',
            FlashMessageType.DANGER,
          );
          break;
        }
        photos.push({ url: cloudURL! });
      }
      return {
        profileImage,
        photos,
      };
    } catch (error) {

    }
  };
  const validateZipcode = async (zipcode: string) => {
    const USER = {
      address: {
        zipcode: zipcode,
        location: {
          type: '',
          coordinates: [],
        },
      },
    };
    return await updateUserDetailsRepository.validateZipcode({ user: USER });
  };
  const editProfile = async () => {
    try {
      if (!userProfile.city.length || !userProfile.zipcode.length) {
        ShowFlashMessage('City and zipcode both required ', '', 'success');
        return;
      }
      const phonePattern = /\(\d{3}\) \d{3}-\d{4}/;
      if (!phonePattern.test(userProfile.phone)) {
        ShowFlashMessage(
          'Please enter a valid 10-digit phone number!',
          '',
          'success',
        );
        return;
      }
      setSubmitLoading(true);
      const isValid = await validateZipcode(userProfile.zipcode);
      if (
        isValid?.user &&
        isValid?.user['address.zipcode']['message'] === 'Zip code is not valid'
      ) {
        ShowFlashMessage('Zip code is not valid!', '', 'success');
        setSubmitLoading(false);
        return;
      }
      const pics = await uploadImage();
      if (!pics) {
        return;
      }
      const preferences: any = {
        gender: answer.gender,
        sexualPreference: answer.sexualPreference,
        genderPronoun: answer.genderPronoun,
        healthcareProfessionals: {
          userDegree: answer.degreeCategory,
          primaryDegree: answer.degreeType,
        },
        ethnicity: [answer.ethnicity],
        interests: [answer.interests],
        religion: answer.religion,
        politics: answer.politics,
        drinking: answer.drinking,
        smoking: answer.smoking,
        covidVaccineStatus: answer.covidVaccineStatus,
        kids: answer.kids,
        familyPlan: answer.familyPlan,
        pets: answer.pets,
        diet: answer.diet,
        excercise: answer.excercise,
        intrest: userProfile.intrestHobby.split(','),
        relationship: [answer.relationshipLevel],
        maritalStatus: answer.maritalStatus,
        institution: userProfile.institution,
      };
      let update: any = {
        height: {
          feet: Number(`${heightRange[0]}`.split('.')[0]),
          inch: `${heightRange[0]}`.includes('.')
            ? Number(`${heightRange[0]}`.split('.')[1])
            : 0,
        },
      };
      for (let key in preferences) {
        const value = preferences[key];
        const typeOfValue = typeof value;
        if (key === 'healthcareProfessionals') {
          if (
            !preferences.healthcareProfessionals.userDegree.includes('Select')
          ) {
            update = {
              ...update,
              designation: {
                userDegree: preferences.healthcareProfessionals.userDegree,
                title: userProfile.jobTitle,
              },
            };
          }
          if (
            !preferences.healthcareProfessionals.primaryDegree.includes(
              'Select',
            )
          ) {
            update = {
              ...update,
              designation: {
                primaryDegree:
                  preferences.healthcareProfessionals.primaryDegree,
                title: userProfile.jobTitle,
              },
            };
          }
          if (
            !preferences.healthcareProfessionals.userDegree.includes(
              'Select',
            ) &&
            !preferences.healthcareProfessionals.primaryDegree.includes(
              'Select',
            )
          ) {
            update = {
              ...update,
              designation: {
                userDegree: preferences.healthcareProfessionals.userDegree,
                primaryDegree:
                  preferences.healthcareProfessionals.primaryDegree,
                title: userProfile.jobTitle,
              },
            };
          }
        }
        if (typeOfValue === 'string' && !value.includes('Select')) {
          update = {
            ...update,
            [key]: value,
          };
        }
      }
      let payload = {
        update: {
          ...update,
          ethnicity: selectedEthnicityItems,
          relationship: selectedrelationshipLevelItems,
          bio: userProfile.aboutMe,
          profile: {
            ...user.profile,
            displayName: userProfile.displayName,
            genderPronoun: answer.genderPronoun,
            sexualPreference: answer.sexualPreference,
            showSexualPreference: userProfile.showSexualOrientation,
            showGender: userProfile.showGender,
            phone: userProfile.phone,
          },
          profilePicture: pics?.profileImage
            ? pics?.profileImage
            : user?.profileImage,
          photos: pics?.photos ? pics?.photos : user?.photos,
          interests: hobbiesList,
          address: {
            ...user.address,
            city: userProfile.city,
            state: userProfile.state,
            zipcode: userProfile.zipcode,
          },
        },
      };
      const data = await updateUserDetailsRepository.updateUserDetails(
        user._id,
        payload,
      );
      const profile = {
        user: { ...data, token: user.token },
      };
      dispatch(addUser(profile));
      ShowFlashMessage(
        'Your profile has been updated succesfully!',
        '',
        'success',
      );
      setSubmitLoading(false);
    } catch (error) {
      setSubmitLoading(false);
    }
  };
  useEffect(() => {
    if (!answer.degreeCategory.includes('Select')) {
      setPrimaryDegree(
        generateList(primaryDegree[answer.degreeCategory], 'degreeType'),
      );
    }
  }, [answer.degreeCategory]);

  const getNumericString = (s: String) => {
    if (!s) {
      return '';
    }
    const numericString = s.replace(/\D/g, '');
    return numericString;
  };
  const formatMobile = (text: string): string => {
    const numericString: string = getNumericString(text);
    let result = '';
    if (numericString.length <= 3) {
      result = `${numericString}`;
    } else if (numericString.length > 3 && numericString.length <= 6) {
      result = `(${numericString.substr(0, 3)}) ${numericString.substr(3)}`;
    } else if (numericString.length > 6) {
      result = `(${numericString.substr(0, 3)}) ${numericString.substr(
        3,
        3,
      )}-${numericString.substr(6, 4)}`;
    }

    return result;
  };
  const handleDateChange = (newDate: Date) => {
    setUserProfile((oldState) => {
      const date = newDate ? moment(newDate).format('MM/DD/YYYY') : 'N/A';
      return {
        ...oldState,
        dob: date,
      };
    });
  };
  const _handleInputChange = (text: string, key: string) => {
    setUserProfile((oldState) => {
      return {
        ...oldState,
        [key]: text,
      };
    });
  };
  useEffect(() => {
    const data = user;
    if (data) {
      setAnswer((oldState) => {
        let newState = oldState;
        for (let key in data) {
          const value = data[key];
          newState = {
            ...newState,
            [key]: value,
          };
          if (key === 'designation') {
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
          if (key === 'profile') {
            if (value?.dob) {
              newState = {
                ...newState,
                gender: value.gender,
              };
            }
          }
        }
        return newState;
      });
      if (data?.age) {
        setAgeRange([data.age.min, data.age.max]);
      }
      if (data?.ethnicity) {
        setEthnicitySelectedItems(data.ethnicity);
      }
      if (data?.relationship) {
        setRelationshipLevelSelectedItems(data.relationship);
      }
      if (data?.height) {
        const { feet, inch } = data.height;
        setHeightRange([Number(`${feet}.${inch}`)]);
      }
      if (data?.interests) {
        setHobbies(data.interests);
      }
    }
  }, []);
  return {
    answer,
    optionsList,
    handleInputChange,
    editProfile,
    distanceRange,
    handleDistanceSliderChange,
    ageRange,
    handleAgeSliderChange,
    handleHeightSliderChange,
    heightRange,
    ethnicity,
    handleItemSelected,
    closeModal,
    openModal,
    ethnicityModalVisible,
    selectedEthnicityItems,
    relationshipLevelModalVisible,
    selectedrelationshipLevelItems,
    relationship,
    userProfile,
    _handleInputChange,
    user,
    formatMobile,
    openAgePickerModal,
    handleDateChange,
    setAllPics,
    openHobbyModal,
    hobbiesList,
    statesList,
    setUserProfile,
    submitLoading,
    hobbies,
    letterCount,
  };
};
