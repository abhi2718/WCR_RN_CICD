import { useState } from 'react';
import { OtpRepository } from '../../../../../repository/otp.repo';
import { ShowFlashMessage } from '../../../../../components/flashBar';
import { useViewModal } from '../../signinViewModal';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';

export const useEmailAuthViewModal = (props: ScreenParams) => {
  const receivedData = props.route?.params?.data || 'No data received';
  let fbId = receivedData?.fbId;
  let email = receivedData.email;
  let firebaseUid = receivedData.firebaseUid;
  let credential = receivedData.credential;
  const otpInRepository = new OtpRepository();
  const [emailInput, setEmailInput] = useState('');
  const [otpValue, setOtpValue] = useState('');

  let { setLoading, loading, checkIsNewUser, getOtpOnEmail } =
    useViewModal(props);

  const handleInputChange = (text: string) => {
    setOtpValue(text);
  };

  const resetOtp = () => {
    setOtpValue('');
  };

  const verifyEmail = async () => {
    try {
      if (!otpValue.length) {
        return ShowFlashMessage('Alert', 'Please enter OTP', 'danger');
      }
      setLoading(true);
      const { data } = await otpInRepository.verifytOtp({
        email,
        code: otpValue,
      });
      setLoading(false);
      if (data?.success) {
        checkIsNewUser(email);
      } else {
        return ShowFlashMessage('Alert', 'OTP is incorrect', 'danger');
      }
      return data;
    } catch (error) {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    try {
      setLoading(true);
      resetOtp();
      const data = await getOtpOnEmail(email);
      ShowFlashMessage('', 'OTP sent to your email', 'info');
    } catch (error) {}
  };

  return {
    emailInput,
    setEmailInput,
    resendOtp,
    verifyEmail,
    otpValue,
    email,
    setOtpValue,
    credential,
    loading,
    fbId,
    resetOtp,
    firebaseUid,
    handleInputChange,
  };
};
