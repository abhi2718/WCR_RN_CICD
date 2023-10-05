import {config} from '../config';
export class AppUrl {
  public static readonly BASE_URL = config.API_URL;
  public static userEndPoint = `${this.BASE_URL}/users`;
  public static authEndPoint = `${this.BASE_URL}/auth`;
}
