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
import { useSelector } from 'react-redux';
import { useNavigateToScreen } from '../../../utils/common.functions';

export const useVerificationViewModal = (props: ScreenParams) => {
  const { navigation } = props;

  const { user } = useSelector((state: any) => state.userState);
  const [verificationOption, setVerificationOption] = useState('');
  const country = user.address.country;
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
    healthCareProfessionalEmail: '',
    teritory: '',
    degreeIdentifier: '',
    degreeIdentifierType: '',
  });
  useEffect(() => {
    setVerificationOptionState();
  }, []);
  const {resetState} = useNavigateToScreen();
  const navigateToVerificationState = () => {
    resetState(ROUTES.VerificationPending);
  };

  useEffect(() => {
    if (user.verificationId.submitted) {
      navigateToVerificationState();
    }
  }, []);

  const handleInputChange = (name: keyof verificationIdType, value: any) => {
    setFormData((oldState) => {
      return { ...oldState, [name]: value };
    });
  };

  const [validationErrors, setValidationErrors] = useState<
    Partial<verificationIdType>
  >({});

  const navigateToVerificationStepTwo = () => {
    navigation.navigate(ROUTES.VerificationStepTwo, {
      data: { optionData, verificationOption },
    });
  };

  const setVerificationOptionState = () => {
    if (user.verificationId.idType === 'npi') {
      setVerificationOption('NPI Number');
      handleInputChange('npiNumber', user.verificationId.idNumber);
    } else if (user.verificationId.idType === 'medicalLicense') {
      setVerificationOption('License Number');
      handleInputChange('state', user.verificationId.state);
      handleInputChange('licenseNumber', user.verificationId.idNumber);
    } else if (user.verificationId.isPhd) {
      setVerificationOption('Others');
    } else if (user.verificationId.isDoctoralCandidate) {
      setVerificationOption('Student');
    } else if (user.verificationId.territory) {
      setVerificationOption('HealthCare');
      handleInputChange('teritory', user.verificationId.territory);
      handleInputChange(
        'degreeIdentifierType',
        user.verificationId.degreeIdentifierType,
      );
      handleInputChange(
        'degreeIdentifier',
        user.verificationId.degreeIdentifier,
      );
    }
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
      verificationOption === 'License Number' ||
      verificationOption === 'HealthCare'
    ) {
      handleIdType();
    }
    if (verificationOption === 'Student' || verificationOption === 'Others') {
      navigateToVerificationStepTwo();
    }
  };

  useEffect(() => {
    if(!user.verificationId.submitted){
      openModal();
    }
    
  },[])

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

    if (verificationOption === 'HealthCare') {
      if (!optionData?.degreeIdentifier) {
        errors.degreeIdentifier = 'Please enter a valid degreeIdentifier';
      }

      if (!optionData?.teritory) {
        errors.teritory = 'Please enter a valid state/teritory!';
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

  const [isVerificationInfoModalVisible, setVerificvationInfoModalVisible] =
    useState(false);

  const closeModal = () => {
    setVerificvationInfoModalVisible(false);
  };
  const openModal = () => {
    setVerificvationInfoModalVisible(true);
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
      handleInputChange('licenseNumber', '');
      handleInputChange('npiNumber', '');
    } else if (option === 'Others') {
      handleInputChange('idType', '');
      handleInputChange('isDoctoralCandidate', false);
      handleInputChange('isPhd', true);
      handleInputChange('userWebsite', 'userWebsite');
      handleInputChange('state', '');
      handleInputChange('studentEmail', '');
      handleInputChange('licenceWebsite', '');
      handleInputChange('licenseNumber', '');
      handleInputChange('npiNumber', '');
    } else if (option === 'HealthCare') {
      handleInputChange('idType', '');
      handleInputChange('isDoctoralCandidate', false);
      handleInputChange('isPhd', false);
      handleInputChange(
        'healthCareProfessionalEmail',
        'healthCareProfessionalEmail',
      );
      handleInputChange('state', '');
      handleInputChange('licenseNumber', '');
      handleInputChange('npiNumber', '');
      handleInputChange('studentEmail', '');
      handleInputChange('licenceWebsite', '');
      handleInputChange('userWebsite', '');
      handleInputChange('degreeIdentifierType', 'CPSO');
      handleInputChange('degreeIdentifier', '');
      handleInputChange('teritory', '');
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
    country,
    optionData,
    isVerificationInfoModalVisible,
    closeModal,
  };
};
