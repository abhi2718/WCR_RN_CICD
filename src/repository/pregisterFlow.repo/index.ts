import { AppUrl } from '../../utils/appUrl';
import { ApiService } from '../../data/network/apiService';

export class UpdateUserDetailsRepository {
  apiService = new ApiService();

  async updateUserDetails(userId: string, update: any): Promise<any> {
    const url = `${AppUrl.userUpdatedetails}/${userId}`;
    return await this.apiService.getPutApiResponse(url, update);
  }
  async validateZipcode(user: any): Promise<any> {
    const url = `${AppUrl.userUpdatedetails}/validate-zipcode`;
    return await this.apiService.getPostApiResponse(url, user);
  }
  async me(userId:string): Promise<any> {
    const url = `${AppUrl.userUpdatedetails}/getprofile?userId=${userId}`;
    return await this.apiService.getGetApiResponse(url);
  }
}
