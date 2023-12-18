import {AppUrl} from '../../utils/appUrl';
import {ApiService} from '../../data/network/apiService';

export class AuthRepository {
  apiService = new ApiService();

  async socialSignInSignUp(paylod:any) {
    const url = `${AppUrl.authEndPoint}/social-signin-signup`;
    return this.apiService.getPostApiResponse(url, paylod);
  }
  async getAppleUser(firebaseUid:string) {
    const url = `${AppUrl.authEndPoint}/apple-user/${firebaseUid}`;
    return this.apiService.getGetApiResponse(url);
  }
  async getfbUser(fbId:string) {
    const url = `${AppUrl.authEndPoint}/apple-user/${fbId}`;
    return this.apiService.getGetApiResponse(url);
  }
  async reportUser(payload:any) {
    const url = `${AppUrl.reportEndPoint}`;
    return this.apiService.getPostApiResponse(url,payload);
  }
}


