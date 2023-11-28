import { AppUrl } from '../../utils/appUrl';
import { ApiService } from '../../data/network/apiService';
export class UserProfileRepository {
  apiService = new ApiService();

  async getUser(userId:string): Promise<any> {
    const url = `${AppUrl.userUpdatedetails}/getuser?userId=${userId}`;
    return await this.apiService.getGetApiResponse(url);
  }
}