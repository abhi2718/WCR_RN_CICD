import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ShowFlashMessage } from '../../../../../../../components/flashBar';
import { AuthRepository } from '../../../../../../../repository/auth.repo';
import { OptionType } from '../../../../../../../types/screen.type/profile.type';
import { ScreenParams } from '../../../../../../../types/services.types/firebase.service';
import { report } from '../../../../../../../utils/constanst';

export const useViewModal = (props:ScreenParams) => {
  const authRepository = useMemo(() => new AuthRepository(),[]);
  const subjectRef = useRef(report[0]);
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const reasonOfReport = report.map((item)=>({label: item, value: item }))
  const handleSubject = (option: OptionType) => {
    subjectRef.current = option.value;
  };
  const handleMessage = (text: string) => {
    setMessage(text);
  };
  const clearAllField = () => {
    subjectRef.current = '';
  }
  // useEffect(() => {
  //   return () => {
  //     console.log('clearAllField');
  //     setMessage('');
  //   }
  // },[])
  const handleSubmit = async () => {
    const { userId, name } = props?.route?.params;
    if (!subjectRef?.current?.length) {
      return ShowFlashMessage(
        'Reason is required!',
        '',
        'danger',
      );
    }
    if (userId === "cometChatUser") {
      ShowFlashMessage(
        'Reported succesfully!',
        '',
        'success',
      );
      navigation.goBack();
      return;
    }
    const payload = {
      document: {
        reportedUserName: name,
        reportedUser: userId,
        reason: subjectRef?.current,
        message: message
      }
    };;
    try {
      setLoading(true);
      await authRepository.reportUser(payload)
      setLoading(false);
      clearAllField();
      ShowFlashMessage(
        'Reported succesfully!',
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
    reasonOfReport,
    message,
    subjectRef
  };
};
