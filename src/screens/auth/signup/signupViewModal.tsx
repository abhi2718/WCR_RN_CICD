import {useNavigation} from '@react-navigation/native';

export const useViewModal = () => {
  const navigation = useNavigation();
  const signUpWithEmailPassword = () => {};

  const handleSignUpPress = () => {
    // Navigate to the signup page here
    navigation.navigate('SignIn');
  };

  return {
    handleSignUpPress,
    signUpWithEmailPassword,
  };
};
