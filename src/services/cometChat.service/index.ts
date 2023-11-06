import { CometChatUIKit, UIKitSettings,ReactionsExtension } from '@cometchat/chat-uikit-react-native';
import {useEffect, useState} from 'react';
// import {
//   CometChatUIKit,
//   UIKitSettings,
//   ReactionExtension
// } from '../../cometChat/src';
import {config} from '../../utils/config';

export const useCometChatInit = () => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const uikitSettings: UIKitSettings = {
    appId: config.APP_ID,
    authKey: config.AUTH_KEY,
    region: config.REGION,
   extensions:[new ReactionsExtension()]

  };
  useEffect(() => {
    const inItCometChat = async () => {
      try {
        await CometChatUIKit.init(uikitSettings);
        let uid = '6499476d12c6b5d6b1093b2a';
        await CometChatUIKit.login({uid: uid});
        setIsInitialized(true);
      } catch (error) {
      }
    };
    inItCometChat();
  }, []);

  return {
    isInitialized,
  };
};
