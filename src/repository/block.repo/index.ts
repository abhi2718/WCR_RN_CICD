import { AppUrl } from '../../utils/appUrl';
import { ApiService } from '../../data/network/apiService';

export class BlockRepository {
  apiService = new ApiService();

  async getAllBlockUser() {
    const url = `${AppUrl.blockUserEndPoint}/getAllBlockedUser`;
    return this.apiService.getGetApiResponse(url);
  }
  async unBlockUser(payload: any) {
    const url = `${AppUrl.blockUserEndPoint}/unblockUser`;
    return this.apiService.getPostApiResponse(url, payload);
  }
}
