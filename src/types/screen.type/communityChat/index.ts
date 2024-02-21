import { CometChat } from '@cometchat/chat-sdk-react-native';
import { ReactNode } from 'react';

export type GroupsListProps = {
  groups: CometChat.Group[] | [] ;
  handleJoinGroup: (guid: string) => Promise<void>;
  handleLeaveGroup: (guid: string) => Promise<void>;
};
export type GroupProps = {
  group: CometChat.Group;
  handleJoinGroup: (guid: string) => Promise<void>;
  handleLeaveGroup: (guid: string) => Promise<void>;

};
export type SearchGroupProps = {
  handleTextChange: (text: string) => void;
};
export type SwitchButtonProps = {
  stage: number;
  setStage: (stage: number) => void;
};
export type ChatAvatorModalProps = {
  name: string;
  image: {
    uri: string;
  };
  senderId: string;
  children: ReactNode;
};

export type membersTypes = {
  avatar: string;
  blockedByMe: boolean;
  deactivatedAt: number;
  guid: string;
  hasBlockedMe: boolean;
  joinedAt: number;
  lastActiveAt: number;
  name: string;
  role: string;
  scope: string;
  status: string;
  uid: string;
};
export type MediaMessageProps = {
  guid?: string;
  type?: string;
  uid?: string;
  isPrivateChatScreen?: boolean;
};
export type CommunityMembersProps = {
  group?: CometChat.Group;
};
export type MemberProps = {
  member: CometChat.GroupMember;
  toggleSetShowMembers: () => void;
};

export type UserReactionProps = {
  hanldePress: () => void;
  item: any;
};
export type UserListProps = {
  user: {
    name: string;
    avatar: string;
    userId: string;
  };
};
