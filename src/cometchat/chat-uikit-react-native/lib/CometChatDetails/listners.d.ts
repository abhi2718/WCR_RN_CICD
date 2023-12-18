export declare const listners: {
    addListener: {
        userListener: ({ userStatusListenerId, handleUserStatus }: {
            userStatusListenerId: any;
            handleUserStatus: any;
        }) => void;
        groupListener: ({ groupListenerId, handleGroupListener }: {
            groupListenerId: any;
            handleGroupListener: any;
        }) => void;
    };
    removeListner: {
        removeUserListener: ({ userStatusListenerId }: {
            userStatusListenerId: any;
        }) => void;
        removeGroupListener: ({ groupListenerId }: {
            groupListenerId: any;
        }) => void;
    };
};
