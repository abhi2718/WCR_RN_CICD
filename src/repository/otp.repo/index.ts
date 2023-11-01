import {AppUrl} from '../../utils/appUrl';
import {ApiService} from '../../data/network/apiService';

export class OtpRepository {
  apiService = new ApiService();

  async getOtp(email: string) {
    const url = `${AppUrl.otpEndPoint}?email=${email}`;
    return this.apiService.getGetApiResponse(url);
  }
  async verifytOtp(payload: any) {
    const url = `${AppUrl.otpEndPoint}`;
    return this.apiService.getPostApiResponse(url, payload);
  }
  async resendOtp(email: string) {
    const url = `${AppUrl.resendOtpEndPoint}?email=${email}`;
    return this.apiService.getGetApiResponse(url);
  }
}
