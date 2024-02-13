import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ShowFlashMessage } from '../../../../../../../components/flashBar';
import { UserProfileRepository } from '../../../../../../../repository/userProfile.repo';

export const useViewModal = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const userProfileRepository = new UserProfileRepository();
  const navigation = useNavigation();
  const handleSubject = (text: string) => setSubject(text);
  const handleMessage = (text: string) => setMessage(text);

  const handleSubmit = async () => {
    if (!message.length || !subject.length) {
      return ShowFlashMessage(
        'Subject and message both fields required!',
        '',
        'danger',
      );
    }
    const payload = {
      update: {
        subject,
        message,
      },
    };
    try {
      setLoading(true);
      await userProfileRepository.contactUs(payload);
      setMessage('');
      setSubject('');
      setLoading(false);
      ShowFlashMessage(
        'Your message has been sent succesfully!',
        '',
        'success',
      );
      navigation.goBack();
    } catch (error) {
      setLoading(false);
    }
  };
  return {
    handleSubject,
    handleMessage,
    handleSubmit,
    loading,
    subject,
    message,
  };
};
