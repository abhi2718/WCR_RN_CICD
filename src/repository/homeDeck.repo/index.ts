import { AppUrl } from '../../utils/appUrl';
import { ApiService } from '../../data/network/apiService';

export class HomeDeckRepository {
  apiService = new ApiService();

  async getProfiles(page?: number, pageSize?: number) {
    const url = `${AppUrl.userUpdatedetails}/suggestions?page=${page}&pageSize=${pageSize}`;
    return this.apiService.getGetApiResponse(url);
  }
  async userReactin(payload: any) {
    const url = `${AppUrl.userReactionEndPoint}`;
    return this.apiService.getPostApiResponse(url, payload);
  }
  async deleteDisLike(id:string) {
    const url = `${AppUrl.userReactionEndPoint}/undo/${id}`;
    return this.apiService.getDeleteApiResponse(url,{})
  }
  async addFavourite(payload: any) {
    const url = `${AppUrl.favouriteEndPoint}`;
    return this.apiService.getPostApiResponse(url, payload);
  }
  async blockUser(payload: any) {
    const url = `${AppUrl.blockUserEndPoint}`;
    return this.apiService.getPostApiResponse(url, payload);
  }
  async searchUser(query:any) {
    const url = `${AppUrl.searchUserEndPoint}${query.searchValue}`;
    return this.apiService.getGetApiResponse(url);
  }
  async getUser(userId:string) {
    const url = `${AppUrl.userUpdatedetails}/getuser?userId=${userId}`;
    return this.apiService.getGetApiResponse(url);
  }
}
