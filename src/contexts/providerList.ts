import { MessageContextProvider } from './cometChatMessage.context';
import { FriendContextProvider } from './friends.context';
import { LikeContextProvider } from './likes.context';
import { UserListProvider } from './userList.context';
// Add your providers in providerlist to access it anywhere in app
export const providers = [
  UserListProvider,
  MessageContextProvider,
  LikeContextProvider,
  FriendContextProvider
];
