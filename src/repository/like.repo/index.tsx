import { AppUrl } from '../../utils/appUrl';
import { ApiService } from '../../data/network/apiService';
import { CometChatApiService } from '../../data/network/cometChatApiService';

export class LikeRepository {
  apiService = new ApiService();
  cometChatApiService = new CometChatApiService();

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
  async removefromMatched(id:any) {
    const url = `${AppUrl.matchEndPoint}/${id}`;
    return this.apiService.getDeleteApiResponse(url,{});
  }
  async addFriend(uid: string) {
    //const url = `${AppUrl.addFriendEndPoint}${uid}/friends`;
    // return this.apiService.getGetApiResponse(url);
  }
  async getFriends(
    userId: string,
    conversationType: string = 'user',
    herder?: any,
  ) {
    const url = `${AppUrl.comentChatFriendListUrl}?conversationType=${conversationType}&perPage=100&page=1`;
    return this.cometChatApiService.getGetApiResponse(url, {
      onBehalfOf: userId,
    });
  }
}
