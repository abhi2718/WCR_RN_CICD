import { isAndroid } from './../../components/tools/index';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { config } from '../../utils/config';
import { CometChatUIKit, ReactionsExtension } from '../../cometchat/src';

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
        console.log(user._id)
        if (CometChatUIKit) {
          await CometChatUIKit.init(uikitSettings);
          await CometChatUIKit.login({ uid: user._id });
          setIsInitialized(true);
        }
      } catch (error) {}
    };
    if (user?._id) {
      inItCometChat();
    }
  }, []);

  return {
    isInitialized,
  };
};
