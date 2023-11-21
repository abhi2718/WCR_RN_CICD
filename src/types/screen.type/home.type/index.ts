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