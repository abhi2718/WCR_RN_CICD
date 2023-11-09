import {useState, useEffect} from 'react';
import {CometChat} from '@cometchat/chat-sdk-react-native';
import {CommunityMembersProps} from '../../../../../../types/screen.type/communityChat';
export const useViewMdal = (props: CommunityMembersProps) => {
  const {group} = props;
  const [members, setMember] = useState<CometChat.GroupMember[] | []>([]);
  const [showMembers, setShowMembers] = useState(false);
  const fetchMembers = async () => {
    if (!group) {
      return;
    }
    let groupMembersRequestBuilder = new CometChat.GroupMembersRequestBuilder(
      group.getGuid(),
    );
    const members = await groupMembersRequestBuilder
      .setLimit(30)
      .build()
      .fetchNext();
    setMember(members);
  };
  const toggleSetShowMembers = () => setShowMembers((oldValue) => !oldValue);
  useEffect(() => {
    fetchMembers();
  }, []);
  return {
    members,
    showMembers,
    toggleSetShowMembers,
  };
};
