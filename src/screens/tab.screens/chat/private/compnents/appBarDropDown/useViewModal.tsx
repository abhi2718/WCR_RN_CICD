import { useContext, useEffect, useState } from 'react';
import { LikeRepository } from '../../../../../../repository/like.repo';
import { CometChat } from '../../../../../../cometchat/sdk/CometChat';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../../../navigation';
import { AppBarDropDownProps } from '../../../../../../types/screen.type/home.type';
import { LikeContext } from '../../../../../../contexts/likes.context';
import { useSelector } from 'react-redux';
type matchUser = {
  _id: string;
  createdAt: string;
  isChat: boolean;
  isDeleted: boolean;
  isVisible: boolean;
  updatedAt: string;
  users: Array<{
    _id: string;
    designation: any;
    isDeleted: boolean;
    isVisible: boolean;
    profile: any;
    profilePicture: any;
  }>;
  viewed: string[];
};
export const useViewModal = (props: AppBarDropDownProps) => {
  const { user } = props;
  const { user: me } = useSelector(({ userState }) => userState);
  const { fetchAll } = useContext(LikeContext);
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [showUnmatchModal, setUnmatchModal] = useState(false);
  const likeRepository = new LikeRepository();
  const [ismatched, setMatched] = useState(false);
  const [documentId, setDocumetId] = useState('');
  const [memuList, setMenuList] = useState([
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
  ]);
  const fetchCometChatBlockedUsers = async () => {
    try {
      let limit: number = 30;
      let blockedUsersRequest: CometChat.BlockedUsersRequest =
        new CometChat.BlockedUsersRequestBuilder().setLimit(limit).build();
      const blockedList = await blockedUsersRequest.fetchNext();
      const isUserBlockedByMe = blockedList.find(
        (blockedUser: CometChat.User) => blockedUser.getUid() === user.getUid(),
      );
      if (isUserBlockedByMe && isUserBlockedByMe?.getBlockedByMe()) {
        setMenuList((oldState) => {
          return oldState.map((item) => {
            if (item.title === 'Block') {
              return {
                title: 'Unblock',
                onSelect: async () => {
                  handleUserUnBlock(user.getUid());
                },
              };
            }
            return item;
          });
        });
      }
    } catch (error) {}
  };
  const handleUserBlock = async () => {
    try {
      await CometChat.blockUsers([user.getUid()]);
      setMenuList((oldState) => {
        return oldState.map((item) => {
          if (item.title === 'Block') {
            return {
              title: 'Unblock',
              onSelect: async () => {
                handleUserUnBlock(user.getUid());
              },
            };
          }
          return item;
        });
      });
    } catch (error) {}
  };
  const handleUserUnBlock = async (uid: string) => {
    try {
      await CometChat.unblockUsers([uid]);
      setMenuList((oldState) => {
        return oldState.map((item) => {
          if (item.title === 'Unblock') {
            return {
              title: 'Block',
              onSelect: async () => {
                setShowModal(true);
              },
            };
          }
          return item;
        });
      });
    } catch (error) {}
  };
  const allmatchedUsers = async (userId: string) => {
    const { data } = await likeRepository.getAllMatched();
    const matchedUsers = data?.map((doc: matchUser) => {
      return {
        docId: doc._id,
        userOneID: doc?.users[0]?._id,
        userTwoID: doc?.users[1]?._id,
      };
    });
    const matchedUser = matchedUsers.filter(
      (user: { docId: string; userOneID: string; userTwoID: string }) => {
        if (user.userOneID === userId || user.userTwoID === userId) {
          return true;
        }
      }   
    );
    if (matchedUser?.length) {
      const matchUserId = matchedUser[0].docId;
      setMenuList((oldState) => {
        return [
          ...oldState,
          {
            title: 'Unmatch',
            onSelect: () => {
              setUnmatchModal(true);
            },
          },
        ];
      });
      setMatched(true);
      setDocumetId(matchUserId);
    }
  };
  const unmatch = async () => {
    try {
      if (documentId) {
        setMenuList((oldState) => {
          return oldState.filter(
            (menu: { title: string; onSelect: () => void }) =>
              menu.title !== 'Unmatch',
          );
        });
       await likeRepository.removefromMatched(documentId);
       fetchAll(me._id);
        //navigation.navigate(ROUTES.LikeTabs)
      }
    } catch (err) {}
  };
  useEffect(() => {
    allmatchedUsers(user.getUid());
    fetchCometChatBlockedUsers();
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
