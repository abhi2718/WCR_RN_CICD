import { useState } from 'react';
import { HomeDeckRepository } from '../../../../../../../repository/homeDeck.repo';
import { SearchModalProps } from '../../../../../../../types/screen.type/home.type';

export const useViewModal = (props: SearchModalProps) => {
  const homeDeckRepository = new HomeDeckRepository();
  const { showSearchModal, toggleSearchModal, handleSetProfiles } = props;
  const [loading, setLoading] = useState(false);
  const [users, setUser] = useState<any[]>([]);
  const handleSearch = async (text: string) => {
    try {
      const data = await homeDeckRepository.searchUser(text);
      setUser(data);
    } catch (error) {}
  };
  const handleClose = () => {
    toggleSearchModal();
    setUser([]);
  };
  const fetchSelectedUser = async (userId: string) => {
    try {
      setLoading(true);
      const data = await homeDeckRepository.getUser(userId);
      handleSetProfiles(data.user);
      handleClose();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return {
    handleSearch,
    users,
    handleClose,
    showSearchModal,
    fetchSelectedUser,
    loading,
  };
};
