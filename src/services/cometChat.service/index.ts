import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CometChatUIKit, ReactionsExtension } from '../../cometchat/chat-uikit-react-native/src';
import { config } from '../../utils/config';

export const useCometChatInit = () => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const { user } = useSelector(({ userState }) => userState);
  const uikitSettings = {
    appId: config.APP_ID,
    authKey: config.AUTH_KEY,
    region: config.REGION,
    extensions: [new ReactionsExtension()],
  };
 
  useEffect(() => {
    const inItCometChat = async () => {
     try {
       if (CometChatUIKit) {
        await CometChatUIKit.init(uikitSettings);
        let uid = '6499476d12c6b5d6b1093b2a';
        //let uid = user?._id;
        console.log(user?._id)
        await CometChatUIKit.login({ uid: uid });
        setIsInitialized(true);
        }
      } catch (error) {
        console.log('Error while initializing the chat', error);
      }
    };
    if (user?._id) {
      inItCometChat();
    }
  }, []);

  return {
    isInitialized,
  };
};
