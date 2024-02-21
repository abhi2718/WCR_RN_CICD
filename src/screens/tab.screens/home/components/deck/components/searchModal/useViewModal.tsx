import { useCallback, useRef, useState } from 'react';
import { HomeDeckRepository } from '../../../../../../../repository/homeDeck.repo';
import { SearchModalProps } from '../../../../../../../types/screen.type/home.type';

export const useViewModal = (props: SearchModalProps) => {
  const homeDeckRepository = new HomeDeckRepository();
  const { showSearchModal, toggleSearchModal } = props;
  const [users, setUser] = useState<any[]>([]);
  const [isSearchActive, setSearchActive] = useState(false);
  const textRef = useRef('');
  const [selectedProfile, setSelectedProfile] = useState<{
    userId: string | null;
    state: boolean;
  }>({
    userId: null,
    state: false,
  });
  const _setSelectedProfile = useCallback((userId: string) => {
    setSelectedProfile((oldState) => ({
      userId,
      state: !oldState.state,
    }));
    setUser([])
  }, []);
  const clearSelectedProfile = useCallback(() => {
    setSelectedProfile(() => ({
      userId:null,
      state: false,
    }));
  },[])
  const handleSearch = async (text: string) => {
    textRef.current = text.trim();
    if (text.trim().length) {
      try {
        const query = {
          searchValue: text.trim(),
        };
        const data = await homeDeckRepository.searchUser(query);
        setUser(() => {
          return textRef.current.length
            ? data.filter((user: { displayName: string; first: string }) => {
                const name = user?.displayName
                  ? user?.displayName
                  : user?.first;
                return name.toLowerCase().startsWith(text.trim().toLowerCase());
              })
            : [];
        });
        if (!data.length) {
          setSearchActive(true);
        }
      } catch (error) {}
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
  return {
    handleSearch,
    users,
    handleClose,
    showSearchModal,
    isSearchActive,
    _setSelectedProfile,
    selectedProfile,
    clearSelectedProfile,
  };
};
