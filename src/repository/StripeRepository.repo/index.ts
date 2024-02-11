import { AppUrl } from '../../utils/appUrl';
import { ApiService } from '../../data/network/apiService';

export class StripeRepository {
  apiService = new ApiService();
  async getLinkToken(): Promise<any> {
    const url = `${AppUrl.stripeEndPoint}`;
    return await this.apiService.getGetApiResponse(url);
  }
  async getIntent(payload:any): Promise<any> {
    const url = `${AppUrl.stripeEndPoint}`;
    return await this.apiService.getGetApiResponse(url);
  }
}
