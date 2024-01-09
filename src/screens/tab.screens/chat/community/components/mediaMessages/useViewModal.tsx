import {CometChat} from '@cometchat/chat-sdk-react-native';
import React, {useEffect, useState} from 'react';
import {MediaMessageProps} from '../../../../../../types/screen.type/communityChat';
const type = ['image', 'video', 'audio', 'file'];
export const useViewModal = (props: MediaMessageProps) => {
  const { guid, type: mediaType,uid } = props;
  const [loading, setLoading] = useState(false);
  const [images, setImage] = useState<any[]>([]);
  const [videos, setVideo] = useState<any[]>(["https://vjs.zencdn.net/v/oceans.mp4"]);
  const isImage = (mimeType: string) => {
    const imageMimeTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/bmp',
      'image/webp',
    ];
    return imageMimeTypes.includes(mimeType);
  };
  const mediaMessageRequestBuilder = async () => {
    try {
      setLoading(true);
      const currentDate = new Date();
      const timestampInSeconds = Math.floor(currentDate.getTime() / 1000);
      const imageCollectios: Array<String> = [];
      const videoCollections: any[] = [];
      let GUID: string = guid!,
        limit: number = 30,
        categories: Array<String> = ['message', 'custom'],
        types: Array<String> = [type[0], type[1]],
       messagesRequest: CometChat.MessagesRequest | undefined;
      if (uid) {
      messagesRequest =
        new CometChat.MessagesRequestBuilder()
          .setUID(uid)
            .setCategories(categories)
            .setTimestamp(timestampInSeconds)
            .setTypes(types)
            .setLimit(limit)
            .build()
      }
      if (GUID) {
       messagesRequest = new CometChat.MessagesRequestBuilder()
              .setGUID(GUID)
              .setCategories(categories)
              .setTimestamp(timestampInSeconds)
              .setTypes(types)
              .setLimit(limit)
              .build()
      }
      if (!messagesRequest) {
          return
      }
      const data = await messagesRequest.fetchPrevious();
      data.forEach((item) => {
        const rawMessage: any = item.getRawMessage();
        const {attachments} = rawMessage.data;
        attachments.forEach((media: any) => {
          const isImageFile = isImage(media.mimeType);
          if (isImageFile) {
            imageCollectios.push(media.url);
          } else {
            videoCollections.push(media.url);
          }
        });
      });
      setImage(imageCollectios);
      setVideo(videoCollections);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    mediaMessageRequestBuilder();
  }, []);

  return {
    loading,
    images,
    videos,
    mediaType,
    mediaMessageRequestBuilder
  };
};
