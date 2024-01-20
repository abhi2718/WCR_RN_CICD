import React, { useContext, useEffect, useMemo, useState } from 'react';
import Share from 'react-native-share';
import { useSelector } from 'react-redux';
import { LikeContext } from '../../contexts/likes.context';
import { HomeDeckRepository } from '../../repository/homeDeck.repo';
import { UserProfileRepository } from '../../repository/userProfile.repo';
import { profileProps, UserProfile } from '../../types/components/profile.type';
export const useViewModal = (props: profileProps) => {
  const userProfileRepository = useMemo(() => new UserProfileRepository(), []);
  const homeDeckRepository = new HomeDeckRepository();
  const { fetchAll } = useContext(LikeContext);
  const [loading, setLoading] = useState(false);
  const { user: me } = useSelector(({ userState }) => userState);
  const [user, setUser] = useState<null | UserProfile>(null);
  const {
    showModal,
    toggleModal,
    userId,
    showLike,
    showDisLike,
    showSave,
    showBlock,
  } = props;
  const handleShare = () => {
    try {
      const shareOptions = {
        message: `White Coat Romance profile share
            Hey! I came across this profile on the White Coat Romance dating app and thought it would be perfect for you `,
        url: 'https://staging.whitecoatromance.com/assets/images/e-wcr.png',
      };
      Share.open(shareOptions);
    } catch (error) {}
  };
  const fetchUser = async () => {
    try {
      setLoading(true);
      const { user } = await userProfileRepository.getUser(userId);
      setUser(user);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (showModal) {
      fetchUser();
    }
  }, [showModal]);
  const createPayLoafForUserAction = (action: string) => {
    return {
      actionData: {
        userId: me._id,
        actedOn: user?._id,
        action,
        isMatched: false,
      },
    };
  };
  const handleLike = async () => {
    try {
      setLoading(true);
      const payLoad = createPayLoafForUserAction('Like');
      await homeDeckRepository.userReactin(payLoad);
      setLoading(false);
      toggleModal();
      fetchAll(me._id);
    } catch (error) {
      setLoading(false);
    }
  };
  const handleDisLike = async () => {
    try {
      setLoading(true);
      const payLoad = createPayLoafForUserAction('Dislike');
      await homeDeckRepository.userReactin(payLoad);
      setLoading(false);
      toggleModal();
      fetchAll(me._id);
    } catch (error) {
      setLoading(false);
    }
  };
  const addFavourite = async () => {
    const payLoad = {
      favouriteData: {
        userId: me._id,
        favourite: user?._id,
      },
    };
    try {
      setLoading(true);
      await homeDeckRepository.addFavourite(payLoad);
      setLoading(false);
      toggleModal();
      fetchAll(me._id);
    } catch (error) {}
  };
  const handleBlockUser = async () => {
    try {
      const payLoad = {
        document: {
          blockedIds: [user?._id.toString()],
        },
      };
      setLoading(true);
      await homeDeckRepository.blockUser(payLoad);
      setLoading(false);
      toggleModal();
    } catch (error) {}
  };
  return {
    showModal,
    toggleModal,
    loading,
    user,
    handleShare,
    handleBlockUser,
    addFavourite,
    handleLike,
    handleDisLike,
    showLike,
    showDisLike,
    showSave,
    showBlock,
  };
};
