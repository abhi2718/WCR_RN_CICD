import { useRef, useState } from 'react';
import { HomeDeckRepository } from '../../../../../../../repository/homeDeck.repo';
import { SearchModalProps } from '../../../../../../../types/screen.type/home.type';

export const useViewModal = (props: SearchModalProps) => {
  const homeDeckRepository = new HomeDeckRepository();
  const { showSearchModal, toggleSearchModal, handleSetProfiles } = props;
  const [loading, setLoading] = useState(false);
  const [users, setUser] = useState<any[]>([]);
  const [isSearchActive, setSearchActive] = useState(false);
  const textRef = useRef('');
  const handleSearch = async (text: string) => {
    textRef.current = text;
      if (text.length) {
        try {
          const query = {
            searchValue: text,
          };
          const data = await homeDeckRepository.searchUser(query);
          setUser(() => {
            return textRef.current.length
              ? data.filter((user) => user.first.includes(text))
              : [];
          });
          if (!data.length) {
            setSearchActive(true);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setSearchActive(false);
        setUser([]);
      }
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
