import {useState} from 'react';
import {OtpRepository} from '../../../../../repository/otp.repo';
import {ShowFlashMessage} from '../../../../../components/flashBar';
import {useViewModal} from '../../signinViewModal';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';

export const useEmailAuthViewModal = (props: ScreenParams) => {
  const {navigation} = props;
  const receivedData = props.route?.params?.data || 'No data received';
  let fbId = receivedData?.fbId;

  let email = receivedData.email;
  let firebaseUid = receivedData.firebaseUid;
  let credential = receivedData.credential;
  const otpInRepository = new OtpRepository();
  const [emailInput, setEmailInput] = useState('');
  const [otp, setOtp] = useState('');

  let {setLoading, checkIsNewUser,getOtpOnEmail} = useViewModal(props);

  const verifyEmail = async () => {
    try {
      setLoading(true);
      const {data} = await otpInRepository.verifytOtp({email, code: otp});
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
      const data = await getOtpOnEmail(email)
    } catch (error) {}
  };

  return {
    emailInput,
    setEmailInput,
    resendOtp,
    verifyEmail,
    otp,
    email,
    setOtp,
    credential,
    fbId,
    firebaseUid,
  };
};
