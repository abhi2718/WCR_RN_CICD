import { AppUrl } from '../../utils/appUrl';
import { ApiService } from '../../data/network/apiService';
import { UpdateUserPayload } from '../../types/repo.type/update.user.type';

export class UpdateUserDetailsRepository {
  apiService = new ApiService();

  async updateUserDetails(userId: string, update: any): Promise<any> {
    const url = `${AppUrl.userUpdatedetails}/${userId}`;
    return await this.apiService.getPutApiResponse(url, update);
  }
}
