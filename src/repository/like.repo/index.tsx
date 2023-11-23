import { AppUrl } from '../../utils/appUrl';
import { ApiService } from '../../data/network/apiService';

export class LikeRepository {
  apiService = new ApiService();

  async getLikesReceived() {
    const url = `${AppUrl.userReactionEndPoint}/LikedReceived`;
    return this.apiService.getGetApiResponse(url);
  }
  async liked() {
    const url = `${AppUrl.userReactionEndPoint}/LikedMe`;
    return this.apiService.getGetApiResponse(url);
  }
  async getAllFavourite() {
    const url = `${AppUrl.favouriteEndPoint}`;
    return this.apiService.getGetApiResponse(url);
  }
  async deleteFavourite(id: string) {
    const url = `${AppUrl.favouriteEndPoint}/${id}`;
    return this.apiService.getDeleteApiResponse(url, {});
  }
  async deleteLiked(id: string) {
    const url = `${AppUrl.userReactionEndPoint}/${id}`;
    return this.apiService.getDeleteApiResponse(url, {});
  }
  async getAllMatched() {
    const url = `${AppUrl.matchEndPoint}`;
    return this.apiService.getGetApiResponse(url);
  }
}
