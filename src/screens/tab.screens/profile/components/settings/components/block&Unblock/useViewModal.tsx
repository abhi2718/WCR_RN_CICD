import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserProfileRepository } from '../../../../../../../repository/userProfile.repo';
import { OptionType } from '../../../../../../../types/screen.type/profile.type';
import {
  primaryDegree,
  userDegree,
} from '../../../../../../../utils/constanst';

export const useViewModal = () => {
  const { user } = useSelector(({ userState }) => userState);
  const dispatch = useDispatch();
  const userProfileRepository = new UserProfileRepository();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const [selecteduserDegree, setSelectedUserDegree] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<OptionType[]>([]);
  const [_userDegree, setUserDegree] = useState(userDegree);
  const [country, setCountry] = useState([
    { label: 'USA', value: 'USA' },
    { label: 'Canada', value: 'Canada' },
  ]);
  const [selectedUserDegreeType, setSelectedUserDegreeType] = useState(
    [...Object.values(primaryDegree)]
      .flat()
      .map((val) => ({ label: val, value: val })),
  );
  const [_selectedUserDegreeType, _setSelectedUserDegreeType] = useState<any[]>(
    [],
  );
  const fetchGetblockByScope = async () => {
    setLoading(true);
    try {
      const { data } = await userProfileRepository.getAllBlockedUser();
      const { blockedCountry, userDegree, primaryDegree } = data;
      if (blockedCountry.length) {
        let blockedCountryList = blockedCountry.map((item: string) => ({
          label: item,
          value: item,
        }));
        setSelectedCountry(blockedCountryList);
      }
      if (userDegree.length) {
        let degreeList = userDegree.map((item: string) => ({
          label: item,
          value: item,
        }));
        setSelectedUserDegree(degreeList);
      }
      if (primaryDegree.length) {
        let primaryDegreeList = primaryDegree.map((item: string) => ({
          label: item,
          value: item,
        }));
        _setSelectedUserDegreeType(primaryDegreeList);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleSelectCountry = (item: OptionType) => {
    const filterCountry = country.filter(({ label }) => label !== item.label);
    setCountry(filterCountry);
    const isCountryExist = selectedCountry.find(({ label }) => label === item.label);
    if (isCountryExist) {
      return;
    }
    setSelectedCountry((oldState) => [...oldState, item]);
  };
  const handleDeSelectCountry = (item: OptionType) => {
    const filterCountry = selectedCountry.filter(
      ({ label }) => label !== item.label,
    );
    setSelectedCountry(filterCountry);
    setCountry((oldState) => [
      ...oldState,
      { label: item.label, value: item.value },
    ]);
  };
  const handleSelectUserDegree = (item: OptionType) => {
    const filteredUserDegree = _userDegree.filter(
      ({ label }) => label !== item.label,
    );
    setUserDegree(filteredUserDegree);
    const isSelectUserDegree = selecteduserDegree.find(({ label }) => label === item.label);
    if (isSelectUserDegree) {
      return;
    }
    setSelectedUserDegree((oldState) => [
      ...oldState,
      { label: item.label, value: item.value },
    ]);
  };
  const handleDeSelectUserDegree = (item: OptionType) => {
    setUserDegree((oldState) => [
      ...oldState,
      { label: item.label, value: item.value },
    ]);
    const filteredUserDegree = selecteduserDegree.filter(
      ({ label }) => label !== item.label,
    );
    setSelectedUserDegree(filteredUserDegree);
  };

  const handleselectedUserDegreeType = (item: OptionType) => {
    const filterselectedUserDegreeType = selectedUserDegreeType.filter(
      ({ label }) => label !== item.label,
    );
    setSelectedUserDegreeType(filterselectedUserDegreeType);
    const isSelectUserDegreeType = _selectedUserDegreeType.find(({ label }) => label === item.label);
    if (isSelectUserDegreeType) {
      return;
    }
    _setSelectedUserDegreeType((oldState) => [
      ...oldState,
      { label: item.label, value: item.label },
    ]);
  };
  const handledeSelectedUserDegreeType = (item: OptionType) => {
    const filterselectedUserDegreeType = _selectedUserDegreeType.filter(
      ({ label }) => label !== item.label,
    );
    _setSelectedUserDegreeType(filterselectedUserDegreeType);
    setSelectedUserDegreeType((oldState) => [
      ...oldState,
      { label: item.label, value: item.label },
    ]);
  };
  const handleBlockByCountry = async () => {
    try {
      const payload = {
        document: {
          blockedCountry: selectedCountry.map((item) => item.label),
          primaryDegree: _selectedUserDegreeType.map((item) => item.label),
          userDegree: selecteduserDegree.map((item) => item.label),
        },
      };
      await userProfileRepository.blockByScope(payload);
    } catch (error) {}
  };
  useEffect(() => {
    fetchGetblockByScope();
  }, []);
  useEffect(() => {
    if (
      selectedCountry.length ||
      selecteduserDegree.length ||
      _selectedUserDegreeType.length
    ) {
      handleBlockByCountry();
    }
  }, [selectedCountry, selecteduserDegree, _selectedUserDegreeType]);
  return {
    user,
    goBack,
    country,
    handleSelectCountry,
    selectedCountry,
    handleDeSelectCountry,
    _userDegree,
    handleSelectUserDegree,
    selecteduserDegree,
    handleDeSelectUserDegree,
    selectedUserDegreeType,
    handleselectedUserDegreeType,
    handledeSelectedUserDegreeType,
    _selectedUserDegreeType,
    loading
  };
};
