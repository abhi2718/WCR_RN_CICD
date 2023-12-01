import { AppUrl } from '../../utils/appUrl';
import { ApiService } from '../../data/network/apiService';
export class UserProfileRepository {
  apiService = new ApiService();

  async getUser(userId:string): Promise<any> {
    const url = `${AppUrl.userUpdatedetails}/getuser?userId=${userId}`;
    return await this.apiService.getGetApiResponse(url);
  }
  async pauseUser(payload:any): Promise<any> {
    const url = `${AppUrl.userEndPoints}/pause`;
    return await this.apiService.getPostApiResponse(url,payload);
  }
  async deleteUser(): Promise<any> {
    const url = `${AppUrl.userEndPoints}/delete`;
    return await this.apiService.getPostApiResponse(url,{});
  }
  async blockByScope(payload:any): Promise<any> {
    const url = `${AppUrl.blockUserEndPoint}`;
    return await this.apiService.getPostApiResponse(url,payload);
  }
  async getAllBlockedUser(): Promise<any> {
    const url = `${AppUrl.blockUserEndPoint}/getAllBlockedUser`;
    return await this.apiService.getGetApiResponse(url);
  }
  async contactUs(payload:any): Promise<any> {
    const url = `${AppUrl.contactUs}`;
    return await this.apiService.getPostApiResponse(url,payload);
  }
}