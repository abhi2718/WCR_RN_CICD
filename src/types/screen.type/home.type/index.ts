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
