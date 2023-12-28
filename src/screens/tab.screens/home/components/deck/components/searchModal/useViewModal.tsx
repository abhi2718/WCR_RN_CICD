import { useState } from 'react';
import { HomeDeckRepository } from '../../../../../../../repository/homeDeck.repo';
import { SearchModalProps } from '../../../../../../../types/screen.type/home.type';

export const useViewModal = (props: SearchModalProps) => {
  const homeDeckRepository = new HomeDeckRepository();
  const { showSearchModal, toggleSearchModal, handleSetProfiles } = props;
  const [loading, setLoading] = useState(false);
  const [users, setUser] = useState<any[]>([]);

  const [isSearchActive, setSearchActive] = useState(false);

  const handleSearch = async (text: string) => {
    if (!isSearchActive) setSearchActive(true);
    try {
      if (text.length > 2) {
        const data = await homeDeckRepository.searchUser(text);
        setUser(data);
      } else {
        setUser([]);
      }
    } catch (error) {}
  };
  const handleClose = () => {
    setSearchActive(false);
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
    isSearchActive,
  };
};
