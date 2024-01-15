import { AppUrl } from '../../utils/appUrl';
import { ApiService } from '../../data/network/apiService';
import { UpdateUserPayload } from '../../types/repo.type/update.user.type';

export class StripeRepository {
  apiService = new ApiService();
  async getLinkToken(): Promise<any> {
    const url = `${AppUrl.stripeEndPoint}`;
    return await this.apiService.getGetApiResponse(url);
  }
  async getIntent(payload:any): Promise<any> {
    const url = `${AppUrl.stripeEndPoint}`;
    return await this.apiService.getPostApiResponse(url,payload);
  }
}
