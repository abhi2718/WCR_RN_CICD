import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShowFlashMessage } from '../../../../../../../components/flashBar';
import { AuthRepository } from '../../../../../../../repository/auth.repo';
import { UserProfileRepository } from '../../../../../../../repository/userProfile.repo';
import { report } from '../../../../../../../utils/constanst';
type OptionType = {
  _index: number;
  label: string;
  value: string;
};
export const useViewModal = (props:any) => {
  const { user } = useSelector(({ userState }) => userState);
  const authRepository = useMemo(() => new AuthRepository(),[]);
  const dispatch = useDispatch();
  const subjectRef = useRef('');
  const messageRef = useRef('');
  const [loading, setLoading] = useState(false);
  const userProfileRepository = new UserProfileRepository();
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
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
    console.log(userId)
    if (!messageRef?.current?.length || !subjectRef?.current?.length) {
      return ShowFlashMessage(
        'Subject and message both fields required !',
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
        'Reported succesfully !',
        '',
        'success',
      );
      navigation.goBack();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return {
    user,
    goBack,
    handleSubject,
    handleMessage,
    handleSubmit,
    loading,
    reasonOfReport
  };
};
