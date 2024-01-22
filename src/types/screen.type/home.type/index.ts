import { CometChat } from "../../../cometchat/sdk/CometChat";

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
  user: CometChat.User;
};
export type MatchScreenPropsType = {
  isMatch: any,
  startChat: () => void,
  handleHideOfIsMatchScreen: () => void
}