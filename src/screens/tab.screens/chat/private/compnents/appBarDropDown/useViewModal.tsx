import React, { useEffect, useState } from 'react';
import { LikeRepository } from '../../../../../../repository/like.repo';
import { useSelector } from 'react-redux';

export const useViewModal = (props: any) => {
  const { user } = props;
  // const { user } = useSelector(({ userState }) => userState);
  const likeRepository = new LikeRepository();
  const [ismatched, setMatched] = useState(false);
  const [documentId, setDocumetId] = useState('');

  const allmatchedUsers = async (userId: any) => {
    const matchedData = await likeRepository.getAllMatched();
    const matchedUsers = matchedData.data?.map((doc: any) => {
      return {
        docId: doc._id,
        userOneID: doc.users[0]._id,
        userTwoID: doc.users[1]._id,
      };
    });

    const matchedUser = matchedUsers.filter(
      (user: any) => user.userOneID === userId || user.userTwoID === userId,
    );
    if (matchedUser?.length) {
      const matchUserId = matchedUser[0].docId;
      setMatched(true);
      setDocumetId(matchUserId);
    }
  };

  const unmatch = async () => {
    try {
      
      const unmatched = await likeRepository.removefromMatched(documentId);
    } catch (err) {
    }
  };

  useEffect(() => {
    allmatchedUsers(user.uid);
  }, []);

  return {
    ismatched,
    unmatch,
  };
};
