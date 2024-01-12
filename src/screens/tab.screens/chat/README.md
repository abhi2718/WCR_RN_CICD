Finding Message FaltList -> CometChatMessages-> CometChatMessageList -> FlatList
Finding RenderMessageItem -> CometChatMessages-> CometChatMessageList -> RenderMessageItem

Finding MessageView --->CometChatMessages-> CometChatMessageList -> RenderMessageItem ---> MessageView

CometChatMessageReactions ---> cometChat/extensions/Reactions/CometChatMessageReactions

See Group Details
comentChat/src/CometChatDetails

Finding All CometChatGroups --> CometChatList
All view component like bubble,avator,are inside /cometChat/src/shared/views

ComentChatGroupMember ---> comentChat/src/ComentChatGroupMember/ComentChatGroupMember

ComentChatGroupMember And Finding ItemView of Flatlist --->comentChat/src/ComentChatGroupMember/ComentChatGroupMember/ItemView

Finding community details screen with view Memebres , Media -->comentChat/src/CometChatDetails

// Friend List Item --> CometChatConversationsWithMessages -->CometChatConversations ---> CometChatListItem

CometChatMessageInput ---> CometChatMessageInput

want to see block group or user or group info
//--------------------
Go to CometChatDetails ----> find Leave Group

Finding mention list
go to the ---> CometChatMessageComposer ->renderMentionList

## How to change comet chat Bubble color

- Go to this path and override color like this
- `src\cometchat\src\shared\views\CometChatTextBubble\CometChatTextBubble.tsx`
- Consider this, this is for changing bubble text color
  ```jsx
  if (textColor === 'rgba(248, 248, 248, 0.92)') {
    textColor = '#49454f';
  } else if (textColor === 'rgb(20, 20, 20)') {
    textColor = '#1b1a57';
  }
  ```
- Let change bubble background color
- search this `getStyle` on same page and override background color

```jsx
const getStyle = useCallback(
  (item: CometChat.BaseMessage): BaseStyleInterface => {
    let _style = new BaseStyle({
      ..._messageBubbleStyle,
      backgroundColor: '#F7F7F7', //change this color
    });
    if (
      // code
    )
    _style.backgroundColor = '#f9ebeb'; //change this color
    return _style;
  },
  [],
);
```

## How to change comet chat Reply text color

- Go to this path and find this function `getThreadView()`
- `src\cometchat\src\CometChatMessageList\CometChatMessageList.tsx`

```jsx
const getThreadView = useCallback((item: CometChat.BaseMessage) => {
  let style = {
    color: '#E10810', // change this color
  };
  if (
   // code
  ) {
    style.color = '#1766D0'; // change this color
  }
});
```

- lets change arrow color

```
<TouchableOpacity>
  <Text style={style}>{`View ${item.getReplyCount()} replies`}</Text>
  <Image
    style={{
      resizeMode: 'contain',
      tintColor:  (item.getSender()?.getUid() || item?.['sender']?.['uid']) ==
              loggedInUser.current['uid']
                ? '#E10810'
                : '#1766D0', // change color
    }}
    source={rightArrowIcon}
  />
</TouchableOpacity>
```
