import {AppUrl} from '../../utils/appUrl';
import {ApiService} from '../../data/network/apiService';

export class SignInRepository {
  apiService = new ApiService();

  async getUsers(pageNumber: number = 1) {
    const url = `${AppUrl.userEndPoint}?page=${pageNumber}`;
    return this.apiService.getGetApiResponse(url);
  }
}
