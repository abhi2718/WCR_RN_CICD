import { useEffect, useState } from 'react';
import {
  ScreenParams,
  verificationIdType,
} from '../../../types/services.types/firebase.service';
import {
  FlashMessageType,
  ShowFlashMessage,
} from '../../../components/flashBar';
import { ROUTES } from '../../../navigation';

export const useVerificationViewModal = (props: ScreenParams) => {
  const loggInUserId = props.route?.params?.data || 'No data received';
  const { navigation } = props;
  const [verificationOption, setVerificationOption] = useState('');

  const [optionData, setFormData] = useState<verificationIdType>({
    npiNumber: '',
    state: '',
    licenseNumber: '',
    isDoctoralCandidate: false,
    isPhd: false,
    idType: '',
    licenceWebsite: '',
    studentEmail: '',
    userWebsite: '',
  });

  const handleInputChange = (name: keyof verificationIdType, value: any) => {

    setFormData((oldState)=>{
      return { ...oldState, [name]: value }
    });
  };

  const [validationErrors, setValidationErrors] = useState<
    Partial<verificationIdType>
  >({});

  const navigateToVerificationStepTwo = () => {
    navigation.navigate(ROUTES.VerificationStepTwo, {
      data: { optionData, loggInUserId, verificationOption },
    });
  };

  const handleVerificationOption = () => {
    if (!verificationOption) {
      return ShowFlashMessage(
        'Warning',
        'select any one option for Verification',
        FlashMessageType.DANGER,
      );
    } else if (
      verificationOption === 'NPI Number' ||
      verificationOption === 'License Number'
    ) {
      handleIdType();
    }
    if (verificationOption === 'Student' || verificationOption === 'others') {
      navigateToVerificationStepTwo();
    }
  };

  const handleIdType = () => {
    const errors: Partial<verificationIdType> = {};

    if (verificationOption === 'NPI Number') {
      if (!optionData?.npiNumber) {
        errors.npiNumber = 'Please enter a valid NPI number';
      } else if (optionData?.npiNumber.length < 10) {
        errors.npiNumber =
          'Please enter a valid NPI number with at least 10 characters!';
      }
    }

    if (verificationOption === 'License Number') {
      if (!optionData?.licenseNumber) {
        errors.licenseNumber = 'Please enter a valid License number';
      } else if (optionData?.licenseNumber.length < 5) {
        errors.licenseNumber =
          'Please enter a valid License number with at least 5 characters!';
      } else if (!optionData?.state) {
        errors.state = 'Please enter state';
      }
    }

    if (Object.keys(errors).length) {
      return setValidationErrors(errors);
    } else {
      setValidationErrors({});
    }

    navigateToVerificationStepTwo();
  };

  const changeVerificationOption = (option: string) => {
    if (option === 'NPI Number') {
      handleInputChange('idType', 'npi');
      handleInputChange('isDoctoralCandidate', false);
      handleInputChange('isPhd', false);
      handleInputChange('state', '');
      handleInputChange('licenseNumber', '');
      handleInputChange('studentEmail', '');
      handleInputChange('userWebsite', '');
      handleInputChange('licenceWebsite', '');
    } else if (option === 'License Number') {
      handleInputChange('idType', 'medicalLicense');
      handleInputChange('isDoctoralCandidate', false);
      handleInputChange('isPhd', false);
      handleInputChange('licenceWebsite', 'licenceWebsite');
      handleInputChange('userWebsite', '');
      handleInputChange('state', '');
      handleInputChange('npiNumber', '');
      handleInputChange('studentEmail', '');
    } else if (option === 'Student') {
      handleInputChange('idType', '');
      handleInputChange('isDoctoralCandidate', true);
      handleInputChange('studentEmail', 'studentEmail');
      handleInputChange('userWebsite', '');
      handleInputChange('licenceWebsite', '');
      handleInputChange('state', '');
    } else if (option === 'others') {
      handleInputChange('idType', '');
      handleInputChange('isDoctoralCandidate', false);
      handleInputChange('isPhd', true);
      handleInputChange('userWebsite', 'userWebsite');
      handleInputChange('state', '');
      handleInputChange('studentEmail', '');
      handleInputChange('licenceWebsite', '');
    }
    setVerificationOption(option);
  };

  return {
    verificationOption,
    setVerificationOption,
    changeVerificationOption,
    handleVerificationOption,
    validationErrors,
    handleInputChange,
  };
};
