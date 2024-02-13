import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { CometChat } from '../../../../../../../cometchat/sdk/CometChat';
import { BlockRepository } from '../../../../../../../repository/block.repo';
import { UserProfileRepository } from '../../../../../../../repository/userProfile.repo';
import {
  BlockedProfile,
  OptionType,
} from '../../../../../../../types/screen.type/profile.type';
import {
  primaryDegree,
  userDegree,
} from '../../../../../../../utils/constanst';

export const useViewModal = () => {
  const { user } = useSelector(({ userState }) => userState);
  const userProfileRepository = new UserProfileRepository();
  const bockRepository = useMemo(() => new BlockRepository(), []);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const [selecteduserDegree, setSelectedUserDegree] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<OptionType[]>([]);
  const [_userDegree, setUserDegree] = useState(userDegree);
  const [inAppBlockedUsers, setInAppBlockedUsers] = useState<
    BlockedProfile[] | []
  >([]);
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
  const [cometChatBlockedUsers, setCometChatBlockedUsers] = useState<
    CometChat.User[] | []
  >([]);
  const fetchblockByScope = async () => {
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
    } catch (error) {
      setLoading(false);
    }
  };
  const handleSelectCountry = (item: OptionType) => {
    const filterCountry = country.filter(({ label }) => label !== item.label);
    setCountry(filterCountry);
    const isCountryExist = selectedCountry.find(
      ({ label }) => label === item.label,
    );
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
    const isSelectUserDegree = selecteduserDegree.find(
      ({ label }) => label === item.label,
    );
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
    const isSelectUserDegreeType = _selectedUserDegreeType.find(
      ({ label }) => label === item.label,
    );
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
  const fetchAllBlockedUsers = useCallback(async () => {
    try {
      const { data } = await bockRepository.getAllBlockUser();
      setInAppBlockedUsers(data.blockedIds);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);
  const fetchCometChatBlockedUsers = async () => {
    try {
      let limit: number = 30;
      let blockedUsersRequest: CometChat.BlockedUsersRequest =
        new CometChat.BlockedUsersRequestBuilder().setLimit(limit).build();
      const blockedList = await blockedUsersRequest.fetchNext();
      setCometChatBlockedUsers(blockedList);
    } catch (error) {
      setLoading(false);
    }
  };
  const handleCometChatUserUnBlock = async (uid: string) => {
    try {
      await CometChat.unblockUsers([uid]);
      fetchCometChatBlockedUsers();
    } catch (error) {}
  };
  useEffect(() => {
    fetchCometChatBlockedUsers();
    fetchblockByScope();
    fetchAllBlockedUsers();
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
  const unBlockInAppBlockUser = useCallback(async(id:string) => {
    try {
      const payload = {unblockedId:id}
      const data = await bockRepository.unBlockUser(payload);
      setInAppBlockedUsers(blockedUsers => {
        return blockedUsers.filter(({_id})=> _id !== id)
      })
    } catch (error) {
      
    }
   },[]);
  const voidFunc = () => {};
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
    loading,
    cometChatBlockedUsers,
    handleCometChatUserUnBlock,
    voidFunc,
    inAppBlockedUsers,
    unBlockInAppBlockUser
  };
};
