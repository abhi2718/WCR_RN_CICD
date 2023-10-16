import {useState} from 'react';
import {OtpRepository} from '../../../../repository/otp.repo';
import {ShowFlashMessage} from '../../../../components/flashBar';
import {useViewModal} from '../../signin/signinViewModal';

export const emailAuthViewModal = (props: any) => {
  const {navigation} = props;
  const receivedData = props.route?.params?.data || 'No data received';
  let firstName = receivedData.firstName;
  let lastName = receivedData.lastName;
  let email = receivedData.email;
  let firebaseUid = receivedData.firebaseUid;
  let credential = receivedData.credential;

  const otpInRepository = new OtpRepository();

  const [emailInput, setEmailInput] = useState('');
  const [otp, setOtp] = useState('');

  

  let {setLoading, checkIsNewUser} =
    useViewModal(navigation);

  const verifyEmail = async ({email, code}: {email: string; code: string}) => {
    try {
      setLoading(true);
      const data = await otpInRepository.verifytOtp({email, code});
      if (data.data.message === 'Verified') {
        checkIsNewUser(email);
      } else {
        return ShowFlashMessage('Alert', 'OTP is incorrect', 'danger');
      }

      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
    }
  };

  const resendOtp = async (email: string) => {
    try {
      setLoading(true);
      const data = await otpInRepository.resendOtp(email);
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
  };
};
