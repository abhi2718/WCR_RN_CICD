import { useEffect, useMemo, useState } from 'react';
import { CometChat } from '@cometchat/chat-sdk-react-native';
import { UpdateUserDetailsRepository } from '../../../../../../repository/pregisterFlow.repo';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../../../../store/reducers/user.reducer';
import { CometChatUIEventHandler } from '../../../../../../cometchat/src/shared/events/CometChatUIEventHandler/CometChatUIEventHandler';
import { CometChatUIEvents } from '../../../../../../cometchat/src/shared/events';
export const useViewModal = () => {
  const [groups, setGroups] = useState<CometChat.Group[] | []>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector(({ userState }) => userState);
  const updateUserDetailsRepository = useMemo(
    () => new UpdateUserDetailsRepository(),
    [],
  );
  const [isModalVisible, setisModalVisible] = useState(
    user?.communityInfoModalPoppedup ? user?.communityInfoModalPoppedup : false,
  );
  const dispatch = useDispatch();
  const closeModal = (isWantToUpdateModalStatus: boolean) => {
    if (isWantToUpdateModalStatus) {
      updateCommunityInfoModalPoppedup();
    }
    setisModalVisible(true);
  };
  const groupListRequestBuilder = async (
    searchKey = '',
    showLoader: boolean,
  ) => {
    let groupRequest = null;
    if (searchKey !== '') {
      groupRequest = new CometChat.GroupsRequestBuilder()
        .setLimit(30)
        .setSearchKeyword(searchKey)
        .build();
    } else {
      groupRequest = new CometChat.GroupsRequestBuilder().setLimit(30).build();
    }
    if (showLoader) {
      setLoading(true);
    }
    const data = await groupRequest.fetchNext();
    setLoading(false);
    setGroups(data);
  };
  const handleTextChange = (text: string) => {
    groupListRequestBuilder(text, false);
  };
  useEffect(() => {
    groupListRequestBuilder('', true);
  }, []);
  const handleJoinGroup = async (guid: string) => {
    try {
      await CometChat.joinGroup(guid);
      const updatedGroups = groups.map((group) => {
        if (group.getGuid() === guid) {
          group.setHasJoined(true);
          group.setMembersCount(group.getMembersCount() + 1);
        }
        return group;
      });
      setGroups(updatedGroups);
    } catch (error) {}
  };

  const handleLeaveGroup = async (guid: string) => {
    try {
      await CometChat.leaveGroup(guid).then((hasLeft: boolean) => {
        let actionMessage: CometChat.Action = new CometChat.Action(
          guid,
          CometChat.MESSAGE_TYPE.TEXT,
          CometChat.RECEIVER_TYPE.GROUP,
          CometChat.CATEGORY_ACTION as CometChat.MessageCategory,
        );
        const fullName = user.fullName;
        const leavingGroup = groups.filter((group) => group.getGuid() === guid);
        actionMessage.setMessage(`${fullName} has left`);
        CometChatUIEventHandler.emitGroupEvent(CometChatUIEvents.ccGroupLeft, {
          message: actionMessage, //Note: Add Action message after discussion
          // leftUser: userDetails,
          leftGroup: leavingGroup[0],
        });
      });
      const updatedGroups = groups.map((group) => {
        if (group.getGuid() === guid) {
          group.setHasJoined(false);
          group.setMembersCount(group.getMembersCount() - 1);
        }
        return group;
      });
      setGroups(updatedGroups);
    } catch (error) {}
  };

  const updateCommunityInfoModalPoppedup = async () => {
    try {
      const data = await updateUserDetailsRepository.updateUserDetails(
        user._id,
        {
          update: {
            communityInfoModalPoppedup: true,
          },
        },
      );
      const token = user.token;
      const userInfo = token
        ? {
            user: {
              ...data,
              token,
            },
          }
        : {
            user: {
              ...data,
            },
          };
      dispatch(addUser(userInfo));
    } catch (error) {}
  };
  return {
    groups,
    handleTextChange,
    loading,
    handleJoinGroup,
    handleLeaveGroup,
    groupListRequestBuilder,
    closeModal,
    isModalVisible,
  };
};
