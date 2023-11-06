import {CometChat} from '@cometchat/chat-sdk-react-native';
import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  dimensions,
  FullLoader,
  ImageContainer,
  Row,
  Spacer,
} from '../../../../../../components/tools';
const type = ['image', 'video', 'audio', 'file'];
export const MediaMessage = (props) => {
  const {guid} = props;
  const [loading, setLoading] = useState(false);
  const [images, setImage] = useState<Array<string>>([]);
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
      let GUID: string = guid,
        limit: number = 30,
        categories: Array<String> = ['message', 'custom'],
        types: Array<String> = [type[0], type[1]],
        messagesRequest: CometChat.MessagesRequest =
          new CometChat.MessagesRequestBuilder()
            .setGUID(GUID)
            .setCategories(categories)
            .setTimestamp(timestampInSeconds)
            .setTypes(types)
            .setLimit(limit)
            .build();
      const data = await messagesRequest.fetchPrevious();
      data.forEach((item) => {
        const rawMessage: any = item.getRawMessage();
        const {attachments} = rawMessage.data;
        attachments.forEach((media: any) => {
          const isImageFile = isImage(media.mimeType);
          if (isImageFile) {
            imageCollectios.push(media.url);
          }
        });
      });
      setImage(imageCollectios);
      setLoading(false);
    } catch (error) {

    }
  };
  useEffect(() => {
    mediaMessageRequestBuilder();
  }, []);
  if (loading) {
    return <FullLoader />;
  }
  return (
    <View>
      <Text>Media</Text>
      <ScrollView>
        {images &&
          images.map((imgUrl, index) => (
            <Spacer key={index} position="bottom" size={10}>
              <Row  justifyContent="space-between">
              <Image
                style={{width: (dimensions.width - 48) / 2, height: 140}}
                source={{uri: imgUrl}}
              />
              <Image
                style={{width: (dimensions.width - 48) / 2, height: 140}}
                source={{uri: imgUrl}}
              />
            </Row>
            </Spacer>
          ))}
      </ScrollView>
    </View>
  );
};
