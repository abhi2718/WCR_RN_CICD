import {AppUrl} from '../../utils/appUrl';
import {ApiService} from '../../data/network/apiService';

export class AuthRepository {
  apiService = new ApiService();

  async socialSignInSignUp(paylod:any) {
    const url = `${AppUrl.authEndPoint}/social-signin-signup`;
    return this.apiService.getPostApiResponse(url, paylod);
  }
}


