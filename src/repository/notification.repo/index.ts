import { AppUrl } from '../../utils/appUrl';
import { ApiService } from '../../data/network/apiService';

export class NotificationRepository {
  apiService = new ApiService();
  async getNotification(query?: { page?: number; pageSize?: number }) {
    const url = `${AppUrl.notificationEndPoint}?page=${query?.page}&&pageSize=${query?.pageSize}`;
    return this.apiService.getGetApiResponse(url);
  }
  async getNotificationCount() {
    const url = `${AppUrl.notificationCountEndPoint}`;
    return this.apiService.getGetApiResponse(url);
  }
  async markAsRead(id: string, payload: any) {
    const url = `${AppUrl.notificationEndPoint}/${id}`;
    return this.apiService.getPutApiResponse(url, payload);
  }
}
