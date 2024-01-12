export type User = {
  color: string;
  id: string;
  name: string;
  pantone_value: string;
  year: string;
};

export type UserListProps = {
  userList: User[];
};

export type UserItemProps = {
  user: User;
};
export type SearchModalProps = {
  showSearchModal: boolean;
  toggleSearchModal: () => void;
  handleSetProfiles: (item:any) => void;
};
export type AppBarDropDownProps = {
  user: {
    avatar: string;
    blockedByMe: boolean;
    conversationId: string;
    deactivatedAt: number;
    hasBlockedMe: boolean;
    lastActiveAt: number;
    name: string;
    role: string;
    status: string;
    uid: string;
  }
};