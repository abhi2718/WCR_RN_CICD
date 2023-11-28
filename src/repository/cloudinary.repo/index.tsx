import { AppUrl } from '../../utils/appUrl';
import { ApiService } from '../../data/network/apiService';
import { config } from '../../utils/config';
import { ImageDataType } from '../../screens/auth/preRegisterFlow/components/AddProfilePic/addProfilePic.ViewModal';

export class CloudinaryRepository {
  apiService = new ApiService();

  async signature(folder: string) {
    const url = `${AppUrl.cloudinarySignatureEndPoint}/${folder}`;
    return this.apiService.getGetApiResponse(url);
  }
  async uploadImage({
    folder,
    imageData,
    timestamp,
    signature,
  }: {
    folder: string;
    imageData: ImageDataType;
    timestamp: number;
    signature: string;
  }) {
    const payload: FormData = new FormData();
    payload.append('file', {
      uri: imageData.path,
      type: imageData.mime,
      name: imageData.name,
    });
    const url = `${config.CloudinaryUploadURL}&folder=${folder}&timestamp=${timestamp}&signature=${signature}`;
    const response = await fetch(url, {
      method: 'POST',
      body: payload,
    });
    return await response.json();
  }
}
