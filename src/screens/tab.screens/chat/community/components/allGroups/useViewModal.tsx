import {useEffect, useState} from 'react';
import {CometChat} from '@cometchat/chat-sdk-react-native';

export const useViewModal = () => {
  const [groups, setGroups] = useState<CometChat.Group[] | []>([]);
  const [loading, setLoading] = useState(false);
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
  return {
    groups,
    handleTextChange,
    loading,
    handleJoinGroup,
  };
};
