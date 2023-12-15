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
  async hardDeleteUser(): Promise<any> {
    const url = `${AppUrl.userEndPoints}/hardDelete`;
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
    const url = `${AppUrl.contactUsEndPoint}`;
    return await this.apiService.getPostApiResponse(url,payload);
  }
  async getPreference(userId:string) : Promise<any> {
    const url = `${AppUrl.preferenceEndPoint}/${userId}`;
    return await this.apiService.getGetApiResponse(url);
  }
  async createPreference(payload:any) : Promise<any> {
    const url = `${AppUrl.preferenceEndPoint}/`;
    return await this.apiService.getPostApiResponse(url,payload);
  }
  async updatePreference(payload:any) : Promise<any> {
    const url = `${AppUrl.preferenceEndPoint}/`;
    return await this.apiService.getPutApiResponse(url,payload);
  }
}