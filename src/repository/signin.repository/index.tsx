//import { AppUrl } from '../../utils/appUrl';
import {ApiService} from './../../data/network/apiService';

export class SignInRepository {
  apiService = new ApiService();

  async getUsers() {
    //const url = `${AppUrl.userEndPoint}?page=${pageNumber}`;
    const url = 'https://reqres.in/api/users?page=2';
    return this.apiService.getGetApiResponse(url);
  }
}
