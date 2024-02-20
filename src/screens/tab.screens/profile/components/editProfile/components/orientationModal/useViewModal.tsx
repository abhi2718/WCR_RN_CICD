import { OrientationModalProps } from '../../../../../../../types/screen.type/profile.type';

export const useOrientationViewModal = (props:OrientationModalProps) => {
  const {
    showOrientationModal,
    setShowOrientationModal,
    optionList,
    heading,
    objectKey,
    selectedValue,
    setAnswer,
    isChecked,
    handleCheckboxChange
  } = props;
  const handleClick = (key: string, value: string) => {
    let _key = key;
    if (_key === 'showGenderPronoun') {
      _key = 'genderPronoun';
    } else if (_key === 'showSexualOrientation') {
      _key = 'sexualPreference';
    }
    setAnswer((oldState: any) => {
      return {
        ...oldState,
        [_key]: value,
      };
    });
  };
  const _handleCheckboxChange = () => {
    handleCheckboxChange();
  }
  return {
    handleClick,
    showOrientationModal,
    setShowOrientationModal,
    optionList,
    heading,
    objectKey,
    selectedValue,
    isChecked,
    _handleCheckboxChange
  };
};
