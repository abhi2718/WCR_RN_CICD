import { MessageContextProvider } from './cometChatMessage.context';
import {UserListProvider} from './userList.context';
// Add your providers in providerlist to access it anywhere in app
export const providers = [UserListProvider,MessageContextProvider];
