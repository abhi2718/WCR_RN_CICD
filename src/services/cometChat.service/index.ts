import { isAndroid } from './../../components/tools/index';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CometChatUIKit, ReactionsExtension } from '../../cometChat/chat-uikit-react-native/src';
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
        // let uid = '6499476d12c6b5d6b1093b2a';
         const androidUser = isAndroid? '6569aa0292b03bce6ced8fd7':'6499476d12c6b5d6b1093b2a'
        await CometChatUIKit.login({ uid: androidUser  });
        setIsInitialized(true);
        }
      } catch (error) {
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
