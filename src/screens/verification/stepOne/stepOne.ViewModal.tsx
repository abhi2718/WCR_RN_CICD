import { useEffect, useState } from 'react';
import { verificationIdType } from '../../../types/services.types/firebase.service';
import {
  FlashMessageType,
  ShowFlashMessage,
} from '../../../components/flashBar';
import { ROUTES } from '../../../navigation';
import { useSelector } from 'react-redux';
import {
  isValidURL,
  useNavigateToScreen,
  validateEmail,
} from '../../../utils/common.functions';
import { useVerificationViewModalStepTwo } from '../stepTwo/stepTwo.ViewModal';
import { AvatarProps } from '../../../types/screen.type/preRegister.type';
import { degreeIdentifierType } from '../../../utils/constanst';

export const useVerificationViewModal = (props: AvatarProps) => {
  const { navigation } = props;
  const { user } = useSelector((state: any) => state.userState);
  const [verificationOption, setVerificationOption] = useState('');
  const [error, setError] = useState<boolean>(false);
  const [openVerificationWebsiteModal, setVerificationWebsiteModal] =
    useState(false);
  const [isValidStudentEmail, setIsValidStudentEmail] =
    useState<boolean>(false);
  const [isValidWebsiteUrl, setIsValidWebsiteUrl] = useState<boolean>(false);
  const [isValidWebsiteUrlHealthCare, setIsValidWebsiteUrlHealthCare] =
    useState<boolean>(false);
  const [isValidWebsiteUrlPhduser, setIsValidWebsiteUrlPhdUser] =
    useState<boolean>(false);
  const [PhdOptionModal, setVisiblePhdOptionModal] = useState(false);
  const closePhdOptionModal = () => setVisiblePhdOptionModal(false);
  const openPhdOptionModal = () => setVisiblePhdOptionModal(true);
  const {
    uploadPhdOptionPhotos,
    PhdOptionImage,
    website,
    sumbitVerificationForm,
    loading,
    toggleModal,
    visibleModal,
    handleWebsite,
  } = useVerificationViewModalStepTwo(props);
  const country = user.address.country;
  const degreeIdentifierTypeList = degreeIdentifierType.map((val) => ({
    label: val,
    value: val,
  }));
  const [optionData, setFormData] = useState<verificationIdType>({
    npiNumber: '',
    state: '',
    licenseNumber: '',
    isDoctoralCandidate:
      user?.verificationId?.isDoctoralCandidate == true ? true : false,
    isPhd: user?.verificationId?.isPhd == true ? true : false,

    idType: user?.verificationId?.idType ?? '',
    licenceWebsite: user?.verificationId?.licenceWebsite ?? '',
    studentEmail: user?.verificationId?.studentEmail ?? '',
    userWebsite: user?.verificationId?.userWebsite ?? '',
    healthCareProfessionalEmail:
      user?.verificationId?.healthCareProfessionalEmail ?? '',
    teritory: '',
    degreeIdentifier: '',
    degreeIdentifierType: '',
  });
  useEffect(() => {
    setVerificationOptionState();
  }, []);
  const { resetState } = useNavigateToScreen();
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
  const [verificationWebsiteValid, setVerificationWebsiteValid] =
    useState(false);

  const navigateOptions = () => {
    if (
      !optionData.healthCareProfessionalEmail ||
      !optionData.studentEmail ||
      !optionData.licenceWebsite
    ){
      setError((oldState:boolean)=>{
        return true
      })
    }
    if (
      verificationOption === 'Student' ||
      verificationOption === 'License Number'
    ) {
      if (!isValidStudentEmail && !isValidWebsiteUrl) {
        return;
      } else {
        setIsValidStudentEmail(false);
        setIsValidWebsiteUrl(false);
        navigateToVerificationStepTwo();
      }
    } else if (verificationOption === 'Others') {
      if (!PhdOptionImage?.path && !optionData.userWebsite) {
        setVerificationWebsiteValid(true);
      } else if (
        PhdOptionImage?.path ||
        (optionData?.userWebsite && isValidWebsiteUrlPhduser)
      ) {
        setVerificationWebsiteValid(false);
        navigateToVerificationStepTwo();
      } else if (!isValidWebsiteUrlPhduser) {
        setVerificationWebsiteValid(false);
        return;
      } else {
        navigateToVerificationStepTwo();
      }
    } else if (verificationOption === 'NPI Number') {
      navigateToVerificationStepTwo();
    } else if (verificationOption === 'HealthCare') {
      if (!isValidWebsiteUrlHealthCare) {
        return;
      } else {
        navigateToVerificationStepTwo();
      }
    } else {
      navigateToVerificationStepTwo();
    }
  };

  const navigateToVerificationStepTwo = () => {
    
      setVerificationWebsiteModal(false);
    setVisiblePhdOptionModal(false);
    navigation.navigate(ROUTES.VerificationStepTwo, {
      data: { optionData, verificationOption, PhdImage: PhdOptionImage },
    });
  };

  const validateUserEmail = (email: string) => {
    const isValid = validateEmail(email);
    handleInputChange('studentEmail', email);
    setIsValidStudentEmail(isValid);
  };
  const validateUserWebsiteUrl = (email: string) => {
    const isValid = isValidURL(email);
    handleInputChange('licenceWebsite', email);
    setIsValidWebsiteUrl(isValid);
  };
  const validateUserWebsiteUrlPhdUser = (websiteUrl: string) => {
    const isValid = isValidURL(websiteUrl);
    handleInputChange('userWebsite', websiteUrl);
    setIsValidWebsiteUrlPhdUser(isValid);
  };
  const validateUserWebsiteUrlHealthCare = (websiteUrl: string) => {
    const isValid = isValidURL(websiteUrl);
    handleInputChange('healthCareProfessionalEmail', websiteUrl);
    setIsValidWebsiteUrlHealthCare(isValid);
  };

  const showVerificationWebsiteModal = () => {
    if (verificationOption === 'NPI Number') {
      navigateToVerificationStepTwo();
    } else if (verificationOption === 'Others') {
      openPhdOptionModal();
    } else {
      setVerificationWebsiteModal(true);
    }
  };
  const closeVerificationWebsiteModal = () => {
    setVerificationWebsiteModal(false);
  };

  const setVerificationOptionState = () => {
    if (user.verificationId.idType === 'npi') {
      setVerificationOption('NPI Number');
      handleInputChange('npiNumber', user.verificationId.idNumber);
    } else if (user.verificationId.idType === 'medicalLicense') {
      setVerificationOption('License Number');
      handleInputChange('state', user.verificationId.state);
      handleInputChange('licenseNumber', user.verificationId.idNumber);
      validateUserWebsiteUrl(user.verificationId.licenceWebsite);
    } else if (user.verificationId.isPhd) {
      setVerificationOption('Others');
      validateUserWebsiteUrlPhdUser(user.verificationId.userWebsite);
    } else if (user.verificationId.isDoctoralCandidate) {
      setVerificationOption('Student');
      validateUserEmail(user.verificationId.studentEmail);
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
      validateUserWebsiteUrlHealthCare(
        user.verificationId.user.verificationId.degreeIdentifier,
      );
    }
  };

  const handleVerificationOption = () => {
    setError(false)
    setVerificationWebsiteValid(false)
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
      showVerificationWebsiteModal();
    }
  };


  useEffect(() => {
    if (!user.verificationId.submitted) {
      openModal();
    }
  }, []);

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

    showVerificationWebsiteModal();
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
      handleInputChange('licenceWebsite', '');
      handleInputChange('userWebsite', '');
      handleInputChange('state', '');
      handleInputChange('npiNumber', '');
      handleInputChange('studentEmail', '');
    } else if (option === 'Student') {
      handleInputChange('idType', '');
      handleInputChange('isDoctoralCandidate', true);
      handleInputChange('studentEmail', '');
      handleInputChange('userWebsite', '');
      handleInputChange('licenceWebsite', '');
      handleInputChange('state', '');
      handleInputChange('licenseNumber', '');
      handleInputChange('npiNumber', '');
    } else if (option === 'Others') {
      handleInputChange('idType', '');
      handleInputChange('isDoctoralCandidate', false);
      handleInputChange('isPhd', true);
      handleInputChange('userWebsite', '');
      handleInputChange('state', '');
      handleInputChange('studentEmail', '');
      handleInputChange('licenceWebsite', '');
      handleInputChange('licenseNumber', '');
      handleInputChange('npiNumber', '');
    } else if (option === 'HealthCare') {
      handleInputChange('idType', '');
      handleInputChange('isDoctoralCandidate', false);
      handleInputChange('isPhd', false);
      handleInputChange('healthCareProfessionalEmail', '');
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
    PhdOptionModal,
    optionData,
    isVerificationInfoModalVisible,
    closeModal,
    openVerificationWebsiteModal,
    closeVerificationWebsiteModal,
    showVerificationWebsiteModal,
    navigateToVerificationStepTwo,
    closePhdOptionModal,
    verificationWebsiteValid,
    uploadPhdOptionPhotos,
    website,
    sumbitVerificationForm,
    loading,
    handleWebsite,
    validateUserEmail,
    isValidStudentEmail,
    validateUserWebsiteUrl,
    isValidWebsiteUrl,
    PhdOptionImage,
    toggleModal,
    visibleModal,
    isValidWebsiteUrlPhduser,
    validateUserWebsiteUrlPhdUser,
    navigateOptions,
    validateUserWebsiteUrlHealthCare,
    isValidWebsiteUrlHealthCare,
    degreeIdentifierTypeList,
    error,
    setError
  };
};
