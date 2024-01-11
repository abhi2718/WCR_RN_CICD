import { useEffect, useState } from 'react';
import { LikeRepository } from '../../../../../../repository/like.repo';
import { CometChat } from '../../../../../../cometchat/sdk/CometChat';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../../../navigation';
import { AppBarDropDownProps } from '../../../../../../types/screen.type/home.type';

export const useViewModal = (props: AppBarDropDownProps) => {
  const { user } = props;
  const navigation = useNavigation();
  const memuList = [
    {
      title: 'Media',
      onSelect: () => {
        navigation.navigate(ROUTES.PrivateChatMediaScreen, { uid: user.uid });
      },
    },
    {
      title: 'Report',
      onSelect: () => {
        navigation.navigate(ROUTES.Report, {
          userId: user.uid,
          name: user.name,
        });
      },
    },
    {
      title: 'Block',
      onSelect: async () => {
        setShowModal(true);
      },
    },
  ];

  useEffect(() => {
    if (ismatched) {
      memuList.unshift({
        title: 'Unmatch',
        onSelect: () => {
          setUnmatchModal(true);
        },
      });
    }
  }, []);

  const handleUserBlock = async () => {
    try {
      const blockList = await CometChat.blockUsers([user.uid]);
    } catch (error) {}
  };
  const [showModal, setShowModal] = useState(false);
  const [showUnmatchModal, setUnmatchModal] = useState(false);
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
    showModal,
    showUnmatchModal,
    handleUserBlock,
    memuList,
    user,
    setShowModal,
    setUnmatchModal,
  };
};
