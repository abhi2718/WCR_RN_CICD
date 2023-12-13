import { ReactNode } from "react"
import { Conversation } from "../../screen.type/like.type";

export type FriendContextProviderProps = {
  children:ReactNode
}
export type FriendContextType = {
  friends: Conversation[];
  fetchPrivateFriends: () => Promise<void>;
  loading: boolean;
  numberOfFriends: number;
  numberOfGroups:number
};