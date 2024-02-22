import { useNavigation } from '@react-navigation/native';
import { useMemo, useRef, useState } from 'react';
import { ShowFlashMessage } from '../../../../../../../components/flashBar';
import { AuthRepository } from '../../../../../../../repository/auth.repo';
import { OptionType } from '../../../../../../../types/screen.type/profile.type';
import { ScreenParams } from '../../../../../../../types/services.types/firebase.service';
import { report } from '../../../../../../../utils/constanst';

export const useViewModal = (props:ScreenParams) => {
  const authRepository = useMemo(() => new AuthRepository(),[]);
  const subjectRef = useRef('');
  const messageRef = useRef('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const reasonOfReport = report.map((item)=>({label: item, value: item }))
  const handleSubject = (option: OptionType) => {
    subjectRef.current = option.value;
  };
  const handleMessage = (text: string) => {
    messageRef.current = text;
  };
  const clearAllField = () => {
    subjectRef.current = '';
    messageRef.current = '';
  }
  const handleSubmit = async () => {
    const { userId, name } = props?.route?.params;
    if (!subjectRef?.current?.length) {
      return ShowFlashMessage(
        'Reason is required!',
        '',
        'danger',
      );
    }
    const payload = {
      document: {
        reportedUserName: name,
        reportedUser: userId,
        reason: subjectRef?.current,
        message: messageRef?.current
      }
    };
    try {
      setLoading(true);
      const data = await authRepository.reportUser(payload)
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
    reasonOfReport
  };
};
