import { useCallback, useEffect, useRef, useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';
import {
  FlashMessageType,
  ShowFlashMessage,
} from '../../../../../components/flashBar';
import { UpdateUserDetailsRepository } from '../../../../../repository/pregisterFlow.repo';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES } from '../../../../../navigation';
import { addUser } from '../../../../../store/reducers/user.reducer';
import { hobbies as hobbyList } from '../../../../../utils/constanst';
import { Keyboard } from 'react-native';
export const useHobbyViewModal = (props: ScreenParams) => {
  const updateUserDetailsRepository = new UpdateUserDetailsRepository();
  const { navigation } = props;
  const { user } = useSelector(({ userState }) => userState);
  const dispatch = useDispatch();
  const token = useRef(user?.token ? user?.token : null).current;
  let hobbies = user?.interests;
  const [customCreatedHobby, setCustomCreatedHobby] = useState<string[]>([]);
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const handleHobbies = (option: string) => {
    if (selectedHobbies.includes(option)) {
      setSelectedHobbies(selectedHobbies.filter((item) => item !== option));
    } else if (selectedHobbies.length < 10 - customCreatedHobby.length) {
      setSelectedHobbies([...selectedHobbies, option]);
    } else {
      ShowFlashMessage(
        'Exceeded Selection Limit',
        'You can select a maximum of 10 hobbies.',
        FlashMessageType.DANGER,
      );
    }
  };
  const filterUserCreatedHobbies = useCallback(() => {
    const preDefineSelectedHobbies: string[] = [];
    const userCreatedHobbies = hobbies.filter((hobby: string) => {
      const isPreDefined = hobbyList.find(
        (element: string) => element == hobby,
      );
      if (isPreDefined) {
        preDefineSelectedHobbies.push(hobby);
        return false;
      }
      return true;
    });
    setSelectedHobbies(preDefineSelectedHobbies);
    setCustomCreatedHobby(userCreatedHobbies);
  }, []);
  useEffect(() => {
    filterUserCreatedHobbies();
  }, []);
  const navigateToVerificationScreen = () => {
    navigation.navigate(ROUTES.VerificationStepOne);
  };
  const navigateToEditInfo = useCallback(() => {
    navigation.navigate(ROUTES.EditProfile);
  }, []);
  function arrayContainsAllElements(arr1: string[], arr2: string[]) {
    return arr2.every((element) => arr1.includes(element));
  }
  const handleNavigation = useCallback(() => {
    if (props?.route?.params?.isCommingFromEditScreen) {
      navigateToEditInfo();
    } else {
      navigateToVerificationScreen();
    }
  }, []);
  const updateUserDetails = async () => {
    try {
      const interests = [...selectedHobbies, ...customCreatedHobby];
      const selectedInterests = {
        interests,
        steps: 14,
      };
      if (
        arrayContainsAllElements(user?.interests, interests)
      ) {
        handleNavigation();
        return;
      }
      setLoading(true);
      const userData = await updateUserDetailsRepository.updateUserDetails(
        user._id,
        {
          update: selectedInterests,
        },
      );
      const data = token
        ? {
            user: {
              ...userData,
              token,
            },
          }
        : {
            user: userData,
          };
      dispatch(addUser(data));
      setLoading(false);
      handleNavigation();
    } catch (err: any) {
      setLoading(false);
    }
  };
  const [customHobby, setCustomHobby] = useState('');
  const handleCustomHobbyChange = useCallback((hobby: string) => {
    setCustomHobby(hobby);
  }, []);
  const addCustomHobby = useCallback(() => {
    if (!customHobby.length) {
      return;
    }
    if (
      customCreatedHobby.includes(customHobby) ||
      selectedHobbies.includes(customHobby)
    ) {
      ShowFlashMessage(
        'Alert!',
        `${customHobby} already exists in your list`,
        FlashMessageType.DANGER,
      );
      return;
    }
    if (customCreatedHobby.length < 10 - selectedHobbies.length) {
      setCustomCreatedHobby((oldState) => {
        const update = [...oldState, customHobby];
        setCustomHobby('');
        return update;
      });
    } else {
      ShowFlashMessage(
        'Exceeded Selection Limit',
        'You can select a maximum of 10 hobbies.',
        FlashMessageType.DANGER,
      );
    }
  }, [selectedHobbies, customCreatedHobby, customHobby]);
  const removeCustomHobby = useCallback((hobby: string) => {
    setCustomCreatedHobby((oldState) =>
      oldState.filter((oldHobby) => oldHobby !== hobby),
    );
  }, []);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setIsKeyboardOpen(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setIsKeyboardOpen(false)
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return {
    selectedHobbies,
    handleHobbies,
    updateUserDetails,
    loading,
    navigateToVerificationScreen,
    handleCustomHobbyChange,
    addCustomHobby,
    customCreatedHobby,
    removeCustomHobby,
    customHobby,
    isKeyboardOpen
  };
};
