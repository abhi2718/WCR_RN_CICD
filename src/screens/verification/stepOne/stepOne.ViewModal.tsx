import React, { useState } from 'react';
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
  const { navigation } = props;
  const [verificationOption, setVerificationOption] = useState('');

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
    if (verificationOption === 'Student' || verificationOption === 'Other') {
      navigateToVerificationStepTwo();
    }
  };

  const [formData, setFormData] = useState<verificationIdType>({
    npiNumber: '',
    state: '',
    license: '',
  });

  const [validationErrors, setValidationErrors] = useState<
    Partial<verificationIdType>
  >({});

  const navigateToVerificationStepTwo = () => {
    navigation.navigate(ROUTES.VerificationStepTwo, {
      data: verificationOption,
    });
  };

  const handleIdType = () => {
    const errors: Partial<verificationIdType> = {};

    if (verificationOption === 'NPI Number') {
      if (!formData?.npiNumber) {
        errors.npiNumber = 'Please enter a valid NPI number';
      } else if (formData?.npiNumber.length < 10) {
        errors.npiNumber =
          'Please enter a valid NPI number with at least 10 characters!';
      }
    }

    if (verificationOption === 'License Number') {
      if (!formData?.license) {
        errors.license = 'Please enter a valid License number';
      } else if (formData?.license.length < 5) {
        errors.license =
          'Please enter a valid License number with at least 5 characters!';
      } else if (!formData?.state) {
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

  const handleInputChange = (name: keyof verificationIdType, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return {
    verificationOption,
    setVerificationOption,
    handleVerificationOption,
    validationErrors,
    handleInputChange,
  };
};
