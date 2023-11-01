import {CometChat} from '@cometchat/chat-sdk-react-native';
import { ReactNode } from 'react';

export type GroupsListProps = {
  groups: [] | CometChat.Group[];
  handleJoinGroup: (guid: string) => Promise<void>;
};
export type GroupProps = {
  group: CometChat.Group;
  handleJoinGroup: (guid: string) => Promise<void>;
};
export type SearchGroupProps = {
    handleTextChange:(text: string) => void
}
export type SwitchButtonProps = {
  stage: number;
  setStage: (stage: number) => void;
};
export type ChatAvatorModalProps = {
  name: string;
  image: {
    uri: string
  };
  senderId: string;
  children: ReactNode;
};