export type ProfileViewProps = {
  item: any;
  deleteFavourite?: (id: string) => void;
  deleteLiked?: (id: string) => void;
  showDeleteIcon?: boolean;
  isLiked?: boolean;
  isLikesReceived?: boolean;
  isMatch?: boolean;
  isFavourite?: boolean;
  handleToggleOuterModal?: (state?: boolean) => void;
  startChat?: (user: any) => void
};
export interface Conversation {
  conversationId: string;
  conversationType: string;
  unreadMessageCount: string;
  createdAt: number;
  updatedAt: number;
  lastMessage: {
    id: string;
    muid: string;
    conversationId: string;
    sender: string;
    receiverType: string;
    receiver: string;
    category: string;
    type: string;
    data: {
      text: string;
      entities: {
        sender: {
          entity: {
            uid: string;
            name: string;
            role: string;
            avatar: string;
            status: string;
            lastActiveAt: number;
          };
          entityType: string;
        };
        receiver: {
          entity: {
            uid: string;
            name: string;
            role: string;
            avatar: string;
            status: string;
            lastActiveAt: number;
            conversationId: string;
          };
          entityType: string;
        };
      };
      metadata: {
        '@injected': {
          extensions: {
            'link-preview': {
              links: any[]; // You may want to define a specific type for links
            };
          };
        };
      };
      resource: string;
    };
    sentAt: number;
    updatedAt: number;
  };
  conversationWith: {
    uid: string;
    name: string;
    avatar: string;
    status: string;
    role: string;
    lastActiveAt: number;
    createdAt: number;
    conversationId: string;
  };
}
