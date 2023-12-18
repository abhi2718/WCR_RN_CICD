import { CometChat } from "@cometchat/chat-sdk-react-native";
export class CometChatMessageTemplate {
    category;
    type;
    ContentView;
    BubbleView;
    HeaderView;
    FooterView;
    options;
    constructor({ category = "MESSAGE", type = CometChat.MESSAGE_TYPE.TEXT, ContentView, BubbleView, HeaderView, FooterView, options, }) {
        this.category = category;
        this.type = type;
        this.ContentView = ContentView;
        this.BubbleView = BubbleView;
        this.HeaderView = HeaderView;
        this.FooterView = FooterView;
        this.options = options;
    }
}
//# sourceMappingURL=CometChatMessageTemplate.js.map